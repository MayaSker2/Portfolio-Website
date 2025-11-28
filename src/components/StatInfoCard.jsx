const StatInfoCard = ({count, label}) => {
  return (
    <div className='flex-1 flex gap-3 md:gap-5 bg-secondary rounded-[14px] p-5 hover:scale-105'>
        <h4 className='text-4xl md:text-5xl font-medium text-primary'>
          {count}
        </h4>
        
        <p className='text-sm md:text-[16px]  text-lightpink  leading-6 whitespace-pre-line'>
          {label}
        </p>
    </div>
  )
}

export default StatInfoCard