
module.exports = {

    url: 'https://www.arkademy.com/bootcamp',
    //url: 'https://sso.arkademy.com/auth/realms/production/protocol/openid-connect/auth?client_id=arkademy-production-client&scope=openid%20email&response_type=code&redirect_uri=https%3A%2F%2Fservices.arkademy.com%2Fauth%2Flogin%2Fverify%3Ftoken%3Dbaa65378251f9016c7f04e6bca8eb308&nonce=57113f29-da19-4738-a861-3640f757c7f5&client_name=arkademy-prod',

    elements: {
        BtnLprofil : by.css("div.container div.nav-wrapper div.nav-content:nth-child(1) div.profile-wrapper div.profile-side.noselect span.avatar-section:nth-child(3) > img.avatar"),
        profileT : by.css("div.container div.nav-wrapper div.dropdown-wrap:nth-child(4) div.dropdown-wrapper.animated.zoomIn div.dropdown-content section.content-body div.dropdown-container:nth-child(2) div.profile-secondary-content div.pengaturan-wrapper div.menu-lainnya:nth-child(1) > a:nth-child(1)"),
        Lprofil : by.css("section.container.pt-5.pb-5 section.col-lg-12.col-md-12.col-sm-12 section.row section.col-lg-8.col-md-12.col-sm-12 section.refresh-button.mb-3:nth-child(3) > button.primary")
    },

    performClick: function () {

        var selector = page.BtnLprofil.elements.BtnLprofil;
       return driver.findElement(selector).click();
    },
    performClick1: function () {

        var selector = page.BtnLprofil.elements.profileT;
        return driver.findElement(selector).click();
    }
    //performClick2: function () {

      //  var selector = page.BtnLprofil.elements.Lprofil;
        //return driver.findElement(selector).click();
   // }
}