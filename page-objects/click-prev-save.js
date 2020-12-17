module.exports = {

    url: 'https://www.arkademy.com/profile/update',

    elements: {
        clickPrevSave: by.xpath("//button[normalize-space()='Preview & Simpan']")
    },

    perform: function () {

        var selector = page.clickPrevSave.elements.clickPrevSave;
        return driver.findElement(selector).click(selector);
    }
};