'use strict';
var xmlforall = require('../lib/parser');

xmlforall.parse(__dirname + '/breakfast_menu.xml', function (err, doc) {
    var i, element, name, price;

    if (err) {
        return console.error(err);
    }

    for (i = 0; i < 5; i++) {
        element = doc.getElementById(i.toString());
        name = element.getElementsByTagName('name')[0];
        price = element.getElementsByTagName('price')[0];

        console.log(
            name.text + ':',
            price.text,
            '(' + price.getAttribute('currency') + ')'
        );
    }
});