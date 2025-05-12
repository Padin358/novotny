let visits = localStorage.getItem("visitNum") || 0
console.log(visits)
visits++
console.log(visits)
localStorage.setItem("visitNum", visits)
console.log(localStorage.getItem("visitNum"))
document.getElementById("visitCounter").innerText = `Počet návštěv: ${visits}`
console.log(visits)