import { createContext, useContext, useState } from "react";
import {
  getTurnosRequest,
  deleteTurnoRequest,
  createTurnoRequest,
  getTurnoRequest,
  updateTurnoRequest,
  toggleTurnoDoneRequest,
} from "../api/turno.api";
import { TurnoContext } from "./TurnoContext";

export const useTurnos = () => {
  const context = useContext(TurnoContext);
  if (context === undefined) {
    throw new Error("useTurnos must be used within a TurnoContextProvider");
  }
  return context;
};

export const TurnoContextProvider = ({ children }) => {
  const [turnos, setTurnos] = useState([]);

  async function loadTurnos() {
    const response = await getTurnosRequest();
    setTurnos(response.data);
  }

  const deleteTurno = async (id) => {
    try {
      const response = await deleteTurnoRequest(id);
      setTurnos(turnos.filter((turno) => turno.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const createTurno = async (turno) => {
    try {
      await createTurnoRequest(turno);
      // setTurnos([...turnos, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const getTurno = async (id) => {
    try {
      const response = await getTurnoRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateTurno = async (id, newFields) => {
    try {
      const response = await updateTurnoRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleTurnoDone = async (id) => {
    try {
      const turnoFound = turnos.find((turno) => turno.id === id);
      await toggleTurnoDoneRequest(id, turnoFound.done === 0 ? true : false);
      setTurnos(
        turnos.map((turno) =>
          turno.id === id ? { ...turno, done: !turno.done } : turno
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TurnoContext.Provider
      value={{
        turnos,
        loadTurnos,
        deleteTurno,
        createTurno,
        getTurno,
        updateTurno,
        toggleTurnoDone,
      }}
    >
      {children}
    </TurnoContext.Provider>
  );
};
