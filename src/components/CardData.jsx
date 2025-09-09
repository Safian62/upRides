import { assets } from "../assets/assets"

const Data=[
    {
        img: assets.Upride,
        name:'Upride Ads',
        description:'promote your buisness to thousanda of Uprides users in rel time. Boost visibilities, attract more customers, and track angagement effortlessly'
    },
        {
        img: assets.UprideBuisness,
        name:'Upride Buisness',
        description:'promote your buisness to thousanda of Uprides users in rel time. Boost visibilities, attract more customers, and track angagement effortlessly'
    },
        {
        img: assets.Service,
        name:'Upride Seervice',
        description:'promote your buisness to thousanda of Uprides users in rel time. Boost visibilities, attract more customers, and track angagement effortlessly'
    },
        {
        img: assets.H_Service,
        name:'Jump Start Service',
        description:'promote your buisness to thousanda of Uprides users in rel time. Boost visibilities, attract more customers, and track angagement effortlessly'
    },
        {
        img: assets.Logictic,
        name:'Upride Logistics',
        description:'promote your buisness to thousanda of Uprides users in rel time. Boost visibilities, attract more customers, and track angagement effortlessly'
    },

        {
        img: assets.Bold_Miles,
        name:'Upride BoldMiles',
        description:'promote your buisness to thousanda of Uprides users in rel time. Boost visibilities, attract more customers, and track angagement effortlessly'
    },
]

import React from 'react';

export const Card = ({ name, img, description }) => {
  return (
    <div className="border rounded-xl shadow-md p-4 w-full max-w-sm">
      <img src={img} alt={name} className="w-[100px] h-20 object-cover rounded-md" />
      <h1 className="text-xl font-bold mt-2">{name}</h1>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};




export default Data;



