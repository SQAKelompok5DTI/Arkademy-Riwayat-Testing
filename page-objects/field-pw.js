module.exports = {

    url: 'https://sso.arkademy.com/auth/realms/production/protocol/openid-connect/auth?client_id=arkademy-production-client&scope=openid%20email&response_type=code&redirect_uri=https%3A%2F%2Fservices.arkademy.com%2Fauth%2Flogin%2Fverify%3Ftoken%3D18d7c6c3ee5fc4123836e25adbacbfbd&nonce=141eae42-19d5-4081-a20a-e87bd615fe71&client_name=arkademy-prod',

    elements: {
        fieldPw: by.xpath("//input[@id='password']")
    },

    performFill: function () {

        var selector = page.fieldPw.elements.fieldPw;
        return driver.findElement(selector).sendKeys(shared.id.pw);
    }
};
