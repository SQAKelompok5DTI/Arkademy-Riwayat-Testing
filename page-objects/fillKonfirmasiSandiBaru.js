module.exports = {

    url: 'https://www.arkademy.com/auth/signup',

    elements: {
        fillKonfirmasiSandiBaru : by.xpath("//body/main[1]/section[1]/section[1]/div[1]/section[1]/section[1]/section[2]/section[1]/section[2]/section[5]/section[1]/input[1]")
    },

    performFill: function () {

        var selector = page.fillKonfirmasiSandiBaru.elements.fillKonfirmasiSandiBaru;
        return driver.findElement(selector).sendKeys(shared.id.konfirmasisandiBaru);
    }
};
