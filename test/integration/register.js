var assert = require('assert'),
    equal  = assert.equal;

module.exports = function(Bookshelf) {

	describe('Model Registry', function() {

		beforeEach(function() {
			Bookshelf._models = {};
		});

		describe('Registering Models', function() {

			var Model = Bookshelf.Model.extend({
				tableName: 'records'
			});

			it('returns the registered model', function() {
				equal(Bookshelf.model(Model), Model);
			});

			it('gives the model a name', function() {
				Bookshelf.model(Model, 'CustomName');
				equal(Bookshelf.model('CustomName'), Model);
			});

			it('overwrites when there is a name conflict', function() {
				Bookshelf.model(Model, 'Name');
				Bookshelf.model(Bookshelf.Model, 'Name');
				equal(Bookshelf.model('Name'), Bookshelf.Model);
			});

		});

	});

};