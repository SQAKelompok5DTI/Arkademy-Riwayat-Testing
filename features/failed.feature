
Feature: Update Profile Riwayat Pendidikan di web Arkdemy

    As a User
    I want to Update Riwayat Pendidikan
@failed
    Scenario: Validasi gagal fitur "Riwayat Pendidikan" sebagai new user
    Given user masuk ke halaman login 2
    And user masukan email 2
    And user masukan password 2
    And user Klik button login 2
    And klik profile 2
    And Klik +Tambah pada bagian box Riwayat Pendidikan 2
    And Tidak Input Nama Sekolah
    And Tidak Input Jurusan
    And Tidak Pilih Tahun Masuk
    When Tidak Pilih Tahun Lulus
    Then Klik button Preview & Simpan 2
