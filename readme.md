# 🌸 CareHer – HealthCare Platform for Women

Welcome to **CareHer**!  
CareHer is a responsive women-focused healthcare website built using **HTML, CSS, and JavaScript**, designed to promote menstrual health awareness, cycle tracking, and overall wellness through a soft and user-friendly interface — with exercise guidance, diet plans, and chatbot integration.

🌐 **Live Website:** https://careher.netlify.app/

---

## 🚀 Features

- **Navigation Bar & Footer** – Smooth navigation across all pages
- **Home Page** – Introduction to CareHer and its mission
- **Period / Cycle Tracker** – Calculate menstrual cycle details
- **Diet & Health Guidance** – Helpful tips for irregular periods
- **Chatbot Support** – Friendly chatbot for quick assistance
- **BMI Calculator** – Calculate Body Mass Index with product recommendations
- **PCOD / PCOS Risk Assessment** – Quiz-based symptom checker
- **Doctor Appointment Booking** – Book appointments with specialists
- **User Auth (Signup / Login)** – Local session-based user management
- **Reviews System** – Submit and manage multiple user reviews
- **Modern UI Design** – Soft pink theme focused on women's wellness
- **Responsive Design** – Works on desktop, tablet, and mobile

---

## 📄 Pages Included

| Page Name             | File Name                  | Description                                              |
|-----------------------|----------------------------|----------------------------------------------------------|
| Home                  | `index.html`               | Welcome page and main navigation                         |
| Health Check          | `healthcheck.html`         | Central health tools section                             |
| BMI Calculator        | `bmi-calc.html`            | Calculates Body Mass Index using height and weight       |
| Period Tracker        | `period.html`              | Tracks menstrual cycle and predicts next period          |
| PCOD / PCOS Detection | `p.html`                   | Helps assess PCOD/PCOS symptoms using user inputs        |
| PCOD Risk Quiz        | `pcod-risk.html`           | Quiz-based PCOD risk assessment                          |
| PCOS Risk Quiz        | `pcos-risk.html`           | Quiz-based PCOS risk assessment                          |
| Exercise              | `exercise.html`            | Workout and fitness guidance for women                   |
| Appointment           | `appointment.html`         | Book doctor appointments                                 |
| Reviews               | `review.html`              | User feedback and testimonials                           |
| Contact               | `contact.html`             | Contact details and support information                  |
| Login / Signup        | `signup.html`, `login.html`| User login and registration                              |

---

## 🛠️ Tech Stack

- **HTML** – Structure of the website
- **CSS** – Styling and responsive layout
- **JavaScript** – Interactivity, health calculations, and localStorage data management

---

## 🚀 How to Run

1. Download or clone the repository
2. Open `index.html` in your browser
3. Navigate through the website using the navigation bar

---

## 📷 Screenshots

### Home Page
![Home Page](./images/home1.png)

---

## 🔧 Recent Fixes

- Fixed hardcoded absolute file paths in PCOD/PCOS navigation functions
- Fixed login crash when no user is registered (null reference guard)
- Fixed reviews overwriting — now stores multiple reviews as an array
- Fixed appointments overwriting — now stores multiple appointments as an array
- Fixed logout not clearing session state
- Removed all debug `console.log` statements from production code
