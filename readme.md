# 🔗 URL Shortener

A lightweight and efficient URL shortening service built with **Node.js**, **Express**, and **MongoDB**. It allows users to generate short, shareable URLs for long, complex links.

---

## 📦 Features

- 🔁 Shortens long URLs into unique short links
- 🌐 Redirects users to the original URL
- 🧠 Uses MongoDB for persistent storage

---

## 🚀 Getting Started

| Method | Endpoint        | Description                                |
|--------|------------------|--------------------------------------------|
| GET    | `/url`           | Get all stored URL mappings                |
| POST   | `/url`           | Submit a long URL and receive a short link |
| GET    | `/url/:shortUrl` | Redirect to the original long URL          |


### 1. Clone the repository
```bash
git clone https://github.com/18-05-Amankumarverma/URL-Shortner.git
