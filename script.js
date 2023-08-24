
function display(value) {
     document.getElementById("space").value+=value
}
function clr() {
    document.getElementById("space").value=""
    console.log("hello")
}
function solve(event) {
    let x=document.getElementById('space').value
    let y=eval(x)
    document.getElementById('space').value=y
    console.log(y)

} 
 function returnkey(event) {
    if (event.key === "Enter") {
        solve();
        console.log("results")
    }
 }
 const space=document.getElementById('space')
 space.addEventListener("keypress",returnkey)

