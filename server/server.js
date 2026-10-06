const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Connect to XAMPP MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "registration_db"
});

// Check database connection
db.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err);
        return;
    }

    console.log("Connected to XAMPP MySQL!");
});

// Registration API
app.post("/register", (req, res) => {

    const { name, email, mobile, organisation, message } = req.body;

    const sql = `
        INSERT INTO sharda_registrations
        (name, email, mobile, organisation, message)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [name, email, mobile, organisation, message],
        (err, result) => {

            if (err) {
                console.log("Insert error:", err);

                return res.status(500).json({
                    message: "Registration failed"
                });
            }

            res.status(201).json({
                message: "Registration successful",
                id: result.insertId
            });
        }
    );
});

// Start server
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});