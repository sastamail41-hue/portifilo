window.addEventListener("load", () => {
  document.querySelector(".loader").classList.add("hide");
});

const text = "+2 Student • AI Learner • Developer";
const typing = document.getElementById("typing");

let i = 0;

function type() {
  if (i < text.length) {
    typing.textContent += text.charAt(i);
    i++;
    setTimeout(type, 70);
  }
}

type();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
});

document.querySelectorAll(".reveal").forEach(el=>{
  observer.observe(el);
});
