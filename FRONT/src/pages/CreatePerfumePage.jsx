import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PerfumeForm from "../components/PerfumeForm";
import perfumeService from "../services/perfumeService";

const CreatePerfumePage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      await perfumeService.create(formData);
      toast.success("Perfume creado correctamente");
      navigate("/"); // volver al home después de crear
    } catch (error) {
      toast.error("Error al crear el perfume");
      console.error(error);
    }
  };

  return (
    <div>
      <PerfumeForm onSubmit={handleSubmit} isEditing={false} />
    </div>
  );
};

export default CreatePerfumePage;
