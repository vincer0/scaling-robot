const http = require('http');

const promise = (url) => new Promise((resolve, reject) => {
  let data = '';

  http.get(url, (callback) => {
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

async function asyncCall(urls) {
  try {
    const results = [];
    results[0] = await promise(urls[0]);
    results[1] = await promise(urls[1]);
    results[2] = await promise(urls[2]);

    results.forEach((post) => {
      console.log(post);
    });
  } catch {
    console.log('Something went wrong!');
  }
}

const urls = [
  'http://jsonplaceholder.typicode.com/posts/1',
  'http://jsonplaceholder.typicode.com/posts/2',
  'http://jsonplaceholder.typicode.com/posts/3',
];

asyncCall(urls).then(() => {
  console.log('Fetched data!');
});
console.log('This is random');
