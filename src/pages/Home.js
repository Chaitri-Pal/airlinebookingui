import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home(){
    return (
        <div>
            
          <div className="container w-60 h-50 mt-3">
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://img.freepik.com/free-photo/airplane-flying-vibrant-blue-sky-clouds-generative-ai_188544-7985.jpg?size=626&ext=jpg&ga=GA1.1.1430938178.1687354579&semt=ais" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Luxurious Flights</h5>
                  <p>Unparalleled Elegance Takes Flight: Discover a World of Luxury Above the Clouds</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://img.freepik.com/premium-photo/man-woman-traveling-with-daughter-airplane_386167-14353.jpg?size=626&ext=jpg&ga=GA1.1.1430938178.1687354579&semt=ais" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>A Jouney to remember!</h5>
                  <p>Every Moment, an Extraordinary Journey: Unleash the Wonders of Travel with Unmatched Excellence.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://img.freepik.com/free-photo/smiling-business-man-texting-smartphone-cafe_1262-3308.jpg?size=626&ext=jpg&ga=GA1.2.1430938178.1687354579&semt=ais" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Unforgettable experience</h5>
                  <p>Where Connectivity Meets Culinary Excellence: Enjoy Fine Dining and WiFi at our Comfortable Airports.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>


              <div className="container mt-3">
              <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card h-100">
                <img src="https://t4.ftcdn.net/jpg/04/97/16/11/240_F_497161143_5Z6ZtUTt1MtQFpYC0MCHuRCgzOoR6KG6.jpg" class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Unparalleled Service in the Skies: Where Your Every Comfort Is Our Priority</h5>
                  <p class="card-text">Experience the epitome of luxury in our premium flight service. Sit back, relax, and let us elevate your journey to new heights of opulence and sophistication.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="https://img.freepik.com/free-photo/businessman-using-mobile-phone-waiting-area_107420-95800.jpg?size=626&ext=jpg&ga=GA1.2.1430938178.1687354579&semt=ais" class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Gateway to Luxury: Where Every Moment Takes Flight at our Luxurious Airports.</h5>
                  <p class="card-text"> Experience a new standard of opulence and convenience as you traverse through our luxurious airports, where every detail is crafted to exceed your expectations.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="https://img.freepik.com/free-vector/realistic-airline-company-landing-page_23-2149720284.jpg?size=626&ext=jpg&ga=GA1.2.1430938178.1687354579&semt=ais" class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Effortless Booking, Unbeatable Discounts: Your Pathway to Hassle-Free Travel.</h5>
                  <p class="card-text"> Experience hassle-free travel with our easy booking process and enjoy the best discounts available.</p>
                </div>
              </div>
            </div>
            </div>
            </div>

          </div>
          </div>
              );

          }
          export default Home;