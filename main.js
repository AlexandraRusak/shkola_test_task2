function $(selector) {
    return document.querySelector(selector)
}


let display1 = $('.display1');
let display2 = $('.display2');
let buttons = document.querySelectorAll('button');
let clearbtn = $('#clear');
let evaluate = $('#evaluate');

let showValueOnPage = []

clearbtn.addEventListener("click", () => {

    showValueOnPage = [''];
    display2.innerHTML = 0;
})

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (!btn.id.match('erase')) {
            showValueOnPage.push(btn.value)
            display1.innerHTML = showValueOnPage.join('');
            if (btn.classList.contains('num_btn')) {
                display2.innerHTML = eval(showValueOnPage.join(''));
            }
        }
        if (btn.id.match('erase')) {
            showValueOnPage.pop();
            display1.innerHTML = showValueOnPage.join('');
            display2.innerHTML = eval(showValueOnPage.join(''));
        }
        if (btn.id.match('evaluate')) {
            display2.style.color = "white";
        }
        if (typeof eval(showValueOnPage.join('')) == 'undefined') {
            display2.innerHTML = 0
        }

    })
})
