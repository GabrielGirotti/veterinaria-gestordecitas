const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const handleEliminar = () => {
    const respuesta = confirm("Seguro desea eliminar esta cita?");
    if (respuesta) {
      eliminarPaciente(paciente.id);
    }
  };

  return (
    <div className="bg-white px-5 py-10 shadow-md rounded-lg mb-3 mx-3">
      <p className="block uppercase font-bold text-gray-700 mb-3">
        Nombre:{" "}
        <span className="font-normal normal-case">{paciente.nombre}</span>
      </p>
      <p className="block uppercase font-bold text-gray-700 mb-3">
        Propietario:{" "}
        <span className="font-normal normal-case">{paciente.propietario}</span>
      </p>
      <p className="block uppercase font-bold text-gray-700 mb-3">
        Email: <span className="font-normal normal-case">{paciente.email}</span>
      </p>
      <p className="block uppercase font-bold text-gray-700 mb-3">
        Fecha de Alta:{" "}
        <span className="font-normal normal-case">{paciente.fecha}</span>
      </p>
      <p className="block uppercase font-bold text-gray-700 mb-3">
        Sintomas:{" "}
        <span className="font-normal normal-case">{paciente.sintoma}</span>
      </p>

      <div className="flex justify-start gap-6">
        <button
          type="button"
          className="py-2 px-10 bg-violet-600 text-white font-bold rounded-lg uppercase hover:bg-violet-800"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 text-white font-bold rounded-lg uppercase hover:bg-red-800"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
