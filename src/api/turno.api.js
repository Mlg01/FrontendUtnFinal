import axios from "axios";

export const getTurnosRequest = async () =>
  await axios.get("https://backendfinalutn-production.up.railway.app/turnos");

export const createTurnoRequest = async (turno) =>
  await axios.post("https://backendfinalutn-production.up.railway.app/turnos", turno);

export const deleteTurnoRequest = async (id) =>
  await axios.delete(`https://backendfinalutn-production.up.railway.app/turnos/${id}`);

export const getTurnoRequest = async (id) =>
  await axios.get(`https://backendfinalutn-production.up.railway.app/turnos/${id}`);

export const updateTurnoRequest = async (id, newFields) =>
  await axios.put(`https://backendfinalutn-production.up.railway.app/turnos/${id}`, newFields);

export const toggleTurnoDoneRequest = async (id, done) =>
  await axios.put(`https://backendfinalutn-production.up.railway.app/turnos/${id}`, {
    done,
  });
