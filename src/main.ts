import App from './components/app';
import cars from './data/cars';
import Models from './data/models';
import brands from './data/brands';
import CarsCollection from './helpers/cars-collection';

const app = new App('#root');
app.initialize();

const test = new CarsCollection({ car: cars, model: Models, brand: brands });

console.table(test.allcars);
