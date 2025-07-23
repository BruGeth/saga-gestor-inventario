package com.sagafalabella.inventario.repository;

import com.sagafalabella.inventario.model.Zona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ZonaRepository extends JpaRepository<Zona, Integer> {
    boolean existsByNombreZona(String nombreZona);
}