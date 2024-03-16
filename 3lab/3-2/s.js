let circle = document.getElementById("circle");

function circleMove(e) {
  circle.style.left = e.clientX - circle.offsetWidth / 2 + "px";
  circle.style.top = e.clientY - circle.offsetHeight / 2 + "px";
}

circle.addEventListener("mousemove", circleMove);


















































































































// document.addEventListener('DOMContentLoaded', function() {
//     const circle = document.getElementById('circle');

//     document.addEventListener('mousemove', function(e) {
//         const x = e.clientX;
//         const y = e.clientY;

//         circle.style.left = x - circle.offsetWidth / 2 + 'px';
//         circle.style.top = y - circle.offsetHeight / 2 + 'px';
//     });
// });
