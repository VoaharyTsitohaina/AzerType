let words = ["monster", "angel", "elephant", "horse", "guitar", "welcome", "ramdom"];

let proposal = document.querySelector("#proposal").value
let input = document.querySelector("input").value
let button = document.querySelector("button")
let score = document.querySelector("#score").value

    ;

function test(table) {
    let score = 0
    let word = words[Math.floor(Math.random() * words.length)]
    if(word == input) {
        score = "your score "+ score+1
    }
}