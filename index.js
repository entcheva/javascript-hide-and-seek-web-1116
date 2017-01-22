function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  return document.querySelector('#nested .target')
};

function deepestChild() {
  let divs = document.querySelectorAll('#grand-node div')
  return divs[divs.length - 1]
};


function increaseRankBy(n) {
  let elements = document.querySelectorAll('.ranked-list li')

  for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = parseInt(elements[i].innerHTML) + n
  }
};
