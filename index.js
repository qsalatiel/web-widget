(function(document) {
  function getConfig() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve({
          delay: 6000,
          title: 'Sign up to ur newsletter',
          text: `We know that you have a lot of questions, we've tried to list the most important ones 😇`,
          actionName: 'Sign up now',
          actionLink: '#!lol',
        });
      }, 350);
    });
  }

  function createStyles() {
    var l = document.createElement('link')
    l.setAttribute("rel", 'stylesheet');
    l.setAttribute("type", "text/css");
    l.setAttribute("href", '../styles.css');
    document.getElementsByTagName("head")[0].appendChild(l)
    console.log(l)
  }

  function init() {
    
    getConfig().then(function (data) {
      console.log('hello widget')
      const { title, text, actionLink, actionName, delay } = data
      console.log('t', delay)
      
      createStyles()

      document.body.innerHTML += `
        <div class="ww" web-widget style="transform: translateY(calc(100% + 32px))">
          <div>${title}</div>
          <div>${text}</div>
          <a href="${actionLink}">${actionName}</a>
        </div>
        `

      setTimeout(function() {
        document.querySelector('[web-widget]').setAttribute('web-widget-active', true)
      }, delay);
    })
  }

  document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
      init();
    }
  }
})(document)