/*let time = document.getElementById("time");

setInterval(() => {
    const s = new Date().getSeconds()
    const m = new Date().getMinutes()
    const h = new Date().getHours()

    time.innerHTML = h + ":" + m + ":" + s;  

    /*if(s % 2 == 0){
       
            chrome.runtime.sendMessage('', {
              type: 'notification',
              options: {
                title: 'Just wanted to notify you',
                message: 'How great it is!',
                iconUrl: '/icon.png',
                type: 'basic'
              }
            
          });           
    }
}, 1000); 
*/

document.getElementById("add").addEventListener("click", remind);

function remind(){
  const minutes = parseInt(document.getElementById("num").value);

  if(isNaN(minutes)){
    console.log("It's not a number");
  }else{
    console.log(minutes);
    chrome.runtime.sendMessage({minutes}, function(response) {
      console.log(response);
    });
  }
}