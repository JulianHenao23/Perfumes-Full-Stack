import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const perfumeService = {
  // Obtener todos los perfumes
  getAll: async () => {
    const response = await axios.get(`${API_URL}/api/perfumes`);
    return response.data;
  },

  // Obtener un perfume por id
  getById: async (id) => {
    const response = await axios.get(`${API_URL}/api/perfumes/${id}`);
    return response.data;
  },

  // Crear un perfume
  create: async (data) => {
    const response = await axios.post(`${API_URL}/api/perfumes`, data);
    return response.data;
  },

  // Actualizar un perfume
  update: async (id, data) => {
    const response = await axios.put(`${API_URL}/api/perfumes/${id}`, data);
    return response.data;
  },

  // Eliminar un perfume
  delete: async (id) => {
    const response = await axios.delete(`${API_URL}/api/perfumes/${id}`);
    return response.data;
  },
};

export default perfumeService;
