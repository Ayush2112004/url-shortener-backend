URL Shortener Backend

A backend URL shortener service built using Node.js, Express, and MongoDB.
It allows users to generate short URLs, redirect to the original URLs, and track visit history.

🚀 Features

Generate short URLs

Redirect to original URLs using short IDs

Track visit history with timestamps

MongoDB Atlas integration

RESTful API design

Environment-based configuration

🛠 Tech Stack

Node.js

Express.js

MongoDB Atlas

Mongoose

Nanoid

dotenv

📁 Project Structure

backend_dev/
│── controller/
│ └── url.js
│── routes/
│ └── url.js
│── model/
│ └── url.js
│── connection/
│ └── connectDb.js
│── index.js
│── package.json
│── README.md
│── .gitignore

🔗 API Endpoints
1️⃣ Create Short URL

POST /url

Request Body

{
  "redirectUrl": "https://example.com"
}


Response

{
  "id": "Ab3kP9xQ"
}

2️⃣ Redirect to Original URL

GET /:shortId

Example:

http://localhost:8000/Ab3kP9xQ


Redirects to the original URL and logs visit history.

📊 Database Schema
{
  shortId: String,
  redirectUrl: String,
  visitHistory: [
    { timestamp: Number }
  ],
  createdAt: Date,
  updatedAt: Date
}

⚙️ Setup & Installation
1️⃣ Clone the repository
git clone https://github.com/<your-username>/url-shortener-backend.git
cd url-shortener-backend

2️⃣ Install dependencies
npm install

3️⃣ Create .env file
MONGO_URI=your_mongodb_connection_string
PORT=8000

4️⃣ Start the server
npm start


Server will run at:

http://localhost:8000

🧪 Testing with Postman

Create Short URL → POST /url

Redirect → GET /:shortId

Make sure to send JSON body and set:

Content-Type: application/json

📌 Future Improvements

Custom short URLs

URL expiration

Click analytics API

Authentication

Deployment (Render / Railway)

👤 Author

Ayush Rathi
SDE Aspirant
