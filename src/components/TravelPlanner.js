import React from 'react'
import Place from './Place'
const destinations = [
    {
      name: "Manali",
      description: "Manali is a picturesque hill station located in the Indian state of Himachal Pradesh. It is known for its stunning landscapes, adventure activities, and vibrant culture.",
      image: "Manali",
      rating : 8.9
    },
    {
      name: "Ladakh",
      description: "Ladakh is a region in the northernmost part of India, renowned for its rugged terrain, high-altitude desert, and rich Tibetan culture. It's a paradise for adventure enthusiasts.",
      image: "ladakh",
      rating : 9.1
    },
    {
      name: "Coorg",
      description: "Coorg, also known as Kodagu, is a beautiful hill station in Karnataka, India. It's famous for its lush greenery, coffee plantations, and serene natural beauty.",
      image: "coorg",
      rating : 9
    },
    {
      name: "Taj Mahal",
      description: "The Taj Mahal is an iconic white marble mausoleum located in Agra, Uttar Pradesh, India. It is a UNESCO World Heritage Site and a symbol of eternal love and architectural beauty.",
      image: "tajmahal",
      rating : 8.4
    },
    {
      name: "Goa",
      description: "Goa is a popular beach destination on the western coast of India. It's known for its vibrant nightlife, beautiful beaches, and a mix of Indian and Portuguese culture.",
      image: "goa",
      rating : 8
    }
  ];
export default function TravelPlanner() {
  return (
    <>
       <div className="container">
        {
            destinations.map((e)=>{
            return <Place rating={e.rating} destination_name={e.name} img={e.image} desc={e.description}/>
            })
        }
    </div>
    </>
  )
}
