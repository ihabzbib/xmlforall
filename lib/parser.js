'use strict';

var fs = require('fs');
var sax = require('sax');

module.exports = (function () {
    /* jshint validthis: true */

    function Parser() {

        var parser = sax.parser(true), stack = [];


        function Element(tag) {
            var attr;
            function getElementsByTagName(tagName) {
                var i, result = [], el;
                if (this.children && this.children.length) {
                    for (i = 0; i < this.children.length; i++) {
                        el = this.children[i];
                        if (el.tagName.toLowerCase() === tagName.toLowerCase()) {
                            result.push(el);
                        }
                        if (el.children && el.children.length) {
                            result = result.concat(el.getElementsByTagName(tagName));
                        }
                    }
                }
                return result;
            }

            function getElementById(id) {
                var i, el, result;
                if (this.children && this.children.length) {
                    for (i = 0; i < this.children.length; i++) {
                        el = this.children[i];
                        if (el.id === id) {
                            return el;
                        }
                        if (el.children && el.children.length) {
                            result = el.getElementById(id);
                            if (result) {
                                return result;
                            }
                        }
                    }
                }
                return null;
            }

            function getAttribute(attr) {
                if (tag.attributes.hasOwnProperty(attr)) {
                    return tag.attributes[attr];
                }
                return null;
            }
            tag = tag !== undefined ? tag : {};
            this.tagName = tag.name || null;
            this.text = tag.text || null;
            this.getElementsByTagName = getElementsByTagName;
            this.getElementById = getElementById;
            this.getAttribute = getAttribute;
            this.attributes = tag.attributes || [];
            for (attr in tag.attributes) {
                if (tag.attributes.hasOwnProperty(attr)) {
                    this[attr] = tag.attributes[attr];
                }
            }
        }

        function onopentag(tag) {
            var el = new Element(tag),
                parent = stack[stack.length - 1];

            if (stack.length > 0) {
                if (!parent.children) {
                    parent.children = [];
                }
                parent.children.push(el);
            }
            stack.push(el);
        }

        function onclosetag() {
            stack.pop();
        }

        function ontext(text) {
            if (text && text.length > 0) {
                stack[stack.length - 1].text = text;
            }
        }

        function onerror(err) {
            //TODO
        }

        function parseXML(data) {
            var doc = new Element();
            stack.push(doc);
            parser.onopentag = onopentag;
            parser.onclosetag = onclosetag;
            parser.onerror = onerror;
            parser.ontext = ontext;
            parser.write(data).close();
            return doc;
        }

        this.parse = function (input, callback) {
            function cb(err, data) {
                if (typeof callback === 'function') {
                    return callback(err, data);
                }
                if (err) {
                    console.log(err);
                } else if (data) {
                    console.log(data);
                } else {
                    console.log('xmlforall: Nothing to do');
                }
            }
            try {
                if (!input) {
                    throw 'XMLParser error, specify a valid xml file or string';
                }
                fs.stat(input, function (err) {
                    if (err) {
                        return cb(err);
                    }
                    fs.readFile(input, function (err, data) {
                        if (err) {
                            return cb(err);
                        }
                        return cb(null, parseXML(data.toString().trim()));
                    });
                });
            } catch (e) {
                cb(e);
            }
        };

    }


    return new Parser();

}());
