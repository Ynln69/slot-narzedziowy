const loadHTML = (url, selector) => {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        element.innerHTML = html;
      });
    });
};
loadHTML("header.html", ".header");

const loadFooterHTML = (url, selector) => {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        element.innerHTML = html;
      });
    });
};
loadHTML("footer.html", ".footer");
