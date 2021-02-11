import { insertInTheDOM } from './auxiliary_functions/insert_in_the_dom';

// 1. Read all cars in the Garage
// when the page loads
// we want to show the cars

const getApi = (url) => {
  // we fetch the api to get the data
  fetch(url)
    .then(res => res.json())
    .then((cars) => {
      // we display this data first in the console to see if it works
      console.log(cars);
      
      cars.forEach((car) => {
        insertInTheDOM(car);
      });
    })
};

export { getApi };
