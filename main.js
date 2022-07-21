window.addEventListener("scroll",myprogress);

function myprogress() {
    const triggerProgress = (window.innerHeight / 8) * 4;
    const progressTop = document.getElementById("textskills");
  
    const progressStart = progressTop.getBoundingClientRect().top;
  
    if (progressStart < triggerProgress){
//html
const progress =document.getElementById("progressHtmlDone");
progress.style.width = progress.getAttribute("workdone");
//css
const progress1 =document.getElementById("progressCSSDone");
progress1.style.width = progress1.getAttribute("workdone");
//js
const progress2 =document.getElementById("progressJavaScriptDone");
progress2.style.width = progress2.getAttribute("workdone");
//sass
const progress3 =document.getElementById("progressSASSDone");
progress3.style.width = progress3.getAttribute("workdone");
//reactjs
const progress4 =document.getElementById("progressREACTJSDone");
progress4.style.width = progress4.getAttribute("workdone");
//python
const progress5 =document.getElementById("progressPythonDone");
progress5.style.width = progress5.getAttribute("workdone");
}
}
////
const counters = document.querySelectorAll(".counter");
counters.forEach(function (counter) {
  counter.innerText = "0";
  updatecounter();

  function updatecounter() {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 1000;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updatecounter, 10);
    } else {
      counter.innerText = target;
    }
  }
});
////////

/////////////
// const btn = document.querySelector( '#btn' );
// const text = document.querySelector( '.show' );
// btn.addEventListener( 'click', function() {
//     text.classList.toggle( 'hide' )

//     btn.textContent == "Read More"
//         ? ( btn.textContent = "Read Less" )
//         : ( btn.textContent = "Read More" );


// } )
// const btn1 = document.querySelector( '#btn-1' );
// const text1 = document.querySelector( '.show-1' );
// btn1.addEventListener( 'click', function() {
//     text1.classList.toggle( 'hide-1' )

//     btn1.textContent == "Read More"
//         ? ( btn1.textContent = "Read Less" )
//         : ( btn1.textContent = "Read More" );


// } )

///////////


