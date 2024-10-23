
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
  ];

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

      <h1 data-aos="zoom-in">
        Success Stories
      </h1>
      <div style={{ position: 'relative', marginTop: '120px', width: '100%', height: '550px', overflow: 'hidden' }} data-aos="fade-up">
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
