module.exports = {

    url: 'https://www.arkademy.com/profile',

    elements: {
      Tprofil : by.xpath("//button[@id='btnLengkapiProfile']")
    },

    performClick: function () {

        var selector = page.Tprofil.elements.Tprofil;
        return driver.findElement(selector).click(selector);
    }
};
