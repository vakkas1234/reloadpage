function click1(){
    document.getElementById("1").style.visibility = "hidden"
document.getElementById("2").innerHTML = `
<p> Welcome to new page </p>
<button onclick="click2()">Return to the home page </button>
`

}

function click2(){
    history.back()
}