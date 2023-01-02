// Load https://www.target.com/circle/offers/recommended
// Open JS Console (F12 on chrome/edge/etc)
// Paste snippet below into console and hit enter
var offerButtons = Array.from(document.getElementsByTagName("div")).filter(div => div.innerHTML == "Save offer");
var index;
for (index = 0; index < offerButtons.length; ++index) {
    console.log("Clicking offer button");
    offerButtons[index].click();
    // Wait 2seconds to be nice to servers :)
    await new Promise(r => setTimeout(r, 2000));
}
