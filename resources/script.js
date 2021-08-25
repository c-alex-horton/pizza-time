makePizza = () => {
    // Pizza Options
    let toppings = [
    'Pepperoni',
    'Sausage',
    'Mushroom',
    'Olive',
    'Sundried Tomato',
    'Salami',
    'Green Pepper',
    'Hamburger',
    'Pineapple',
    'Spinach',
    'Onion',
    'Chicken',
    'Canadian Bacon',
    'Bacon',
    'Parmesean'
    ]

    let sauces = [
     'Red',
     'BBQ',
     'Alfredo',
     'no',
     'Pesto',
     'Olive Oil'   
    ]

    let crusts = [
    'Thin',
    'Cheese',
    'Hand Tossed',
    'Pan'
    ]

    function rand(number) {
        return Math.floor(Math.random(number + 1));

    }

    let noOfToppings = rand(3);

    let mySauce = sauces[rand(sauces.length)];

    let myCrust = crusts[rand(crusts.legth)];

    let myTopping = toppings[rand(toppings.length)];

    return `You want a ${myCrust} crust, ${myTopping} pizza, with ${mySauce} sauce.`;

}