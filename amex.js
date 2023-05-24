// From https://www.reddit.com/r/amex/comments/nrlmbs/mostly_automated_way_to_add_all_offers/
// Load https://global.americanexpress.com/offers/eligible
// Open JS Console (F12 on chrome/edge/etc)
// Paste snippet below into console and hit enter
// Wait. Eventually it'll click all the buttons it can find, reload the page and redo step 3 if more offers.
// Find all the "Add to Card" buttons on the page
var offerButtons = Array.from(document.getElementsByClassName("offer-cta")).filter(btn => btn.title == "Add to Card");
var index;
for (index = 0; index < offerButtons.length; ++index) {
    console.log("Clicking offer button");
    offerButtons[index].click();
    // Wait 2seconds to be nice to AMEX servers :)
    await new Promise(r => setTimeout(r, 2000));
}
