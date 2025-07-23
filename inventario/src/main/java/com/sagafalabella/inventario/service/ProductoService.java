package com.sagafalabella.inventario.service;

import com.sagafalabella.inventario.dto.ProductoDTO;

import java.util.List;

public interface ProductoService {
    ProductoDTO crearProducto(ProductoDTO dto);
    List<ProductoDTO> listarProductos();
    ProductoDTO obtenerProductoPorId(Integer id);
    ProductoDTO actualizarProducto(Integer id, ProductoDTO dto);
    void eliminarProducto(Integer id);
}