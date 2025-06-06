# 📚 Biblioteca API RESTful

Una API RESTful construida con **Node.js**, **Express**, **TypeScript** y **MongoDB** para gestionar una colección de libros. Este proyecto forma parte de un trabajo práctico de programación backend utilizando el patrón MVC.

---

## 🚀 Tecnologías utilizadas

- **Node.js**
- **Express**
- **TypeScript**
- **MongoDB + Mongoose**
- **Zod** (para validaciones)
- **dotenv** (variables de entorno)

---

## 📁 Estructura del proyecto

src/
├── config/ # Conexión a la base de datos
├── controllers/ # Lógica de los endpoints
├── models/ # Esquema de Mongoose
├── routes/ # Definición de rutas
├── utils/ # Funciones auxiliares
├── validations/ # Validaciones con Zod
└── index.ts # Archivo principal del servidor

---

## ⚙️ Instalación

1. Cloná el repositorio:
git clone https://github.com/Andreseg65/biblioteca-api.git
cd biblioteca-api

2. Instalá las dependencias:
npm install

3. Configurá las variables de entorno:
Crea un archivo .env y agregá:
PORT=1234
MONGODB_URI=mongodb://localhost:27017/biblioteca

4. Compilá el proyecto: 
npx tsc

5. Iniciá el servidor:
npm run start 
npm run dev   

📌 Endpoints disponibles
GET	/books	Obtener todos los libros
GET	/books/:id	Obtener un libro por ID
POST	/books	Crear un nuevo libro
PATCH	/books/:id	Actualizar un libro existente
DELETE	/books/:id	Eliminar un libro por ID

✅ Validaciones
Los datos de los libros son validados con Zod. Campos requeridos:
title: string (obligatorio y único)
author: string (obligatorio)
publishedYear: number (opcional)
genre: string (opcional y validado con una lista predefinida)
available: boolean (por defecto true)

🧪 Pruebas
Podés probar la API usando herramientas como:
Postman
curl desde la terminal

📌 Estado del proyecto
 Conexión con MongoDB
 Esquema y modelo Book
 CRUD completo
 Validaciones con Zod
 Manejo de errores
 Documentación con README
 Estructura MVC organizada

🧑‍💻 Autor
Andrés González
Estudiante en UTN.BA | Desarrollador Backend
GitHub: @Andreseg65