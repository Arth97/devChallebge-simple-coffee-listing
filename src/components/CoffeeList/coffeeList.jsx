import React from 'react';
import './coffeeList.css';

import { useEffect, useState } from 'react';
import CoffeeCard from './CoffeeCard/coffeeCard.jsx';

const CoffeeList = ({ showOnlyAvailableCoffee }) => {

  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setCoffeeData(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const filteredData = showOnlyAvailableCoffee 
		? coffeeData.filter(coffee => coffee.available)
    : coffeeData 

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
      {
        filteredData.map(coffee => (
          <CoffeeCard coffee={coffee} key={coffee.id} />
        ))
      }
    </div>
  );
};

export default CoffeeList;