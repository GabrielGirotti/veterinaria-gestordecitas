const Error = ({children}) => {
  return (
    <div className="bg-red-800 w-full p-3 text-white uppercase font-bold rounded-md text-center my-5">
      {children}
    </div>
  );
};

export default Error;
