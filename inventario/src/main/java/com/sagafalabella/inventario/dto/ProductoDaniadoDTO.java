package com.sagafalabella.inventario.dto;

import lombok.*;

import java.math.BigDecimal;
import java.sql.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductoDaniadoDTO {
    private String tipoClase; // "CLASE_0" o "CLASE_100"
    private String observacion;
    private Timestamp fechaRegistro;
    private Integer cantidadDaniada;
    private BigDecimal costoEstimado;
    private String responsable;
    private String accionTomada;
    private String estado;
    private Integer idProducto;
    private Integer idUsuario;
}