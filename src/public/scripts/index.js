window.onload = () => {
    // this code will execute when loads the main page
    const indexTitle = document.querySelector(".index-title");
    const indexButton = document.getElementById("index-main-button");

    indexButton.addEventListener("click", () => {
        if (!indexTitle.value) return alert("No hay nada que copiar");
        else return copyButtonPressed(indexButton, indexTitle);
    });

    indexTitle.addEventListener("click", () => {
        indexButton.innerHTML = "Copy text";
        indexButton.style.backgroundColor = "rgb(35, 97, 255)";
    })

    const copyButtonPressed = (button, textToCopy) => {
        button.innerHTML = "Coppied text";
        button.style.backgroundColor = "#33D30C";
        button.style.boxShadow = "none";
        textToCopy.select();
        document.execCommand("copy");
        return "copied text";
    }
}