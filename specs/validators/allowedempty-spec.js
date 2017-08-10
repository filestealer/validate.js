describe('validators.allowedEmpty', function() {

var allowedEmpty = validate.validators.allowedEmpty.bind(validate.validators.allowedEmpty);

    afterEach(function() {
        delete validate.validators.allowedEmpty.options;
    });

    it("No kind of empty allowed", function() {
        var options = []; // no kind of empty allowed
        var message = "^Only the following empty values are allowed:- []";
        expect(allowedEmpty([], options)).toEqual(message);
        expect(allowedEmpty({}, options)).toEqual(message);
        expect(allowedEmpty(null, options)).toEqual(message);
        expect(allowedEmpty('', options)).toEqual(message);
        expect(allowedEmpty('  ', options)).toEqual(message);
    });

    it("Only null is allowed but passing in other empty values", function() {
        var options = ['NULL'];
        var message = "^Only the following empty values are allowed:- [\"NULL\"]";
        expect(allowedEmpty([], options)).toEqual(message);
        expect(allowedEmpty({}, options)).toEqual(message);
        expect(allowedEmpty('', options)).toEqual(message);
        expect(allowedEmpty('  ', options)).toEqual(message);
    });

    it("Non empty values should return undefined values", function() {
        var options = ['EMPTYSTRING', 'WHITESPACESTRING'];
        expect(allowedEmpty("foobar", options)).not.toBeDefined();
        expect(allowedEmpty({"foo": "bar"}, options)).not.toBeDefined();
        expect(allowedEmpty(['hi', 'bye'], options)).not.toBeDefined();
        expect(allowedEmpty(123, options)).not.toBeDefined();
        expect(allowedEmpty(-99, options)).not.toBeDefined();
    });

    it("allowing only empty JSON", function() {
        var options = ['EMPTYJSON'];
        var message = "^Only the following empty values are allowed:- [\"EMPTYJSON\"]";
        expect(allowedEmpty("foobar", options)).not.toBeDefined();
        expect(allowedEmpty({"foo": "bar"}, options)).not.toBeDefined();
        expect(allowedEmpty('', options)).toEqual(message);
        expect(allowedEmpty('  ', options)).toEqual(message);
        expect(allowedEmpty([], options)).toEqual(message);
        expect(allowedEmpty({}, options)).not.toBeDefined();
    });

    it("allowing only empty json and empty lists", function() {
        var options = ['EMPTYJSON', 'EMPTYLIST'];
        var message = "^Only the following empty values are allowed:- [\"EMPTYJSON\",\"EMPTYLIST\"]";
        expect(allowedEmpty('', options)).toEqual(message);
        expect(allowedEmpty('  ', options)).toEqual(message);
        expect(allowedEmpty(null, options)).toEqual(message);
        expect(allowedEmpty([], options)).not.toBeDefined();
        expect(allowedEmpty({}, options)).not.toBeDefined();
    });

    it("Every kind of empty value is allowed", function() {
        var options = ['EMPTYJSON', 'EMPTYLIST', 'WHITESPACESTRING', 'NULL', 'EMPTYSTRING'];
        expect(allowedEmpty("foobar", options)).not.toBeDefined();
        expect(allowedEmpty({"foo": "bar"}, options)).not.toBeDefined();
        expect(allowedEmpty(['hi', 'bye'], options)).not.toBeDefined();
        expect(allowedEmpty(123, options)).not.toBeDefined();
        expect(allowedEmpty(-99, options)).not.toBeDefined();
        expect(allowedEmpty([], options)).not.toBeDefined();
        expect(allowedEmpty({}, options)).not.toBeDefined();
        expect(allowedEmpty('', options)).not.toBeDefined();
        expect(allowedEmpty('  ', options)).not.toBeDefined();
        expect(allowedEmpty(null, options)).not.toBeDefined();
    });


});