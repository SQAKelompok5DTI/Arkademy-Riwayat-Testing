module.exports = {

    url: 'https://www.arkademy.com/profile/update',

    elements: {
        fillSekolah: by.xpath("//input[@placeholder='Contoh: SMK Arkademy Bermartabat']']")
    },

    perform: function () {

        var selector = page.fillSekolah.elements.fillSekolah;
        return driver.findElement(selector).sendKeys('Telkom University');
    }
};