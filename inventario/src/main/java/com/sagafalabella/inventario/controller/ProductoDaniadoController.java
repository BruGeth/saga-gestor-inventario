package com.sagafalabella.inventario.controller;

import com.sagafalabella.inventario.dto.ProductoDaniadoDTO;
import com.sagafalabella.inventario.service.ProductoDaniadoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/daniados")
@RequiredArgsConstructor
public class ProductoDaniadoController {
    private final ProductoDaniadoService daniadoService;

    @PostMapping
    public ResponseEntity<ProductoDaniadoDTO> registrar(@RequestBody ProductoDaniadoDTO dto) {
        return ResponseEntity.ok(daniadoService.registrarProductoDaniado(dto));
    }

    @GetMapping
    public ResponseEntity<List<ProductoDaniadoDTO>> listar() {
        return ResponseEntity.ok(daniadoService.listarProductosDaniados());
    }

}
