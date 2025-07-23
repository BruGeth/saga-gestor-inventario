package com.sagafalabella.inventario.dto;

import lombok.*;

import java.math.BigDecimal;
import java.sql.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class IngresoProductoDTO {
    private String numeroIngreso;
    private Timestamp fechaIngreso;
    private Integer cantidadIngresada;
    private BigDecimal precioUnitario;
    private String proveedor;
    private String numeroFactura;
    private String observaciones;
    private Integer idProducto;
    private Integer idUsuario;
}
