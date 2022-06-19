const List = localStorage.getItem("menu") ? JSON.parse(localStorage.getItem("menu")) : ["족발", "보쌈", "국밥", "파스타", "초밥", "스시", "짜장면", "삼각김밥", "라면"];

function addMenu() {
  document.getElementsByClassName('menuArea')[0].innerHTML = `<p class="input">추가된 메뉴의 명단이에요.</p>`;

  List.map(menu => {
    document.getElementsByClassName('menuArea')[0].innerHTML += `<div class="circle">${menu}</div>`;
  });
}

window.addEventListener('scroll', () => {
	if (window.scrollY > 0) {
    document.getElementById('top').style.opacity = 1;
    document.getElementById('top').style.display = "block";
  } else {
    document.getElementById('top').style.opacity = 0;
    setTimeout(() => {
      document.getElementById('top').style.display = "none";
    }, 500);
  }

  if (window.scrollY <= window.innerHeight * 2) {
    document.getElementById('bottom').style.opacity = 1;
    document.getElementById('bottom').style.display = "block";
  } else {
    document.getElementById('bottom').style.opacity = 0;
    setTimeout(() => {
      document.getElementById('bottom').style.display = "none";
    }, 500);
  }
});

window.chooseFood = () => {
  document.getElementById("background").style.opacity = 0;
  setTimeout(() => {
    document.getElementById("background").style.backgroundImage = `url('./src/img/${Math.floor(Math.random() * 9) + 1}.jpg')`;
    document.getElementById("background").style.opacity = 0.15;
  }, 300);
  document.getElementsByClassName('food')[0].innerHTML = List[Math.floor(Math.random() * List.length)];
}

window.toPrev = () => {
  window.scrollY >= window.innerHeight * 3 ? window.scrollTo(0, window.innerHeight * 2) : window.scrollY >= window.innerHeight * 2 ? window.scrollTo(0, window.innerHeight) : window.scrollTo(0, 0);
};


window.toNext = () => {
  window.scrollY >= window.innerHeight * 2 ? window.scrollTo(0, window.innerHeight * 3) : window.scrollY >= window.innerHeight ? window.scrollTo(0, window.innerHeight * 2) : window.scrollTo(0, window.innerHeight);
};

window.add = () => {
  const text = document.getElementById("menu").value;

  if (List.indexOf(text) > -1) List.splice(List.indexOf(text), 1);
  else List.push(text);

  localStorage.setItem("menu", JSON.stringify(List));
  addMenu();
}

window.onload = (() => {
  if (typeof localStorage.theme === "undefined") {
    localStorage.setItem("theme", "white");
    localStorage.setItem("menu", JSON.stringify(List));
    document.getElementById("preview").style.display = "block";
    setTimeout(() => {
      document.getElementById("preview").style.opacity = 0;
    }, 4000);
    setTimeout(() => {
      document.getElementById("preview").style.display = "none";
    }, 4500);
  }

  addMenu();
  window.chooseFood();

  setTimeout(() => {
    console.clear();
    console.log('%c ', 'padding: 120px; margin-left: 100px; background-size: cover; background-image: url("https://i.imgur.com/uYSpFdl.png"');
    console.log('%c Copyright 2022. junhee, All rights reserved.', 'padding: 30px; font-size: 20px; font-weight: 100; font-family: sans-serif; color: rgba(255, 255, 255, .75)');
  }, 150);
})();
