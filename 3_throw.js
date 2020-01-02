let cart = {
    items: [
        {
            'name': 'Docker in Motion',
            'price': 250,
        },
        {
            'name': 'php for beginners',
        }
    ]
};
try {
    cart.items.forEach(function (item, index) {
        if (item.price === undefined) {
            throw new SyntaxError('Price is required');
        }
        console.log(item.price);
    });
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}