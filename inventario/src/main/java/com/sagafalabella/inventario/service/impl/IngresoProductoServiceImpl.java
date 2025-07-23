package com.sagafalabella.inventario.service.impl;

import com.sagafalabella.inventario.dto.IngresoProductoDTO;
import com.sagafalabella.inventario.model.IngresoProducto;
import com.sagafalabella.inventario.model.Producto;
import com.sagafalabella.inventario.model.Usuario;
import com.sagafalabella.inventario.repository.IngresoProductoRepository;
import com.sagafalabella.inventario.repository.ProductoRepository;
import com.sagafalabella.inventario.repository.UsuarioRepository;
import com.sagafalabella.inventario.service.IngresoProductoService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class IngresoProductoServiceImpl implements IngresoProductoService {
    private final IngresoProductoRepository ingresoRepo;
    private final ProductoRepository productoRepo;
    private final UsuarioRepository usuarioRepo;

    @Override
    public IngresoProductoDTO registrarIngreso(IngresoProductoDTO dto) {
        Producto producto = productoRepo.findById(dto.getIdProducto())
                .orElseThrow(() -> new EntityNotFoundException("Producto no encontrado"));
        Usuario usuario = usuarioRepo.findById(dto.getIdUsuario())
                .orElseThrow(() -> new EntityNotFoundException("Usuario no encontrado"));

        IngresoProducto ingreso = IngresoProducto.builder()
                .numeroIngreso(dto.getNumeroIngreso())
                .fechaIngreso(dto.getFechaIngreso())
                .cantidadIngresada(dto.getCantidadIngresada())
                .precioUnitario(dto.getPrecioUnitario())
                .proveedor(dto.getProveedor())
                .numeroFactura(dto.getNumeroFactura())
                .observaciones(dto.getObservaciones())
                .producto(producto)
                .usuario(usuario)
                .build();

        ingresoRepo.save(ingreso);

        // Actualizar stock del producto
        producto.setCantidad(producto.getCantidad() + dto.getCantidadIngresada());
        productoRepo.save(producto);

        return dto;
    }

    @Override
    public List<IngresoProductoDTO> listarIngresos() {
        return ingresoRepo.findAll().stream()
                .map(i -> IngresoProductoDTO.builder()
                        .numeroIngreso(i.getNumeroIngreso())
                        .cantidadIngresada(i.getCantidadIngresada())
                        .fechaIngreso(i.getFechaIngreso())
                        .idProducto(i.getProducto().getIdProducto())
                        .build())
                .collect(Collectors.toList());
    }

}