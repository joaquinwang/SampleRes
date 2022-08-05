const jokeElement = document.getElementById("joke")
const jokeButton = document.getElementById("jokeButton")
 
jokeButton.addEventListener("click", generateJoke)

function generateJoke(){
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit"
    , {headers: {"Accept":"application/json"}})
        .then((response)=> response.json()) 
        .then((data)=> {
            if (data.joke == undefined) { jokeElement.innerHTML = (data.setup + " " + data.delivery)
              } else {jokeElement.innerHTML = data.joke
              }})
        
}

