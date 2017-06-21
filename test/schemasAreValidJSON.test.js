const chai = require('chai');
const Promise = require('bluebird');
const path = require('path');
const fs = Promise.promisifyAll(require("fs"));

const should = chai.should();

describe('Schemas are valid JSON', function() {
    const schemasPath = './schemas/';

    it('Verifies all schemas are valid json', function () {
        return fs.readdirAsync(schemasPath)
            .then(files => Promise.map(files, filename => 
                fs.readFileAsync(path.join(schemasPath, filename))
                    .then(data => ({ data, filename })))
            )
            .then(files => Promise.map(files, file => {
                try {
                    return JSON.parse(file.data);
                }
                catch(e) {
                    console.log(file.filename, ' failed');
                    throw e;
                }
            }));
    });
});