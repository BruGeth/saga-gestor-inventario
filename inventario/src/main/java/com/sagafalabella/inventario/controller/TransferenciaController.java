package com.sagafalabella.inventario.controller;

import com.sagafalabella.inventario.dto.TransferenciaDTO;
import com.sagafalabella.inventario.dto.TransferenciaEstadoDTO;
import com.sagafalabella.inventario.model.Transferencia;
import com.sagafalabella.inventario.service.TransferenciaService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transferencias")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class TransferenciaController {

    private final TransferenciaService transferenciaService;

    @PostMapping
    public Transferencia registrarTransferencia(@RequestBody TransferenciaDTO dto,
                                                @RequestParam Integer usuarioId) {
        return transferenciaService.registrar(dto, usuarioId);
    }

    @GetMapping
    public List<Transferencia> listarTransferencias() {
        return transferenciaService.listarTodas();
    }

    @PutMapping("/{id}/estado")
    public void actualizarEstadoTransferencia(@PathVariable Integer id,
                                              @RequestBody TransferenciaEstadoDTO dto) {
        transferenciaService.actualizarEstado(id, dto.getNuevoEstado());
    }
}
