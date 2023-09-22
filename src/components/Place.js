import React from 'react'

export default function Place(props) {
  return (
    <>
      <div className='card'>
        <div className="card-image">
            <img src={"https://source.unsplash.com/1600x1000/?"+props.img} alt=""/>
            <div className={props.rating > 8.9 ? "bestPlace" : "d-none"}>bestPlace</div>
        </div>
        <h3>{props.destination_name}</h3>
        <p>{props.desc}</p>
      </div>
    </>
  )
}
