var loop = require('serial-loop')
var fs = require('fs')
module.exports = function (_options) {
  var options = Object.assign({}, {
    first: '',
    last: '',
    pre: '',
    post: ''
  }, _options)
  return function (files, dest, callback) {
    if (!callback) callback = function () {}
    fs.writeFile(dest, '', function (error) {
      if (error) return callback(error)
      loop(files.length, function (done, i) {
        fs.readFile(files[i], 'utf8', function (error, buffer) {
          var content
          if (i === 0) {
            content = options.first + buffer + options.post
          } else if (i === (files.length - 1)) {
            content = options.pre + buffer + options.last
          } else {
            content = options.pre + buffer + options.post
          }
          return error ? done(error) : fs.appendFile(dest, content, done)
        })
      }, callback)
    })
  }
}

