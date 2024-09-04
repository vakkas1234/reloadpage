
const maincontent = document.getElementById("3").innerHTML
window.onload = function(){
    const savedcontent = localStorage.getItem("content")
    const isInitial = localStorage.getItem("isInitial")
    if(savedcontent){
    document.getElementById("2").innerHTML = savedcontent
    if(isInitial === "false"){
        document.getElementById("1").style.visibility = "hidden"
       
    }

    
    }
    else{
         const initialcontent = document.getElementById("2").innerHTML
         localStorage.setItem("content", initialcontent)
         localStorage.setItem("isInitial" , "true")
    }
}
function click1(){

    const newcontent = `
    <p>Welcome to new page </p>
    <a href="#" onclick="click2()">go back </a>

    `
    document.getElementById("2").innerHTML = newcontent
    document.getElementById("1").style.visibility  = "hidden"
    localStorage.setItem("content", newcontent)
    localStorage.setItem("isInitial" , "false")
}
function click2(){
    document.getElementById("2").innerHTML = maincontent
    document.getElementById("1").style.visibility = "visible"
    localStorage.setItem("content" , maincontent)
    localStorage.setItem("isInitial" , "true")
}
