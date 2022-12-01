const bg = document.querySelector(".burger_wrap");
const bg_h = document.querySelector("header");
const bg_w = document.querySelector(".gnb_wrap");
const sGnb = document.querySelectorAll(".s_gnb li a");

bg.addEventListener("click", function (e) {
  bg_h.classList.toggle("on");
  bg.classList.toggle("on");

  bg_w.classList.toggle("on");
});
//카운트 함수

let countBox = document.querySelector(".count"),
  count = 0;

window.addEventListener("scroll", function () {
  console.log(window.scrollY);

  if (window.scrollY > 2510) {
    let counting = setInterval(function () {
      let aa = 88888;
      if (count >= 5202386) {
        clearInterval(counting);
        return false;
      }
      aa / 4;
      count += aa;

      countBox.innerHTML = new Intl.NumberFormat().format(count);
    }, 300);
  }
});

const items = document.querySelectorAll(".qus");
const backBox = document.querySelectorAll(".qus_back");
const back1 = document.querySelector("#A");
const back2 = document.querySelector("#B");
const back3 = document.querySelector("#C");
const back4 = document.querySelector("#D");
for (const aa of items) {
  aa.addEventListener("click", function (e) {
    //클릭한 이미지의 src값 , h2값 , p값 를 받아옴
    console.log(aa);
    e.preventDefault();
    switch (aa.id) {
      case "a":
        back1.classList.add("on");
        break;
      case "b":
        back2.classList.add("on");
        console.log("bbb");
        break;
      case "c":
        console.log("ccc");
        back3.classList.add("on");
        break;
      case "d":
        console.log("ddd");
        back4.classList.add("on");
        break;
    }
  });
}

for (const aa of backBox) {
  aa.addEventListener("click", function (e) {
    console.log("작동");
    aa.classList.remove("on");
  });
}
//클릭시 카테고리 바뀌며 이미지 전환
const A = document.querySelectorAll(".A_list1");
const B = document.querySelectorAll(".B_list2");
const C = document.querySelectorAll(".C_list3");
const D = document.querySelectorAll(".D_list4");
const E = document.querySelectorAll(".E_list5");
const F = document.querySelectorAll(".F_list6");
const G = document.querySelectorAll(".G_list7");
const list = document.querySelectorAll(".list");

for (const aa of sGnb) {
  aa.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(aa);

    for (const aa of sGnb) {
      aa.classList.remove(aa.classList[1]);
    }

    e.target.classList.add("pad");
    switch (aa.classList[0]) {
      case "a":
        for (const aa of list) {
          aa.classList.remove("show");
        }
        for (const aa of A) {
          aa.classList.add("show");
        }

        break;
      case "b":
        for (const aa of list) {
          aa.classList.remove("show");
        }
        for (const aa of B) {
          aa.classList.add("show");
        }
        break;
      case "c":
        for (const aa of list) {
          aa.classList.remove("show");
        }
        for (const aa of C) {
          aa.classList.add("show");
        }
        break;
      case "d":
        for (const aa of list) {
          aa.classList.remove("show");
        }
        for (const aa of D) {
          aa.classList.add("show");
        }
        break;
      case "e":
        for (const aa of list) {
          aa.classList.remove("show");
        }
        for (const aa of E) {
          aa.classList.add("show");
        }
        break;
      case "f":
        for (const aa of list) {
          aa.classList.remove("show");
        }
        for (const aa of F) {
          aa.classList.add("show");
        }
        break;
      case "g":
        for (const aa of list) {
          aa.classList.remove("show");
        }
        for (const aa of G) {
          aa.classList.add("show");
        }
        break;
    }
  });
}
