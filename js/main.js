class Light {
  Typing(selector, words, duration, times = 1, delay) {
    if (times) {
      let counter = 0;
      selector = document.querySelector(selector);
      selector.textContent = "";
      window.setTimeout(() => {
        let mainLoop = window.setInterval(() => {
          if (
            selector.textContent.length < words.length &&
            selector.textContent.length >= 0
          ) {
            selector.textContent += words[counter++];
          } else {
            window.clearInterval(mainLoop);
            let secoundLoop = window.setInterval(() => {
              if (counter >= 0) {
                console.log(counter);
                selector.textContent = selector.textContent.slice(0, counter--);
              } else {
                window.clearInterval(secoundLoop);
                let args = Array(...arguments).map(function (val, index) {
                  return val != times ? val : times > 0 ? times - 1 : false;
                });
                this.Typing(...args);
              }
            }, duration);
          }
        }, duration);
      }, delay);
    }
  }
}
let start = new Light();
start.Typing("title", "The Light Lamp", 400, 3, 0);
