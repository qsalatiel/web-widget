(function(document) {
  function init() {
    console.log('hello widget')
  }

  document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
      init();
    }
  }
})(document)