package com.sagafalabella.inventario.model;

import com.sagafalabella.inventario.enums.EstadoProducto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.math.BigDecimal;
import java.sql.Timestamp;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idProducto;

    @Column(unique = true)
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

    @ManyToOne
    @JoinColumn(name = "idZona")
    private Zona zona;

    private Timestamp fechaCreacion;
    private Timestamp fechaActualizacion;

    @Enumerated(EnumType.STRING)
    private EstadoProducto estado;
}