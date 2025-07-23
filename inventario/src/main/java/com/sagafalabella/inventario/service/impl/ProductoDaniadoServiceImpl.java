package com.sagafalabella.inventario.service.impl;

import com.sagafalabella.inventario.dto.ProductoDaniadoDTO;
import com.sagafalabella.inventario.enums.ClaseProductoDaniado;
import com.sagafalabella.inventario.enums.EstadoDaniado;
import com.sagafalabella.inventario.model.Producto;
import com.sagafalabella.inventario.model.ProductoDaniado;
import com.sagafalabella.inventario.model.Usuario;
import com.sagafalabella.inventario.repository.ProductoDaniadoRepository;
import com.sagafalabella.inventario.repository.ProductoRepository;
import com.sagafalabella.inventario.repository.UsuarioRepository;
import com.sagafalabella.inventario.service.ProductoDaniadoService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductoDaniadoServiceImpl implements ProductoDaniadoService {
    private final ProductoDaniadoRepository daniadoRepo;
    private final ProductoRepository productoRepo;
    private final UsuarioRepository usuarioRepo;

    @Override
    public ProductoDaniadoDTO registrarProductoDaniado(ProductoDaniadoDTO dto) {
        Producto producto = productoRepo.findById(dto.getIdProducto())
                .orElseThrow(() -> new EntityNotFoundException("Producto no encontrado"));
        Usuario usuario = usuarioRepo.findById(dto.getIdUsuario())
                .orElseThrow(() -> new EntityNotFoundException("Usuario no encontrado"));

        ProductoDaniado pd = ProductoDaniado.builder()
                .tipoClase(ClaseProductoDaniado.valueOf(dto.getTipoClase()))
                .cantidadDaniada(dto.getCantidadDaniada())
                .fechaRegistro(dto.getFechaRegistro())
                .costoEstimado(dto.getCostoEstimado())
                .estado(EstadoDaniado.valueOf(dto.getEstado()))
                .observacion(dto.getObservacion())
                .accionTomada(dto.getAccionTomada())
                .responsable(dto.getResponsable())
                .producto(producto)
                .usuario(usuario)
                .build();

        daniadoRepo.save(pd);
        return dto;
    }

    @Override
    public List<ProductoDaniadoDTO> listarProductosDaniados() {
        return daniadoRepo.findAll().stream()
                .map(p -> ProductoDaniadoDTO.builder()
                        .cantidadDaniada(p.getCantidadDaniada())
                        .fechaRegistro(p.getFechaRegistro())
                        .tipoClase(p.getTipoClase().name())
                        .estado(p.getEstado().name())
                        .idProducto(p.getProducto().getIdProducto())
                        .build())
                .collect(Collectors.toList());
    }

}