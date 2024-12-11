import React from 'react'

function AboutUsContent() {
  return (
    <div className='px-96 flex flex-col gap-32'>
        <div className='flex flex-col gap-8'>
            <h1 className='text-3xl font-bold text-accent text-center'>About Us</h1>
            <p className='text-lg text-gray-900'>We are the <span className='font-semibold'>Team Provask!</span> A dedicated group of students from <span className='font-semibold'>IILM University</span>, united by our passion for Technology, working on this project called <span className='font-semibold'>AyurGarden</span>. Our team consists of six enthusiastic members—Team Members <span className='font-semibold'>Punit Dhiman</span>, <span className='font-semibold'>Sushri Sangita Swain</span>, <span className='font-semibold'>Om Rohilla</span>, <span className='font-semibold'>Varun Chaudhary</span>, <span className='font-semibold'>Rituraj</span>, and <span className='font-semibold'>Kamlesh</span> — who are driven to create a transformative educational experience through our project, <span className='font-semibold'>Ayurgarden</span>: A Game-Based Skill Development Platform. We are fortunate to have the guidance of our mentors, <span className='font-semibold'>Dr. Gyanendra Tiwary</span> and <span className='font-semibold'>Dr. Pooja Batra</span>, whose expertise and support have been invaluable in shaping our vision.</p>
        </div>
        <div className='flex flex-col gap-8'>
            <h1 className='text-3xl font-bold text-accent text-center'>Our Mission</h1>
            <p className='text-lg text-gray-900'>At Provask, we believe that learning should be an engaging and enjoyable journey. Our mission is to make the fascinating field of herbology accessible to everyone, regardless of their background. By combining game-based learning, a comprehensive virtual library, and immersive map-based exploration, we aim to inspire a new generation of herbal enthusiasts and contribute to the preservation of traditional knowledge.</p>
        </div>
        <div className='flex flex-col gap-8'>
            <h1 className='text-3xl font-bold text-accent text-center'>Our Project</h1>
            <p className='text-lg text-gray-900'><span className='font-semibold'>Herbal Herbology</span> is designed to provide an interactive and effective learning experience. Our platform features:</p>
            <ul className='text-lg list-disc flex flex-col gap-4'>
                <li><span className='font-semibold'>Game-Based Learning:</span> We incorporate interactive games and challenges that make learning herbology fun and engaging. These activities reinforce key concepts and test learners' understanding in an enjoyable way.</li>
                <li><span className='font-semibold'>Virtual Library:</span> Our comprehensive virtual library offers access to a wide range of resources, including textbooks, articles, and videos. Learners can explore various aspects of herbology at their own pace, fostering a deeper understanding of the subject.</li>
                <li><span className='font-semibold'>Map-Based Learning:</span> With our map-based component, learners can explore different regions and discover the unique herbal plants found in each area. This hands-on approach provides an immersive learning experience that connects theory with real-world applications.</li>
                <li><span className='font-semibold'>Dashboard and Learning Path:</span> The platform's dashboard serves as a central hub for learners, offering a personalized learning path tailored to their skills and interests. As learners progress, the dashboard adapts to their needs, ensuring a continuous and engaging educational journey.</li>
            </ul>
        </div>
        
        <div className='flex flex-col gap-8 mb-48'>
            <h1 className='text-3xl font-bold text-accent text-center'>Our Vision</h1>
            <p className='text-lg text-gray-900'>We envision a world where the knowledge of herbology is not only preserved but also celebrated. By making this field accessible and enjoyable, we hope to empower individuals to develop valuable skills that contribute to a sustainable future. Our unique combination of educational tools sets us apart from existing platforms, and we are excited to share our vision with the world.</p>

            <p className='text-lg text-gray-900'>Join us on this exciting journey as we revolutionize the way people learn about herbology. Together, we can cultivate a deeper appreciation for the natural world and the incredible potential of herbal knowledge. Thank you for being a part of our mission!</p>
        </div>
    </div>
    
  )
}

export default AboutUsContent