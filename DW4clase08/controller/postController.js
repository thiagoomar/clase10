import { Post } from '../models/post.js'; // Importamos el modelo Post

// Controlador para crear un nuevo post
export const postPost = async (req, res) => {
  const body = req.body; // Capturamos el cuerpo de la solicitud
  const newPost = new Post(body); // Creamos una nueva instancia del modelo Post

  try {
    const savedPost = await newPost.save(); // Intentamos guardar el post en la base de datos
    res.status(200).json(savedPost); // Respondemos con el post guardado
  } catch (error) {
    res.status(400).send(error); // En caso de error, respondemos con un error 400
  }
};

// Controlador para obtener todos los posts
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find(); // Buscamos todos los posts
    res.json(posts); // Respondemos con la lista de posts
  } catch (error) {
    res.status(500).send(error); // En caso de error, respondemos con un error 500
  }
};

// Controlador para obtener un post específico por ID
export const getPost = async (req, res) => {
  const id = req.params.id; // Obtenemos el ID del parámetro de la solicitud
  try {
    const post = await Post.findById(id); // Buscamos el post por ID
    if (!post) {
      return res.status(404).json({ msg: "No se pudo encontrar el post" }); // Si no se encuentra, respondemos con un error 404
    }
    res.json(post); // Respondemos con el post encontrado
  } catch (error) {
    res.status(500).send(error); // En caso de error, respondemos con un error 500
  }
};

// Controlador para actualizar un post
export const updatePost = async (req, res) => {
  const id = req.params.id; // Obtenemos el ID del parámetro de la solicitud
  try {
    const post = await Post.findById(id); // Buscamos el post por ID
    if (!post) {
      return res.status(404).json({ msg: "Post no encontrado" }); // Si no se encuentra, respondemos con un error 404
    }

    // Actualizamos los campos del post con los datos del body, si están presentes
    post.title = req.body.title || post.title;
    post.author = req.body.author || post.author;
    post.body = req.body.body || post.body;

    const savedPost = await post.save(); // Guardamos el post actualizado
    res.json(savedPost); // Respondemos con el post actualizado
  } catch (error) {
    res.status(500).send(error); // En caso de error, respondemos con un error 500
  }
};

// Controlador para eliminar un post
export const deletePost = async (req, res) => {
  const id = req.params.id; // Obtenemos el ID del parámetro de la solicitud
  try {
    const post = await Post.findByIdAndDelete(id); // Intentamos encontrar y eliminar el post por ID
    if (!post) {
      return res.status(404).json({ msg: "Post no encontrado" }); // Si no se encuentra, respondemos con un error 404
    }
    res.json({ msg: "Post eliminado correctamente" }); // Respondemos confirmando la eliminación
  } catch (error) {
    res.status(500).send(error); // En caso de error, respondemos con un error 500
  }
};
