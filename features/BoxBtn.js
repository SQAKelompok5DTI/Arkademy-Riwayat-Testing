module.exports = {

    url: 'https://www.arkademy.com/auth/signup',

    elements: {
        BoxBtn : by.xpath("//input[@id='check']")
    },

    performClick: function () {

        var selector = page.BoxBtn.elements.BoxBtn;
        return driver.findElement(selector).click();
    }
};
