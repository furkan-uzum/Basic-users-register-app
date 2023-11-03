const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

// Veritabanı bağlantısı
const db = new sqlite3.Database('database/users.db');

// Kullanıcıların ID ve şifrelerini dosyaya yazdırma
db.all("SELECT ID, password FROM users", [], (err, rows) => {
    if (err) {
        throw err;
    }

    // Dosyaya yazdırma
    const fileContent = rows.map(row => `ID: ${row.username}, Şifre: ${row.password}`).join('\n');

    fs.writeFile('sqlTest/sql_info.txt', fileContent, err => {
        if (err) {
            throw err;
        }
        console.log('Bilgiler sql_info.txt dosyasına başarıyla yazıldı.');
    });
});

// Veritabanı bağlantısını kapat
db.close();
