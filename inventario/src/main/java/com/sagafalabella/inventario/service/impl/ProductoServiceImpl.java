package com.sagafalabella.inventario.service.impl;

import com.sagafalabella.inventario.dto.ProductoDTO;
import com.sagafalabella.inventario.enums.EstadoProducto;
import com.sagafalabella.inventario.model.Producto;
import com.sagafalabella.inventario.model.Zona;
import com.sagafalabella.inventario.repository.ProductoRepository;
import com.sagafalabella.inventario.repository.ZonaRepository;
import com.sagafalabella.inventario.service.ProductoService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductoServiceImpl implements ProductoService {
    private final ProductoRepository productoRepo;
    private final ZonaRepository zonaRepo;

    @Override
    public ProductoDTO crearProducto(ProductoDTO dto) {
        Zona zona = zonaRepo.findById(dto.getIdZona())
                .orElseThrow(() -> new EntityNotFoundException("Zona no encontrada"));

        Producto producto = Producto.builder()
                .codigoBarras(dto.getCodigoBarras())
                .nombre(dto.getNombre())
                .descripcion(dto.getDescripcion())
                .tipo(dto.getTipo())
                .marca(dto.getMarca())
                .modelo(dto.getModelo())
                .precio(dto.getPrecio())
                .cantidad(dto.getCantidad())
                .stockMinimo(dto.getStockMinimo())
                .stockMaximo(dto.getStockMaximo())
                .zona(zona)
                .estado(EstadoProducto.valueOf(dto.getEstado()))
                .build();

        producto = productoRepo.save(producto);
        dto.setIdProducto(producto.getIdProducto());
        return dto;
    }

    @Override
    public List<ProductoDTO> listarProductos() {
        return productoRepo.findAll().stream()
                .map(p -> ProductoDTO.builder()
                        .idProducto(p.getIdProducto())
                        .codigoBarras(p.getCodigoBarras())
                        .nombre(p.getNombre())
                        .cantidad(p.getCantidad())
                        .estado(p.getEstado().name())
                        .idZona(p.getZona().getIdZona())
                        .build())
                .collect(Collectors.toList());
    }

    @Override
    public ProductoDTO obtenerProductoPorId(Integer id) {
        Producto p = productoRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Producto no encontrado"));
        return ProductoDTO.builder()
                .idProducto(p.getIdProducto())
                .codigoBarras(p.getCodigoBarras())
                .nombre(p.getNombre())
                .cantidad(p.getCantidad())
                .estado(p.getEstado().name())
                .idZona(p.getZona().getIdZona())
                .build();
    }

    @Override
    public ProductoDTO actualizarProducto(Integer id, ProductoDTO dto) {
        Producto producto = productoRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Producto no encontrado"));
        producto.setNombre(dto.getNombre());
        producto.setDescripcion(dto.getDescripcion());
        producto.setCantidad(dto.getCantidad());
        producto.setPrecio(dto.getPrecio());
        return ProductoDTO.builder()
                .idProducto(producto.getIdProducto())
                .nombre(producto.getNombre())
                .cantidad(producto.getCantidad())
                .build();
    }

    @Override
    public void eliminarProducto(Integer id) {
        productoRepo.deleteById(id);
    }

}