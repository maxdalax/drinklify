let time = document.getElementById("time");

setInterval(() => {
    const s = new Date().getSeconds()
    const m = new Date().getMinutes()
    const h = new Date().getHours()

    time.innerHTML = h + ":" + m + ":" + s;  
}, 1000);

var options = {
    type: "basic",
    title: "My First Popup with Chrome",
    message: "Jacob suger",
    icon: "icon.png"
};

chrome.notification.create(options, callback);

console.log("Klar?");

function callback(){
    console.log("Popup done!");
}