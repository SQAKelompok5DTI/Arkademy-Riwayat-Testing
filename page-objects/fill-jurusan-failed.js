module.exports = {

    url: 'https://www.arkademy.com/profile/update',

    elements: {
        fillJurusan: by.xpath("//input[@placeholder='Contoh: Rekayasa Perangkat Lunak']")
    },

    perform: function () {

        var selector = page.fillJurusan.elements.fillJurusan;
        return driver.findElement(selector).sendKeys(' ');
    }
};