interface: ;
var oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};
var printVehicle = function (vehicle) {
    console.log("Name: " + vehicle.name + ", Year: " + vehicle.year + ", Broken: " + vehicle.broken);
};
printVehicle(oldCivic);
