# ./features/signup-valid.feature

Feature: Signup valid on arkademy website 

    As a user
    I want to be able to signup
    
    @Success
    Scenario: user success to signup on arkademy website
        Given User browse signup page
        And fill nama lengkap
        And fill alamat email
        And fill nomor handphone
        And fill kata sandi
        And fill konfirmasi kata sandi
        And click on box with the message saya menyetujui syarat dan ketentuan
        When click button Daftar Arkademy
        Then user can see the notification Akun kamu berhasil dibuat, silahkan login !
        