# 🕌 Taj Mahal Sunrise Tour From Delhi

A professional, responsive website for booking Taj Mahal sunrise tours from Delhi. This website provides a complete tour booking experience with detailed itinerary, highlights, and contact information.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## 🌟 Features

### Core Functionality
- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Interactive Navigation**: Smooth scrolling navigation with hamburger menu for mobile devices
- **Loading Screen**: Elegant loading animation for better user experience
- **Contact Form**: Integrated booking form with EmailJS for direct inquiry submissions
- **Live Chat**: Tawk.to integration for real-time customer support
- **WhatsApp Integration**: GetButton.io widget for instant WhatsApp messaging

### Tour Information Sections
- **Hero Section**: Eye-catching landing page with call-to-action button
- **Tour Overview**: Detailed tour information with statistics and features
- **Highlights Grid**: 9 interactive highlight cards with tilt effects
- **Daily Itinerary**: Complete timeline from 2:30 AM departure to 4:00 PM return
- **Inclusions/Exclusions**: Clear breakdown of what's included and excluded
- **Contact Section**: Multiple contact methods and booking form

### Interactive Elements
- **Back to Top Button**: Quick navigation to top of page
- **Tilt Effect**: Interactive 3D tilt effect on highlight cards
- **Smooth Animations**: CSS animations for enhanced user experience
- **Social Media Links**: Integration with Twitter, Instagram, Pinterest, and Tumblr

## 📁 Project Structure

```
tajmahalsunrisetourfromdelhi.com/
│
├── index.html              # Main HTML file with complete tour information
├── css/
│   └── main.css           # Stylesheet for design and responsiveness
├── js/
│   └── main.js            # JavaScript for interactions and form handling
└── media/                 # Images and media assets folder
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tomaraditya5122/tajmahalsunrisetourfromdelhi.com.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd tajmahalsunrisetourfromdelhi.com
   ```

3. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

4. **Access the website**
   - Open `http://localhost:8000` in your browser

## 🎨 Customization

### Update Contact Information
Edit the contact details in `index.html`:
```html
<!-- Line 400-418 -->
<p><strong>Email:</strong> info@tajmahalsunrisetourfromdelhi.com</p>
<p><strong>Phone:</strong> +91 70558 81199</p>
<p><strong>WhatsApp:</strong> +91 70558 81199</p>
```

### Configure Email Form
Update EmailJS credentials in `index.html`:
```javascript
// Line 26-28
emailjs.init("YOUR_PUBLIC_KEY");
```

### Modify WhatsApp Widget
Update WhatsApp number in `index.html`:
```javascript
// Line 705
whatsapp: "+917055881199"
```

### Update Tawk.to Chat
Replace Tawk.to widget ID in `index.html`:
```javascript
// Line 723
s1.src='https://embed.tawk.to/YOUR_WIDGET_ID';
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: Full-width layout with all features
- **Tablet**: Adjusted grid layouts and navigation
- **Mobile**: Hamburger menu and stacked sections

## 🔧 Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with animations and gradients
- **JavaScript**: Interactive functionality and form handling
- **jQuery**: DOM manipulation and AJAX
- **EmailJS**: Contact form email service
- **Font Awesome**: Icon library
- **Tawk.to**: Live chat widget
- **GetButton.io**: WhatsApp floating button

## 📋 Tour Details

### Itinerary Timeline
- **2:30 AM**: Pickup from Delhi/NCR
- **5:45 AM**: Arrive at Taj Mahal before sunrise
- **8:00 AM**: Breakfast at 5-star hotel
- **9:00 AM**: Visit Agra Fort
- **10:30 AM**: Optional Mehtab Bagh visit
- **11:30 AM**: Local handicrafts exploration
- **12:30 PM**: Drive back to Delhi
- **4:00 PM**: Drop-off at Delhi

### Tour Highlights
- Sunrise view of Taj Mahal
- Hassle-free door-to-door pickup
- AC private car with professional driver
- Visit majestic Agra Fort
- Breakfast at 5-star hotel
- Professional English-speaking guide
- Same-day return to Delhi

## 🌐 Live Demo

Visit the live website: [Taj Mahal Sunrise Tour From Delhi](https://tomaraditya5122.github.io/tajmahalsunrisetourfromdelhi.com/)

## 📞 Contact

- **Email**: info@tajmahalsunrisetourfromdelhi.com
- **Phone**: +91 70558 81199
- **WhatsApp**: +91 70558 81199
- **Address**: LG 3, Durga Complex, Handicraft Nagar, Fatehabad Road, Agra 282001

## 👨‍💻 Developer

Developed by **Aditya Tomar**
- Website: [webinfolab.com](https://www.webinfolab.com)
- GitHub: [@tomaraditya5122](https://github.com/tomaraditya5122)

## 📄 License

This project is created for Taj Mahal Sunrise Tours business purposes.

## 🙏 Acknowledgments

- Font Awesome for icons
- EmailJS for email service
- Tawk.to for live chat functionality
- GetButton.io for WhatsApp widget
- jQuery for DOM manipulation

## 📈 Future Enhancements

- [ ] Add image gallery section
- [ ] Implement customer testimonials/reviews
- [ ] Add multi-language support
- [ ] Integrate online payment gateway
- [ ] Add blog section for travel tips
- [ ] Include pricing calculator
- [ ] Add virtual tour of Taj Mahal

---

**Made with ❤️ for unforgettable Taj Mahal experiences**
