function click1(){
    document.getElementById("1").style.visibility = "hidden"
document.getElementById("2").innerHTML = `
<p> Welcome to new page </p>
<button onclick="emre()">Return to the home page </button>
`

}

function emre(){
    window.location.href = "index.html"
   
}
