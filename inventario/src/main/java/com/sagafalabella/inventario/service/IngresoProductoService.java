package com.sagafalabella.inventario.service;

import com.sagafalabella.inventario.dto.IngresoProductoDTO;

import java.util.List;

public interface IngresoProductoService {
    IngresoProductoDTO registrarIngreso(IngresoProductoDTO dto);
    List<IngresoProductoDTO> listarIngresos();
}