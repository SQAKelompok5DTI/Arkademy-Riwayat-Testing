module.exports = function () {
        
    this.Given(/^User browse new signup page$/, function () {
        helpers.loadPage('https://www.arkademy.com/auth/signup')
    });

    this.Given(/^fill nama lengkap baru$/, function () {
        driver.then(function () {
            return page.fillNamaLengkapBaru.performFill();
        })
    }); 

    this.Given(/^fill alamat email yang telah terdaftar$/, function () {
        driver.then(function () {
            return page.fillEmailLama.performFill();
        })
    });

    this.Given(/^fill nomor handphone baru$/, function () {
        driver.then(function () {
            return page.fillNomorBaru.performFill();
        })
    });

    this.Given(/^fill kata sandi baru$/, function () {
        driver.then(function () {
            return page.fillSandiBaru.performFill();
        })
    });

    this.Given(/^fill konfirmasi kata sandi baru$/, function () {
        driver.then(function () {
            return page.fillKonfirmasiSandiBaru.performFill();
        })
    });
    
    this.Given(/^click on white box with the message saya menyetujui syarat dan ketentuan$/, function () {
        driver.then(function () {
            return page.BoxBtn.performClick();
        })
    });

    this.When(/^click button Daftar Arkademy pada page signup$/, function () {
        driver.then(function () {
            return page.SignupBtn.performClick();
        })
    });
    
    this.Then(/^user can see the notification Akun dengan email tersebut telah terdaftar !$/, function () {
        driver.then(function(){
            return driver.findElements (by.xpath("//span[contains(text(),'Akun dengan email tersebut telah terdaftar !')]"))
        })
        .then(function(elements){
            expect(elements.length).to.equal(0);
        });
    
    });
}
