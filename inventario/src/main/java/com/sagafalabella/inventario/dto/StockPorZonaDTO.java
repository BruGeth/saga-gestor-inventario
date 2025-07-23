package com.sagafalabella.inventario.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StockPorZonaDTO {
    private String nombreZona;
    private String nombreProducto;
    private Integer cantidad;
}
