const email_list = document.querySelector(".email_list")
email_list.onclick = () =>{
    axios({
        method: "POST",
        url: `https://micro-servisec.herokuapp.com/join-email-list`,
        headers: { 
            "Content-Type": "application/json", 
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Methods":"GET,PUT,POST,",
            "x-access-token": localStorage.getItem('x-access-token')
            },
}).then(res =>{
    alert("You have successfully joined our mailing list")
}).catch(res =>{
    console.log("An error occurred")
})
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    }