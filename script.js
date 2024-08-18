;
let showbtns = document.querySelectorAll('.plus-cros-icon');
let hiddenText =  document.querySelector('.doubt-lines-text');

// showbtn.addEventListener("click", () => {
//     hideShow(display)
// }
// )

showbtns.forEach((showbtn, display) => {
        showbtn.addEventListener("click", () => {
            if (display === 1) {
                hiddenText.style.display = 'block';
                display = 0;
            }
            else {
                hiddenText.style.display = 'none';
                display = 1;
            }
            }
        )
})