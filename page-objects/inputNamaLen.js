module.exports = {

    url: 'https://www.arkademy.com/profile/update',

    elements: {
        inputNamaLen : by.xpath("/html[1]/body[1]/main[1]/section[1]/section[1]/div[1]/section[1]/section[1]/section[2]/section[1]/section[2]/section[1]/section[1]/input[1]")
    },

    performFill: function () {

        var selector = page.inputNamaLen.elements.inputNamaLen;
        return driver.findElement(selector).sendKeys(shared.data.namalen);
    }
};
