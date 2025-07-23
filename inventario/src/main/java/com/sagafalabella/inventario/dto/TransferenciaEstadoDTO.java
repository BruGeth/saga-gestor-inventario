package com.sagafalabella.inventario.dto;

import com.sagafalabella.inventario.enums.EstadoTransferencia;
import lombok.Data;

@Data
public class TransferenciaEstadoDTO {
    private EstadoTransferencia nuevoEstado;
}
