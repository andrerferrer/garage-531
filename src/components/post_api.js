import { insertInTheDOM } from './auxiliary_functions/insert_in_the_dom';

// 2. Create a car in the Garage

const createCarData = () => {
  const brand = document.querySelector('#brand').value;
  const model = document.querySelector('#model').value;
  const owner = document.querySelector('#owner').value;
  const plate = document.querySelector('#plate').value;

  const carData = {
    "brand": brand,
    "model": model,
    "owner": owner,
    "plate": plate
  };

  const carDataAsString = JSON.stringify(carData);
  return carDataAsString;
};

const postApi = (url) => {
  // when the user submits after filling up the form
  const form = document.getElementById("new-car");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const carData = createCarData();

    // // make a post request to the API (creates a car in the garage)
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: carData
    }).then(res => res.json())
      .then((car) => {
        // insert the car to the DOM
        insertInTheDOM(car);
      });
  });
};

export { postApi };
