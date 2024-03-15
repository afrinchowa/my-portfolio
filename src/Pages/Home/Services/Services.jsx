import { SiFrontendmentor } from "react-icons/si";
import { SiBackendless } from "react-icons/si";
import { FaThermometerFull } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { MdDashboardCustomize } from "react-icons/md";
const Services = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center mb-20">
        My <span className="text-[#49d9d3]">Services</span>
      </h1>
      <div className="grid grid-cols-3 gap-4 ml-5">
        <div className="card w-96 bg-[#0a1d29]  text-white shadow-2xl shadow-teal-400">
          <div className="card-body items-center  ">
            <p className="text-3xl text-left">
            <SiFrontendmentor />
            </p>
            <h2 className="card-title text-3xl">
              {" "}
              Frontend <span className="text-[#49d9d3]">Development</span>:
            </h2>
            <p>
              Utilizing HTML, CSS, Bootstrap, and React, I craft engaging and
              responsive user interfaces that captivate visitors and provide
              seamless navigation.
              {/* Whether its a static website or a dynamic
              web application, I ensure that the frontend experience is
              intuitive, visually appealing, and optimized for performance
              across various devices and screen sizes. */}
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-[#49d9d3]  m-3">See More</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-[#0a1d29]  text-white shadow-2xl shadow-teal-400">
          <div className="card-body items-center  ">
            <p className="text-3xl text-left">
            <SiBackendless />
            </p>
            <h2 className="card-title text-3xl">
              {" "}
              Backend <span className="text-[#49d9d3]">Development</span>:
            </h2>
            <p>
              Harnessing the power of JavaScript and Node.js, I architect robust
              backend systems that handle data management, authentication, and
              server-side logic efficiently.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-[#49d9d3]  m-3">See More</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-[#0a1d29]  text-white shadow-2xl shadow-teal-400">
          <div className="card-body items-center  ">
            <p className="text-3xl text-left">
            <FaDatabase />
            </p>
            <h2 className="card-title text-3xl">
              {" "}
              Database <span className="text-[#49d9d3]">Management</span>:
            </h2>
            <p>
              With expertise in MongoDB, I design and manage databases that
              store and retrieve data with speed and reliability.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-[#49d9d3]  m-3">See More</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-[#0a1d29]  text-white shadow-2xl shadow-teal-400">
          <div className="card-body items-center  ">
            <p className="text-3xl text-left">
            <FaThermometerFull />
            </p>
            <h2 className="card-title text-3xl">
              {" "}
              FullStack <span className="text-[#49d9d3]">Development</span>:
            </h2>
            <p>
              As a full stack developer, I bring together frontend and backend
              technologies to create cohesive and feature-rich web applications.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-[#49d9d3]  m-3">See More</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-[#0a1d29]  text-white shadow-2xl shadow-teal-400">
          <div className="card-body items-center  ">
            <p className="text-3xl text-left">
            <MdDashboardCustomize />
            </p>
            <h2 className="card-title text-3xl">
              {" "}
              Custom <span className="text-[#49d9d3]">Solutions</span>:
            </h2>
            <p>
              Whether you need a custom website, a web application tailored to
              your specific business needs, or enhancements to your existing web
              presence, I offer personalized solutions that align with your
              goals and objectives.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-[#49d9d3]  m-3">See More</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-[#0a1d29]  text-white shadow-2xl shadow-teal-400">
          <div className="card-body items-center  ">
            <p className="text-3xl text-left">
            <MdContactSupport />

            </p>
            <h2 className="card-title text-3xl">
              {" "}
              Maintenance and<span className="text-[#49d9d3]">Support</span>:
            </h2>
            <p>
              Beyond the initial development phase, I provide ongoing
              maintenance and support services to ensure that your web
              applications remain secure,
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-[#49d9d3]  m-3">See More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
