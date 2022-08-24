import Brand from '../types/brand';
import Car from '../types/car';
import Model from '../types/model';
import CarJoined from '../types/car-joined';

type CarsCollectionProps = {
    car: Car[],
    model:Model[],
    brand: Brand[],
};

class CarsCollection {
    protected car: Car[];

    protected model:Model[];

    protected brand: Brand[];

    constructor({ car, model, brand }: CarsCollectionProps) {
        this.car = car;
        this.model = model;
        this.brand = brand;
    }

    private joinCar(car:Car): CarJoined {
        const carsBrandId = this.model
        .filter((modelId) => modelId.id === car.modelId)
        .map((model) => model.brandId);

        const carBrandName = this.model
        .filter((modelId) => modelId.id === car.modelId)
        .map((model) => model.title);

        const carsModelTittle = this.brand
        .filter((carsBrand) => carsBrandId.includes(carsBrand.id))
        .map((brand) => brand.title);

        const carJoined = {
            ...car,
            brand: carBrandName.join(' '),
            model: carsModelTittle.join(' '),
        };

        return carJoined;
    }

    public get allcars() {
        return this.car.map(this.joinCar.bind(this));
    }
}

export default CarsCollection;
