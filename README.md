validate.js
===

For documentation please see `index.html` in the root directory.  

This is a forked version of [Validate.js as on 25th June](https://github.com/ansman/validate.js/tree/07f64ec81e8dd71d1553c20d750fbb3b7ed40018). The changes I've made are listed below.  
- Presence validator removed. allowedEmpty in place of it.
- `undefined` values are not even validated. The user hasn't even set them and therefore makes no sense to validate them.
- Empty values `([], {}, '', "  ", null)` pass all validators (most of them) and are allowed by default. Check for `isEmpty()` in the source code of the validators to know if they are allowed or not.
- These empty values can be used to unset or clear things from the database (Eg:- unsetting the column of a field by sending a null) and that's the reason behind allowedEmpty validator. You can control what kind of empty values a particular field allows. Say you don't want to allow empty values (i.e you don't want the user to unset or erase the value in the database) all you need to do is `allowedEmpty: []`.
- If you want to disallow emptyvalues use allowedEmpty to whitelist empty values that you allow.
- Nested be careful. "foo.bar" say foo doesn't have the property bar, so it'll be undefined. The same rules apply, hence be careful.

Building validate.js
---
### Requirements
  * [node.js](https://nodejs.org/) - Will probably work with most versions
  * [grunt-cli](http://gruntjs.com/using-the-cli)

### Build steps
  1. `git clone git@github.com:ansman/validate.js.git`
  2. `cd validate.js`
  3. `npm install`
  4. `grunt build`

This will build *validate.min.js*, *validate.min.map* and the *docs* folder.

### Continuous testing
You can run continuous testing that runs the tests on file changes by running
`grunt watch` or simply `grunt`.

If you want to just run the tests once you can do that by running `grunt test`.
