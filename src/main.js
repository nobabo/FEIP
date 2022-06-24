const List = localStorage.getItem("menu") ? JSON.parse(localStorage.getItem("menu")) : ["족발", "보쌈", "국밥", "파스타", "초밥", "스시", "짜장면", "삼각김밥", "라면"]; // 기본 음식 리스트

function addMenu() { // 메뉴 추가 함수
  document.getElementsByClassName('menuArea')[0].innerHTML = `<p class="input">추가된 메뉴의 명단이에요.</p>`; // menuArea 섹션에 Div로 직접 추가됨

  List.map(menu => { // 리스트 매핑
    document.getElementsByClassName('menuArea')[0].innerHTML += `<div class="circle">${menu}</div>`; // menuArea 섹션에 Div로 직접 추가됨
  });
}

window.addEventListener('scroll', () => { // 스크롤 시 이벤트 발생 함수
	if (window.scrollY > 0) { // 스크롤을 할 경우
    document.getElementById('top').style.opacity = 1;
    document.getElementById('top').style.display = "block"; // 상단 스크롤 버튼 생성
  } else {
    document.getElementById('top').style.opacity = 0;
    setTimeout(() => {
      document.getElementById('top').style.display = "none"; // 상단 스크롤 버튼 제거
    }, 500);
  }

  if (window.scrollY <= window.innerHeight * 2) { // 스크롤을 맨 아래까지 하지 않을 경우
    document.getElementById('bottom').style.opacity = 1;
    document.getElementById('bottom').style.display = "block"; // 하단 스크롤 버튼 생성
  } else {
    document.getElementById('bottom').style.opacity = 0;
    setTimeout(() => {
      document.getElementById('bottom').style.display = "none"; // 하단 스크롤 버튼 제거
    }, 500);
  }
});

window.chooseFood = () => { // 음식 선택 함수
  document.getElementById("background").style.opacity = 0; // 배경 제거
  setTimeout(() => {
    document.getElementById("background").style.backgroundImage = `url('./src/img/${Math.floor(Math.random() * 9) + 1}.jpg')`; // 배경 랜덤선택
    document.getElementById("background").style.opacity = 0.15;
  }, 300);
  document.getElementsByClassName('food')[0].innerHTML = List[Math.floor(Math.random() * List.length)]; // 음식 텍스트 랜덤 선택
}

window.toPrev = () => { // 상단 스크롤 함수
  window.scrollY >= window.innerHeight * 3 ? window.scrollTo(0, window.innerHeight * 2) : window.scrollY >= window.innerHeight * 2 ? window.scrollTo(0, window.innerHeight) : window.scrollTo(0, 0);
};


window.toNext = () => { // 하단 스크롤 함수
  window.scrollY >= window.innerHeight * 2 ? window.scrollTo(0, window.innerHeight * 3) : window.scrollY >= window.innerHeight ? window.scrollTo(0, window.innerHeight * 2) : window.scrollTo(0, window.innerHeight);
};

window.add = () => { // 리스트 및 로컬 스토리지에 입력한 메뉴를 추가하는 함수
  const text = document.getElementById("menu").value;

  if (List.indexOf(text) > -1) List.splice(List.indexOf(text), 1); // 리스트 검색 후 이미 존재하는 메뉴인 경우 해당 메뉴 삭제
  else List.push(text);

  localStorage.setItem("menu", JSON.stringify(List)); // 로컬 스토리지 동기화
  addMenu();
}

window.onload = (() => { // 페이지 로딩 시 자동실행
  if (typeof localStorage.theme === "undefined") { // 페이지에 처음 방문한 경우
    localStorage.setItem("theme", "white"); // 테마 설정 기능, 추후 개선 예정
    localStorage.setItem("menu", JSON.stringify(List)); // 로컬 스토리지 내 리스트 동기화
    document.getElementById("preview").style.display = "block"; // 로딩 프리뷰 페이지 활성화
    setTimeout(() => {
      document.getElementById("preview").style.opacity = 0;
    }, 4000);
    setTimeout(() => {
      document.getElementById("preview").style.display = "none"; // 4.5초 경과 후 로딩 프리뷰 페이지 비활성화
    }, 4500);
  }

  addMenu();
  window.chooseFood();

  setTimeout(() => {
    console.clear();
    console.log('%c ', 'padding: 120px; margin-left: 100px; background-size: cover; background-image: url("https://i.imgur.com/uYSpFdl.png"');
    console.log('%c Copyright 2022. 윤준희, All rights reserved.', 'padding: 30px; font-size: 20px; font-weight: 100; font-family: sans-serif; color: rgba(255, 255, 255, .75)'); // 로컬 스토리지 동기화
  }, 150);
})();
