const http = require('http');

const promise1 = new Promise((resolve, reject) => {
  let data = '';

  http.get('http://jsonplaceholder.typicode.com/posts/1', (callback) => {
    callback.on('error', (error) => {
      reject(error);
    });

    callback.on('data', (chunk) => {
      data += chunk;
    });

    callback.on('end', () => {
      resolve(data);
    });
  });
});

const promise2 = new Promise((resolve, reject) => {
  let data = '';

  http.get('http://jsonplaceholder.typicode.com/posts/2', (callback) => {
    callback.on('error', (error) => {
      reject(error);
    });

    callback.on('data', (chunk) => {
      data += chunk;
    });

    callback.on('end', () => {
      resolve(data);
    });
  });
});

const promise3 = new Promise((resolve, reject) => {
  let data = '';

  http.get('http://jsonplaceholder.typicode.com/posts/3', (callback) => {
    callback.on('error', (error) => {
      reject(error);
    });

    callback.on('data', (chunk) => {
      data += chunk;
    });

    callback.on('end', () => {
      resolve(data);
    });
  });
});

Promise.all([promise1, promise2, promise3]).then((response) => {
  response.forEach((post) => {
    console.log(post);
  });
}).catch((error) => {
  console.error(error);
});

console.log('Something');
