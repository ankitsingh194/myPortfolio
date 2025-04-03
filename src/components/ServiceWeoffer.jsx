const ServiceOfferings = () => {
    return (
      <section className="py-16  bg-transparent text-center">
        <h2 className="text-[35px] font-bold text-orange-500 mb-4">Service offerings</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg font-semibold">
          Get the full spectrum of software development services all in one place, with flexible engagement models to suit your every need.
        </p>
        <div className=" flex justify-center ml-[7%] md:ml-[2%] lg:ml-[2%] 2xl:ml-[2%]">
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-[2.5rem] px-4  ">
          {services.map((service, index) => (
            <div
              key={index}
              className={` ${service.color} shadow-lg rounded-2xl p-6 border w-[90%] border-gray-200 relative overflow-hidden text-left  transition-transform transform hover:scale-105`}
            >
              <h3 className="text-[23px] font-bold mb-4 flex items-center hover:text-orange-500">
                {service.title}
                <span className="ml-auto text-2xl">{service.icon}</span>
              </h3>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600 hover:text-orange-500">
                    <span className="text-black  mr-2 text-lg ">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        </div>
      
      </section>
    );
  };
  
  const services = [
    {
      title: "UI/UX Design Services",
      icon: "🎨",
      color:"bg-[#FDDEDE]",
      items: [
        "User Research and Analysis",
        "Wireframing and Prototyping",
        "Visual Design",
        "Interaction Design",
        "Design System Development"
      ]
    },
    {
      title: "Custom Website Development",
      icon: "💻",
      color:"bg-[#D0FCBE]",
      items: [
        "Responsive Web ",
        "E-commerce Website ",
        "CMS Development",
        "Landing Page ",
        "SEO Optimization",
        "Performance Optimization"
      ]
    },
    {
      title: "Custom Dashboard Service",
      icon: "📊",
      color:"bg-[#BEFAFC]",
      items: [
        "Data Visualization",
        "Interactive Dashboard Creation",
        "Admin Panel Development",
        "Custom Reports and Analytics",
        "API Integration",
        "Real-time Monitoring"
      ]
    }
  ];
  
  
  export default ServiceOfferings;
  