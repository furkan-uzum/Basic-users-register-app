# Node.js Express Username-Password Uygulaması

Bu proje, Node.js ve Express.js kullanılarak oluşturulmuş basit bir kullanıcı kayıt ve giriş uygulamasını içerir. SQLite veritabanı kullanılarak kullanıcı bilgileri saklanır.

## Başlarken

Projeyi çalıştırmak için aşağıdaki adımları izleyin:

1. Projeyi klonlayın:

   ```bash
   git clone https://github.com/kullaniciadi/proje-adı.git


1.1 Gerekli bağımlılıkları yükleyin:
    npm install

1.2 Uygulamayı başlatın:
    npm start

1.3 Database'i kontrol yapın
    node test

Uygulama varsayılan olarak http://localhost:3000 adresinde çalışacaktır.

## Kullanım
- Tarayıcınızda http://localhost:3000/ adresine giderek kullanıcı girişi ve kaydı yapabilirsiniz.
- http://localhost:3000/login.html adresi üzerinden giriş yapabilirsiniz.
- http://localhost:3000/index.html adresi üzerinden kayıt olabilirsiniz.

## Klasör Yapısı
- public/ - Ana HTML, CSS ve JS dosyalarını içerir.
- server.js - Express sunucusunun ana dosyası.
- user.db - SQLite veritabanı dosyası.

## Test
- public/sqlTest - users.db database'ne verilen kaydedilip kaydedilmediğini kontrol etmek amacıyla oluşturulmuş test uygulamasıdır. Elde edilen sonu. sqlTest/sql_info.txt'ye yazılır

## Kullanılan Teknolojiler
- Node.js
-Express.js
- SQLite

## Lisans
## Bu proje MIT lisansı altında lisanslanmıştır.
