# Backend_2 - API REST con Autenticación y Comercio Electrónico

Este proyecto es una API REST desarrollada en Node.js y Express que permite la gestión de usuarios, productos, carritos de compra y autenticación segura con Passport y JWT.
Incluye documentación con Swagger, almacenamiento en MongoDB y pruebas con Mocha y Chai.

## Características Principales
- **Autenticación segura** con Passport (estrategia JWT y Local).
- **Persistencia de datos** en MongoDB usando Mongoose.
- **Gestor de carritos de compra** con tickets de compra.
- **Sistema de usuarios y roles** (admin y user).
- **Generación de datos de prueba** con mocks.
- **Swagger** para documentar la API.
- **Docker** para despliegue sencillo.
- **Tests unitarios, de integración y funcionales**.

## Instalación
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/backend_2.git
   cd backend_2
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Configurar variables de entorno:
   Crear un archivo `.env` en la raíz con:
   ```env
   MONGO_URL=mongodb+srv://usuario:contraseña@cluster.mongodb.net/
   JWT_SECRET=tu_secreto
   PERSISTENCE=MONGO
   MAILER_HOST=
   MAILER_PORT=587
   MAILER_USERNAME=
   MAILER_PASSWORD=
   ```
4. Iniciar el servidor en desarrollo:
   ```bash
   npm run dev
   ```

## Endpoints Principales
### Autenticación
- `POST /api/auth/register` - Registrar un usuario.
- `POST /api/auth/login` - Iniciar sesión y obtener JWT.
- `GET /api/auth/current` - Obtener usuario autenticado.
- `GET /api/auth/logout` - Cerrar sesión.

### Usuarios
- `GET /api/users` - Obtener lista de usuarios.
- `GET /api/users/:id` - Obtener usuario por ID.

### Productos
- `GET /api/products` - Obtener todos los productos (paginado).
- `GET /api/products/:pid` - Obtener producto por ID.
- `POST /api/products` - Crear producto (admin).
- `PUT /api/products/:pid` - Actualizar producto (admin).
- `DELETE /api/products/:pid` - Eliminar producto (admin).

### Carrito de Compras
- `POST /api/carts` - Crear un carrito.
- `GET /api/carts/:cid` - Obtener un carrito por ID.
- `POST /api/carts/:cid/product/:pid` - Agregar producto al carrito.
- `DELETE /api/carts/:cid/product/:pid` - Eliminar producto del carrito.
- `DELETE /api/carts/:cid` - Vaciar carrito.
- `GET /api/carts/:cid/purchase` - Finalizar compra y generar ticket.

## Documentación con Swagger
Puedes acceder a la documentación de la API en:
```
http://localhost:8080/api-docs
```

## Uso con Docker
Para ejecutar el backend en un contenedor Docker:
```bash
docker build -t backend_2 .
docker run -p 3000:3000 backend_2
```

## Ejecución de Tests
El proyecto incluye pruebas unitarias, funcionales e integración:
```bash
npm test
```

## Tecnologías Utilizadas
- Node.js + Express
- MongoDB + Mongoose
- Passport.js (JWT y Local)
- Swagger
- Mocha, Chai (para pruebas)
- Docker
- Handlebars (para vistas del backend)

---

Este backend fue desarrollado como parte del curso de backend avanzado. ¡Sugerencias y mejoras son bienvenidas! 🚀

