import { useEffect } from "react";
import TurnoCard from "../components/TurnoCard";
import {  useTurnos } from "../context/TurnoProvider";

function TurnoPage() {
  const { turnos, loadTurnos } = useTurnos();

  useEffect(() => {
    loadTurnos();
  }, []);

  function renderMain() {
    if (turnos.length === 0) return <h1 className="text-white font-bold">No hay turnos todavía</h1>;
    return turnos.map((turno) => <TurnoCard turno={turno} key={turno.id} />);
  }

  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center">Turnos</h1>
      <div className="grid grid-cols-3 gap-2">{renderMain()}</div>
    </div>
  );
}

export default TurnoPage;
