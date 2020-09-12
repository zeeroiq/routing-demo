import React, { useEffect, useState } from 'react';
import './App.css';

function ItemDetail({ match }) {

  useEffect(() => {
    fetchedItem();
    console.log(match);
  }, []);
  const [items, setItems] = useState({
    images: {}
  });

  const fetchedItem = async () => {
    const fetchItem = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${match.param.id}`);
    const item = await fetchItem.json();
    setItems(item);
    console.log(item);
  };


  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.transparent} alt="" />
    </div>
  );
}

export default ItemDetail;
