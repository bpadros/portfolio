let btnmore = document.getElementById("btn-moree")
let more = document.getElementById("more")



btnmore.addEventListener("click",function(){
    console.log("clikee")
    more.innerHTML =  `<section class="sec-more-projects">
    <a href="https://calculadorajavascriptcss.netlify.app/" target="_blank">Calculator</a>
    <a href="https://bpadros.github.io/wordcounter/" target="_blank">Word counter</a>
    <a href="https://clinquant-heliotrope-00c2be.netlify.app/" target="_blank">Basketball score</a>
    <a href="https://bpadros.github.io/crud-cafe/" target="_blank">CRUD Cafe</a>
    </section><br>
    <section class="sec-more-projects">
    <a href="" target="_blank">Dice game</a>
    <a href="https://emojis-bpadros.netlify.app/"target="_blank">Emoji</a>
    <a href="">Random password</a>
    <a href="https://reloj-color.netlify.app/"target="_blank">Watch</a>
    </section>
    </section><br>
    <section class="sec-more-projects">
    <a href="https://bpadros.github.io/meme_generator/"target="_blank">Meme generator</a>
    <a href="https://blackjack-bpadros.netlify.app/"target="_blank">Blackjack</a>
    <a href="https://unit-converter-bpadros.netlify.app/"target="_blank">Unit converter</a>
    <a href="https://passanger-counter-bpadros-f.netlify.app/"target="_blank">Counter</a>
    </section> `
})

