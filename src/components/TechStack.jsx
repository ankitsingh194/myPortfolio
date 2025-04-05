import React from 'react';

const MernStackInfo = () => {
  const cards = [
    {
      title: 'MongoDB',
      description: 'A NoSQL database that stores data in flexible, JSON-like documents. It is widely used for its scalability and ease of use in modern applications.',
      bgColor: 'bg-green-100',
      icon: '🍃'
    },
    {
      title: 'MySQL',
      description: 'A popular relational database management system (RDBMS) used for structured data storage and complex queries.',
      bgColor: 'bg-yellow-100',
      icon: '🐬'
    },
    {
      title: 'Express.js',
      description: 'A back-end web application framework for Node.js. It provides a robust set of features for building web and mobile applications.',
      bgColor: 'bg-gray-100',
      icon: '🚀'
    },
    {
      title: 'React.js',
      description: 'A JavaScript library for building user interfaces. It allows developers to create large web applications that can update data without reloading the page.',
      bgColor: 'bg-blue-100',
      icon: '⚛️'
    },
    {
      title: 'Node.js',
      description: 'A runtime environment that executes JavaScript code server-side. It is used to build scalable and efficient network applications.',
      bgColor: 'bg-green-200',
      icon: '🌿'
    }
  ];

  return (
    <div className="  lg:ml-[30px]  flex flex-col items-center justify-center bg-white p-1 mt-[10px] ">
        <h2 className="text-3xl font-bold text-orange-500 mb-8 mx-[40px] mt-[20px] lg:ml-0 ">Learn About the Tech Stack </h2>
        <div className=' w-[80%] ml-[-10px] lg:ml-[-40px]'>
      <div className={`grid gap-11   ${cards.length < 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 justify-center' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3'}`}>
        {cards.map((card, index) => (
          <div key={index} className={`${card.bgColor} p-10 rounded-lg shadow-xl transition-transform transform hover:scale-105 text-gray-800`}> 
            <h3 className=" text-[17px] md:text-2xl  font-semibold mb-6 flex items-center ">{card.icon} {card.title}</h3>
            <p className=" text-md md:text-lg font-semibold">{card.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default MernStackInfo;
