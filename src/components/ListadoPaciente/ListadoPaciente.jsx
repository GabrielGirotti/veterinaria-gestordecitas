import Paciente from "./Paciente/Paciente";

const ListadoPaciente = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 ">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-lg mt-1 text-center mb-5 font-semibold">
            Administra tus Pacientes y{" "}
            <span className="text-violet-600 font-bold">Citas</span>
          </p>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-lg mt-1 text-center mb-5 font-semibold">
            Registra tus Pacientes y{" "}
            <span className="text-violet-600 font-bold">Citas</span>
          </p>
        </>
      )}

      <div className=" md:overflow-y-scroll h-screen">
        {pacientes.map((paciente) => {
          return (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListadoPaciente;
