import React from 'react'
import MyImage from '../assets/images/image.png'
import { STATS } from '../utils/data'
import StatInfoCard from '../components/StatInfoCard'
import Snow from '../utils/Snow'

const Hero = () => {
  return (
    <section id="hero" className="container mx-auto px-8">
      <Snow />
      <div className="flex flex-col lg:flex-row  gap-5 lg:gap-14 items-center justify-between mt-[10px]  lg:mt-[34px]">
        <div class="snow"></div>

        <div className="order-2 lg:order-1 text-center lg:text-left mt-5 lg:mt-15 ">
          <h3 className="text-xl lg:text-2xl font-medium text-lightpink">
            👋 Hi, I’m Maya Sker
          </h3>

          <h1 className="w-full lg:w-[480px] text-3xl lg:text-5xl font-pacifico leading-[50px] 
          lg:leading-[60px] mt-3  bg-primary bg-clip-text text-transparent"
          >
            Front-End &           
            Full-Stack Web Developer          
          </h1>

          <p className="w-full lg:w-[500px] text-sm lg:text-base mt-4 text-lightpink">
            I build modern, responsive, and user-friendly web applications using React.js, 
            Laravel, JavaScript, and Tailwind CSS.
            I love turning ideas into clean, functional, and scalable digital experiences.
          </p>

          <div className="mt-6 flex justify-center lg:justify-start gap-3 md:gap-8">
            <button 
            className="flex-1 md:flex-none text-primary border-primary action-btn-outline btn-scale-anim"
             onClick={() => window.open("https://github.com/MayaSker2", "_blank")}
             >
              View My Work
            </button>
            <button className="flex-1 md:flex-none action-btn btn-scale-anim btn-secondary bg-secondary"
              onClick={() => window.open("https://drive.google.com/file/d/1anJKBbRi_XN2-8fQEqheU3alJPfllL5q/view?usp=drive_link", "_blank")}
            >
              Download Resume
            </button>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          {/* Image or illustration here */}

          <div className="relative w-82 h-82 group">
            <div className="
              absolute inset-0 rounded-full 
              bg-purple-600 opacity-0 blur-2xl 
              transition-all duration-500 group-hover:opacity-60 
              group-hover:scale-110">
            </div>

            <img
               src={MyImage}
              alt="My Photo"
              className="
                relative profile-pic w-[520px] h-[520px] border-[#fcd7f1]
                object-cover rounded-full border-x-4
                border-darktransition-all duration-300 
                group-hover:scale-105"
            />
          </div>

        </div>
      </div>
      <div className="flex gap-8 lg:gap-12 mt-16 md:mt-24 flex-wrap">
        {STATS.map((item) => (
          <StatInfoCard key={item.id} count={item.count} label={item.label} />
        ))}
      </div>
    </section>
  )
}

export default Hero