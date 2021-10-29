const btn = document.querySelector("#btn")
const h1 = document.querySelector("#h1")

btn.addEventListener("click", ()=>{
    fetch("https://api.chucknorris.io/jokes/random")
.then((res)=> res.json())
.then((joke) => {
   h1.textContent = joke.value
})
})

