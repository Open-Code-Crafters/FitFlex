import React from "react";
import Slider from "react-slick";
import SuccessStoryCard from "./cart";

const SuccessStories = () => {
  const stories = [
    {
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=1480&q=80",
      name: "Tania Andrew",
      role: "Designer",
      company: "Google",
      testimonial:
        "I found a solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And it's really affordable, very humble guys!",
    },
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "John Doe",
      role: "Developer",
      company: "Facebook",
      testimonial:
        "Creative Tim has excellent design tools. The quality of templates is just fantastic, and they are easy to work with. Totally recommend it!",
    },
    {
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=1480&q=80",
      name: "Tania Andrew",
      role: "Designer",
      company: "Google",
      testimonial:
        "I found a solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And it's really affordable, very humble guys!",
    },
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "John Doe",
      role: "Developer",
      company: "Facebook",
      testimonial:
        "Creative Tim has excellent design tools. The quality of templates is just fantastic, and they are easy to work with. Totally recommend it!",
    },
    {
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=1480&q=80",
      name: "Tania Andrew",
      role: "Designer",
      company: "Google",
      testimonial:
        "I found a solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And it's really affordable, very humble guys!",
    },
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "John Doe",
      role: "Developer",
      company: "Facebook",
      testimonial:
        "Creative Tim has excellent design tools. The quality of templates is just fantastic, and they are easy to work with. Totally recommend it!",
    },
    // More stories here...
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" container mx-auto p-4 sm:p-6 lg:p-14 overflow-hidden">
      <h2 className="text-2xl font-bold text-center mb-12">Success Stories</h2>
      <Slider {...settings}>
        {stories.map((story, index) => (
          <div key={index} className="px-2"> {/* Add horizontal padding here */}
            <SuccessStoryCard
              image={story.image}
              name={story.name}
              role={story.role}
              company={story.company}
              testimonial={story.testimonial}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SuccessStories;
