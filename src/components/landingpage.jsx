const LandingPageComponent = () => {
    return (
      <section className="py-1 bg-white text-center lg:mt-[120px]">
        <h2 className="text-3xl font-semibold text-orange-500 mb-8">
          Explore My Expertise
        </h2>
        <div className=" flex justify-center ml-[7%] md:ml-[3%] lg:ml-[2%] 2xl:ml-[2%]">
        <div className="container mx-auto flex-1 grid md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-[2.5rem] px-4 ">
          {options.map((option, index) => (
            <div
              key={index}
              className={`${option.color} shadow-lg rounded-2xl p-10 border w-[90%] border-gray-200 relative overflow-hidden  transition-transform transform hover:scale-105`}
            >
              <h3 className="text-[17px] md:text-[20px] lg:text-[23px] font-bold mb-2">{option.title}</h3>
              <p className="text-gray-600 text-md md:text-lg ">{option.description}</p>
              
            </div>
          ))}
        </div>
        </div>
      </section>
    );
  };
  
  const options  = [
    {
      title: "React & Node.js Expertise",
      color: "bg-[#e6f7ff]",
      description:
        "Proficient in building scalable and high-performance web applications using React for the frontend and Node.js for the backend. Experienced in developing dynamic UIs and handling API interactions efficiently."
    },
    {
      title: "Database Proficiency (MySQL & MongoDB)",
      color: "bg-[#fef4e6]",
      description:
        "Skilled in both relational (MySQL) and NoSQL (MongoDB) databases. Capable of designing optimized schemas, managing complex queries, and ensuring data integrity for various application needs."
    },
    {
      title: "Full-Stack Application Development",
      color: "bg-[#e6fbe6]",
      description:
        "Capable of developing complete web solutions, from frontend UI/UX to backend logic and database management. Expertise in integrating third-party APIs, authentication, and real-time functionalities."
    },
    {
      title: "MERN Stack Specialization",
      color: "bg-[#ffebee]",
      description:
        "Specialized in the MERN stack (MongoDB, Express.js, React, Node.js) to build modern and efficient web applications. Experienced in state management, RESTful APIs, and scalable architectures."
    },
    {
      title: "Performance Optimization & Security",
      color: "bg-[#f1fbe6]",
      description:
        "Experienced in optimizing web applications for performance, scalability, and security. Familiar with caching strategies, load balancing, and securing applications against common vulnerabilities."
    }
  ];
  
  
  export default LandingPageComponent ;
 