import React, { useState, useEffect } from 'react';
const url="https://course-api.com/react-tours-project"

const Cards=() => {

  const [data,setData]=useState([]);

  const getData=async () => {
    const response=await fetch(url);
    const data=await response.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  },[]);

  return (
    <>
      <h3>data</h3>
      <ul className="users">
        {data.map((place) => {
          const {id,name,info,image,price}=place;
          return (
            <li key={id}>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <h5>{price}</h5>
              </div>
              <article>
                {info}
              </article>
              <button className='border-2 border-rose-600 text-rose-600'>Not Intrested</button>
            </li>
          );
        })}
      </ul>
    </>
  )
}

export default Cards;