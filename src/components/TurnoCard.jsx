import { useTurnos } from "../context/TurnoProvider";
import { useNavigate } from "react-router-dom";

function TurnoCard({ turno }) {
  const { deleteTurno, toggleTurnoDone } = useTurnos();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTurnoDone(turno.id);
  };

  return (
    <div className="bg-zinc-700 text-white rounded-md p-4">
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{turno.nombre}</h2>
        <span>{turno.done == 1 ? "️✅️" : "❌"}</span>
      </header>
      <p className="text-xs">{turno.telefono}</p>
      <p className="text-xs">{turno.description}</p>
      <span>{turno.createAt}</span>
      <div className="flex gap-x-1">
        <button
          className="bg-slate-300 px-2 py-1 text-black"
          onClick={() => deleteTurno(turno.id)}
        >
          Eliminar turno
        </button>
        <button
          className="bg-slate-300 px-2 py-1 text-black"
          onClick={() => navigate(`/edit/${turno.id}`)}
        >
          Editar
        </button>
        <button
          className="bg-slate-300 px-2 py-1 text-black"
          onClick={() => handleDone(turno.done)}
        >
         Confirmar Turno
        </button>
      </div>
    </div>
  );
}

export default TurnoCard;
