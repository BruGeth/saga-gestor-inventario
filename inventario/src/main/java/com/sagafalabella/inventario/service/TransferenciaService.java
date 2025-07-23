package com.sagafalabella.inventario.service;


import com.sagafalabella.inventario.dto.TransferenciaDTO;
import com.sagafalabella.inventario.enums.EstadoTransferencia;
import com.sagafalabella.inventario.model.Transferencia;
import java.util.List;

public interface TransferenciaService {
    Transferencia registrar(TransferenciaDTO dto, Integer usuarioId);
    List<Transferencia> listarTodas();
    void actualizarEstado(Integer idTransferencia, EstadoTransferencia nuevoEstado);
}
