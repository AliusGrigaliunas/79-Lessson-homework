import CarsCollection from '../helpers/cars-collection';
import cars from '../data/cars';
import Models from '../data/models';
import brands from '../data/brands';
import Table from './table';

class App {
  private htmlElement: HTMLElement;

  carsCollection: CarsCollection;

  constructor(selector: string) {
    const foundElement = document.querySelector<HTMLElement>(selector);

    if (foundElement === null) {
      throw new Error(`Nerastas elementas su selektoriumi '${selector}'`);
}

    this.htmlElement = foundElement;
    this.carsCollection = new CarsCollection({ car: cars, model: Models, brand: brands });
  }

  initialize = (): void => {
    const container = document.createElement('div');
    container.className = 'container my-5';
    container.innerHTML = `
    <pre>
      ${JSON.stringify(this.carsCollection.allcars, null, 2)}
    </pre>
    `;

    this.htmlElement.append(container);
  };
}

export default App;
