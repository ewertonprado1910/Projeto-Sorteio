const buttonSortear = document.querySelector(".button-sortear")

function generationNumber() {

    const min = Math.ceil(document.querySelector(".input-left").value)
    const max = Math.floor(document.querySelector(".input-right").value)


    if (min >= max) {
        alert("O valor minimo tem que ser MENOR que o valor máximo")
    } else {
        const result = Math.floor(Math.random() * (max - min) + min)

        alert(result)

    }
}



buttonSortear.addEventListener("click", generationNumber)
