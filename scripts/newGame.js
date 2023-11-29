function validateInput(event) {
    if (event.target.value.length >= 3) {
        newGameButton.removeAttribute("disabled")
    } else {
        newGameButton.setAttribute
    ("disabled", "true")
    }
}
function hadleSubmitNewGame(event) {
    event.preventDefault();
    console.log(inputName.value);
    localStorage.setItem("@memory_game:playerName", inputName.value);
    inputName.value = ""
    window.location.href = "pages/cards.html"
}

function navigationToRank() {
    window.location.href = "pages/rank.html"
}

const inputName = document.querySelector(".inputName")
const newGameButton = document.querySelector(".newGameButton")
const newGameForm = document.querySelector(".newGameForm")
const buttonRank = document.querySelector(".buttonRank")

inputName.addEventListener("input", validateInput)
newGameForm.addEventListener("submit", hadleSubmitNewGame)
buttonRank.addEventListener("click", navigationToRank)