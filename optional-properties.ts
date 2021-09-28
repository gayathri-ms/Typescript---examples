function printCar(car: {
    make: string,
    model: string,
    year: number,
    chargeVoltage?: number //it's optional to be included
}) {
    let str = `${car.make} ${car.model} ${car.year}`;
    console.log(str);
    if(typeof car.chargeVoltage !== "undefined") {
        //! THIS IS TYPICALLY CALLED TYPE-GUARD
        str += `${car.chargeVoltage.toFixed(2)}`;
    }
    console.log(str);
}

printCar({
    make: 'Honda',
    model: 'Accord',
    year: 2018,
    // chargeVoltage: 240
})