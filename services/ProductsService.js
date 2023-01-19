/* eslint-disable prettier/prettier */
const PRODUCTS = [
    {
        id: 101,
        name: 'Whole Wheat Flour',
        price: 350,
        image: require('../assets/grains/flour.jpg'),
        description:
            'Whole Grain Wheat Flour',
    },
    {
        id: 102,
        name: 'Sugar',
        price: 600,
        image: require('../assets/grains/sugar.jpg'),
        description:
            '5 kg Sugar',
    },
    {
        id: 103,
        name: 'Split Chickpeas',
        price: 200,
        image: require('../assets/grains/dChana.jpg'),
        description:
            '1 kg Split Chickpeas',
    },

    {
        id: 201,
        name: 'Red Powdered Chilli',
        price: 350,
        image: require('../assets/herbs/chilli.jpg'),
        description:
            '250 grm Red Powdered Chilli',
    },
    {
        id: 202,
        name: 'Black Pepper',
        price: 600,
        image: require('../assets/herbs/pepper.jpg'),
        description:
            '250 grm Black Pepper',
    },
    {
        id: 203,
        name: 'Tumeric Powder',
        price: 200,
        image: require('../assets/herbs/tumeric.jpg'),
        description:
            '250 grm Tumeric Powder',
    },

    {
        id: 301,
        name: 'Red Apple',
        price: 350,
        image: require('../assets/fruitsNvegetable/apple.jpg'),
        description:
            '1 kg Red Apple',
    },
    {
        id: 302,
        name: 'Potato',
        price: 100,
        image: require('../assets/fruitsNvegetable/potato.jpg'),
        description:
            '1 kg Potato',
    },
    {
        id: 303,
        name: 'Pomegranate',
        price: 400,
        image: require('../assets/fruitsNvegetable/pomegranate.jpg'),
        description:
            '1 kg Pomegranate',
    },
    {
        id: 401,
        name: 'White Bread',
        price: 350,
        image: require('../assets/dairy/bread.jpg'),
        description:
            'Whole Grain White Bread',
    },
    {
        id: 402,
        name: 'White Eggs',
        price: 600,
        image: require('../assets/dairy/eggs.jpg'),
        description:
            '1 Dozen White Farm Eggs',
    },
    {
        id: 403,
        name: 'Pure Milk',
        price: 200,
        image: require('../assets/dairy/milk.jpg'),
        description:
            '1 Liter pure milk',
    },


    {
        id: 501,
        name: 'Mixed Dry Fruit',
        price: 350,
        image: require('../assets/snacks/dryFruit.jpg'),
        description:
            '250 grm Mixed Dry Fruit',
    },
    {
        id: 502,
        name: 'Dark Chocolate',
        price: 600,
        image: require('../assets/snacks/darkChocolate.jpg'),
        description:
            '100 grm Dark Chocolate',
    },
    {
        id: 503,
        name: 'Popcorn',
        price: 200,
        image: require('../assets/snacks/popcorn.jpg'),
        description:
            '100 grm salted Popcorn',
    },

    {
        id: 601,
        name: 'Cold Coffee',
        price: 350,
        image: require('../assets/drinks/coffee.jpg'),
        description:
            '250ml Cold Coffee',
    },
    {
        id: 602,
        name: 'Diet Coke',
        price: 600,
        image: require('../assets/drinks/coke.jpg'),
        description:
            '250ml Diet Coke',
    },
    {
        id: 603,
        name: 'Orange Juice',
        price: 200,
        image: require('../assets/drinks/juice.jpg'),
        description:
            '250 ml Orange Juice',
    },

];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find(product => product.id === id);
}
