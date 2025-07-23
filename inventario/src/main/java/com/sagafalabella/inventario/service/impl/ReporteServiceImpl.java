package com.sagafalabella.inventario.service.impl;

import com.sagafalabella.inventario.dto.StockPorZonaDTO;
import com.sagafalabella.inventario.model.Producto;
import com.sagafalabella.inventario.service.ReporteService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReporteServiceImpl implements ReporteService {

    private final ProductoRepository productoRepository;


    @Override
    public List<StockPorZonaDTO> obtenerStockAgrupadoPorZona() {
        List<Producto> productos = productoRepository.findAll();

        return productos.stream().map(producto -> StockPorZonaDTO.builder()
                .nombreZona(producto.getZona().getNombreZona())
                .nombreProducto(producto.getNombre())
                .cantidad(producto.getCantidad())
                .build()).collect(Collectors.toList());
    }
}