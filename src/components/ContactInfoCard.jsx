const ContactInfoCard = ({icon, text}) => {
  return (
    <div className='flex items-center gap-2  lg:gap-4 bg-lightpink
     rounded-2xl border border-primary px-4 py-3 mb-5'
    >
        <div className='w-6 h-6 lg:w-9 lg:h-9 text-sm lg:text-2xl p-1 text-white 
         flex items-center justify-center bg-primary 
         rounded-lg'
         >
          {icon}
        </div>
        <p className='text-secondary text-[11px] md:text-sm lg:text-base'>
          {text}
        </p>
    </div>
  )
}

export default ContactInfoCard