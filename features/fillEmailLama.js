module.exports = {

    url: 'https://www.arkademy.com/auth/signup',

    elements: {
        fillEmailLama : by.xpath("//body/main[1]/section[1]/section[1]/div[1]/section[1]/section[1]/section[2]/section[1]/section[2]/section[2]/section[1]/input[1]")
    },

    performFill: function () {

        var selector = page.fillEmailLama.elements.fillEmailLama;
        return driver.findElement(selector).sendKeys(shared.id.emailLama);
    }
};
