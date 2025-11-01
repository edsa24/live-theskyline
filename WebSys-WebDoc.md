# Skyline Living Website

**Skyline Living** is a modern, responsive real estate platform designed to provide a seamless online experience for users seeking residential properties. This project showcases a complete website built with HTML5, CSS, JavaScript, and Bootstrap 5, featuring interactive elements, responsive design

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used) HTML 5, CSS5, JAVASCRIPT, BOOTSTRAP 5, CDN
- [Project Structure](#project-structure)
- [Pages Overview](#pages-overview)
- [Key Features & Functionality](#key-features--functionality)
- [Design & UI/UX](#design--uiux)
- [Responsive Design](#responsive-design)
- [Setup & Installation](#setup--installation)
- [Usage Guide](#usage-guide)
- [Team Members & Contributions](#team-members--contributions)
- [Development Process](#development-process)
- [Future Enhancements](#future-enhancements)

## Project Overview

Skyline Living is a comprehensive real estate website that offers:

- **responsive design** that works seamlessly across all devices
- **Interactive property listings** with detailed information and image galleries
- **Great user interface** with smooth animations and transitions
- **Comprehensive property showcase** featuring four distinct property types
- **Contact and consultation system** with interactive chatbot functionality

Our website display effective approach in implementing HTML5 semantic, CSS5 techniques, JavaScript interactivity such as hover animation, google maps integration and many more. Bootstrap 5 integration we highlight the use of bootstrap grid for easy implementation of responsive design and Modal integration for previewing image properties; .
 
## Features

### Core Features
- **5 Complete Pages**: Landing, Homepage, About Us, Properties, and Contact Us
- **Responsive Navigation**: Fixed navigation bar with mobile hamburger menu
- **Interactive Property Showcase**: Image galleries with modal popups
- **Contact Forms**: Inquiry and reservation forms with validation
- **Interactive Chatbot**: Consultation scheduling system
- **Team Profiles**: Professional team member presentations
- **Company Information**: Mission, vision, and goals presentation
- **Google Maps Integration**: Provides an interactive map pinpointing Mapúa Malayan Digital Colleges to simulate the company’s location.
- * Hover Transitions**: images gently scale on hover using CSS transitions, enhancing interactivity and visual appeal.

### Technical Features
- **Semantic HTML5** 
implement proper semantics structure, organizes text, images, links, sections, and embedded elements as well as accessibility for SEO. Allows Bootstrap and CSS to be build as a comprehensive, well-organized layout.

* Semantic Structure:
Uses proper HTML5 elements (<header>, <section>, <nav>, <footer>) for improved accessibility and SEO.
* Responsive Layout Containers:
Wrapped page content inside <div class="container">, <section>, and <main> tags to work with Bootstrap’s grid system.
* Navigation Bar and Footer Components:
Implemented using <nav> and <footer> elements with embedded lists (<ul>, <li>) for menu items.
* Form Elements:
Includes <form>, <input>, <textarea>, and <button> elements for inquiry and reservation features.
* Embedded Media:
Integrated Google Maps via an <iframe> to display location visually.
* Modal Structure:
Bootstrap modals are defined with HTML elements (<div class="modal fade">, <div class="modal-content">) for displaying enlarged property images and chatbot dialogs.


- **CSS Animations**  and transitions for enhanced user experience

* Animation Classes:
Supports JavaScript-triggered transitions and AOS (Animate On Scroll) effects using CSS visibility and opacity settings.
* Custom Styling:
Applied unique color palettes, font styles, paddings, and rounded corners to match the Skyline Living brand identity.
* Section Styling:
Used background overlays, gradients, and custom spacing for sections like header banners and team cards.
* Hover Transitions:
Implemented smooth hover effects using the transition and transform properties for interactivity:


- **Bootstrap 5** integration for responsive grid system

Responsive Grid System:

* Image Optimization:
reduces file sizes and improving website load speed without sacrificing quality. 
* Utilized Bootstrap grid system using .container classto organize content into flexible, mobile-friendly layouts.
* Navigation Bar:
Implemented .navbar, .navbar-expand-lg, and .navbar-toggler for a responsive, collapsible navigation menu.
* Cards & Buttons:
Used .card, .shadow-sm, .btn, and .btn-info to present property listings and action buttons consistently.
* Modals & Carousels:
Bootstrap’s .modal and .carousel components enable property image previews and slideshows.
* Form Components:
Styled inquiry and reservation forms using .form-control, .form-group, and .btn for a clean, professional layout.
* Utility Classes:
Spacing (.m, .mt, .mb, .ml, .mr, .my, .mb-5, & .p, .pt, .pb, .pl, .pr,.px, .py-3), alignment (.text-center, .justify-content-between), and typography (.fw-bold, .text-info) classes simplify visual consistency.
* Integration with JavaScript:
Bootstrap JS bundle activates dynamic components like modals, dropdowns, and the navbar toggle button.


- **JavaScript Interactivity** for dynamic content and user engagement

*Interactive Chatbot:
Implements a simulated chatbot within a Bootstrap modal, guiding users through a consultation scheduling process.
*Dynamic Animations:
Uses the IntersectionObserver API to apply .fade-in or .show classes when elements appear on screen.
*AOS Initialization:
Integrates Animate On Scroll library to smoothly reveal elements as users navigate the page.
*Scroll Effects:
Changes the navbar background color after scrolling to improve readability and design consistency.
*Modal Image Galleries
Interactive gallery for property images using modal popups, enabling users to see detailed, enlarged photos with smooth transitions.

-**Other Technical Features**
*Google Maps Integration (implemented via Bootstrap, JavaScript and CSS)
improving site usefulness and helping users locate Skyline Living and listed properties easily.
*Client-side Form Validation (implemented via Bootstrap, JavaScript and CSS)
JavaScript-based validation for forms (inquiry, reservation), improving user experience by catching errors before submission.

## Technologies Used


### Frontend Technologies

- ** HTML5: Semantic structure, accessibility, SEO-friendly markup.
- ** CSS: Custom styling, transitions/animations, responsive utilities.
- ** JavaScript (ES6+): DOM manipulation, modals, smooth scrolling, chatbot logic.
- ** Bootstrap 5.3.8: Grid/layout, navbar, modals, responsive utilities.
- ** IntersectionObserver API: Efficient scroll-triggered reveals for .fade-in and .animate-on-scroll.
- ** WebP Images: Faster loads with .webp assets in galleries and cards.
- ** Modal Image Galleries: Enlarged previews via Bootstrap Modal + JS.
- ** Smooth Scrolling: Anchor navigation using scrollIntoView({ behavior: 'smooth' }).
- ** Responsive Navigation: Fixed-top navbar with hamburger toggler on mobile

### External Libraries & CDNs

Bootstrap CSS/JS (5.3.8)
    CSS: <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    JS bundle: <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
Font Awesome (6.5.0)
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
Bootstrap Icons (1.11.3)
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">
AOS – Animate On Scroll (2.3.4)
    CSS: <link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">
    JS: <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
    implementation: javascript.js

        if(typeof AOS !== 'undefined'){
        AOS.init({ duration: 1000, once: true });
        }

### Development Tools
- **GitHub**: Code repository and collaboration
- **VS Code**: Code editor (recommended)

## Project Structure

```
live-theskyline-main/
├── .github\workflows           
    ├──static.yml
├── properties/            # Property and team images
│   ├── about.jpg
│   ├── amenities.jpg
│   ├── andrea.webp
│   ├── bgcontact.jpg
│   ├── Blueprint.jpg
│   ├── consexterior.jpg
│   ├── contact.png
│   ├── edsa.jpg
│   ├── francis.webp
│   ├── genphoto.jpg
│   ├── home.jpg
│   ├── interior.jpg
│   ├── prop.jpg
│   ├── PROPERDARK.jpg
│   ├── PROPERPROFILE.jpg
│   └── robert.webp
├── SKYLINE LOGO/
│   └── skyline logo.png   # Company logo

├── SKYLINE LOGO/
│   ├── Lskyline logo.png
├── skyline maple/         # Skyline Maple property images
│   ├── Luna1.webp
│   ├── Luna2.webp
│   ├── Luna3.webp
│   ├── Luna4.webp
│   └── skylinemaple.jpg
├── skyline one/           # Skyline One property images
│   ├── Crystal1.webp
│   ├── Crystal2.webp
│   ├── Crystal3.webp
│   ├── Crystal4.webp
│   ├── Crystal5.webp
│   ├── Crystal6.webp
│   ├── Crystal7.webp
│   ├── Crystal8.webp
│   └── skylineone.jpg
├── skyline vista/         # Skyline Vista property images
│   ├── aurora1.webp
│   ├── aurora2.webp
│   ├── aurora3.webp
│   ├── aurora4.webp
│   ├── aurora5.webp
│   ├── aurora6.webp
│   ├── aurora7.webp
│   └── skyline vista.png
├── skylinegrove/          # Skyline Grove property images
│   ├── skylinegrove.webp
│   ├── zenith1.webp
│   ├── zenith2.webp
│   ├── zenith3.webp
│   ├── zenith4.webp
│   └── zenith5.webp
├── aboutus.html           # About us page with team information
├── contactus.html         # Contact forms and consultation
├── homepage.html           # Main homepage with featured properties
├── index.html              # Landing page
├── javascript.js          # JavaScript functionality (240+ lines)
├── properties.html        # Property listings and details
├── README.md              # Project documentation
└── styles.css             # Main stylesheet (1,600+ lines)


```

Andrea *Pahelp pu mamats!*

## Pages Overview

### 1. Landing Page (`index.html`)
- **Purpose**: First impression and navigation hub
- **Features**: 
  - Company branding and tagline
  - Navigation to all other pages
  - Footer with contact information

### 2. Homepage (`homepage.html`)
- **Purpose**: Main content page showcasing featured properties
- **Features**:
  - "Why Choose Us" section with key benefits
  - Featured properties showcase with interactive cards
  - Property image galleries with modal popups
  - Responsive grid layout

### 3. About Us (`aboutus.html`)
- **Purpose**: Company information and team presentation
- **Features**:
  - Company overview with image carousel
  - Mission, vision, and goals section
  - Team member profiles with photos and contact information
  - Professional presentation with animations

### 4. Properties (`properties.html`)
- **Purpose**: Comprehensive property listings and details
- **Features**:
  - Property showcase with detailed information
  - Interactive image galleries for each property
  - Amenities and features listing
  - Location information with Google Maps integration
  - Property pricing and specifications

### 5. Contact Us (`contactus.html`)
- **Purpose**: Customer interaction and consultation
- **Features**:
  - Contact information and consultation hours
  - Interactive chatbot for consultation scheduling
  - Inquiry and reservation forms
  - Professional contact presentation

## Key Features & Functionality

### Interactive Elements
- **Image Modals**: Click on property images to view enlarged versions
- **Property Galleries**: Carousel-style image galleries for each property
- **Chatbot System**: Interactive consultation scheduling
- **Form Validation**: Client-side form validation for better UX
- **Smooth Scrolling**: Enhanced navigation experience

### Animation & Transitions
- **Fade-in Effects**: Elements appear as user scrolls
- **Hover Effects**: Interactive feedback on buttons and cards
- **Smooth Transitions**: CSS transitions for all interactive elements
- **Loading Animations**: Visual feedback during interactions

### Responsive Features
- **Mobile-First Design**: Optimized for mobile devices
- **Flexible Grid System**: Bootstrap-based responsive layout
- **Adaptive Navigation**: Mobile hamburger menu
- **Scalable Images**: Responsive image handling


### Color Scheme
- **Primary Blue**: #0072ff (Skyline brand color)
- **Secondary Blue**: #0dcaf0 (Accent color)
- **Dark Background**: #272c39 (Main background)
- **Light Text**: #d3dad9 (Primary text color)
- **Gradient Backgrounds**: Blue gradient combinations

*// Rocky //*
### Typography
- **Primary Font**: Universal selector (*)
  font-family chosen are Arial, sans-serif
Arial, sans-serif

- **Headings**: 
**Header 1-5 / header-text class**
*.header-text h1* with font-size of 5rem*, 
*.about-us h1* with font-seize of 2rem*, 
*.mission-vision-goal h1* with font-size of 3rem*, 
*.convenience .h1-2nd* with font-size of 2.2rem*, 
*.amenity .h1-3rd* with font-size of 3rem
*.why-choose-us h2*, *.why-choose-us*, *.why-title* with font-seize of 2.5rem
*.featured-properties h2*, *.featured-heading*
with font-seize of 2rem
*.featured-properties h2*, *.featured-heading*
with font-seize of 2.5rem
*.mv-card h2* with font-seize of 1.3rem
*.amenity .h2-3rd* with font-seize of  1.4rem
*.form-reservation h2* with font-seize of 2.5rem
*.footer-brand h2* with font-seize of 2rem;
*.property-text h3* with font-seize of 1.25rem;
*.consultation-hours h3* with font-seize of 1.3rem.
*footer .left h3* with font-seize of 2rem
*.consultation-hours h3* with font-seize of 1rem;
*.consultation-hours h3* with font-seize of 1.1rem
*#aboutCarousel .carousel-caption h5* with font-seize of 1.25rem.
*footer .left h4* with font-seize of 16px.
*.header-text p* with font-seize of 1.2rem.
*footer .center .content .info p* with font-seize of 15px.
*footer .right p* with font-seize of 15px.
*footer .center .content .info p* with font-seize of  15px.
*footer .right p* with font-seize of 15px.
*.mv-card p* with font-seize of  0.95rem.
*#aboutCarousel .carousel-caption p* with font-seize of 1rem.
*.about-us p* with font-seize of 1rem.
*.property-text p* with font-seize of 0.95rem.
*.why-choose-us p* with font-seize of 1rem.
*.choose-card p* with font-seize of 0.95rem.
*.header-text p* with font-seize of 1.2rem.

  these group of font are chosen for header are Franklin Gothic Medium as primary font of the webpage, Arial Narrow as secondary, Arial as tertiary and sans-serif as last font-family back up.  *

- **footer**:
  font-family chosen are Arial, sans-serif

- **Consistent Sizing**: Responsive typography scale
*box-sizing*
- border-box
*.why-choose-us class and .why-choose-us h2*
- has a font-size of 2.5 rem with 1px of letter-spacing.
*h2* 
- tag has a font-size of 1.25 rem .
*p* 
- has a font-size of 1 rem.
*.why-choose-us p* 
- has a font-size of 1.1 rem.

*// tuloy mo na HAHA kala ko nasa dulo ginagawa ko //*

### Visual Elements
- **Modern Card Design**: Clean, shadowed cards
- **Professional Photography**: High-quality property images
- **Consistent Spacing**: Uniform margins and padding
- **Icon Integration**: Font Awesome icons throughout

## Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px


### Tablet Optimizations
- **Adjusted Layouts**: Modified grid systems
- **Medium-Sized Elements**: Balanced proportions
- **Touch Interactions**: Optimized for touch devices

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

*// oks na to //*
### File Structure Requirements
- Ensure all image files are in their respective directories
- Keep the folder structure intact for proper asset loading
- All external CDN links should be accessible


### For Users
1. **Start at Landing Page**: Begin with `index.html` for the full experience
2. **Navigate**: Use the top navigation menu to explore different sections
3. **View Properties**: Click on property images for detailed galleries
4. **Contact**: Use the contact forms or chatbot for inquiries
5. **Mobile**: The site is fully responsive and works on all devices



## Team Members & Contributions

### Project Management
**Edsa Mae Torrijos** - Project Manager
- **Role**: Project oversight and task distribution
- **Contributions**: Landing page and Properties page development
- **Specialization**: Data Analytics

### Development Team
**Andrea Nicole Poblete** - Contact Page Developer
- **Role**: Contact page and chatbot functionality
- **Contributions**: Contact forms, consultation system, user interaction
- **Specialization**: Network and CyberSecurity

**Francis John Alintano** - Homepage Developer
- **Role**: Main homepage and featured properties
- **Contributions**: Homepage layout, property showcase, interactive elements
- **Specialization**: Software Development

**Robert Cery Amisola** - About Us Developer
- **Role**: About us page and team presentation
- **Contributions**: Company information, team profiles, mission/vision
- **Specialization**: Network and CyberSecurity

### Planning Phase
- **Wireframing**: Collaborative design of page layouts
- **Task Distribution**: Clear assignment of responsibilities
- **Technology Selection**: Choice of HTML5, CSS3, JavaScript, Bootstrap

### Development Phase
- **Version Control**: GitHub for code management
- **Regular Meetings**: Progress tracking and issue resolution
- **Code Review**: Quality assurance through pull requests
- **Testing**: Cross-browser and device testing

### Collaboration Methods
- **GitHub**: Central repository for all code
- **Regular Communication**: Team meetings and updates
- **Documentation**: Comprehensive README and code comments
---