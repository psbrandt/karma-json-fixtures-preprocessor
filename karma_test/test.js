describe('karma-json-fixtures-preprocessor', function() {
    it('loads the fixtures', function() {
        expect(window.__fixtures__['fixtures/1'].a).to.equal(5);
    });

    it('tranforms fixture file name to camelCase if config option `camelizeFilenames` is set to true', function() {
        expect(window.__fixtures__['fixtures/fooBar'].foo).to.equal('bar');
    });
});
