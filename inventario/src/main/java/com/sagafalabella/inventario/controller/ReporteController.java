package com.sagafalabella.inventario.controller;

import com.sagafalabella.inventario.dto.StockPorZonaDTO;
import com.sagafalabella.inventario.service.ReporteService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reportes")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ReporteController {

    private final ReporteService reporteService;

    @GetMapping("/stock")
    public List<StockPorZonaDTO> obtenerStock() {
        return reporteService.obtenerStockAgrupadoPorZona();
    }
}