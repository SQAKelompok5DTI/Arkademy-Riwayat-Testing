module.exports = {

    url: 'https://sso.arkademy.com/auth/realms/production/protocol/openid-connect/auth?client_id=arkademy-production-client&scope=openid%20email&response_type=code&redirect_uri=https%3A%2F%2Fservices.arkademy.com%2Fauth%2Flogin%2Fverify%3Ftoken%3D93329c714eca5c45c41320358bc2ed7d&nonce=06b40e9b-ed7e-4c63-9083-d892ddc7964a&client_name=arkademy-prod',

    elements: {
        clickLoginButton: by.xpath("//button[normalize-space()='Masuk']")
    },

    perform: function () {

        var selector = page.clickLoginButton.elements.clickLoginButton;
        return driver.findElement(selector).click(selector);
    }
};