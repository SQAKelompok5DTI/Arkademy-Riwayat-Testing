module.exports = {

    url: 'https://www.arkademy.com/bootcamp',

    elements: {
        clickPofile: by.xpath("//img[@class='avatar']")
    },

    perform: function () {

        var selector = page.clickPofile.elements.clickPofile;
        return driver.findElement(selector).click(selector);
    }
};