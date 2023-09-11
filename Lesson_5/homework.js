const object ={
    brand: "Samsung Galaxy",
    model: "Watch 5",
    year: 2023,
    type: "Smart watch",
    rout_workout: false,
    screen:["Super AMOLED","panel resolution 450x450","screen size 1.4", "touch panel"],
    specification: [
        {
            size: "45 mm",
            display: 45.2,
            material: "Titanium",
            sleep_tracking: "yes",
        },
        {
            size: "40 mm",
            display: 33,
            material: "Armor Aluminium",
            sleep_tracking: "yes",
        },
        {
            size: "44 mm",
            display: 30.3,
            material: "Armor Aluminium",
            sleep_tracking: "no",
        },
    ]
};


console.log(object);
console.log(object.brand)
console.log(object.rout_workout);
console.log(object.screen[2]);
console.log(object.specification[0]);
console.log(object.specification[0].material);
console.log(object.specification[2].display);