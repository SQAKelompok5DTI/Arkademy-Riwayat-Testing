# ./features/signup-invalid.feature

Feature: Signup invalid case on arkademy website

    user can not be able to singnup
    
    @Failed
    Scenario: user failed to signup on arkademy website
        Given User browse new signup page
        And fill nama lengkap baru
        And fill alamat email yang telah terdaftar
        And fill nomor handphone baru
        And fill kata sandi baru
        And fill konfirmasi kata sandi baru
        And click on white box with the message saya menyetujui syarat dan ketentuan
        When click button Daftar Arkademy pada page signup
        Then user can see the notification Akun dengan email tersebut telah terdaftar !
        