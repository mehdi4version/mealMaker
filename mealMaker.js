let menu  = {
  _courses :{
    appetizers : [],
    mains: [],
    desserts :   [],
  },

  //setting getter method to access the properties of the object courses.  This help us to access the courses without using '_'. 

  get appetizers(){
    return this._courses.appetizers;
  },
  get mains(){
    return this._courses.mains;
  },
  get desserts(){
    return this._courses.desserts;
  },  
  set appetizers(appetizerIn){
    return this._courses.appetizers = appetizerIn
  },
  set mains(mainIn){
    return this._courses.mains = mainIn
  },
  set deserts(desertsIn){
    return this._courses.desserts = desertsIn
  },

  get courses (){
    return {
      appetizers : this.appetizers, // this uses the appetizers' getter method 
      mains: this.mains,
      desserts: this.desserts,
    }
  },
  addDishToCourse(courseName,dishName,dishPrice){
    const dish =  {
      name: dishName,
      price: dishPrice
    }
    return this.courses[courseName].push(dish)
  },
  getRandomDishFromCourse(courseName){
    const dishes = this.courses[courseName];
    let i = Math.floor(Math.random()*dishes.length);
    return dishes[i];
  },
  getRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price+main.price+dessert.price

    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The total price is
    : ${totalPrice}`
  }

}


menu.addDishToCourse('appetizers',' Onion soup', 5);
menu.addDishToCourse('appetizers','Egg rolls', 3);
menu.addDishToCourse('appetizers','Fried wonton', 4);

menu.addDishToCourse('mains','Sweet and sour chicken', 8);
menu.addDishToCourse('mains','Orange chicken', 3);
menu.addDishToCourse('mains','Vegi delight', 4);

menu.addDishToCourse('desserts','Almond cookies', 2);
menu.addDishToCourse('desserts','Rice pudding', 3);
menu.addDishToCourse('desserts','Banana fritters', 7);

let meal = menu.getRandomMeal();
console.log(meal)
