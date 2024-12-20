<template>
    <div class="home-page">
        <section class="hero">
        <h1>EmpowerHer Tech</h1>
        <h2>Welcome to Our Organization!</h2>
        <p>Your gateway to mentorship and career opportunities in tech.</p>
        <router-link to="/mentorship" class="cta-button">Join Our Mentorship Program</router-link>
      </section>
  
      <section class="features">
        <h2>Our Services</h2>
        <div class="feature-cards-container">
          <div class="feature-card">
            <h3>Mentorship</h3>
            <p>Connect with experienced professionals in your field.</p>
          </div>
          <div class="feature-card">
            <h3>Job Board</h3>
            <p>Explore job opportunities tailored for you.</p>
          </div>
          <div class="feature-card">
            <h3>Workshops</h3>
            <p>Participate in hands-on workshops and improve your skills.</p>
          </div>
        </div>
      </section>
  
      <section class="testimonials">
        <h2>What Our Members Say</h2>
        <div class="testimonial-card">
          <p>"This organization helped me find a great mentor and land my dream job!"</p>
          <strong>- Sarah Lee</strong>
        </div>
        <div class="testimonial-card">
          <p>"The job board is fantastic! I found multiple opportunities that fit my skills."</p>
          <strong>- John Doe</strong>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home'
  }
  </script>
  
  <style scoped>
  .home-page {
    text-align: center;
    padding: 20px;
  }
  
  /* Hero Section */
  .hero {
    background-color: #ffffff;
    color: black;
    padding: 50px 20px;
  }
  
  .hero h1 {
    font-size: 2.5em;
    margin: 0;
  }
  
  .hero p {
    font-size: 1.2em;
  }
  
  /* CTA Button */
  .cta-button {
    background-color: #f39c12;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .cta-button:hover {
    background-color: #e67e22;
  }
  
  /* Features Section */
  .features {
    margin: 40px 0;
  }
  
  .features h2 {
    font-size: 2em;
    margin-bottom: 20px;
  }
  
  .feature-cards-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .feature-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    background-color: #fff;
    width: 200px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* Testimonials Section */
  .testimonials {
    margin: 40px 0;
  }
  
  .testimonial-card {
    background-color: #f4f4f4;
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .testimonial-card strong {
    display: block;
    margin-top: 10px;
    color: #2c3e50;
  }
  </style>
  