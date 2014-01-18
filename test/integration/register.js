var assert = require('assert'),
    equal  = assert.equal;

module.exports = function(Bookshelf) {

	describe('Model Registry', function() {

		beforeEach(function() {
			Bookshelf.models = {};
		});

		describe('Registering Models', function() {

			var Model = Bookshelf.Model.extend({
				tableName: 'records'
			});

			it('returns the registered model', function() {
				equal(Bookshelf.register(Model), Model);
			});

			it('names the model using the capitalized and singularized tableName by default', function() {
				Bookshelf.register(Model);
				equal(Bookshelf.models.Record, Model);
			});

			it('can give the model a custom name', function() {
				Bookshelf.register(Model, 'CustomName');
				equal(Bookshelf.models.CustomName, Model);
			});

			it('overwrites when there is a name conflict', function() {
				Bookshelf.register(Model, 'Name');
				Bookshelf.register(Bookshelf.Model, 'Name');
				equal(Bookshelf.models.Name, Bookshelf.Model);
			});

		});

	});

};