package com.sagafalabella.inventario.model;

import com.sagafalabella.inventario.enums.EstadoZona;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Zona {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idZona;

    private String nombreZona;
    private String tipoProducto;
    private Integer capacidadMaxima;

    private Timestamp fechaCreacion;

    @Enumerated(EnumType.STRING)
    private EstadoZona estado;
}