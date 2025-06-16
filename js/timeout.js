let timeout;

function resetTimer() {
    clearTimeout(timeout);
    timeout = setTimeout(() =>{
        window.location.href = "/pages/Index.html";
    }, 30000); 
    console.log("Timer reset");
}

resetTimer();

document.addEventListener("click", resetTimer);