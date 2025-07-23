package com.sagafalabella.inventario.dto;

import com.sagafalabella.inventario.enums.TipoTransferencia;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.sql.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TransferenciaDTO {
    private Integer productoId;
    private TipoTransferencia tipoTransferencia;
    private String destino;
    private Timestamp fechaTransferencia;
    private Timestamp fechaEntrega;
    private Integer cantidadTransferida;
    private String motivoTransferencia;
    private String numeroGuia;
    private String transportista;
}
