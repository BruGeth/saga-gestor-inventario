package com.sagafalabella.inventario.repository;

import com.sagafalabella.inventario.model.ProductoDaniado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductoDaniadoRepository extends JpaRepository<ProductoDaniado, Integer> {
    List<ProductoDaniado> findByTipoClase(String tipoClase);
    List<ProductoDaniado> findByEstado(String estado);
}