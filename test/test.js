var assert = require('chai').assert
var fs = require('fs')
var concat = require('../')
describe('serial-concat-files', function () {
  before(function (done) {
    if (!fs.existsSync(__dirname + '/files/')) {
      fs.mkdir(__dirname + '/files/', done)
    } else {
      done()
    }
  })
  describe('files test', function () {
    it('3 files A', function (done) {
      concat(['./test/a', './test/b', './test/c'], './test/files/alla', function (error) {
        assert.isNotOk(error)

        fs.readFile('./test/files/alla', function (error, all) {
          assert.isNotOk(error)
          assert.equal(all.toString(), 'this is a\nthis is b\nand this is c\n')
          done()
        })
      })
    })
    it('3 files B', function (done) {
      concat(['./test/b', './test/b', './test/c'], './test/files/allb', function (error) {
        assert.isNotOk(error)

        fs.readFile('./test/files/allb', function (error, all) {
          assert.isNotOk(error)
          assert.equal(all.toString(), 'this is b\nthis is b\nand this is c\n')
          done()
        })
      })
    })
    it('3 files C', function (done) {
      concat(['./test/a', './test/b', './test/b'], './test/files/allc', function (error) {
        assert.isNotOk(error)

        fs.readFile('./test/files/allc', function (error, all) {
          assert.isNotOk(error)
          assert.equal(all.toString(), 'this is a\nthis is b\nthis is b\n')
          done()
        })
      })
    })
  })
})
