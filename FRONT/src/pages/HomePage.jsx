import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CardPerfume from "../components/CardPerfume";
import perfumeService from "../services/perfumeService";

  const HomePage = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const fetchPerfumes = async () => {
    try {
      const data = await perfumeService.getAll();
      setPerfumes(data);
    } catch (error) {
      toast.error("Error al cargar los perfumes");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPerfumes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await perfumeService.delete(id);
      toast.success("Perfume eliminado correctamente");
      fetchPerfumes(); //  esto recargaa la lista
    } catch (error) {
      toast.error("Error al eliminar el perfume");
      console.error(error);
    }
  };

  const handleEdit = (perfume) => {
    navigate(`/editPerfume/${perfume._id}`);
  };
  const filteredPerfumes = perfumes.filter((perfume) =>
          perfume.title.toLowerCase().includes(search.toLowerCase())
    ); 
   
  if (loading) {
    return (
      <div className="flex justify-center items-center mt-20">
        <span className="loading loading-spinner loading-lg text-accent"></span>
      </div>
    );
  }
     
  if (loading) {
    return (
      <div className="flex justify-center items-center mt-20">
        <span className="loading loading-spinner loading-lg text-accent"></span>
      </div>
    );
  }

  if (perfumes.length === 0) {
    return (
      <div className="text-center mt-20">
        <p className="text-2xl text-base-content/50">No hay perfumes aún.</p>
        <p className="text-base-content/40 mt-2">
          Haz click en "New Perfume" para agregar uno.
        </p>
      </div>
    );
  }

    return (
  <div>
    <div className="mb-6">
      <input
        type="text"
        placeholder="Buscar perfume..."
        className="input input-bordered w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 mt-14 xl:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      {filteredPerfumes.map((perfume) => (
        <CardPerfume
          key={perfume._id}
          perfume={perfume}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  </div>
);
};

export default HomePage;
