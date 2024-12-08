import React from "react";

const Home = () => {
  return (
    <div>
      {/* Inline CSS */}
      <style>
        {`
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            line-height: 1.6;
          }

          header {
            background: url('hero-bg.jpg') no-repeat center center/cover;
            color: white;
            text-align: center;
            padding: 50px 20px;
          }

          header h1 {
            font-size: 2.5rem;
          }

          header p {
            font-size: 1.2rem;
            margin: 20px 0;
          }

          header button {
            background-color: #ff4b2b;
            color: white;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            border-radius: 5px;
          }

          section {
            padding: 40px 20px;
            text-align: center;
          }

          section h2 {
            margin-bottom: 20px;
          }

          .card-list {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
          }

          .card {
            background: #f4f4f4;
            padding: 20px;
            border-radius: 8px;
            max-width: 300px;
            text-align: center;
          }

          .card img {
            width: 80px;
            height: 80px;
            margin-bottom: 10px;
          }

          footer {
            background: #222;
            color: white;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }

          .footer-contact h3,
          .footer-socials h3 {
            margin-bottom: 10px;
          }

          .footer-socials .social-icons a {
            color: white;
            margin-right: 10px;
            font-size: 1.2rem;
          }
        `}
      </style>

      {/* Header Section */}
      <header>
        <h1>Explore Global Opportunities</h1>
        <p>Your journey to studying abroad starts here. Let us guide you to your dream university.</p>
        <button>Get Started</button>
      </header>

      {/* Services Section */}
      <section>
        <h2>Our Services</h2>
        <div className="card-list">
          <div className="card">
            <img src="visa.png" alt="Visa Assistance" />
            <h3>Visa Assistance</h3>
            <p>Expert guidance for hassle-free visa processing.</p>
          </div>
          <div className="card">
            <img src="university.png" alt="University Selection" />
            <h3>University Selection</h3>
            <p>Find the perfect university tailored to your aspirations.</p>
          </div>
          <div className="card">
            <img src="scholarship.png" alt="Scholarship Guidance" />
            <h3>Scholarship Guidance</h3>
            <p>Get access to exclusive scholarships to ease your expenses.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2>Success Stories</h2>
        <div className="card-list">
          <div className="card">
            <p>" helped me secure admission to my dream university in Canada!"</p>
            <h4>- John Doe</h4>
          </div>
          <div className="card">
            <p>"Their visa process support is unparalleled. Highly recommended!"</p>
            <h4>- Sarah Lee</h4>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section>
        <h2>Helpful Resources</h2>
        <div className="card-list">
          <div className="card">
            <h3>Top 5 Universities in Europe for International Students</h3>
            <p>Discover the best universities offering exceptional programs for global learners.</p>
          </div>
          <div className="card">
            <h3>Step-by-Step Visa Application Process</h3>
            <p>Everything you need to know about obtaining your student visa.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: contact@networko.one</p>
          <p>Phone: +88 01511 123 007</p>
        </div>
        <div className="footer-socials">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
