
/*
chrome.runtime.onInstalled.addListener(function() {
  setInterval(function(){
    chrome.notifications.create( //FÖrstå chrome.notifications.create
      "DrickVatten", ----
      {
        type: 'basic',
        title:"drick vatten",
        message:"Drick drick"
      },
      function(){

      })
  }, 5000)
});
*/
/*
chrome.runtime.onMessage.addListener(data => {
  if (data.type === 'notification') {
    chrome.notifications.create('', data.options);
  }
});
*/

console.log("in background script")

let defaultDuration = 1.0;

chrome.alarms.onAlarm.addListener(function (alarm) {
  console.log(alarm)
  chrome.notifications.create("", {
    type: "basic",
    iconUrl: "icon.png",
    title: "Drink Water",
    "message": "Dumy notifications"
  }, function (notificationID) {
    console.log("displayed the notification")
  })
});

function createAlarm() {
  chrome.alarms.create("drink water", { delayInMinutes: defaultDuration });
}

createAlarm()

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log("Event recieved in background page");
    defaultDuration = request.minutes * 1.0;
    createAlarm()
    sendResponse({ success: true });
  });