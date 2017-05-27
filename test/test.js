'use strict';
var xmlforall = require('../lib/parser');

xmlforall.parse(__dirname + '/menu.xml', function (err, doc) {
    var items, name, price;

    if (err) {
        return console.error(err);
    }

    items = doc.getElementsByTagName('food');
    items.forEach(function (element) {
        name = element.getElementsByTagName('name')[0];
        price = element.getElementsByTagName('price')[0];
        console.log(
            name.text + ':',
            price.text,
            '(' + price.getAttribute('currency') + ')'
        );
    });
});