
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("site-nav");
  const overlay = document.getElementById("overlay");
  const toggle = document.querySelector(".menu-toggle");
  const body = document.body;

  if (toggle && menu && overlay) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("visible");
      overlay.classList.toggle("active");
      body.classList.toggle("menu-open");
    });

    overlay.addEventListener("click", function () {
      menu.classList.remove("visible");
      overlay.classList.remove("active");
      body.classList.remove("menu-open");
    });
  }

  // タイピング処理
  const text = `【19世紀のゆりかごから25世紀の墓場まで】
from 陰 _ 遊 _ テロ‪(¬_¬)ﾉ
本団体の公演は全年齢対象で、喘粘齢対象💥
in ? 誰かの衝動により、集団の中に座組がうまれる`;
  let index = 0;
  const typingElement = document.getElementById("typing-text");

  function typeChar() {
    if (index < text.length) {
      typingElement.innerHTML += text[index] === "\n" ? "<br>" : text[index];
      index++;
      setTimeout(typeChar, 60);
    }
  }
  typeChar();

  // スクロールでタイトルをフェードアウト
  const fadeTitle = document.querySelector('.fade-title');
  window.addEventListener('scroll', () => {
    if (fadeTitle) {
      fadeTitle.style.opacity = 1 - window.scrollY / 300;
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.createElement("div");
  overlay.className = "transition-overlay";
  overlay.style.color = getComputedStyle(document.body).backgroundColor;
  document.body.appendChild(overlay);
});
