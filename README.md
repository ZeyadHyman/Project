# Tech-Tok Store - E-Trade Website

## Web Programming I - Assignment 2

A simple and clean e-trade website demonstrating HTML, CSS, and JavaScript integration.

---

## 📁 Project Structure

```
Project/
│
├── index.html              # Main HTML file (structure)
├── styles.css              # External CSS file (styling)
├── script.js               # External JavaScript file (functionality)
├── JAVASCRIPT_DOCUMENTATION.md  # Documentation about JavaScript
└── README.md               # This file
```

---

## 🚀 How to Run

1. **Open the website:**
   - Simply open `index.html` in any modern web browser
   - No server or installation required!

2. **Recommended browsers:**
   - Google Chrome
   - Mozilla Firefox
   - Microsoft Edge
   - Safari

---

## 📋 Features

### ✅ HTML Requirements (P7)

- ✅ Semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- ✅ Proper use of **classes** and **IDs**
- ✅ **External CSS file** (`styles.css`)
- ✅ Well-organized structure

### ✅ JavaScript Requirements (P8, P9, P10, M3)

- ✅ **P8**: Documentation showing similarities and differences between HTML and JavaScript
- ✅ **P9**: JavaScript as scripting language with features explained
- ✅ **P10**: JavaScript code applied to enhance the project
- ✅ **M3**: Enhanced with:
  - **Data types**: Number, String, Boolean, Array, Object
  - **Conditions**: if/else statements
  - **Objects**: Product objects, cartManager object
  - **Built-in functions**: Array methods, String methods, DOM methods
  - **Error handling**: try/catch blocks

---

## 🎯 Website Sections

1. **Home/Hero Section**
   - Welcome message
   - "Shop Now" button

2. **Products Section**
   - 6 sample products displayed dynamically
   - Add to cart functionality

3. **Shopping Cart**
   - View cart items
   - Remove items
   - Calculate total price
   - Checkout button

4. **About Section**
   - Information about Tech-Tok Store

5. **Contact Section**
   - Contact form with validation
   - Name, email, and message fields

---

## 💻 Code Highlights

### HTML Structure

- Uses semantic tags for better structure
- Proper class and ID naming
- External CSS and JavaScript files linked

### CSS Styling

- Modern, clean design
- Responsive layout
- Hover effects and transitions
- Modal styling for cart

### JavaScript Functionality

- **Shopping Cart System**: Add/remove items, calculate totals
- **Form Validation**: Real-time validation with error messages
- **Dynamic Content**: Products loaded from JavaScript array
- **Event Handling**: Click events, form submission
- **Error Handling**: Try/catch blocks for safe execution

---

## 📚 Key JavaScript Concepts Demonstrated

1. **Variables and Data Types**

   ```javascript
   let cart = [];  // Array
   const product = { name: "Laptop", price: 999.99 };  // Object
   ```

2. **Functions**

   ```javascript
   function validateForm() { ... }
   ```

3. **Objects and Methods**

   ```javascript
   const cartManager = {
       addItem: function(product) { ... }
   };
   ```

4. **Conditional Statements**

   ```javascript
   if (cart.length > 0) { ... } else { ... }
   ```

5. **Array Methods**

   ```javascript
   products.forEach(...)
   cart.filter(...)
   cart.reduce(...)
   ```

6. **Error Handling**

   ```javascript
   try {
       // Code that might fail
   } catch (error) {
       // Handle error
   }
   ```

---

## 🎨 Design Features

- Clean and modern UI
- Responsive design (works on mobile and desktop)
- Smooth animations and transitions
- Color-coded sections
- User-friendly navigation

---

## 📖 Documentation

For detailed information about JavaScript and its differences from HTML, see:

- **JAVASCRIPT_DOCUMENTATION.md**

This document covers:

- What JavaScript is
- Why we use JavaScript
- Similarities and differences between HTML and JavaScript
- Features used in this project

---

## 👥 For Team Members

### Understanding the Code

1. **Start with `index.html`**
   - This is the structure of the website
   - Look for IDs and classes - these are used by CSS and JavaScript

2. **Then check `styles.css`**
   - This styles the HTML elements
   - Uses classes and IDs to target elements

3. **Finally, study `script.js`**
   - This adds interactivity
   - Comments explain each section
   - Functions are clearly named

### Making Changes

- **To add a product**: Edit the `products` array in `script.js`
- **To change colors**: Edit `styles.css`
- **To modify structure**: Edit `index.html`

---

## ✅ Assignment Checklist

- [x] Static website using HTML tags & CSS (P7)
- [x] JavaScript documentation (P8, P9)
- [x] JavaScript code applied to project (P10)
- [x] Enhanced with data types, conditions, objects, built-in functions, error handling (M3)
- [x] Well-organized website structure

---

## 🎓 Learning Points

This project demonstrates:

- Separation of concerns (HTML, CSS, JavaScript in separate files)
- Modern web development practices
- Interactive web applications
- Form validation
- Dynamic content manipulation
- Error handling

---

## 📝 Notes

- This is a **client-side only** application (no backend/server)
- Cart data is stored in browser memory (resets on page refresh)
- Form submission is simulated (no actual email sending)
- Products are hardcoded in JavaScript (can be easily modified)

---

## 🤝 Team Collaboration

All team members can:

- Open and view the website
- Read the code with comments
- Understand the structure easily
- Modify and extend features

---

**Good luck with your assignment! 🚀**
