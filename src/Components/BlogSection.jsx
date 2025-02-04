import React from "react";
import Daco from '../assets/images/Daco.png';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      author: "Saber Ali",
      date: "21 August, 2020",
      title: "Top essential Trends in 2021",
      description:
        "More off this less hello samlande lied much over tightly circa horse taped mightly",
      
    },
    {
      id: 2,
      author: "Surfauxion",
      date: "21 August, 2020",
      title: "Top essential trends in 2021",
      description:
        "More off this less hello samlande lied much over tightly circa horse taped mightly",
    
    },
    {
      id: 3,
      author: "Saber Ali",
      date: "21 August, 2020",
      title: "Top essential Trends in 2021",
      description:
        "More off this less hello samlande lied much over tightly circa horse taped mightly",
     
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Latest Blog</h2>
        
        <div className="grid  md:grid-cols-3 gap-6 px-4 md:px-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100 hover:border-pink-100 flex flex-col"
            >
              {/* Image Container with Fixed Height */}
              <div className="w-full h-65">
                <img 
                  src={Daco} 
                  alt={blog.title} 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Blog Content */}
              <div className="p-6 flex-grow flex flex-col">
                {/* Author and Date */}
                <div className="flex items-baseline gap-2 text-sm text-gray-500 mb-3">
                  <span className="text-pink-500">✍ {blog.author}</span>
                  <span className="text-gray-300">|</span>
                  <span>📅 {blog.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {blog.description}
                </p>

                {/* Read More Link */}
                <a 
                  href="#" 
                  className="text-pink-500 font-medium hover:text-pink-600 transition-colors inline-flex items-center gap-1"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
