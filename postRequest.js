const { Server } = require('http');
const https = require('https');


const requestData = { 
    name: 'S PLT',
    username: 'TSt',
    email: 'okul@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874'}

         
    }

const options = {
    host: 'jsonplaceholder.typicode.com',
  	path: '/users',
  	method: 'POST',
  	headers: {
    		'Accept': 'application/json',
    		'Content-Type': 'application/json; charset=UTF-8'
  	}

  };
  
let request = https.request(options, (res) => {
    
    if (res.statusCode !== 201) {
        console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
        res.resume();
        return;
      }
    
let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('close', () => {
    console.log('Retrieved all data');
    console.log(JSON.parse(data));
  });
  
  request.on('error', (err) => {
    console.error(`Encountered an error trying to make a request: ${err.message}`);
  });

 });

 request.write(JSON.stringify(requestData));
 
 request.end()