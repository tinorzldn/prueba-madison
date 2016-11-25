var readFileData = require('./../src/utils').readFileData;
var stringDataInLinesToArray = require('./../src/utils').stringDataInLinesToArray;
var countConcurrences = require('./../src/utils').countConcurrences;
var findAnagram = require('./../src/utils').findAnagram;

describe('stringDataInLinesToArray', () => {
    it('Acepta un string vacio', (done) => {
        const result = stringDataInLinesToArray('');
        result.should.eql([]);
        done();
    })
})

describe('countConcurrences', () => {
    it('Encuentra una concurrencia dentro del string', (done) => {
        const result = countConcurrences('Hola mundo', 'mundo');
        result.should.eql(1);
        done();
    })
})
