import React from 'react';
import './AboutPage.css';
import Footer from '../Footer/Footer';

const AboutPage = () => {
  return (
    <>
    <div className="about-page">
      <div className='bg'>


        <h1><center>Welcome to Glam Mart</center></h1>
        <br />
        <p>
          At Glam Mart, we believe that everyone deserves to feel and look glamorous effortlessly. Our mission is to redefine the way you shop for beauty products, making it a delightful and convenient experience that enhances your unique style. Whether you're a makeup enthusiast, skincare aficionado, or someone looking to discover the latest trends, Glam Mart is your ultimate destination for all things glamorous.
        </p>
        <br />
        <h2><center>Our Story</center></h2>
        <br />
        <p>
          Glam Mart was born out of a passion for beauty and a commitment to providing a seamless shopping experience. We understand the challenges of finding the right products that complement your style and enhance your natural beauty. That's why we set out to create a platform that brings together the finest beauty products from around the world, curated for every skin tone, hair type, and style preference.
        </p>
        <br />


        <h2><center>What Sets Us Apart</center></h2>
        <br />
        <ul>
          <li><strong>Curated Collections:</strong> Our team of beauty experts handpick the best products, ensuring that each item meets our high standards of quality and style.</li>
          <li><strong>Personalized Recommendations:</strong> Discover products tailored to your unique preferences with our personalized recommendation engine.</li>
          <li><strong>Virtual Try-On:</strong> Experiment with different looks before making a purchase using our virtual try-on feature.</li>
          <li><strong>Fast and Reliable Delivery:</strong> Enjoy fast and reliable delivery services, ensuring that your glam essentials reach your doorstep in no time.</li>
          <li><strong>Secure and Convenient Payments:</strong> Shop with peace of mind knowing that your transactions are secure. We offer a variety of payment options to make your shopping experience as convenient as possible.</li>
        </ul>
        <br />

        <h2><center>Our Commitment</center> </h2>
        <br />
        <p>
          At Glam Mart, we are committed to promoting inclusivity, diversity, and self-expression. We celebrate beauty in all its forms and strive to offer a diverse range of products that cater to the unique needs of our customers.
        </p>
        <br />

        <h2><center>Connect With Us</center></h2>
        <br />
        <p>
          We love hearing from our Glam Squad! Follow us on social media for the latest beauty trends, product launches, and exclusive promotions. Join our community and share your beauty journey with us using #GlamMartBeauty.
        </p>
        <br />

        <p><b>Thank you for choosing Glam Mart - your one-stop destination for glamorous beauty!</b></p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AboutPage;