import { Router } from 'express'; // Importamos Router de express
import {
  postPost, // Función para crear un post
  getPosts, // Función para obtener todos los posts
  getPost, // Función para obtener un post específico
  updatePost, // Función para actualizar un post
  deletePost // Función para eliminar un post
} from '../controller/postController.js'; // Importamos las funciones del controlador

const router = Router(); // Creamos un nuevo router

// Definimos las rutas y sus métodos
router.post('/', postPost); // Ruta para crear un nuevo post
router.get('/', getPosts); // Ruta para obtener todos los posts
router.get('/:id', getPost); // Ruta para obtener un post específico por ID
router.put('/:id', updatePost); // Ruta para actualizar un post por ID
router.delete('/:id', deletePost); // Ruta para eliminar un post por ID

export default router; // Exportamos el router
