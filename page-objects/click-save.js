module.exports = {

    url: 'https://www.arkademy.com/profile/update',

    elements: {
        clickSave: by.xpath("//span[contains(text(),'Simpan')]")
    },

    perform: function () {

        var selector = page.clickSave.elements.clickSave;
        return driver.findElement(selector).click(selector);
    }
};