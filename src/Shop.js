import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Shop() {
  useEffect(() => {
    fetchData();
  }, []);

  const [items, setItems] = useState([])

  const fetchData = async () => {
    const data = await fetch("https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get");
    // const data = await fetch("http://starlord.hackerearth.com/TopRamen");
    const items = await data.json();
    console.log(items.items);
    setItems(items.items);
  }

  return (
    <div>
      {items.map(item => (
        <h1 key={item.itemId}>
          <Link to={`shop/{item.itemId}`}>{item.name} </Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
