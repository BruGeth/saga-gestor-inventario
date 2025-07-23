package com.sagafalabella.inventario.model;

import com.sagafalabella.inventario.enums.EstadoUsuario;
import com.sagafalabella.inventario.enums.Rol;
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
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idUsuario;

    private String nombre;
    private String apellido;

    @Column(unique = true)
    private String email;

    @Enumerated(EnumType.STRING)
    private Rol rol;

    private String contrasena;

    private Timestamp fechaCreacion;
    private Timestamp ultimoAcceso;

    @Enumerated(EnumType.STRING)
    private EstadoUsuario estado;
}