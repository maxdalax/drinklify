console.log("in background script")

let defaultDuration = 60.0;

chrome.alarms.onAlarm.addListener(function (alarm) {
  console.log(alarm)
  chrome.notifications.create("", {
    type: "basic",
    iconUrl: "icon.png",
    title: "Drink Water",
    "message": "Time to drink! (≧ロ≦)"
  }, function (notificationID) {
    console.log("displayed the notification")
  })
});

function createAlarm() {
  chrome.alarms.create("drink water", { periodInMinutes: defaultDuration });
}

createAlarm()

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log("Event recieved in background page");
    defaultDuration = request.minutes * 60.0;
    createAlarm()
    sendResponse({ success: true });
  });