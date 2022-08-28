import CarsCollection from '../helpers/cars-collection';
import cars from '../data/cars';
import Models from '../data/models';
import brands from '../data/brands';
import Table from './table';
import stringifyProps from '../helpers/stringify-props';
import SelectField, { SelectProps } from './SelectField';

class App {
  private htmlElement: HTMLElement;

  carsCollection: CarsCollection;

  private carsTable: Table<[string, string, string, string, string]>;

  private SelectField: SelectProps[];

  constructor(selector: string) {
    const foundElement = document.querySelector<HTMLElement>(selector);

    if (foundElement === null) {
      throw new Error(`Nerastas elementas su selektoriumi '${selector}'`);
}

    this.htmlElement = foundElement;
    this.carsCollection = new CarsCollection({ car: cars, model: Models, brand: brands });

    const stringifiedCarsCollection = this.carsCollection.allcars.map(stringifyProps);
    const rowsData = stringifiedCarsCollection.map<[string, string, string, string, string]>(({
      id,
      price,
      year,
      brand,
      model,
    }) => [id, `${price}\u20AC`, `${year}m.`, brand, model]);

    this.carsTable = new Table({
      title: 'Visos mašinos pardavimui',
      columns: ['Kodas', 'Kaina', 'Metai', 'Automobilio gamintojas', 'Modelis'],
      rowsData,
  });
    this.SelectField = new SelectField([{ title: 'blah', information: 'blah' }]);
  }

  initialize = (): void => {
    const container = document.createElement('div');
    container.className = 'm-5';
    container.append(this.SelectField.htmlElement, this.carsTable.htmlElement);
    this.htmlElement.append(container);
  };
}

export default App;
