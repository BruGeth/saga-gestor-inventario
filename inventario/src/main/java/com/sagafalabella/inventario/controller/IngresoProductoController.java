package com.sagafalabella.inventario.controller;

import com.sagafalabella.inventario.dto.IngresoProductoDTO;
import com.sagafalabella.inventario.service.IngresoProductoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ingresos")
@RequiredArgsConstructor
public class IngresoProductoController {
    private final IngresoProductoService ingresoService;

    @PostMapping
    public ResponseEntity<IngresoProductoDTO> registrar(@RequestBody IngresoProductoDTO dto) {
        return ResponseEntity.ok(ingresoService.registrarIngreso(dto));
    }

    @GetMapping
    public ResponseEntity<List<IngresoProductoDTO>> listar() {
        return ResponseEntity.ok(ingresoService.listarIngresos());
    }

}

