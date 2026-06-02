import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import PerfumeForm from "../components/PerfumeForm";
import perfumeService from "../services/perfumeService";

const EditPerfumePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [perfume, setPerfume] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPerfume = async () => {
      try {
        const data = await perfumeService.getById(id);
        setPerfume(data);
      } catch (error) {
        toast.error("Error al cargar el perfume");
        console.error(error);
        navigate("/");
      } finally {
        setLoading(false);
      }
    };
    fetchPerfume();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      await perfumeService.update(id, formData);
      toast.success("Perfume actualizado correctamente");
      navigate("/");
    } catch (error) {
      toast.error("Error al actualizar el perfume");
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-20">
        <span className="loading loading-spinner loading-lg text-accent"></span>
      </div>
    );
  }

  return (
    <div>
      <PerfumeForm
        onSubmit={handleSubmit}
        initialData={perfume}
        isEditing={true}
      />
    </div>
  );
};

export default EditPerfumePage;
