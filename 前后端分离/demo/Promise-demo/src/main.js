imgData = ['https://api.faviconkit.com/github.com/144'];

const promiseAll = imgData.map(function(item, index) {
  return new Promise(function(resolve, reject) {
    let img = new Image();
    if (img.complete) {
      console.log('存在缓存或已加载');
      resolve(img);
    }
    img.onload = function() {
      img.onload = null;
      resolve(img);
    };
    img.error = function() {
      reject('图片加载失败');
    };
    img.src = item;
  });
});
Promise.all(promiseAll).then(
  function(img) {
    console.log(img[0]);
    imageContiner.appendChild(img[0]);
  },
  function(err) {
    console.log(err);
  }
);
