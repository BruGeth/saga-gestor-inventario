package com.sagafalabella.inventario.controller;

import com.sagafalabella.inventario.dto.ProductoDTO;
import com.sagafalabella.inventario.service.ProductoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
@RequiredArgsConstructor
public class ProductoController {
    private final ProductoService productoService;

    @PostMapping
    public ResponseEntity<ProductoDTO> crear(@RequestBody ProductoDTO dto) {
        return ResponseEntity.ok(productoService.crearProducto(dto));
    }

    @GetMapping
    public ResponseEntity<List<ProductoDTO>> listar() {
        return ResponseEntity.ok(productoService.listarProductos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductoDTO> obtenerPorId(@PathVariable Integer id) {
        return ResponseEntity.ok(productoService.obtenerProductoPorId(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductoDTO> actualizar(@PathVariable Integer id, @RequestBody ProductoDTO dto) {
        return ResponseEntity.ok(productoService.actualizarProducto(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Integer id) {
        productoService.eliminarProducto(id);
        return ResponseEntity.noContent().build();
    }

}