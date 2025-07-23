package com.sagafalabella.inventario.repository;

import com.sagafalabella.inventario.model.IngresoProducto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IngresoProductoRepository extends JpaRepository<IngresoProducto, Integer> {
    boolean existsByNumeroIngreso(String numeroIngreso);
}
