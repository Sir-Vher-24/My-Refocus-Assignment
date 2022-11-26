const restaurant = {
    'restaurantName' : "Mael Lutong Bahay",
    'restaurantDishes' : [
        {'dishName' : 'Sinigang' , 'dishPrice' : 200 , 'dishIngredients' : 'Pork, Kangkong, Gabi, Labanos, Tamarin'},
        {'dishName' : 'Lechon' , 'dishPrice' : 500 , 'dishIngredients' : 'Pork, Tanglad, Special Sauce'},
        {'dishName' : 'Adobo' , 'dishPrice' : 300 , 'dishIngredients' : 'Pork, Patatas'},
        ],
    'displayRestaurantName' : function (){
        console.log(this.restaurantName)
    },
    'displayMenu' : function (){
            for (Menu of this.restaurantDishes){
                console.log(Menu.dishName + ', ₱' + Menu.dishPrice)
                console.log('Contains ' + Menu.dishIngredients);
            }
    }
}
restaurant.displayRestaurantName();
restaurant.displayMenu();