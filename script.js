// header

document.querySelector('.burger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.nav').classList.toggle('open');
})

//blog

function readmore() {
  let dots = document.getElementById('dots');
  let moreText = document.getElementById('more');
  let btn = document.getElementById('btn');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btn.innerHTML = 'дальше';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btn.innerHTML = 'свернуть';
    moreText.style.display = 'inline';
  }
}

function readmore2() {
  let dots = document.getElementById('dots-2');
  let moreText = document.getElementById('more-2');
  let btn = document.getElementById('btn-2');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btn.innerHTML = 'дальше';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btn.innerHTML = 'свернуть';
    moreText.style.display = 'inline';
  }
}

function readmore3() {
  let dots = document.getElementById('dots-3');
  let moreText = document.getElementById('more-3');
  let btn = document.getElementById('btn-3');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btn.innerHTML = 'дальше';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btn.innerHTML = 'свернуть';
    moreText.style.display = 'inline';
  }
}

// gallery

let mainImage = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.slider-preview-item a');

for (let activeImage of previews) {
  activeImage.onclick = function (evt) {
    evt.preventDefault();
    mainImage.src = activeImage.href;
  
    let currentActive = document.querySelector('.slider-preview-item .active');
    currentActive.classList.remove('active');
    activeImage.classList.add('active');
  };
}