import { Form, Formik } from "formik";
import { useTurnos } from "../context/TurnoProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function TurnoForm() {
  const { createTurno, getTurno, updateTurno } = useTurnos();
  const [turno, setTurno] = useState({
    nombre: "",
    description: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTurno = async () => {
      if (params.id) {
        const turno = await getTurno(params.id);
        console.log(turno);
        setTurno({
          nombre: turno.nombre,
          telefono: turno.telefono,
          description: turno.description,
        });
      }
    };
    loadTurno();
  }, []);

  return (
    <div>
      <Formik
        initialValues={turno}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateTurno(params.id, values);
          } else {
            await createTurno(values);
          }
          navigate("/");
          setTurno({
            nombre: "",
            telefono: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Edit Turno" : "Nuevo Turno"}
            </h1>
            <label className="block">Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="Escribí tu Nombre"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.nombre}
            />
            <label className="block">Telefono</label>
            <input
              type="text"
              name="telefono"
              placeholder="Escribí tu teléfono"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.telefono}
            />
            <label className="block">Descripción</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Escribe una descripción"
              onChange={handleChange}
              className="px-2 py-1 rounded-sm w-full"
              value={values.description}
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TurnoForm;
