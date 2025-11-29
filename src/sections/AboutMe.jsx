import { ABOUT_ME } from "../utils/data";
import MyImage from '../assets/images/my_image.png'
import Snow from '../utils/Snow';

const AboutMe = () => {
  return (
    <section id="about" className="container relative  mx-auto px-8 py-10">
      <Snow />
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start justify-between">  
        <div className="w-[200px] md:w-[370px] h-[200px]  md:h-[328px] lg:h-[428px] mx-auto">
          <div className="relative group">
            <div className="
              absolute inset-0 rounded-full bg-purple-600 
              opacity-0 blur-2xl transition-all duration-500 
              group-hover:opacity-60 group-hover:scale-11">
            </div>

            <img src={MyImage} alt="My Photo"
              className="
                relative profile-pic w-full h-full object-cover 
                rounded-full transition-all duration-300 
                group-hover:scale-105"
            />
          </div>
        </div>
          
        
        <div className="flex-1 text-center justify-center ">
          <h4 className=" lg:text-left lg:w-[200px] section-title ">
            About Me
          </h4>

          <p className="text-sm md:text-base lg:text-xl text-center lg:text-justify  text-lightpink leading-6 whitespace-pre-line mt-4">
            {ABOUT_ME.content}
          </p>
          <div className="flex gap-4 items-center justify-center lg:justify-start mt-6">
            {ABOUT_ME.socialLinks.map((item) => (
              <a key={item.label}  href={item.link} target="_blank" rel="noopener noreferrer" 
              className="curser-pointer group"
              >
                <item.icon className="text-2xl text-primary 
                transition-transform duration-300 
                group-hover:rotate-12 group-hover:scale-110 
                group-hover:translate-y-[-2px]
                group-hover:text-lightpink"/>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
