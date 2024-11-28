// Importamos las librerías necesarias
import express from "express"; // Para crear el servidor
import mongoose from "mongoose"; // Para interactuar con MongoDB
import * as dotenv from 'dotenv'; // Para manejar variables de entorno
import postRoutes from "./routes/post.js"; // Importamos las rutas de los posts

// Configuramos dotenv para que cargue las variables de entorno desde .env
dotenv.config();

// Inicializamos la aplicación Express
const app = express();
const PORT = 8080; // Definimos el puerto donde se ejecutará el servidor

// Middleware para manejar JSON en las solicitudes
app.use(express.json());

// Usamos las rutas de los posts en el prefijo '/api/post'
app.use('/api/post', postRoutes);

// Función asíncrona para conectar a la base de datos
async function main() {
  await mongoose.connect(process.env.DB); // Conectamos usando la URI de conexión almacenada en .env
}

// Llamamos a la función main y, si se conecta correctamente, levantamos el servidor
main()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}/api/post`);
    });
  })
  .catch(err => console.error(err)); // Manejo de errores en la conexión
