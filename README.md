validate.js
===

For documentation please see [validatejs.org/](http://validatejs.org/).

This forked version is very similar to the [Validate.js as on 25th June](https://github.com/ansman/validate.js/tree/07f64ec81e8dd71d1553c20d750fbb3b7ed40018). The changes I've made are listed below.  
- Presence validator removed.
- Empty values ([], blah, blah) always pass validation and are allowed by default.
- null can be used to unset and that's the reason behind allowedEmpty validator.
- If you want to disallow emptyvalues use allowedEmpty to whitelist emtpy values.
- undefined values (values that are not even set) always pass all kinds of validations because the client hasn't even set it.
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
