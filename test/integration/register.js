var assert = require('assert'),
    equal  = assert.equal;

module.exports = function(Bookshelf) {

	describe('Model Registry', function() {

		describe('Registering Models', function() {

			beforeEach(function() {
				Bookshelf._models = {};
				this.Model = Bookshelf.Model.extend({
					tableName: 'records'
				});
				this.model = Bookshelf.model('Model', this.Model);
			});

			it('returns the registered model', function() {
				equal(this.model, this.Model);
			});

			it('assigns the model the name', function() {
				equal(Bookshelf.model('Model'), this.Model);
			});

			it('overwrites when there is a name conflict', function() {
				Bookshelf.model('Model', Bookshelf.Model);
				equal(Bookshelf.model('Model'), Bookshelf.Model);
			});

		});

		describe('Registering Collections', function() {

			beforeEach(function() {
				Bookshelf._collections = {};
				this.Collection = Bookshelf.Collection.extend({
					property: {}
				});
				this.collection = Bookshelf.collection('Collection', this.Collection);
			});

			it('returns the registered collection', function() {
				equal(this.collection, this.Collection);
			});

			it('gives the collection a name', function() {
				equal(Bookshelf.collection('Collection'), this.Collection);
			});

			it('overwrites the collection when there is a name conflict', function() {
				Bookshelf.collection('Collection', Bookshelf.Collection);
				equal(Bookshelf.collection('Collection'), Bookshelf.Collection);
			});

		});

	});

};