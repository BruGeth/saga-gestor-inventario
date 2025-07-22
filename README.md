# Sistema de Gestión de Inventario - Saga Falabella

Aplicación fullstack desarrollada íntegramente en Spring Boot con Thymeleaf para la gestión de inventario, zonas y logística en Saga Falabella.

## Configuración de la aplicación

Este proyecto utiliza archivos de configuración por perfiles para facilitar el desarrollo y la personalización local.

### Archivos de configuración

- `application.yml`: Archivo principal de configuración. Define el perfil activo (`local`) y utiliza variables de entorno para el puerto y la conexión a la base de datos.
- `application-local.yml`: Archivo para configuración local (no se sube al repositorio). Aquí debes colocar tus credenciales y datos de conexión personales.
- `application-local-ejemplo.yml`: Ejemplo de configuración local. Puedes copiar este archivo como `application-local.yml` y personalizarlo según tu entorno.

### Ejemplo de configuración local

Copia el archivo `application-local-ejemplo.yml` como `application-local.yml` y edítalo con tus datos:

```yaml
server:
  port: 8083

spring:
  datasource:
    url: jdbc:mysql://localhost:3306/inventario_db?useSSL=false&serverTimezone=America/Lima
    username: tu_usuario
    password: tu_contraseña
```

> **Nota:** El archivo `application-local.yml` está en `.gitignore` y no se subirá al repositorio para proteger tus credenciales.

### Variables de entorno

Puedes definir variables de entorno para personalizar el puerto y la conexión a la base de datos si lo deseas:

- `SERVER_PORT`
- `DB_URL`
- `DB_USERNAME`
- `DB_PASSWORD`

---