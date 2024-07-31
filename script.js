const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");
btn.addEventListener("click",()=>{
    let inpWord = document.getElementById("inp-word").value;
    // console.log(inpWord);
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+inpWord).then((response) => response.json()).then((data) => {
        // console.log(data);
        result.innerHTML = `<div class="word flex justify-between mt-20">
        <p class="text-2xl text-black">${inpWord}</p>
        <button onclick="playSound()" class="bg-transparent border-none outline-none text-lg" style="color: #ae9cff;">
            <i class="fa-solid fa-volume-high"></i>
        </button>
    </div>
    <div class="details flex gap-3 text-gray-300 mt-1 mr-5 text-sm">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>/${data[0].phonetic}/</p>
    </div>
    <p class="word-meaning  text-gray-500">${data[0].meanings[0].definitions[0].definition}</p>
    <p class="word-example text-gray-500 italic border-l-4 border-solid border-violet-400 pl-5 mt-8">${data[0].meanings[0].definitions[0].example || ""}</p>`;
    sound.setAttribute("src",`${data[0].phonetics[0].audio}`);
    })
    .catch(()=>{
        result.innerHTML = `<p class="text-xl mt-3 pt-3 text-black">Couldn't Find The Word</p>`;
    });
});
function playSound(){
    sound.play();
}