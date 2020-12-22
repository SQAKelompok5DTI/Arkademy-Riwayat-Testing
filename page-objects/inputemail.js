module.exports = {

    url: 'https://sso.arkademy.com/auth/realms/production/protocol/openid-connect/auth?client_id=arkademy-production-client&scope=openid%20email&response_type=code&redirect_uri=https%3A%2F%2Fservices.arkademy.com%2Fauth%2Flogin%2Fverify%3Ftoken%3Dbaa65378251f9016c7f04e6bca8eb308&nonce=57113f29-da19-4738-a861-3640f757c7f5&client_name=arkademy-prod',

    elements: {
        inputemail : by.xpath("//input[@id='username']")
    },

    performFill: function () {

        var selector = page.inputemail.elements.inputemail;
        return driver.findElement(selector).sendKeys(shared.data.emaillogin);
    }
};
