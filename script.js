const url ="https://api.dictionaryapi.dev/api/v2/entries/en/";
const output = document.getElementById("output");
const voice = document.getElementById("voice");
const button = document.getElementById("btn");
btn.addEventListener("click",()=>{
    let search = document.getElementById("search").value;
    console.log(search);
    fetch(`${url}${search}`).then(response => response.json()).then((data) => {
        console.log(data);
        output.innerHTML = `<div class="word">
            <h3>${search}</h3>
            <button onclick="playVoice() ">
                <i class="fa-solid fa-volume-high"></i>
            </button>
        </div>
        <div class="info">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>${data[0].phonetic}</p>
        </div>
        <p class="meaning">${data[0].meanings[0].definitions[0].definition}</p>
        <p class="example">${data[0].meanings[0].definitions[0].example || "no examples available"}</p>`;
        voice.setAttribute("src",`https:${data[0].phonetics[0].audio}`);
    })
    .catch (()=>{
        output.innerHTML = `<p class="error">Sorry! No results found.</p>`;
    })
})
function playVoice() {
    voice.play();
}
