var assert = require('assert'),
    equal  = assert.equal;

module.exports = function(Bookshelf) {

	describe('Model Registry', function() {

		describe('Registering Models', function() {

			beforeEach(function() {
				Bookshelf._models = {};
			});

			var Model = Bookshelf.Model.extend({
				tableName: 'records'
			});

			it('returns the registered model', function() {
				equal(Bookshelf.model('Model', Model), Model);
			});

			it('assigns the model the name', function() {
				Bookshelf.model('Model', Model);
				equal(Bookshelf.model('Model'), Model);
			});

			it('overwrites when there is a name conflict', function() {
				Bookshelf.model('Model', Model);
				Bookshelf.model('Model', Bookshelf.Model);
				equal(Bookshelf.model('Model'), Bookshelf.Model);
			});

		});

		describe('Registering Collections', function() {

			beforeEach(function() {
				Bookshelf._collections = {};
			});

			var Collection = Bookshelf.Collection.extend({
				property: {}
			});

			it('returns the registered collection', function() {
				equal(Bookshelf.collection('Collection', Collection), Collection);
			});

			it('gives the collection a name', function() {
				Bookshelf.collection('Collection', Collection);
				equal(Bookshelf.collection('Collection'), Collection);
			});

			it('overwrites the collection when there is a name conflict', function() {
				Bookshelf.collection('Collection', Collection);
				Bookshelf.collection('Collection', Bookshelf.Collection);
				equal(Bookshelf.collection('Collection'), Bookshelf.Collection);
			});

		});

	});

};