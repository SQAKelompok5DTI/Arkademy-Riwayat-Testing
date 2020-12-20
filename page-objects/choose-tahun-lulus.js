module.export = {

    url: 'https://www.arkademy.com/profile/update',

    element: {
        chooseTahunMasuk: by.xpath("//span[@class='cell year selected']")
    },

    perform: function(){
        var selector = page.chooseTahunMasuk.element.chooseTahunMasuk;
        return driver.findElement("//span[normalize-space()='2021']").click( );
    }

}
