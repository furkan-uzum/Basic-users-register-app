// server.js
const express = require('express');
const sqlite3 = require('sqlite3');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

// Veritabanı bağlantısı
const db = new sqlite3.Database('./database/users.db');

// Tablo oluşturma (kullanıcı bilgilerini saklamak için)
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)");
});

// Body Parser - Gelen isteklerin body kısmını alabilmek için
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.redirect('/login.html');
});

app.use('/js', express.static(path.join(__dirname, 'public')));
// Kullanıcı kaydı
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  db.run("INSERT INTO users (username, password) VALUES (?, ?)", [username, hashedPassword], (err) => {
    if (err) {
      return res.status(500).send("Kayıt başarısız!");
    }
    res.status(201).send("Kullanıcı kaydedildi!");
  });
});

// Kullanıcı girişi
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.get("SELECT * FROM users WHERE username = ?", [username], async (err, row) => {
    if (err) {
      return res.status(500).send("Sunucu hatası!");
    }

    if (!row) {
      return res.status(401).send("Kullanıcı bulunamadı!");
    }

    const passwordMatch = await bcrypt.compare(password, row.password);
    if (!passwordMatch) {
      return res.status(401).send("Hatalı şifre!");
    }

    res.status(200).send("Başarılı giriş!");
  });
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Uygulama ${port} portunda çalışıyor.`);
});
