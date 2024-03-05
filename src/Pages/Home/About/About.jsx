import img2 from "../../../assets/About.jpeg";
const About = () => {
  return (
    <div className="hero min-h-screen  text-white">
      <div className="hero-content flex-col lg:flex-row">
        <img src={img2} className="max-w-sm rounded-full shadow-2xl shadow-teal-400" />
        <div className="ml-28">
          <h1 className="text-5xl font-bold">About <span className="text-[#49d9d3]">me</span></h1>
          <h3 className="text-3xl mt-4">Full <span className="text-[#49d9d3]">Stack</span> Developer </h3>
          <p className="py-6">
            Hi there! A passionate Full Stack web developer with a diverse skill
            set encompassing HTML, CSS, Bootstrap, React, JavaScript, Node.js,
            and MongoDB. With a strong foundation in both frontend and backend
            technologies, I thrive on building dynamic and scalable web
            applications that deliver exceptional user experiences.
            <br />
            <span className="mt-4">
              My journey into web development began with a curiosity for
              crafting beautiful and functional websites. Over the years, Ive
              honed my skills through hands-on experience and continuous
              learning, staying up-to-date with the latest trends and
              technologies in the ever-evolving field of web development.
            </span>
            <br />
            <span className="mt-4">
              On the frontend, I specialize in creating responsive and intuitive
              user interfaces using HTML, CSS, and Bootstrap, ensuring seamless
              experiences across devices and screen sizes.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
