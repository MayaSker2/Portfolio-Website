const StatInfoCard = ({count, label}) => {
  return (
    <div className='flex-1 flex items-center gap-4 md:gap-5 bg-secondary rounded-[14px] py-3 px-5 lg:p-5 hover:scale-105'>
        <h4 className='w-11 text-4xl md:text-5xl font-medium text-primary'>
          {count}
        </h4>
        
        <p className='text-sm md:text-[16px]  text-lightpink  leading-6 whitespace-pre-line'>
          {label}
        </p>
    </div>
  )
}

export default StatInfoCard