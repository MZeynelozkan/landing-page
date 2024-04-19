"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerButton = document.querySelector(".drop-down img");

  const overlay = document.querySelector(".overlay");

  const navlistContainer = document.querySelector(".navlist_container");

  hamburgerButton.addEventListener("click", function () {
    // Overlay ve navlist container için 'active' sınıfını ekleyip çıkararak overlay'i açma/kapatma
    overlay.classList.toggle("active");
    navlistContainer.classList.toggle("active");

    // Hamburger butonuna 'active' sınıfını ekleyip çıkararak simgeyi değiştirme
    hamburgerButton.classList.toggle("active");

    // Hamburger butonundaki 'active' sınıfının var olup olmadığını kontrol eder
    if (hamburgerButton.classList.contains("active")) {
      // Hamburger butonu aktif hale gelirse, kapalı simgeyi kullanır
      hamburgerButton.src = "/images/icon-close.svg";
    } else {
      // Hamburger butonu aktif değilse, açık simgeyi kullanır
      hamburgerButton.src = "/images/icon-hamburger.svg";
    }
  });

  overlay.addEventListener("click", function () {
    overlay.classList.remove("active");
    navlistContainer.classList.remove("active");

    hamburgerButton.classList.remove("active");
    hamburgerButton.src = "/images/icon-hamburger.svg";
  });
});
