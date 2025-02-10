import type { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2";

const connection = mysql.createConnection({
  host: process.env.NEXT_DB_HOST,
  user: process.env.NEXT_DB_USER,
  password: process.env.NEXT_DB_PASSWORD,
  database: process.env.NEXT_DB_DATABASE,
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  connection.connect((err) => {
    if (err) {
      console.error("Koneksi gagal:", err);
      res.status(500).json({ error: "Koneksi gagal" });
    } else {
      console.log("Terhubung ke MySQL");
      res.status(200).json({ message: "Terhubung ke MySQL" });
    }
  });
}
