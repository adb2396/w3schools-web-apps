// Left button node
const leftBtn = document.querySelector('button.left');
// Right button node
const rightBtn = document.querySelector('button.right');
// action button list
const actions = document.querySelector('.actions');
// images list
const imagesList = document.querySelectorAll('.images > div');

function getCurrActiveBtnNode() {
  let elem;
  actions.childNodes.forEach(function (node) {
    if (node.className == 'active') {
      elem = node;
    }
  });

  return elem;
}

function getCurrActiveImgNode() {
  let index, elem;
  imagesList.forEach(function (node, i) {
    if (node.className == 'active') {
      index = i;
      elem = node;
    }
  });

  return [index, elem];
}

function removeActiveClass(img) {
  img.classList.remove('active');
  getCurrActiveBtnNode().classList.remove('active');
}

function addActiveClass(img, btn) {
  img.classList.add('active');
  btn.classList.add('active');
}

/* Event listener for left button */
leftBtn.addEventListener('click', function (e) {
  let [currIdx, currImgNode] = getCurrActiveImgNode();
  let actionBtns = actions.children;
  let lastImgIdx = imagesList.length - 1;

  if (currIdx == 0) {
    removeActiveClass(currImgNode);
    addActiveClass(imagesList[lastImgIdx], actionBtns[lastImgIdx]);
  } else {
    removeActiveClass(currImgNode);
    addActiveClass(imagesList[currIdx - 1], actionBtns[currIdx - 1]);
  }
});

/* Event listener for right button */
rightBtn.addEventListener('click', function (e) {
  let [currIdx, currImgNode] = getCurrActiveImgNode();
  let actionBtns = actions.children;

  if (currIdx == imagesList.length - 1) {
    removeActiveClass(currImgNode);
    addActiveClass(imagesList[0], actionBtns[0]);
  } else {
    removeActiveClass(currImgNode);
    addActiveClass(imagesList[currIdx + 1], actionBtns[currIdx + 1]);
  }
});

/* Event listener for action buttons */
actions.addEventListener('click', function (e) {
  if (e.target.hasAttribute('data-action-btn')) {
    e.stopPropagation();
    let [currIdx, currImgNode] = getCurrActiveImgNode();
    let btnIdx = e.target.dataset.actionBtn;

    removeActiveClass(currImgNode);
    addActiveClass(imagesList[btnIdx], e.target);
  }
});
