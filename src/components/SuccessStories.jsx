
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


// Import customer images
import customer1 from "../assets/img/customer-1.jpg";
import customer2 from "../assets/img/customer-2.jpg";
import customer3 from "../assets/img/customer-3.jpg";
import customer4 from "../assets/img/customer-4.jpg";
import customer5 from "../assets/img/customer-5.jpg";
import customer6 from "../assets/img/customer-6.jpg";
import customer7 from "../assets/img/ben.jpg";
import customer8 from "../assets/img/hannah.jpg";
import customer9 from "../assets/img/steve.jpg";


import { useEffect, useState } from 'react';
import '../styles/SuccessStories.css'

const SuccessStories = () => {
  const [active, setActive] = useState(3);
  const items = [
    {
      image: customer5,
      name: "- Kevin Martinez",
      story: "The flexibility FitFlex offers is amazing. I can work out at my own pace, and it's still challenging and rewarding.",
      rating: "★★★★",
    },
    {
      image: customer9,
      name: "John Doe",
      story:
        "Joining FitFlex changed my life! I lost 20 pounds and gained confidence.",
      rating: "★★★★★",
    },
    {
      image: customer1,
      name: "Jane Smith",
      story:
        "The variety of workouts kept me motivated and helped me achieve my fitness goals.",
      rating: "★★★★",
    },
    {
      image: customer4,
      name: "Mike Johnson",
      story:
        "FitFlex's personalized plans are fantastic! I've never felt stronger.",
      rating: "★★★★★"
    },
    {
      image: customer8,
      name: "Sara Miller",
      story:
        "FitFlex helped me get back in shape after having my second baby. The workouts are fun and flexible with my schedule.",
      rating: "★★★★"
    },
    {
      image: customer2,
      name: "David Brown",
      story:
        "I've tried many fitness programs, but FitFlex is the one that stuck. The trainers are motivating, and the results speak for themselves.",
      rating: "★★★★★"
    },
    {
      image: customer3,
      name: "Lisa Williams",
      story:
        "The variety of classes keeps me engaged and excited to work out every day. It's the best fitness decision I've ever made.",
      rating: "★★★★★"
    },
    {
      image: customer7,
      name: "James Anderson",
      story:
        "FitFlex made me love working out again. The balance between strength training and cardio is perfect for my fitness goals.",
      rating: "★★★★"
    },
    {
      image: customer6,
      name: "Rachel Thompson",
      story:
        "The FitFlex community has been a game changer. The accountability and support have helped me stick to my routine.",
      rating: "★★★★★"

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % items.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [items.length]);

  useEffect(() => {
    loadShow();
  }, [active]);

  const loadShow = () => {
    const itemsElement = document.querySelectorAll('.sliderSuccess .item');
    itemsElement[active].style.transform = `none`;
    itemsElement[active].style.zIndex = 1;
    itemsElement[active].style.filter = 'none';
    itemsElement[active].style.opacity = 1;
    // Show after
    let stt = 0;
    for (let i = active + 1; i < itemsElement.length; i++) {
      stt++;
      itemsElement[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
      itemsElement[i].style.zIndex = 0;
      itemsElement[i].style.filter = 'blur(5px)';
      itemsElement[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for (let i = (active - 1); i >= 0; i--) {
      stt++;
      itemsElement[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
      itemsElement[i].style.zIndex = 0;
      itemsElement[i].style.filter = 'blur(5px)';
      itemsElement[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
  };

  return (
    <div className="sliderSuccess">

      <h1>
        Success Stories
      </h1>
      <div style={{ position: 'relative', marginTop: '120px', width: '100%', height: '550px', overflow: 'hidden' }}>
        {items.map((item, index) => (
          <div className="item" key={index} style={{
            position: 'absolute',
            width: '280px',
            height: '340px',
            textAlign: 'justify',
            borderRadius: '12px',
            padding: '20px',
            transition: '0.5s',
            left: 'calc(50% - 150px)',
            top: '0',
            marginBottom: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflow: 'hidden', // Ensures the image does not overflow
            color: 'white',
          }}>
            <img
              src={item.image}
              alt="User Avatar"
              className=' '
              style={{
                transition: 'transform 0.3s ease, filter 0.3s ease',
                border: '3px solid #d0e7b0' // Green border for the image
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.filter = 'brightness(1.1)'; // Brightness effect on hover
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.filter = 'brightness(1)'; // Reset brightness
              }}
            />
            <div className="stars ">{item.rating}</div>
            <p className=''>{item.story}</p>
            <h2 className=' '>{item.name}</h2>
          </div>


        ))}

        <button id="next" className='  ' onClick={() => setActive(prev => (prev + 1 < items.length ? prev + 1 : prev))}>{">>"}</button>
        <button id="prev" className=' ' onClick={() => setActive(prev => (prev - 1 >= 0 ? prev - 1 : prev))}> {"<<"}</button>
      </div>

    </div>
  );
};

export default SuccessStories;
