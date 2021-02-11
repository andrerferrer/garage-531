const buildHTML = (car) => {
  // extract the car data (dig the json)
  const brand = car.brand;
  const owner = car.owner;
  const plate = car.plate;
  const model = car.model;

  return `<div class="car">
    <div class="car-image">
      <img src="http://loremflickr.com/280/280/${brand} ${model}" />
    </div>
    <div class="car-info">
      <h4>${brand} ${model}</h4>
      <p><strong>Owner:</strong> ${owner}</p>
      <p><strong>Plate:</strong> ${plate}</p>
    </div>
  </div>`
};

const insertInTheDOM = (car) => {

  const carHTML = buildHTML(car);

  // select the element that we want to insert into
  const list = document.querySelector('div.cars-list');
  // actually insert into this element 
  list.insertAdjacentHTML('beforeend', carHTML);
};

export { insertInTheDOM };