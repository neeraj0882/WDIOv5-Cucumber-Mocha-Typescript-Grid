import { assert } from 'chai';
import { Given, When, Then } from 'cucumber';
import homepage from '../pages/Homepage';

// @binding()
// export class HomepageSearchSteps {
//     @given(/^I am on the search page$/)
//     public async givenOnHomepage() {
//         homepage.open();
//         const title = browser.getTitle();

//         assert.equal(title, 'Google');
//     }

//     @when(/^I enter "([^"]*)" into the search box$/)
//     public whenIEnterSearchText(arg1) {
//         homepage.enterText(arg1);
//     }

//     @when(/^I click the search button$/)
//     public whenSearchClicked() {
//         homepage.search();
//     }

//     @then(/^I should see a list of search results$/)
//     public resultsShouldShow() {
//         assert.isTrue(homepage.isSearched());
//     }
//}
Given('I am on the search page', function() {
    // Write code here that turns the phrase above into concrete actions
    homepage.open();
    const title = browser.getTitle();
    assert.equal(title, 'Google');
});
When('I enter {string} into the search box', function(arg1) {
    // Write code here that turns the phrase above into concrete actions
    homepage.enterText(arg1);
});
When('I click the search button', function() {
    // Write code here that turns the phrase above into concrete actions
    homepage.search();
});
Then('I should see a list of search results', function() {
    // Write code here that turns the phrase above into concrete actions
    assert.isTrue(homepage.isSearched());
});
