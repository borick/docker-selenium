// Lets require/import the HTTP module
var http = require('http')

// Lets define a port we want to listen to
const PORT = 3666

// We need a function which handles requests and send response
function handleRequest (request, response) {
  response.end('Killing Chrome Processes.')
  // or more concisely
  var sys = require('sys')
  var exec = require('child_process').exec
  function puts (error, stdout, stderr) {
    sys.puts(stdout)
    if (error) {
      console.log(error)
    }
  }
  exec('pkill -9 -f \'test-type=webdriver\'', puts) // kill ze chromes!
}

// Create a server
var server = http.createServer(handleRequest)

// Lets start our server
server.listen(PORT, function () {
  // Callback triggered when server is successfully listening. Hurray!
  console.log('Server listening on: http://localhost:%s', PORT)
})
