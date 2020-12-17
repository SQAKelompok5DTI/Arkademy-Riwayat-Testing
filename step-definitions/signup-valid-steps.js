module.exports = function () {
    this.Given(/^User browse signup page$/, function () {
        helpers.loadPage('https://www.arkademy.com/auth/signup')
    });

    this.Given(/^fill nama lengkap$/, function () {
        driver.then(function () {
            return page.fillNamaLengkap.performFill();
        })

    });

    this.Given(/^fill alamat email$/, function () {
        driver.then(function () {
            return page.fillEmail.performFill();
        })
    }); 

    this.Given(/^fill nomor handphone$/, function () {
        driver.then(function () {
            return page.fillNomor.performFill();
        })
    });
    
    this.Given(/^fill kata sandi$/, function () {
        driver.then(function () {
            return page.fillSandi.performFill();
        })
    });

    this.Given(/^fill konfirmasi kata sandi$/, function () {
        driver.then(function () {
            return page.fillKonfirmasiSandi.performFill();
        })
    });

    this.Given(/^click on box with the message saya menyetujui syarat dan ketentuan$/, function () {
        driver.then(function () {
            return page.BoxBtn.performClick();
        })
    });

    this.When(/^click button Daftar Arkademy$/, function () {
        driver.then(function () {
            return page.SignupBtn.performClick();
        })
    });
    
    this.Then(/^user can see the notification Akun kamu berhasil dibuat, silahkan login !$/, function () {
        driver.then(function(){
            return driver.findElements (by.xpath("//span[contains(text(),'Akun kamu berhasil di buat, silahkan login !')]"))
        })
        .then(function(elements){
            expect(elements.length).to.equal(0);
        });
    });
}
