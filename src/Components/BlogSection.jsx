import React from "react";
import Daco from '../assets/images/Daco.png'

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
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Blog</h2>
        <div className="grid md:grid-cols-3 gap-6 px-4 md:px-0">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <img src={ Daco } alt={blog.title} className="w-full" />
              <div className="p-5">
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <span className="text-pink-500">✍ {blog.author}</span> | 📅 {blog.date}
                </p>
                <h3 className="text-lg font-bold text-gray-900 my-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm">{blog.description}</p>
                <a href="#" className="text-pink-500 font-medium hover:underline mt-3 inline-block">
                  Read More
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
