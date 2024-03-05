const Project = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center mt-20 mb-20">
        Latest<span className="text-[#49d9d3]"> Project</span>
      </h1>
      <div className="grid grid-cols-3 gap-4 ml-5">
      <div className="card w-96 bg-[#0a1d29]  text-white shadow-2xl shadow-indigo-800">
          <div className="card-body items-center  ">
            <img src="https://i.ibb.co/M5PzPBS/Untitled-design-2.png" alt="" />
          </div>
        </div>
        <div className="card w-96 bg-[#0a1d29]  text-white shadow-2xl shadow-indigo-800">
          <div className="card-body items-center  ">
            <img src="https://i.ibb.co/mHQhqhC/Untitled-design.png" alt="" />
          </div>
        </div>
        <div className="card w-96 bg-[#0a1d29]  text-white shadow-2xl shadow-indigo-800">
          <div className="card-body items-center  ">
            <img src="https://i.ibb.co/Wk7k6Cg/Untitled-design-1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
