// Define main variables
const url = 'https://wagon-garage-api.herokuapp.com/djandregarage/cars'

// Importing functions
import { getApi } from './components/get_api';
import { postApi } from './components/post_api';

// call the functions
getApi(url);
postApi(url);
