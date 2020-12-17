module.exports = function () {
    //Scenario #2
    this.Given(/^user browse login page1$/, function () {
        helpers.loadPage('https://sso.arkademy.com/auth/realms/production/protocol/openid-connect/auth?client_id=arkademy-production-client&scope=openid%20email&response_type=code&redirect_uri=https%3A%2F%2Fservices.arkademy.com%2Fauth%2Flogin%2Fverify%3Ftoken%3D18d7c6c3ee5fc4123836e25adbacbfbd&nonce=141eae42-19d5-4081-a20a-e87bd615fe71&client_name=arkademy-prod/')
    });

    this.Given(/^user fill email field1$/, function () {
        driver.then(function () {
            return page.fieldEmail.performFill();

        });
    });

    this.Given(/^user fill password field1$/, function () {
        driver.then(function () {
            return page.fieldWrongpw.performFill();

        });
    });

    this.When(/^user click login button1$/, function () {
        driver.then(function () {
            return page.loginBtn.performClick();

        });
    });

    this.Then(/^user see login page and login failed notification$/, function () {
        return driver.findElements(by.xpath("//section[@class='alert alert--danger']"))

            .then(function (elements){

                //verify this element has children
                expect(elements.length).to.equal(1);
            });
    });

}