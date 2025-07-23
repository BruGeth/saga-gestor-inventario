package com.sagafalabella.inventario.model;

import com.sagafalabella.inventario.enums.TipoOperacion;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Auditoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idAuditoria;

    private String tabla;

    @Enumerated(EnumType.STRING)
    private TipoOperacion operacion;

    private Integer idRegistro;

    @Column(columnDefinition = "json")
    private String datosAnteriores;

    @Column(columnDefinition = "json")
    private String datosNuevos;

    private Timestamp fechaOperacion;

    @ManyToOne
    @JoinColumn(name = "idUsuario")
    private Usuario usuario;

    private String direccionIP;
}