package com.sagafalabella.inventario.service.impl;

import com.sagafalabella.inventario.dto.TransferenciaDTO;
import com.sagafalabella.inventario.enums.EstadoTransferencia;
import com.sagafalabella.inventario.model.Producto;
import com.sagafalabella.inventario.model.Transferencia;
import com.sagafalabella.inventario.model.Usuario;
import com.sagafalabella.inventario.repository.ProductoRepository;
import com.sagafalabella.inventario.repository.TransferenciaRepository;
import com.sagafalabella.inventario.repository.UsuarioRepository;
import com.sagafalabella.inventario.service.TransferenciaService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TransferenciaServiceImpl implements TransferenciaService {

    private final TransferenciaRepository transferenciaRepository;
    private final ProductoRepository productoRepository;
    private final UsuarioRepository usuarioRepository;

    @Override
    public Transferencia registrar(TransferenciaDTO dto, Integer usuarioId) {
        Producto producto = productoRepository.findById(dto.getProductoId())
                .orElseThrow(() -> new RuntimeException("Producto no encontrado"));

        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        if (producto.getCantidad() < dto.getCantidadTransferida()) {
            throw new RuntimeException("Stock insuficiente para la transferencia");
        }

        producto.setCantidad(producto.getCantidad() - dto.getCantidadTransferida());
        productoRepository.save(producto);

        Transferencia transferencia = Transferencia.builder()
                .producto(producto)
                .usuario(usuario)
                .tipoTransferencia(dto.getTipoTransferencia())
                .destino(dto.getDestino())
                .fechaTransferencia(dto.getFechaTransferencia())
                .fechaEntrega(dto.getFechaEntrega())
                .cantidadTransferida(dto.getCantidadTransferida())
                .motivoTransferencia(dto.getMotivoTransferencia())
                .numeroGuia(dto.getNumeroGuia())
                .transportista(dto.getTransportista())
                .estado(EstadoTransferencia.PENDIENTE)
                .build();

        return transferenciaRepository.save(transferencia);
    }

    @Override
    public List<Transferencia> listarTodas() {
        return transferenciaRepository.findAll();
    }

    @Override
    public void actualizarEstado(Integer idTransferencia, EstadoTransferencia nuevoEstado) {
        Transferencia transferencia = transferenciaRepository.findById(idTransferencia)
                .orElseThrow(() -> new RuntimeException("Transferencia no encontrada"));

        EstadoTransferencia estadoActual = transferencia.getEstado();

        // Validaciones
        if (estadoActual == EstadoTransferencia.ENTREGADO || estadoActual == EstadoTransferencia.CANCELADO) {
            throw new IllegalStateException("No se puede cambiar el estado de una transferencia finalizada o cancelada.");
        }

        if (estadoActual == nuevoEstado) {
            throw new IllegalStateException("La transferencia ya está en ese estado.");
        }
        //  PENDIENTE → EN_TRANSITO → ENTREGADO
        if (estadoActual == EstadoTransferencia.PENDIENTE && nuevoEstado != EstadoTransferencia.EN_TRANSITO) {
            throw new IllegalStateException("Una transferencia pendiente solo puede pasar a EN_TRANSITO.");
        }
        if (estadoActual == EstadoTransferencia.EN_TRANSITO &&
                !(nuevoEstado == EstadoTransferencia.ENTREGADO || nuevoEstado == EstadoTransferencia.CANCELADO)) {
            throw new IllegalStateException("Una transferencia en tránsito solo puede pasar a ENTREGADO o CANCELADO.");
        }

        transferencia.setEstado(nuevoEstado);
        transferenciaRepository.save(transferencia);
    }
}
