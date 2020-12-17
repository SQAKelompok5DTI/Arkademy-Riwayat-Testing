module.export = {

    url: 'https://www.arkademy.com/profile',

    element: {
        clickTambah: by.xpath("//span[@class='fas fa-edit']")
    },

    perform: function(){
        var selector = page.clickTambah.element.clickTambah;
        return driver.findElement(selector).click(selector);
    }

}