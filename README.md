# xmlforall
Simple, fast and reliable Nodejs XML parser.
```js
var xmlforall = require('../lib/parser');
xmlforall.parse('file.xml', function (err, doc) {
});
```

## Element
    Object returned by the parse function.
# Methods
### getElementsByTagName(tagName)
    Returns a list of Elements matching the tagName.
### getElementById(id)
    Returns the first matching Element with that id.
### getAttribute(attr)
    Returns a string attribute attr
## Properties
- ### tagName
    Tag name of the element.
- ### text
    The text value of the element.
- ### attributes
    A string array of all the element attributes.


# Example
```js
var xmlforall = require('xmlforall');
xmlforall.parse('file.xml', function (err, doc) {
    var item = doc.getElementById('1'),
        allItems = doc.getElementsByTagName('food'),
        price = item.getElementsByTagName('price')[0],
        currency = price.getAttribute('currency');
        
    console.log('Number of items', allItems.length);
    console.log('Price of item 1:', price.text);
    console.log('Currency of item 1:', currency);
});
```

# breakfast_menu.xml

```xml
<!-- https://www.w3schools.com/xml/ -->
<?xml version="1.0" encoding="UTF-8"?>
<breakfast_menu>
    <food id="0">
        <name>Belgian Waffles</name>
        <price currency="USD">$5.95</price>
        <description>
       Two of our famous Belgian Waffles with plenty of real maple syrup
       </description>
        <calories>650</calories>
    </food>
    <food id="1">
        <name>Strawberry Belgian Waffles</name>
        <price currency="USD">$7.95</price>
        <description>
        Light Belgian waffles covered with strawberries and whipped cream
        </description>
        <calories>900</calories>
    </food>
    <food id="2">
        <name>Berry-Berry Belgian Waffles</name>
        <price currency="USD">$8.95</price>
        <description>
        Belgian waffles covered with assorted fresh berries and whipped cream
        </description>
        <calories>900</calories>
    </food>
    <food id="3">
        <name>French Toast</name>
        <price currency="USD">$4.50</price>
        <description>
        Thick slices made from our homemade sourdough bread
        </description>
        <calories>600</calories>
    </food>
    <food id="4">
        <name>Homestyle Breakfast</name>
        <price currency="USD">$6.95</price>
        <description>
        Two eggs, bacon or sausage, toast, and our ever-popular hash browns
        </description>
        <calories>950</calories>
    </food>
</breakfast_menu>
```
## Installation
```bash
$ npm install xmlforall --save
```

## Features
- XML Parser
- Window.document like interface 
- Asynchronous 
- Only dependency is SAX

## Run The Test
```bash
node test/test.js
```

## License

[MIT](LICENSE)

----


**Have fun!**


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [@thomasfuchs]: <http://twitter.com/thomasfuchs>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [keymaster.js]: <https://github.com/madrobby/keymaster>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>
   [ws]: <https://github.com/websockets/ws> 
   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]:  <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
