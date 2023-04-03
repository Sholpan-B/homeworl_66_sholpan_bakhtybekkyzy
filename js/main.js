console.log(document.getElementById('string-3').innerText)
console.log(document.getElementById('string-5').innerText)
console.log(document.getElementById('string-2').innerText)
console.log(document.getElementById('string-6').innerText)
console.log(document.getElementById('string-4').innerText)
console.log(document.getElementById('string-1').innerText)



const text = document.getElementsByClassName('element')
console.log(text[0].style.color = 'red')
console.log(text[1].style.color = 'red')
console.log(text[2].style.color = 'red')
console.log(text[3].style.color = 'green')
console.log(text[4].style.color = 'green')
console.log(text[5].style.color = 'green')



const container = document.getElementById('container');
const colors = ['green', 'red', 'blue', 'brown', 'yellow'];
for(let i = 1; i<=5; i++) {
    const div = document.createElement('div');
    div.classList.add('element');
    div.textContent = 'Element '
    const span = document.createElement('span')
    span.textContent = i
    span.style.color = colors[i-1];
    div.appendChild(span)
    container.appendChild(div)
}
