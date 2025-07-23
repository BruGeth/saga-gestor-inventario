package com.sagafalabella.inventario.model;

import com.sagafalabella.inventario.enums.EstadoTransferencia;
import com.sagafalabella.inventario.enums.TipoTransferencia;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Transferencia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idTransferencia;

    @Column(unique = true)
    private String numeroTransferencia;

    @Enumerated(EnumType.STRING)
    private TipoTransferencia tipoTransferencia;

    private String destino;
    private Timestamp fechaTransferencia;
    private Timestamp fechaEntrega;
    private Integer cantidadTransferida;

    private String motivoTransferencia;
    private String numeroGuia;
    private String transportista;

    @Enumerated(EnumType.STRING)
    private EstadoTransferencia estado;

    @ManyToOne
    @JoinColumn(name = "idProducto")
    private Producto producto;

    @ManyToOne
    @JoinColumn(name = "idUsuario")
    private Usuario usuario;
}