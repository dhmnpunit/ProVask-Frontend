import React from 'react'

function Footer() {
  return (
    <div className="">
        <svg 
          width="100%" 
          height="103" 
          viewBox="0 0 1440 103" 
          preserveAspectRatio="none" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 39L60 28.3C120 18 240 -4 360 1.7C480 7 600 39 720 39C840 39 960 7 1080 1.7C1200 -4 1320 18 1380 28.3L1440 39V103H1380C1320 103 1200 103 1080 103C960 103 840 103 720 103C600 103 480 103 360 103C240 103 120 103 60 103H0V39Z" fill="#004724"/>
        </svg>

        <div className='h-footer w-full bg-accent px-10 flex'>

            <div>
                <h1 className='text-green800 font-bold text-160px leading-none'>Team ProVask.</h1>
                <div>
                    <ul className='flex w-full justify-between text-xl font-bold text-green800'>
                        <li>Punit Dhiman</li>
                        <li>Sushri Sangita Swain</li>
                        <li>Varun Chaudhary</li>
                        <li>RituRaj</li>
                        <li>Om Rohilla</li>
                        <li>Kamlesh Mishra</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Footer