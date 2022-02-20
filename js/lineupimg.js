const imgBoxFirst = document.querySelector(".imgbox img:nth-child(1)");
const imgBoxSecond = document.querySelector(".imgbox img:nth-child(2)");
const imgBoxLast = document.querySelector(".imgbox img:nth-child(3)");

const btn = document.querySelector("#button");

function clickbtn() {
  const CLICKED = "hiddenimg";
  const CLICKEDSHOW = "imgboximg";
  if (imgBoxFirst.classList.contains(CLICKED)) {
    imgBoxFirst.classList.remove(CLICKED);
    imgBoxSecond.classList.remove(CLICKED);
    imgBoxLast.classList.remove(CLICKED);
    imgBoxFirst.classList.add(CLICKEDSHOW);
    imgBoxSecond.classList.add(CLICKEDSHOW);
    imgBoxLast.classList.add(CLICKEDSHOW);
    btn.innerText = "LineUp Close Button";
  } else {
    imgBoxFirst.classList.add(CLICKED);
    imgBoxSecond.classList.add(CLICKED);
    imgBoxLast.classList.add(CLICKED);
    imgBoxFirst.classList.remove(CLICKEDSHOW);
    imgBoxSecond.classList.remove(CLICKEDSHOW);
    imgBoxLast.classList.remove(CLICKEDSHOW);
    btn.innerText = "LineUp Show Button";
  }
}

btn.addEventListener("click", clickbtn);
