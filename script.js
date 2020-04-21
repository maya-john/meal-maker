const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    set appetizers(appetizerIn) {
        this._courses.appetizers = appetizerIn;
    },
    get mains() {
        return this._courses.mains;
    },
    set mains(mainIn) {
        this._courses.mains = mainIn;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set desserts(dessertIn) {
        this._courses.desserts = dessertIn;
    },
    get courses() {
        return {
            appetizer: this.appetizers,
            main: this.mains,
            dessert: this.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        }
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        return dishes[Math.floor(Math.random() * dishes.length)];
    },
    generateRandomMeal() {
        const appetizers = this.getRandomDishFromCourse('appetizers');
        const mains = this.getRandomDishFromCourse('mains');
        const desserts = this.getRandomDishFromCourse('desserts');
        const mealPrice = appetizers.price + mains.price + desserts.price;
        return `Your meal will consist of the ${appetizers.name}, ${mains.name}, and the ${desserts.name}, and come to a total of \$${mealPrice}`;
    }
}

menu.addDishToCourse('appetizers', 'calamari', 6);
menu.addDishToCourse('appetizers', 'brisket nuggets', 7);
menu.addDishToCourse('appetizers', 'jackfruit salad', 5);
menu.addDishToCourse('appetizers', 'sliders', 6);
menu.addDishToCourse('mains', 'beesechurger', 9);
menu.addDishToCourse('mains', 'ramen', 11);
menu.addDishToCourse('mains', 'grilled cheese', 8);
menu.addDishToCourse('mains', 'bacon mac and cheese', 13);
menu.addDishToCourse('desserts', 'brownies', 7);
menu.addDishToCourse('desserts', 'apple pie', 6);
menu.addDishToCourse('desserts', 'ice cream', 5);
menu.addDishToCourse('desserts', 'fruit salad', 4);

console.log(menu.generateRandomMeal());
