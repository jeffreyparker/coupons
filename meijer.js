// Load https://www.meijer.com/mperks/coupons.html?icid=mPerks%3AHome%3ACoupons
// Open JS Console (F12 on chrome/edge/etc)
// Paste snippet below into console and hit enter
var offerButtons = Array.from(document.getElementsByClassName("coupon-tile__button--clip"));
var index;
for (index = 0; index < offerButtons.length; ++index) {
    console.log("Clicking offer button");
    offerButtons[index].click();
    // Wait 2seconds to be nice to servers :)
    await new Promise(r => setTimeout(r, 2000));
}
