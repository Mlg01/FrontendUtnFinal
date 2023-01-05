import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-neutral-800 flex justify-between px-20 py-4">
      <Link to="/" className="text-white font-bold">
        <h1>Turnero Hospital Santa Lucía</h1>
      </Link>

      <ul className="flex gap-x-1">
        <li>
          <Link to="/" className="bg-slate-200 px-2 py-1">Inicio</Link>
        </li>
        <li>
          <Link to="/about" className="bg-slate-200 px-2 py-1">Sobre Nosotros</Link>
        </li>
        <li>
          <Link to="/servicios" className="bg-slate-200 px-2 py-1">Especialidades Médicas</Link>
        </li>
        <li>
          <Link to="/new" className="bg-teal-200 px-2 py-1">Crear Turno</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
