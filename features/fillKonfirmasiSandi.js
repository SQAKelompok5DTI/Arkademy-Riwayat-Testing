module.exports = {

    url: 'https://www.arkademy.com/auth/signup',

    elements: {
        fillKonfirmasiSandi : by.xpath("//body/main[1]/section[1]/section[1]/div[1]/section[1]/section[1]/section[2]/section[1]/section[2]/section[5]/section[1]/input[1]")
    },

    performFill: function () {

        var selector = page.fillKonfirmasiSandi.elements.fillKonfirmasiSandi;
        return driver.findElement(selector).sendKeys(shared.id.konfirmasisandi);
    }
};
