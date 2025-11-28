const ContactInfoCard = ({icon, text}) => {
  return (
    <div className='flex items-center gap-5 bg-lightpink
     rounded-2xl border border-primary px-4 py-3 mb-5'
    >
        <div className='w-10 h-10 text-3xl text-white
         flex items-center justify-center bg-primary 
         rounded-lg'
         >
          {icon}
        </div>
        <p className='text-secondary text-xl md:text-sm font-medium'>
          {text}
        </p>
    </div>
  )
}

export default ContactInfoCard