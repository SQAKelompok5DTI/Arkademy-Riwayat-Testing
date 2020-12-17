
Feature: Update Profile Riwayat Pendidikan di web Arkdemy

    As a User
    I want to Update Riwayat Pendidikan

@success
    Scenario: Validasi fitur "Riwayat Pendidikan" sebagai new user
    Given user masuk ke halaman login
    And user masukan email
    And user masukan password
    And user Klik button login
    And klik profile
    And Klik +Tambah pada bagian box Riwayat Pendidikan
    And Input Nama Sekolah
    And Input Jurusan
    And Pilih Tahun Masuk
    When Pilih Tahun Lulus
    Then Klik button Preview & Simpan


