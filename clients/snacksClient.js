const http = require('http');

 

const optionsGetSnacks = {

    hostname:'localhost',

    port:8080,

    path:'/snacks',

    method:'GET',

    headers:{

        'Content-Type': 'application/json'

    }

}

const requestGetSnacks = http.request(optionsGetSnacks,(res)=>{

    console.log(`STATUS: ${res.statusCode}`);

    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

    res.setEncoding('utf8');

        console.log("Connection opened..");

        res.on("data",(chunk)=>{

            console.log("Data:", chunk);

        });

        res.on("end",()=>{

            console.log("Data ended..");

        });

        res.on("close",()=>{

            console.log("Connection closed..")

        })

    }

);

requestGetSnacks.on('error', (e) => {

    console.error(`problem with request: ${e.message}`);

  });

requestGetSnacks.end();

 

const postSnackData = JSON.stringify({

    'id':5,

    'name':'some food',

    'cost':80

});

 

//const postData = JSON.stringify({

 // 'msg': 'Hello World!'

//});

 

const optionsPostSnacks = {

  hostname: 'localhost',

  port: 3000,

  path: '/snacks',

  method: 'POST',

  headers: {

    'Content-Type': 'application/json',

    'Content-Length': Buffer.byteLength(postSnackData)

  }

};

 

const requestPostSnacks = http.request(optionsPostSnacks, (res) => {

  console.log(`STATUS: ${res.statusCode}`);

  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

  res.setEncoding('utf8');

  res.on('data', (chunk) => {

    console.log(`BODY: ${chunk}`);

  });

  res.on('end', () => {

    console.log('No more data in response.');

  });

});

 

requestPostSnacks.on('error', (e) => {

  console.error(`problem with request: ${e.message}`);

});

 

// Write data to request body

requestPostSnacks.write(postSnackData);

requestPostSnacks.end();