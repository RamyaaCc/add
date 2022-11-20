// using this
class restaurant {
    constructor(name, year, rating) {
      this.name = name;
      let Year = year;
      this.rating = rating;
    }
  }
  let theRestaurant = new restaurant("abc", 1986, "4/5");
  console.log(
    "This Restaurant " +
      theRestaurant.name +
      " is openend in the year " +
      theRestaurant.year +
      " (rating= " +
      theRestaurant.rating +
      ")"
  );
  
  static
  class restaurant {
    constructor(name) {
      this.name = name;
    }
    static hello(a) {
      return "Hello " + a.name;
    }
  }
  let theRestaurant = new restaurant("abc");
  document.getElementById("demo").innerHTML = restaurant.hello(theRestaurant);
  
  hoisting
  
  class restaurant {
    constructor(name) {
      this.restaurantName = name;
    }
  }
  
  let theRestaurant = new restaurant("abc");
  
  getters and setter
  
  class restaurant {
    constructor(name) {
      this._resName = name;
    }
  
    get rname() {
      return this._resName;
    }
    set rname(a) {
      this._resName = a;
      console.log(_resName);
    }
  }
  let restaurantName = new restaurant("abcd");
  document.getElementById("demo").innerHTML = restaurantName.rname;
  
  // // inheritance
  class restaurant {
    constructor(name) {
      this.name = name;
    }
    present() {
      console.log("I am running an " + this.name + "restaurant");
    }
  }
  class resRate extends restaurant {
    constructor(name, rating) {
      super(name);
      this.rate = rating;
    }
  }
  
  let theRestaurant = new restaurant("abcd", "4 / 5");
  
  //private
  class restaurant {
    constructor(name, year, rating) {
      let resname = name;
      this.year = year;
      this.rating = rating;
    }
  }
  let theRestaurant = new restaurant("abc", 1986, "4/5");
  console.log(theRestaurant);
  var wkmap = new WeakMap();
  var a = { x: undefined, y: 10 };
  wkmap.set(a, 10);
  console.log(wkmap.get(a));
  console.log(wkmap.has(a));
  // a = null;
  wkmap.delete(a);
  // wkmap.forEach(function (key, val) {
  //   console.log(key, val);
  // });
  console.log(wkmap.get(a)); //garbage collector
  