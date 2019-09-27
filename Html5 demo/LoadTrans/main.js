window.onload = function() {
  var boxList = this.document.getElementsByClassName('box');
  console.log(boxList);
  var btn = this.document.getElementsByClassName('btn')[0];
  btn.addEventListener('click', function() {
    boxList[0].classList.add('demo');
  });
};
