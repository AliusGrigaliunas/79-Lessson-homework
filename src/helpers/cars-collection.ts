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
    constructor(private carProps: CarsCollectionProps) { }

    private joinCar(car:Car): CarJoined {
        const carModelId = this.carProps.model
        .filter((carModel) => car.modelId === carModel.id)
        .map((modelId) => modelId.brandId);

        const carBrandTittle = this.carProps.brand
        .filter((brand) => carModelId.includes(brand.id))
        .map((brandTitle) => brandTitle.title);

        const carModelTitle = this.carProps.model
        .filter((carModel) => car.modelId === carModel.id)
        .map((modelId) => modelId.title);

        const carJoined = {
            id: car.id,
            price: car.price,
            year: car.year,
            brand: carBrandTittle.join(' '),
            model: carModelTitle.join(' '),
        };

        return carJoined;
    }

    public get allcars() {
        return this.carProps.car.map(this.joinCar.bind(this));
    }
}

export default CarsCollection;
