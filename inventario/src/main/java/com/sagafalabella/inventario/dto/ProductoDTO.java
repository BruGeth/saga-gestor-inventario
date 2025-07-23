package com.sagafalabella.inventario.dto;

import lombok.*;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductoDTO {
    private Integer idProducto;
    private String codigoBarras;
    private String nombre;
    private String descripcion;
    private String tipo;
    private String marca;
    private String modelo;
    private BigDecimal precio;
    private Integer cantidad;
    private Integer stockMinimo;
    private Integer stockMaximo;
    private Integer idZona; // para asociar con la zona desde el frontend
    private String estado; // Enum en forma de string
}
