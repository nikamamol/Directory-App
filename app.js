let serchInput = document.getElementById("searchInput")
let searchBtn = document.getElementById("searchBtn")


const getData = async (serchValue) => {
    let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${serchValue}`)
    let jsonData = await data.json()

    document.querySelector(".text").innerHTML = ""
    let div = document.createElement("div")
    div.classList.add("detail")
    div.innerHTML = `
     <h2>Word : <span>${jsonData[0].word}</span></h2>
        <p>${jsonData[0].meanings[0].partOfSpeech}</p>
        <p>Meaning : <span>${jsonData[0].meanings[0].definitions[0].definition}</span></p>

        <p>Example : <span>${jsonData[0].meanings[0].definitions[0].example === undefined ? "Not Found" : jsonData[0].meanings[0].definitions[0].example}</span></p>
        
      <p>Synonyms : <span>${jsonData[0].meanings[0].synonyms === undefined ? "Not Found" : jsonData[0].meanings[0].synonyms}</span></p>
       
        <a href=${jsonData[0].sourceUrls} target="_blank">Read More....</a>
    `
    document.querySelector(".text").appendChild(div)

}
searchBtn.addEventListener("click", function () {
    let serchValue = serchInput.value;
    if (serchValue == "") {
        alert("First Enter Word")
    } else {
        getData(serchValue)
    }
})
