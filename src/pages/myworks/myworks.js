import React from 'react'

const Myworks = () => {
  const projects = [
    {
      title: "Bayir Company Website",
      description: "A professional website developed for Bayir company to showcase their products and services. The platform provides an easy-to-navigate interface for customers to access information about the company.",
      stack: "React, Redux Toolkit, Tailwind CSS, Python, MySQL."
    },
    {
      title: "Efood Delivery Service Website",
      description: "A modern platform for Efood, an online food delivery service. The website allows users to explore menus from various restaurants and place orders seamlessly.",
      stack: "React, Redux Toolkit, Tailwind CSS, Node.js."
    },
    {
      title: "Navoi Travel Tourism Website",
      description: "A tourism-focused website designed to promote the Navoi region. It provides detailed information about attractions, accommodations, and other tourism services in the area.",
      stack: "React, Tailwind CSS, Next.js."
    },
    {
      title: "Kamilla Hotel Website",
      description: "A website created for Kamilla Hotel to showcase their rooms, services, and pricing. It also features an online booking system for customers.",
      stack: "React, Tailwind CSS, Python."
    },
    {
      title: "Master Kebab Restaurant Website",
      description: "A fully responsive website for Master Kebab restaurant, allowing users to browse the menu, order food for delivery, and learn more about the restaurant.",
      stack: "React, Tailwind CSS, Node.js, MongoDB."
    }
  ];

  return (
    <div className='w-full flex flex-col gap-y-10 bg-blue-50 items-center justify-center py-10 px-4 md:px-10 text-center'>
      <h2 className="text-4xl md:text-6xl font-bold">
        My <span className="text-blue-600">Works</span>
      </h2>

      {projects.map((project, index) => (
        <div key={index} className='shadow-2xl rounded-2xl text-left p-8 max-w-4xl bg-white'>
          <div data-aos="flip-up" className={`img${index + 1} w-full shadow-2xl rounded-lg h-[60vh] md:h-[80vh]`}></div>
          <p className='text-lg text-gray-700'>
            <strong>{project.title}</strong>
            <br/><br/>
            {project.description}
            <br/><br/>
            <strong>Stack:</strong>
            <br/>{project.stack}
          </p>
          <button className='bg-blue-600 text-white px-8 py-4 mt-2 rounded-lg'>Demo</button>
        </div>
      ))}
    </div>
  )
}

export default Myworks
