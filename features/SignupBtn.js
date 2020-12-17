module.exports = {

    url: 'https://www.arkademy.com/auth/signup',

    elements: {
        SignupBtn : by.xpath("//body/main[1]/section[1]/section[1]/div[1]/section[1]/section[1]/section[2]/section[1]/section[2]/section[7]/button[1]")
    },

    performClick: function () {

        var selector = page.SignupBtn.elements.SignupBtn;
        return driver.findElement(selector).click();
    }
};
