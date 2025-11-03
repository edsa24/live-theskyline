**Skyline Living Website**


**Skyline Living** is an innovative real estate platform designed to enhance the online experience for users searching for residential properties. The website is constructed using HTML5, CSS, JavaScript, and Bootstrap 5,  offering an interactive and responsive design that enhances user management. The project highlights a comprehensive website that not only focuses on functionality but also creates an immersive experience by leveraging advanced web technologies.



**Table of Contents**

    •Project Overview
    •Features
    •Technologies Used
    •Project Structure
    •Pages Overview
    •Key Features & Functionality
    •Design & UI/UX
    •Responsive Design
    •Setup & Installation
    •Usage Guide
    •Team Members & Contributions
    •Development Process
    •Future Enhancements



**Project Overview**

Skyline Living is a comprehensive real estate platform designed to provide users with a seamless online experience when searching for properties. The website offers:

   •**Responsive Design**: A layout that adapts seamlessly across all devices
   
   •**Interactive Property Listings**: Detailed information and image galleries
   
   •**Great User Interface**: Smooth animations, transitions and a clean interface that keeps the users engaged
   
   •**Comprehensive Property Showcase**: Featuring four distinct property types
   
   •**Contact and Consultation System**: An interactive chatbot for easy inquiries and scheduling
   
Skyline Living’s website exemplifies modern web development through the effective use of HTML5 semantics, CSS5 techniques, and JavaScript interactivity,  including hover animations, Google Maps integration, and many more. It utilizes hover animations and Google Maps integration to enhance the user experience. Bootstrap 5 integration highlights the use of the Bootstrap grid for easy implementation of responsive design and Modal integration for previewing image properties.



**Features**

**Core Features**

  •**5 Complete Pages**: Landing, Homepage, About Us, Properties and Contact Us.
  
  •**Responsive Navigation**: A fixed navigation bar with a mobile-friendly hamburger menu for easy navigation.
  
  •**Interactive Property Showcase**: Image galleries with modal pop-ups that display property details.
  
  •**Contact Forms**: Inquiry and reservation forms with validation for smooth user interaction.
  
  •**Interactive Chatbot**: Consultation scheduling system that guides users step-by-step.

  •**Team Profiles**: Professional bios and photos of the Skyline Living Team.

  •**Company Information**: Mission, vision and goals presentation

  •**Google Maps Integration**: Provides an interactive map pinpointing Mapúa Malayan Digital Colleges to simulate the company’s location.

  •**Hover Transitions**: Images gently scale on hover using CSS transitions, enhancing interactivity and visual appeal.


**Technical Features**

**Semantic HTML5** implements a proper semantic structure, organizes text, images, links, sections, and embedded elements, and ensures accessibility for SEO. This foundation allows Bootstrap and CSS to be built as a comprehensive, well-organized layout.

•**Semantic Structure**: Uses proper HTML5 elements (<header>, <section>, <nav>, <footer>) for improved accessibility and SEO.

•**Responsive Layout Containers**: Wrapped page content inside ’<div>’, ‘<container>’, and '<row>’ tags to work with Bootstrap’s grid system.

•**Navigation Bar and Footer Components**: Implemented using <nav> and <footer> elements with embedded lists (‘<ul>’, ‘<li>’) for menu items.

•**Form Elements**: Includes ‘<form>’, ‘<input>’, ‘<textarea>’, and ‘<button>’ elements for inquiry and reservation features.

•**Embedded Media**: Integrated Google Maps via ‘<iframe>’ to display location visually.

•**Modal Structure**: Bootstrap modals are defined using HTML elements to display enlarged property images and chatbot dialogs.


**CSS Animations** and transitions for enhanced user experience

•**Animation Classes**: Supports JavaScript-triggered transitions and AOS (Animate On Scroll) effects using CSS visibility and opacity settings.

•**Custom Styling**: Applied unique color palettes, font styles, paddings and rounded corners to match the Skyline Living brand identity.

•**Section Styling**: Used background overlays, gradients and custom spacing for sections like header banners and team cards.

•**Hover Transitions**: Implemented smooth hover effects using the transition and transform properties for interactivity


**Bootstrap 5** integration for a responsive grid system

**Responsive Grid System:**

•Image Optimization: Reduces file sizes and improves website load speed without sacrificing quality.

•Utilized Bootstrap grid system using the .container class to organize content into flexible, mobile-friendly layouts.

•Navigation Bar: Implemented .navbar, .navbar-expand-lg and .navbar-toggler for a responsive, collapsible navigation menu.

•Cards & Buttons: Used .card, .shadow-sm, .btn and .btn-info to present property listings and action buttons consistently.

•Modals & Carousels: Bootstrap’s .modal and .carousel components enable property image previews and slideshows.

•Form Components: Styled inquiry and reservation forms using .form-control, .form-group and .btn for a clean, professional layout.

•Utility Classes: Spacing (.m, .mt, .mb, .ml, .mr, .my, .mb-5, & .p, .pt, .pb, .pl, .pr, .px, .py-3), alignment (.text-center, .justify-content-between) and typography (.fw-bold, .text-info) classes simplify visual consistency.

•Integration with JavaScript: The Bootstrap JS bundle activates dynamic components such as modals, dropdowns and the navbar toggle button.


**JavaScript Interactivity** for dynamic content and user engagement

•**Interactive Chatbot**: Implements a simulated chatbot within a Bootstrap modal, guiding users through a consultation scheduling process.

•**Dynamic Animations**: Uses the IntersectionObserver API to apply .fade-in or .show classes when elements appear on screen.

•**AOS Initialization**: Integrates Animate On Scroll library to smoothly reveal elements as users navigate the page.

•**Scroll Effects**: Changes the navbar background color after scrolling to improve readability and design consistency.

•**Modal Image Galleries**: An Interactive gallery for property images using modal popups, allowing users to see detailed, enlarged photos with smooth transitions.


**Other Technical Features**

•**Google Maps Integration**: (Implemented via Bootstrap, JavaScript and CSS), improving site usefulness and helping users locate Skyline Living and listed properties easily.

•**Client-side Form Validation**: (Implemented via Bootstrap, JavaScript and CSS) JavaScript-based validation for forms (inquiry, reservation), improving user experience by catching errors before submission.




**Technologies Used**

**Frontend Technologies**

 •HTML5: Semantic structure, accessibility, SEO-friendly markup.
 
 •CSS: Custom styling, transitions/animations, responsive utilities.
 
 •JavaScript (ES6+): DOM manipulation, modals, smooth scrolling, chatbot logic.

 •Bootstrap 5.3.8: Grid/layout, navbar, modals, responsive utilities.

 •IntersectionObserver API: Efficient scroll-triggered reveals for .fade-in and .animate-on-scroll.

 •WebP Images: Faster loads with .webp assets in galleries and cards.

 •Modal Image Galleries: Enlarged previews via Bootstrap Modal + JS.

 •Smooth Scrolling: Anchor navigation using scrollIntoView({ behavior: 'smooth' }).

 •Responsive Navigation: Fixed-top navbar with hamburger toggler on mobile.


**External Libraries & CDNs**

•Bootstrap CSS/JS (5.3.8): Core framework.

•Font Awesome (6.5.0) Bootstrap Icons (1.11.3): Additional icon set.

•AOS – Animate On Scroll (2.3.4): Scroll Animations.

•CSS: JS: implementation: javascript.js

    if(typeof AOS !== 'undefined'){

    AOS.init({ duration: 1000, once: true });

    }


**Development Tools**

•**GitHub**: Code repository and collaboration

•**VS Code**: Recommended code editor


 
**Project Structure**

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

├── styles.css             # Main stylesheet (1,600+ lines)



**Pages Overview**

1. Landing Page (index.html)

Purpose: First impression and gateway to the site.

Features:

•Hero section with compelling call-to-action

•Company branding and tagline

•Navigation to all other pages

•Professional footer with contact information


2. Homepage (homepage.html)

Purpose: Main content page showcasing featured properties

Features:

•"Why Choose Us" section with key benefits

•Featured properties showcase with interactive cards

•Property image galleries with modal popups

•Responsive grid layout


3. About Us (aboutus.html)

Purpose: Company information and team presentation

Features:

•Company overview with image carousel

•Mission, vision, and goals section

•Team member profiles with photos and contact information

•Professional presentation with animations


4. Properties (properties.html)

Purpose: Comprehensive property listings and details

Features:
Property showcase with detailed information

•Interactive image galleries for each property

•Amenities and features listing

•Location information with Google Maps integration

•Property pricing and specifications


5. Contact Us (contactus.html)

Purpose: Customer interaction and consultation

Features:

•Contact information and consultation hours

•Interactive chatbot for consultation scheduling

•Inquiry and reservation forms

•Professional contact presentation



**Key Features & Functionality**

**Interactive Elements**

•**Image Modals**: Click on property images to view enlarged versions

•**Property Galleries**: Carousel-style image galleries for each property

•**Chatbot System**: Interactive consultation scheduling

•**Form Validation**: Client-side form validation for better UX

•**Smooth Scrolling**: Enhanced navigation experience


**Animation & Transitions**

•**Fade-in Effects**: Elements appear as the user scrolls

•**Hover Effects**: Interactive feedback on buttons and cards

•**Smooth Transitions**: CSS transitions for all interactive elements

•**Loading Animations**: Visual feedback during interactions


**Responsive Features**

•**Mobile-First Design**: Optimized for mobile devices

•**Flexible Grid System**: Bootstrap-based responsive layout

•**Adaptive Navigation**: Mobile hamburger menu

•**Scalable Images**: Responsive image handling



**Design & UI/UX**

**Color Scheme**

•**Primary Blue**: #0072ff (Skyline brand color)

•**Secondary Blue**: #0dcaf0 (Accent color)

•**Dark Background**: #272c39 (Main background)

•**Light Text**: #d3dad9 (Primary text color)

•**Gradient Backgrounds**: Blue gradient combinations


**Typography**

•**Primary Font**: Universal selector (*) font-family chosen are Arial, sans-serif, Arial, sans-serif.

•**Headings**: Header 1 - header-text class (.header-text h1) font-family chosen are Franklin Gothic Medium, Arial Narrow, Arial, sans-serif Medium for impact

•**footer**: font-family chosen is Arial, sans-serif

•**Consistent Sizing**: Responsive typography scale

.why-choose-us class and .why-choose-us h2.has a font-size of 2.5 rem with 1px of letter-spacing. The < h2> tag has a font size of 1.25rem. p has a font-size of 1 rem. .why-choose-us p has a font-size of 1.1 rem.


**Visual Elements**

•**Modern Card Design**: Clean, shadowed cards

•**Professional Photography**: High-quality property images

•**Consistent Spacing**: Uniform margins and padding

•**Icon Integration**: Font Awesome icons throughout



**Responsive Design**

**Breakpoints**

•**Mobile**: < 768px

•**Tablet**: 768px - 1024px

•**Desktop**: > 1024px


**Tablet Optimizations**

•**Adjusted Layouts**: Modified grid systems

•**Medium-Sized Elements**: Balanced proportions

•**Touch Interactions**: Optimized for touch devices


**Prerequisites**

•Modern web browser (Chrome, Firefox, Safari, Edge)

•Local web server (optional, for development)


**File Structure Requirements**

•Ensure all image files are in their respective directories

•Keep the folder structure intact for proper asset loading

•All external CDN links should be accessible


**For Users**

1. **Start at Landing Page**: Begin with index.html for the whole experience
2. **Navigate**: Use the top navigation menu to explore different sections
3. **View Properties**: Click on property images for detailed galleries
4. **Contact**: Use the contact forms or chatbot for inquiries
5. **Mobile**: The site is fully responsive and works on all devices



**Usage**

•Start on the Landing Page to get an overview of SkylineLiving and its featured highlights.

•Navigate through the website using the menu.

•Browse featured properties on the homepage.

•Access About Us, Properties and Contact pages for additional information.



**Team Members & Contributions**

**Project Management**

**Edsa Mae Torrijos** - Project Manager

•Role: Project oversight and task distribution

•Contributions: Landing page and Properties page development

•Specialization: Data Analytics


**Development Team**

**Andrea Nicole Poblete** - Contact Page Developer

•Role: Contact page and chatbot functionality

•Contributions: Contact forms, consultation system, and user interaction

•Specialization: Network and CyberSecurity


**Francis John Alintano** - Homepage Developer

•Role: Main homepage and featured properties

•Contributions: Homepage layout, property showcase, interactive elements

•Specialization: Software Development


**Robert Cery Amisola** - About Us Developer

•Role: About us page and team presentation

•Contributions: Company information, team profiles, mission/vision

•Specialization: Network and CyberSecurity


**Planning Phase**

•Wireframing: Collaborative design of page layouts

•Task Distribution: Clear assignment of responsibilities

•Technology Selection: Choice of HTML5, CSS3, JavaScript, Bootstrap



**Development Phase**

•**Version Control**: GitHub for code management

•**Regular Meetings**: Progress tracking and issue resolution

•**Code Review**: Quality assurance through pull requests

•**Testing**: Cross-browser and device testing


**Collaboration Methods**

•**GitHub**: Central repository for all code

•**Regular Communication**: Team meetings and updates

•**Documentation**: Comprehensive README and code comments



**Future Enhancements**

•Advanced search filters for properties.

•User accounts and saved listings.

•Integration with real estate APIs.

•Enhanced chatbot with AI capabilities.

•Multilingual support.
