const http = require('http');
const optionsGetMovies = {
    hostname:'localhost',
    port:8080,
    path:'/movies',
    method:'GET',
    headers:{
        'Content-Type': 'application/json'
    }
}

const requestGetMovies = http.request(optionsGetMovies,(res)=>{
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

requestGetMovies.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
  });

requestGetMovies.end();

const postMovieData = JSON.stringify({
    'id':7,
    'name':'Iron Man 3',
    'year':2013
});
//const postData = JSON.stringify({
 // 'msg': 'Hello World!'
//});

const optionsPostMovies = {
    hostname: 'localhost',
    port: 3000,
    path: '/movies',
  
    method: 'POST',
  
    headers: {
  
      'Content-Type': 'application/json',
  
      'Content-Length': Buffer.byteLength(postMovieData)
  
    }
  
  };
  
   
  
  const requestPostMovies = http.request(optionsPostMovies, (res) => {
  
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
  
   
  
  requestPostMovies.on('error', (e) => {
  
    console.error(`problem with request: ${e.message}`);
  
  });
  
   
  
  // Write data to request body
  
  requestPostMovies.write(postMovieData);
  
  requestPostMovies.end();