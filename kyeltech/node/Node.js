const http = require('http');
const fs = require('fs')
const {parse} = require('querystring')

const server = http.createServer((req, res) =>{
  let html = `<html>
    <body>
      <p>Enter a message here</p>
      <form action='./message.txt' method='post' name='form1'>
        <input type='text' value='' name='message' />
        <input type='submit' />
      </form>
    </body>
  </html> `

  if(req.method === 'POST'){
    let body =''
    req.on('data', chunk => {
      body +=chunk.toString()
    })
    req.on('end', () => {
      let path='.'+ req.url
      res.writeHead(200, {'content-Type' : 'text/plain'})
      fs.writeFile(path,parse(body).message.txt.toString(), (err) => {
        if(err){
          throw err
        }
      })
      res.end('okay')
    })
  } else {
    res.end(html)
  }
})
server.listen(3000)