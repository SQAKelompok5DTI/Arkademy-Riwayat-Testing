module.exports = function() {

    this.Given(/^user masuk ke halaman login$/, function () {
        helpers.loadPage("https://sso.arkademy.com/auth/realms/production/protocol/openid-connect/auth?client_id=arkademy-production-client&scope=openid%20email&response_type=code&redirect_uri=https%3A%2F%2Fservices.arkademy.com%2Fauth%2Flogin%2Fverify%3Ftoken%3D93329c714eca5c45c41320358bc2ed7d&nonce=06b40e9b-ed7e-4c63-9083-d892ddc7964a&client_name=arkademy-prod")
    });

    this.Given(/^user masukan email$/, function () {
        driver.then(function () {
            return page.fillEmailLogin.perform();
        })
    });

    this.When(/^user masukan password$/, function () {
        driver.then(function () {
            return page.fillPasswordLogin.perform();
        })
    });

    this.Then(/^user Klik button login$/, function () {
        driver.then(function () {
            return page.clickLoginButton.perform();
        })
    });

    
    this.Given(/^klik profile$/, function (){
        driver.then(function()  {
            return page.clickPofile.perform();
        })
    })

    this.Given(/^Klik \+Tambah pada bagian box Riwayat Pendidikan$/, function () {
        driver.then(function()  {
            return page.clickTambah.perform();
        })
    });

    this.Given(/^Input Nama Sekolah$/, function () {
        driver.then(function()  {
            return page.fillSekolah.perform();
        })
    });
      
    this.Given(/^Input Jurusan$/, function () {
        driver.then(function()  {
            return page.fillJurusan.perform();
        })
    });

    this.Given(/^Pilih Tahun Masuk$/, function () {
        driver.then(function()  {
            return page.chooseTahunMasuk.perform();
        })
    });

    this.When(/^Pilih Tahun Lulus$/, function () {
        driver.then(function()  {
            return page.chooseTahunLulus.perform();
        })
    });
    
    this.Then(/^Klik button Preview & Simpan$/, function () {
        driver.then(function(){
            return page.clickPrevSave.perform();
        })
    });       
 }
