let more = document.getElementById("more")
let agregar = document.getElementById("agregar")

function add () {
    console.log("clicked")
    agregar.innerHTML = `
    <a href="https://emojis-bpadros.netlify.app/"target="_blank"  class="link-js">Emojis</a>
    <a href="https://blackjack-bpadros.netlify.app/" target="_blank" class="link-js">Blackjack</a>
    <a href="https://passanger-counter-bpadros-f.netlify.app/"target="_blank" class="link-js">Counter</a>
    <a href="https://unit-converter-bpadros.netlify.app/" target="_blank" class="link-js">Unit</a>
    
  `
}



// function add () {
//     console.log("clicked")
//     agregar.innerHTML = `<ul>
//     <li>Proyecto 1</li>
//     <li>Proyecto 2</li>
//     <li>Proyecto 3</li>
//     <li>Proyecto 4</li>
//   </ul>
//   `
// }

