import { useState, useEffect } from "react";
import Error from "../Error/Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintoma, setSintoma] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintoma(paciente.sintoma);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return fecha + random;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, propietario, email, fecha, sintoma].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    const objetoPacientes = {
      nombre,
      propietario,
      email,
      fecha,
      sintoma,
    };

    if (paciente.id) {
      objetoPacientes.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPacientes : pacienteState
      );
      setPacientes(pacientesActualizados);
      setPaciente({})
    } else {
      objetoPacientes.id = generarId();
      setPacientes([...pacientes, objetoPacientes]);
    }

    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintoma("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-1 text-center mb-5 font-semibold">
        Añade pacientes y{" "}
        <span className="text-violet-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white px-5 py-10 shadow-md rounded-lg m-3 mb-10 "
      >
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block uppercase font-bold text-gray-700"
          >
            Nombre Mascota:
          </label>
          <input
            id="mascota"
            className="w-full border-2 p-2 mt-2 rounded-md"
            type="text"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block uppercase font-bold text-gray-700"
          >
            Nombre Propietario:
          </label>
          <input
            id="propietario"
            className="w-full border-2 p-2 mt-2 rounded-md"
            type="text"
            placeholder="Nombre del propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block uppercase font-bold text-gray-700"
          >
            Email:
          </label>
          <input
            id="email"
            className="w-full border-2 p-2 mt-2 rounded-md"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block uppercase font-bold text-gray-700"
          >
            Fecha de Alta
          </label>
          <input
            id="alta"
            className="w-full border-2 p-2 mt-2 rounded-md"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block uppercase font-bold text-gray-700"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="w-full border-2 p-2 mt-2 rounded-md"
            placeholder="Describe los sintomas de tu mascota"
            value={sintoma}
            onChange={(e) => setSintoma(e.target.value)}
          />
        </div>

        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}

        <input
          type="submit"
          className="bg-violet-600 w-full p-3 text-white uppercase font-bold rounded-md cursor-pointer hover:bg-violet-800 transition-all"
          value={paciente.id ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
