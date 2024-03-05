import img1 from '../../../assets/img1.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen  text-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img1} />
          <div className='lg: w-96'>
            <p className="py-6 font-semibold text-2xl ">Hello,Its Me <br /><span className=' font-bold text-4xl'>Moriom Afrin Soya</span>  <br />a passionate <span className=' text-3xl text-[#49d9d3]'>Web Developer</span> 
            {/* with a keen eye for detail and a drive for crafting exceptional digital experiences.  */}
            </p>
            <p>With a background in WebDevelopment I specialize in HTML,CSS& JavaScript, striving to create beautiful, user-friendly solutions that leave a lasting impact.</p>
            <button className="mt-4 btn font-bold bg-[#49d9d3]">Contact Me</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;