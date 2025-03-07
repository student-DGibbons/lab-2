// Getting the output element so that text content can be output
const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');
const output3 = document.getElementById('output3');



/* Constructor function for creating the product */
function Car(title, company, year, ageRating, brand, collectionNumber, website, color, country, model, material, speed){
    this.title = title;
    this.company = company;
    this.year = year;
    this.ageRating = ageRating;
    this.brand = brand;
    this.collectionNumber = collectionNumber;
    this.website = website;
    this.color = color;
    this.country = country;
    this.model = model; 
    this.material = material;
    this.speed = speed;

    this.describe = function() {
        let description = `The ${this.title} was produced by ${this.company} in ${this.year} in ${this.country} for ${this.brand}. It has an age rating of ${this.ageRating}, and more information can be
        found on ${this.website}. The collection number is ${this.collectionNumber}, it has a ${this.color} color, it is a ${this.model} model, it is made of ${this.material}, and has a speed of ${this.speed}.`;
        return description;
    }
}


/* Instantiating 3 instances of 3 different cars using the constructor function*/
const car1 = new Car("Subaru WRX STI", "Mattel", 2021, "3+", "Hot Wheels", 68, "shop.mattel.com", "yellow", "Malaysia", "sedan", "plastic", 2);
const car2 = new Car("Volvo XC40 Recharge", "Mattel", 2021, "3+", "Hot Wheels", 14, "shop.mattel.com", "blue", "Malaysia", "SUV", "plastic", 2);
const car3 = new Car("Rally Speciale", "Mattel", 2021, "3+", "Hot Wheels", 179, "shop.mattel.com", "blue", "Malaysia", "racecar", "plastic", 2);


// Outputting text content using the describe function for each car
output1.textContent = car1.describe();
output2.textContent = car2.describe();
output3.textContent = car3.describe();

