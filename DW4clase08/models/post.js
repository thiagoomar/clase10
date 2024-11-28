import mongoose from 'mongoose'; // Importamos mongoose para crear esquemas
const { Schema } = mongoose; // Desestructuramos Schema de mongoose

// Definimos el esquema del post
const PostSchema = new Schema({
  title: String, // Título del post
  author: String, // Autor del post
  body: String, // Contenido del post
  date: { type: Date, default: Date.now }, // Fecha de creación, por defecto la fecha actual
  hidden: Boolean, // Campo para ocultar el post
});

// Creamos el modelo a partir del esquema
export const Post = mongoose.model('Posts', PostSchema);
