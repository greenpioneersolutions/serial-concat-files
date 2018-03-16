var assert = require('chai').assert
var fs = require('fs')
var path = require('path')

describe('serial-concat-files', function () {
  before(function (done) {
    if (!fs.existsSync(path.join(__dirname + '/files/'))) {
      fs.mkdir(path.join(__dirname + '/files/'), done)
    } else {
      done()
    }
  })
  describe('files test', function () {
    it('3 files POST A', function (done) {
      var concat = require('../')({ post: '\n'})
      concat(['./test/a', './test/b', './test/c'], './test/files/alla', function (error) {
        assert.isNotOk(error)

        fs.readFile('./test/files/alla', function (error, all) {
          assert.isNotOk(error)
          assert.equal(all.toString(), 'this is a\nthis is b\nand this is c')
          done()
        })
      })
    })
    it('3 files POST B', function (done) {
      var concat = require('../')({ post: '\n'})
      concat(['./test/b', './test/b', './test/c'], './test/files/allb', function (error) {
        assert.isNotOk(error)

        fs.readFile('./test/files/allb', function (error, all) {
          assert.isNotOk(error)
          assert.equal(all.toString(), 'this is b\nthis is b\nand this is c')
          done()
        })
      })
    })
    it('3 files POST C', function (done) {
      var concat = require('../')({ post: '\n'})
      concat(['./test/a', './test/b', './test/b'], './test/files/allc', function (error) {
        assert.isNotOk(error)

        fs.readFile('./test/files/allc', function (error, all) {
          assert.isNotOk(error)
          assert.equal(all.toString(), 'this is a\nthis is b\nthis is b')
          done()
        })
      })
    })
    it('3 files PRE', function (done) {
      var concat = require('../')({ pre: '\n'})
      concat(['./test/a', './test/b', './test/b'], './test/files/allc', function (error) {
        assert.isNotOk(error)

        fs.readFile('./test/files/allc', function (error, all) {
          assert.isNotOk(error)
          assert.equal(all.toString(), 'this is a\nthis is b\nthis is b')
          done()
        })
      })
    })
    it('3 files PRE FIRST', function (done) {
      var concat = require('../')({ first: 'GPS MADE THIS\n',pre: '\n'})
      concat(['./test/a', './test/b', './test/b'], './test/files/allc', function (error) {
        assert.isNotOk(error)

        fs.readFile('./test/files/allc', function (error, all) {
          assert.isNotOk(error)
          assert.equal(all.toString(), 'GPS MADE THIS\nthis is a\nthis is b\nthis is b')
          done()
        })
      })
    })
    it('3 files PRE LAST', function (done) {
      var concat = require('../')({ pre: '\n',last:'\nGPS COPYRIGHT'})
      concat(['./test/a', './test/b', './test/b'], './test/files/allc', function (error) {
        assert.isNotOk(error)

        fs.readFile('./test/files/allc', function (error, all) {
          assert.isNotOk(error)
          assert.equal(all.toString(), 'this is a\nthis is b\nthis is b\nGPS COPYRIGHT')
          done()
        })
      })
    })
    it('3 files POST FIRST', function (done) {
      var concat = require('../')({ post: '\n',first:'GPS\n'})
      concat(['./test/a', './test/b', './test/b'], './test/files/allc', function (error) {
        assert.isNotOk(error)

        fs.readFile('./test/files/allc', function (error, all) {
          assert.isNotOk(error)
          assert.equal(all.toString(), 'GPS\nthis is a\nthis is b\nthis is b')
          done()
        })
      })
    })
    it('3 files POST LAST', function (done) {
      var concat = require('../')({ post: '\n',last:'GPS'})
      concat(['./test/a', './test/b', './test/b'], './test/files/allc', function (error) {
        assert.isNotOk(error)

        fs.readFile('./test/files/allc', function (error, all) {
          assert.isNotOk(error)
          assert.equal(all.toString(), 'this is a\nthis is b\nthis is bGPS')
          done()
        })
      })
    })
    it('3 files PRE POST FIRST LAST', function (done) {
      var concat = require('../')({ post: '<POST>',last:'<LAST>', first:'<FIRST>',pre:'<PRE>'})
      concat(['./test/a', './test/b', './test/b'], './test/files/allc', function (error) {
        assert.isNotOk(error)

        fs.readFile('./test/files/allc', function (error, all) {
          assert.isNotOk(error)
          assert.equal(all.toString(), '<FIRST>this is a<POST><PRE>this is b<POST><PRE>this is b<LAST>')
          done()
        })
      })
    })
  })
})
