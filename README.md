# 🌍 Wanderlust – Travel Listing Web App

Wanderlust is a full-stack web application where users can explore, create, and manage travel listings. It provides an interactive platform to share locations, write reviews, and discover trending destinations.

# 🌐 Live Demo

👉 [Visit Wanderlust](https://wanderlust-yb7y.onrender.com)

# 🚀 Features

## 🏡 Listings
- Create new travel listings
- Edit existing listings
- Delete listings
- View detailed listing information

## ⭐ Reviews
- Add reviews to specific listings
- Delete reviews
- Each review is linked to its listing

## 🔐 Authentication
- User registration and login system
- Secure logout functionality
- Authorization for protected actions (like editing/deleting)

## 🗺️ Map Integration
- Displays listing location on an interactive map
- Helps users visually locate destinations

## 🔍 Search
- Search listings by title
- Quickly find destinations of interest

## 🗂️ Categories
- Listings organized into categories
- Easy browsing based on preferences

## 🔥 Trending Section
- Displays random listings each time
- Helps users discover new places

# 🛠️ Tech Stack

**Frontend:**
- HTML
- CSS
- JavaScript
- EJS (Templating)

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB
- Mongoose

**Architecture:**
- MVC (Model-View-Controller)

# Project Structure
```bash
Wanderlust/
│
├── controller/ # Contains route logic and controller functions
├── models/ # Mongoose schemas (Listings, Reviews, Users, etc.)
├── routes/ # Express route definitions
├── views/ # EJS templates (UI rendering)
├── public/ # Static files (CSS, JS, images)
├── utils/ # Utility/helper functions
├── init/ # Initial data / database seeding files
│
├── app.js # Main server file (Express app setup)
├── cloudconfig.js # Cloudinary configuration for image uploads
├── middleware.js # Custom middleware (auth, validation, etc.)
├── schema.js # Joi validation schemas
│
├── package.json # Project dependencies and scripts
├── package-lock.json # Dependency lock file
├── .gitignore # Ignored files/folders
├── README.md # Project documentation
```

# ⚙️ Installation & Setup

1. **Clone the repository:**
git clone
 ```bash
 https://github.com/realshorya/Wanderlust.git`
 cd Wanderlust
 ```

2. **Install dependencies:**
```bash
npm install
```

3. **Setup environment variables** Create a **.env** file and add:
```bash
MONGO_URL=your_mongodb_connection_string
SECRET=your_secret_key
CLOUDINARY_KEY=your_key(if used)
```

4. **Run the app**
```bash
node app.js
```

or(if using nodemon):
```bash
nodemon app.js
```

5. Open in browser:
```bash
http://localhost:8080
```

# 📸 Key Functionalities
- Full CRUD operations for listings
- Review system linked to listings
- Secure authentication & authorization
- Interactive map for location visualization
- Dynamic trending listings
- Category-based filtering
- Search functionality

# 📈 Future Improvements

- 🛒 Add booking/reservation system  
- 👤 User profile pages with activity history  
- ⭐ Advanced rating system (star-based with averages)  
- 🖼️ Multiple image uploads per listing  
- 🔔 Notifications for user actions (reviews, updates)  
- 📄 Pagination for better performance   
- 💬 Add comments or chat feature between users  

# 🤝 Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.

# 👨‍💻 Author

**SHORYA**

GitHub: 
```bash
https://github.com/realshorya
```