var loop = require('serial-loop')
var fs = require('fs')
module.exports = function (files, dest, callback) {
  fs.writeFile(dest, '', function (error) {
    if (error) return callback(error)
    loop(files.length, function (done, i) {
      fs.readFile(files[i], function (error, buffer) {
        return error ? done(error) : fs.appendFile(dest, buffer, done)
      })
    }, callback)
  })
}
