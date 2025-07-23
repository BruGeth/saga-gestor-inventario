package com.sagafalabella.inventario.service;

import com.sagafalabella.inventario.dto.ProductoDaniadoDTO;

import java.util.List;

public interface ProductoDaniadoService {
    ProductoDaniadoDTO registrarProductoDaniado(ProductoDaniadoDTO dto);
    List<ProductoDaniadoDTO> listarProductosDaniados();
}