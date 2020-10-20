chrome.runtime.onInstalled.addListener(function() {
  setInterval(function(){
    chrome.notifications.create(
      "DrickVatten", ----
      {
        type: 'basic',
        title:"drick vatten",
        message:"Drick drick"
      },
      function(){

      })
  }, 50000000)
});