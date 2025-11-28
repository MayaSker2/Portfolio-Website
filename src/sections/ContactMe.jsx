import { ABOUT_ME } from '../utils/data';
import { IoLogoGithub, IoMdMail } from 'react-icons/io';
import ContactInfoCard from '../components/ContactInfoCard';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import Snow from '../utils/Snow';
const ContactMe = () => {
return (
  <section id="contact" className='relative'>
    <Snow />
    <div className="container mx-auto p-10">
      <div className="w-full lg:w-[60vw] mx-auto">
        <h4 className="section-title">Contact Me</h4>
        <p className="text-lightpink text-center mt-4 leading-6">
          A versatile developer with hands-on expertise in modern technologies, 
          tools, and frameworks, dedicated to building efficient,
          scalable, and user-centric solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16">
        <div>
          <ContactInfoCard  icon={<IoMdMail />} text={ ABOUT_ME.email}/>
          <ContactInfoCard icon={<IoPhonePortraitOutline />} text={ ABOUT_ME.phone}/>
          <ContactInfoCard icon={<IoLogoGithub />} text={ ABOUT_ME.github}/>
        </div>
        <div>
          <h5 className='md:hidden text-secondary text-lg font-medium mt-4 pd-5'>
            Conact Form
          </h5>
          <form action="" className='flex flex-col'>
            <input type="text" name='fullname' placeholder='Full Name' className='input-box' autoComplete='off'/>
            <input type="text" name='email' placeholder='Email' className='input-box'autoComplete='off' />
            <textarea type="text" name='message' placeholder='Message' rows={3} 
            className='input-box'autoComplete='off' />
            <button className='action-btn btn-scale-anim bg-dark shadow-white'>
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
};

export default ContactMe;


