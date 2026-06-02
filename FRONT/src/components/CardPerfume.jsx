import { SquarePen, Trash } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const CardPerfume = ({ perfume, onDelete, onEdit }) => {
  const fechaFormateada = perfume?.createdAt
    ? format(new Date(perfume.createdAt), "d 'de' MMMM 'del' yyyy", { locale: es })
    : "Sin fecha";

  return (
    <div className="card bg-base-300 w-full">
      <figure>
        <img
          src={
            perfume?.imageUrl ||
            "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          }
          alt={perfume?.title || "Perfume"}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-accent font-bold lg:text-2xl">
          {perfume?.title || "Sin título"}
        </h2>
        <p className="text-amber-50">
          {perfume?.description || "Sin descripción"}
        </p>
        <div className="flex justify-between items-center mt-6">
          <time dateTime={perfume?.createdAt}>{fechaFormateada}</time>
          <div className="flex gap-4">
            <SquarePen
              className="text-white cursor-pointer hover:text-accent transition-colors"
              onClick={() => onEdit && onEdit(perfume)}
            />
            <Trash
              className="text-red-400 cursor-pointer hover:text-red-300 transition-colors"
              onClick={() => onDelete && onDelete(perfume._id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPerfume;
