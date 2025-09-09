import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Card } from "./CardData";
import { FaArrowRight } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "What makes Uprides different from other ride–hailing services?",
    answer:
      "Uprides offers features such as advanced safety tools, driver incentives, and unique ride-sharing models tailored for communities.",
  },
  {
    question: "How does Uprides Share work?",
    answer:
      "Uprides Share allows riders going in the same direction to share a ride at a reduced cost, making it more eco-friendly and affordable.",
  },
  {
    question: "What is Parking SOS, and how does it help me?",
    answer:
      "Parking SOS is a feature that helps drivers locate emergency parking spots during high-traffic situations or car trouble.",
  },
  {
    question:
      "Does Uprides offer services for individuals with special needs?",
    answer:
      "Yes, Uprides provides accessibility features and specially trained drivers to accommodate passengers with special needs.",
  },
];
const rideOptions = {
  Share: {
    title: "Share",
    description:
      "Split costs and reduce your carbon footprint with Uprides Share. Save more by sharing fares with riders heading in your direction.",
    image: assets.Share,
    benefits: [
      "Comfortable eco-friendly ride-sharing",
      "Meet people while enjoying a fast journey",
      "Enjoy lower fares"
    ]
  },
  Regular: {
    title: "Regular",
    description:
      "Enjoy reliable and fast solo rides at affordable prices for everyday use.",
    image: assets.Regular,
    benefits: ["Fast solo rides", "Affordable prices", "Trusted drivers"]
  },
  Premium: {
    title: "Premium",
    description:
      "Travel in luxury and comfort with high-end vehicles and top-rated drivers.",
    image: assets.Premium,
    benefits: ["Luxury vehicles", "Professional drivers", "Top comfort"]
  },
  XL: {
    title: "XL",
    description:
      "Need more room? Uprides XL is perfect for groups, luggage, or extra comfort.",
    image: assets.Xl,
    benefits: ["More seating", "Extra luggage space", "Group-friendly"]
  }
};
const Three=[
    {
        image:assets.Dog,
        name:'Pet Friendly',
        description:'Travel without any awkward stares. Our pet friendly rides will welcome your pets with open doors. Whether it’s a vet visit, a park day, or a pet play date, we’ve got you covered. You and your pet will stay relaxed throughout the journey.',
    },
    {
        image:assets.Green,
        name:'Green',
        description:'Keep the planet clean and enjoy fast eco-friendly rides at affordable rates. You’ll reduce your carbon footprint whether it’s a quick trip or a long haul.',
    },
    {
        image:assets.Assists,
        name:'Assist',
        description:'Uprides Assist is an affordable and reliable ride option for individuals with reduced mobility. Our trained drivers go the extra mile to ensure a comfortable experience and make travel stress free.',
    }
]

export default function RideCard() {
const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [selectedRide, setSelectedRide] = useState("Share");
  const ride = rideOptions[selectedRide];

  return (
    <div className="mt-40" >
    <div > <h1 className="text-4xl w-[60%] my-10 mx-20">Your Adventure Starts Here! Choose The Ride That Fits Your Journey</h1></div>
    <div className="flex px-20 flex-col md:flex-row p-4 gap-6">
      <div className="flex-1">
       
        <div className="flex gap-4 mb-4">
          {Object.keys(rideOptions).map((option) => (
            <button
              key={option}
              onClick={() => setSelectedRide(option)}
              className={`px-4 py-2 rounded-full border ${
                selectedRide === option
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-2">{ride.title}</h2>
        <p className="text-gray-700 mb-4">{ride.description}</p>
        <ul className="list-none space-y-2">
          {ride.benefits.map((point, index) => (
            <li key={index} className="flex items-center gap-2 text-green-600">
              ✔ <span className="text-black">{point}</span>
            </li>
          ))}
        </ul>
      </div>

     
      <div className="flex">
        <img
          src={ride.image}
          alt={ride.title}
          className="rounded-xl w-full h-[400px] object-cover"
        />
      </div>
    </div>
   <div className="bg-gray-100 md:p-10">
     <div className=" md:flex justify-between">
        <h1 className="text-center md:w-[50%] mt-5 font-bold text-3xl max-w-[450px]">We Have Rides for Every Need. Tailored to You!</h1>
        <p className="text-center md:w-[50%] text-gray-500">Discover rides designed to match your lifestyle and values. Whether you're travelling with pets, prioritising sustainability, or seeking accessibility, We offer personalised options to make every journey seamless and enjoyable.</p>
    </div>
    <div className="md:flex w-full h-full mt-10 justify-around mb-10 gap-4  ">
  {Three.map((key) => {
    
    return (
      <Card
        key={key}
        name={key.name}
        description={key.description}
        img={key.image} />
    );
  })}
</div>

   </div>
    <div className="md:flex p-10 gap-56">
    <div className="w-[100%]">
        <h1 className="font-semibold text-2xl mb-5">Parking SOS: Contact vehicle owners blocking your way</h1>
        <div>
            <h1 className="text-xl font-semibold mb-3">Easily Identify and Resolve Vehicle Obstructions</h1>
            <p className="text-gray-500">With Parking SOS, vehicle details like the plate number, make and model, colour, and the owner's phone number are securely registered. This ensures you can quickly identify and contact the owner of any vehicle causing an obstruction.</p>
        </div>
        <div>
            <h2 className="text-xl font-semibold my-3">Send Alerts in Seconds</h2>
            <p className="text-gray-500">With just a few taps, you can quickly send an alert to the driver’s app or registered phone number. The notification provides essential details, including the location and a clear description of the situation. Whether it’s a blocked driveway or an urgent matter, this feature ensures swift communication and hassle-free resolution.</p>
        </div>
        <div>
            <h1 className="text-xl font-semibold my-3">No More Waiting Around</h1>
            <p className="text-gray-500">Parking SOS gets you moving in no time! When you send an alert, the registered owner is instantly notified and prompted to take quick action to resolve the issue. Say goodbye to unnecessary waiting.</p>
        </div>
    </div>
    <div>
        <p className="text-gray-500 mb-10 w-[90%]" >Imagine you just finished shopping at the mall and a car is obstructing your way. With parking SOS you have nothing to worry about. Trigger the SOS alert via the app and alert the driver to move their car.</p>
        <img className="w-[400px] h-[400px]" src={assets.Sos} alt="" />
    </div>
   </div>

<div>

<div className="md:flex justify-between gap-10 px-20 py-20">
  <div className="md:w-[55%] mt-20">
    <h1 className="text-2xl font-semibold ">Stranded with a dead battery? Don’t let a weak start stop your journey!</h1>
    <p className="text-gray-500 mt-10">Get the app and use the Jumpstart feature to connect with nearby drivers ready to help. With a few taps, request assistance and get back on the road in no time.</p>
  </div>
  <div><img src={assets.Sos} alt="" /></div>
</div>
<div className="md:w-full h-screen p-5 text-white">
  <img className="w-full h-full" src={assets.Honda} alt="" />
  <h1 className="ml-10 md:font-bold text-3xl mt-[-400px] ">More Than Just Rides</h1>
  <p className="ml-[40px] md:max-w-[500px]  mt-3 font-semibold">There’s more to rides. Uprides is not just about getting you from point A to point B. We offer a variety of services designed to enhance your daily life and solve real-world problems.</p>
  <button className=" ml-20 mt-4 text-xl font-bold">Read More <span><FaArrowRight className="inline" /></span></button>
</div>
  
  <div className="w-full max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">
        Frequently asked questions
      </h2>
      {faqData.map((item, index) => (
        <div
          key={index}
          className="border-b py-4 cursor-pointer"
          onClick={() => toggle(index)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">{item.question}</h3>
            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openIndex === index && (
            <p className="mt-2 text-gray-600">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
     
</div>
    </div>
  );
}
