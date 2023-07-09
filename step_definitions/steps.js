const { assert } = require("chai");

const { I } = inject();
// Add in your custom step files

Given('I am on the Oranum website', () => {  
  I.amOnPage('/en/');  
});

When('I enter {string} into the search box',  (searchText)=> {
   I.fillField("input[placeholder='Search for Expert or category']", searchText);
   console.log(searchText)
   I.pressKey("Enter");
});

Then('the search results should contain {string}', async (searchText)=> {
  const results = await I.grabTextFromAll( ".thumb-container.page-item div[class='thumb-data-item--name']" ); console.log(results);
  const searchTextLowerCase = searchText.toLowerCase(); console.log(searchTextLowerCase);
  
  results.forEach((result) => {
    assert.notInclude(result,searchTextLowerCase)
  });
});

Then('the {string}\'s profile should be displayed', async (profileName)=> {
  const profileTitle = (await I.grabTextFrom(".thumb-data-item--name")).trim(); console.log(profileTitle);
  assert.include(profileName,profileTitle.trim())
});

Given('I am on a live psychic\'s page', () => {
   I.amOnPage('/en/chat/LovePsychyicAnie');
});

When('I click on the {string} button', (buttonName) => {
  switch (buttonName) {
    case 'Get Credits':
       I.click(".js_tooltip_icon.mc_icon.mc_icon--coins");
      break;
    case 'Add to favorites':
       I.click(".mc_heart_icon_right.mc_icon.mc_icon--heart");
      break;
    case 'Surprise buttons':
        I.click(".mc_surprise_item.mc_surprise_item--small.mc_surprise_item--selected");
      break;
    case 'Call me button':
        I.click(".mc_text.mc_text--l.mc_text--bold");
      break;
    case 'Buy credits button':
        I.click(".mc_toggle_action_button__label");
      break;  
    default:
      throw new Error(`Invalid button name: ${buttonName}`);
  }
});


Then('the {string} overlay should be displayed', (overlayName) => {
  switch (overlayName) {
    case 'Sign up':
      I.seeElement(".mc_dialog--l.mc_dialog.mc_dialog--content_centred.mc_dialog--guest_timeout"); 
      break;
    default:
      throw new Error(`Invalid overlay name: ${overlayName}`);
  }
});




