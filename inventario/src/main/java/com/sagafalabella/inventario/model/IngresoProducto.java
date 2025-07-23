package com.sagafalabella.inventario.model;

import com.sagafalabella.inventario.enums.EstadoIngreso;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.sql.Timestamp;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class IngresoProducto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idIngreso;

    @Column(unique = true)
    private String numeroIngreso;

    private Timestamp fechaIngreso;

    private Integer cantidadIngresada;
    private BigDecimal precioUnitario;

    private String proveedor;
    private String numeroFactura;
    private String observaciones;

    @Enumerated(EnumType.STRING)
    private EstadoIngreso estado;

    @ManyToOne
    @JoinColumn(name = "idProducto")
    private Producto producto;

    @ManyToOne
    @JoinColumn(name = "idUsuario")
    private Usuario usuario;
}