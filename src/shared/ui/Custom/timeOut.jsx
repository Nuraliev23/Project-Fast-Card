import React, { useEffect, useState } from 'react'

const TimeOut = () => {
    const [time, setTime] = useState({});

   useEffect(() => {
      const skidkaDate = new Date();
      skidkaDate.setDate(skidkaDate.getDate() + 4);
  
      const timer = setInterval(() => {
        const nowDate = new Date();
        const diff = skidkaDate - nowDate;
  
        if (diff <= 0) {
          clearInterval(timer);
          setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((diff / (1000 * 60)) % 60);
          const seconds = Math.floor((diff / 1000) % 60);
  
          setTime({ days, hours, minutes, seconds });
        }
      }, 1000);
    }, []);
  
  return (
    <div className='flex items-center gap-[20px]'>
<div>
    <p className='text-[12px] font-bold'>Days</p>
    <p className='text-[32px] font-bold'>0{time.days}</p>
</div>
<p className='text-[32px] text-[#E07575]'>:</p>
<div>
    <p className='text-[12px] font-bold'>Hours</p>
    <p className='text-[32px] font-bold'>{time.hours}</p>
</div>
<p className='text-[32px] text-[#E07575]'>:</p>

<div>
    <p className='text-[12px] font-bold'>Minutes</p>
    <p className='text-[32px] font-bold'>{time.minutes}</p>
</div>
<p className='text-[32px] text-[#E07575]'>:</p>

<div>
    <p className='text-[12px] font-bold'>Seconds</p>
    <p className='text-[32px] font-bold'>{time.seconds}</p>
</div>
    </div>
  )
}

export default TimeOut