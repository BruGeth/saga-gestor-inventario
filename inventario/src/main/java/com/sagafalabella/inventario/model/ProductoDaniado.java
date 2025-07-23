package com.sagafalabella.inventario.model;

import com.sagafalabella.inventario.enums.ClaseProductoDaniado;
import com.sagafalabella.inventario.enums.EstadoDaniado;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.sql.Timestamp;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductoDaniado {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idDaniado;

    @Enumerated(EnumType.STRING)
    private ClaseProductoDaniado tipoClase;

    private String observacion;
    private Timestamp fechaRegistro;

    private Integer cantidadDaniada;
    private BigDecimal costoEstimado;
    private String responsable;
    private String accionTomada;

    @Enumerated(EnumType.STRING)
    private EstadoDaniado estado;

    @ManyToOne
    @JoinColumn(name = "idProducto")
    private Producto producto;

    @ManyToOne
    @JoinColumn(name = "idUsuario")
    private Usuario usuario;
}
