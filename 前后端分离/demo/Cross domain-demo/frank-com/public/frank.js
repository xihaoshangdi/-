// console.log('frank.js');
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://localhost:8888/friends.json');
// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     console.log(xhr.response);
//   }
// };
// xhr.send();

function jsonp(url) {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    window[random] = data => {
      resolve(data);
    };
    const script = document.createElement('script');
    script.src = `${url}?callback=${random}`;
    script.onload = () => {
      script.remove();
    };
    script.onerror = () => {
      reject();
    };
    document.body.appendChild(script);
  });
}

jsonp('http://localhost:8888/friends.js').then(data => {
  console.log(data);
});
