package com.sagafalabella.inventario.service;

import com.sagafalabella.inventario.dto.StockPorZonaDTO;
import java.util.List;

public interface ReporteService {
    List<StockPorZonaDTO> obtenerStockAgrupadoPorZona();
}
