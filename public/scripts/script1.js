const numpie = document.getElementById("numberpie2");
const receivedPoints = document.getElementById("receivedPoints");
const sentPoints = document.getElementById("sentPoints");
    
    
    function receivedSentRewards (e){
        if(e.target.innerText == "Recibidos") numpie.innerHTML = `<%= studentReceivedRewards[0][0].points %>`;
        if(e.target.innerText == "Enviados") numpie.innerHTML = `<%= studentSentRewards[0][0].points %>`;
    }
    
receivedPoints.addEventListener("click", receivedSentRewards);
sentPoints.addEventListener("click", receivedSentRewards);