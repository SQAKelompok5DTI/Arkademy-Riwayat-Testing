module.exports = function () {
       this.Given(/^User browse halaman login$/, function () {
        helpers.loadPage('https://sso.arkademy.com/auth/realms/production/protocol/openid-connect/auth?client_id=arkademy-production-client&scope=openid%20email&response_type=code&redirect_uri=https%3A%2F%2Fservices.arkademy.com%2Fauth%2Flogin%2Fverify%3Ftoken%3Dbaa65378251f9016c7f04e6bca8eb308&nonce=57113f29-da19-4738-a861-3640f757c7f5&client_name=arkademy-prod')
       });

       this.Given(/^fill alamat email terdaftar$/, function () {
            driver.then(function () {
                 return page.inputemail.performFill();
            })
       });

       this.Given(/^fill kata sandi  terdaftar$/, function () {
            driver.then(function () {
                 return page.inputpass.performFill();
            })
       });

       this.Given(/^klik button masuk$/, function () {
             driver.then(function () {
                 return page.Btnmasuk.performClick();
             })
       });

       this.Given(/^user klik profile$/, function () {
            // driver wait returns a promise so return that
            return driver.wait(until.elementsLocated(by.css("div.container div.nav-wrapper div.nav-content:nth-child(1) div.profile-wrapper div.profile-side.noselect span.avatar-section:nth-child(3) > img.avatar")), 30000)
                .then(function() {
                    return page.BtnLprofil.performClick
                })  
                .then(function() {
                    return page.BtnLprofil.performClick1
                })         
       });

       this.Given(/^klik lengkapi profile$/, function () {
            return driver.wait(until.elementsLocated(by.xpath("//button[@id='btnLengkapiProfile']")), 10000)
                .then(function() {
                      return page.Tprofil.performClick();
                })
       });

       this.Given(/^klik informasi pribadi$/, function () {
 
       });

       this.Given(/^input nama lengkap$/, function () {

       });

       this.Given(/^input keahlian$/, function () {

       });

       this.Given(/^input deskripsi singkat$/, function () {

       });

       this.Given(/^input linked in$/, function () {
 
       });

       this.Given(/^input no\. handphone$/, function () {

       });

       this.Given(/^input tanggal lahir$/, function () {

       });

       this.Given(/^klik jenis kelamin$/, function () {

       });

       this.Given(/^input domisili$/, function () {

       });

       this.Given(/^klik button Preview & simpan$/, function () {

       });

       this.When(/^klik button simpan$/, function () {

       });

       this.Then(/^user can see the notification gagal memperbarui data profile$/, function () {

       });

}
