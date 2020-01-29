import { Given, When, Then } from 'cucumber';
import LogInPage from 'src/pages/LogInPage';
import { expect } from 'chai';
import { config } from 'src/config';

Given('I am on the login page', function() {
    // Write code here that turns the phrase above into concrete actions
    browser.url('http://the-internet.herokuapp.com/login');
});
When('I enter username and password', function() {
    // Write code here that turns the phrase above into concrete actions
    LogInPage.username.setValue('tomsmith');
    LogInPage.password.setValue('SuperSecretPassword!');
    LogInPage.submit.click();
});
Then('I should see a correct login message', function() {
    // Write code here that turns the phrase above into concrete actions
    expect(LogInPage.flash).to.include('You logged into a secure area!');
});
