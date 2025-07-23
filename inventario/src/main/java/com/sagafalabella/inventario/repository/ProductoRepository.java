package com.sagafalabella.inventario.repository;

import com.sagafalabella.inventario.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.List;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Integer> {
    Optional<Producto> findByCodigoBarras(String codigoBarras);
    List<Producto> findByZonaIdZona(Integer idZona);
    List<Producto> findByEstado(String estado);
}