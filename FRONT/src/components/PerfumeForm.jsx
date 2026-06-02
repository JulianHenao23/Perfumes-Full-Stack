import { useState, useEffect } from "react";

const PerfumeForm = ({ onSubmit, initialData, isEditing }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });

  // Si viene con datos (modo editar), los carga en el formulario
  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        description: initialData.description || "",
        imageUrl: initialData.imageUrl || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit(formData);
  };

  return (
    <form
      className="bg-base-300 rounded-lg max-w-4xl mx-auto p-10"
      onSubmit={handleSubmit}
    >
      <input
        className="block w-full mb-8 input lg:input-lg focus:outline-0 border-0"
        type="text"
        placeholder="Titulo"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <textarea
        placeholder="Descripcion del Perfume"
        className="input lg:input-lg w-full resize-y mb-8 textarea focus:outline-0 border-0"
        name="description"
        id="description"
        value={formData.description}
        onChange={handleChange}
      ></textarea>
      <input
        className="block w-full mb-8 input lg:input-lg focus:outline-0 border-0"
        type="text"
        placeholder="Image Url"
        id="imageUrl"
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="btn btn-primary w-full lg:text-lg font-bold"
      >
        {isEditing ? "Actualizar Perfume" : "Crear Perfume"}
      </button>
    </form>
  );
};

export default PerfumeForm;
