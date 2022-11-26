import React from "react";

export default function Home() {
  return (
    <>
      <section id="home">
        <div className="container-fluid home">
          <div className="row d-flex align-items-center justify-content-center pt-5">
            <img src="./imgs/avataaars.svg" alt="" className="mb-5 avatar" />
            <h1 className="text-center text-white">START REACT</h1>

            <div className="d-flex align-items-center justify-content-center">
              <div className="line me-3"></div>
              <div>
                {" "}
                <i class="fa-solid fa-star text-white fs-5"></i>{" "}
              </div>
              <div className="line ms-3"></div>
            </div>

            <p className="text-white text-center pt-4">
              Graphic Artist - Web Designer - Illustrator
            </p>
          </div>
        </div>
      </section>

      <section id="portfolio" className="page-section">
        <div className="container">
          <div className="row mb-5 mt-2">
            <h1 className="text-center">PORTFOLIO</h1>

            <div className="d-flex align-items-center justify-content-center">
              <div className="line2 me-3"></div>
              <div>
                {" "}
                <i class="fa-solid fa-star  fs-5"></i>{" "}
              </div>
              <div className="line2 ms-3"></div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="position-relative d-flex contain">
                <a
                  href=""
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <img
                    src="./imgs/cabin.png"
                    alt=""
                    className="w-100 rounded"
                  />

                  <div class="caption rounded d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-plus fs-1 text-white "></i>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-5">
              <div className="position-relative d-flex contain">
                <a
                  href=""
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                >
                  <img src="./imgs/cake.png" alt="" className="w-100 rounded" />

                  <div class="caption rounded d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-plus fs-1 text-white "></i>
                  </div>
                </a>
              </div>
            </div>
           
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="position-relative d-flex contain">
                <a
                  href=""
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  <img src="./imgs/circus.png" alt="" className="w-100 rounded" />

                  <div class="caption rounded d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-plus fs-1 text-white "></i>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="position-relative d-flex contain">
                <a
                  href=""
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal3"
                >
                  <img src="./imgs/game.png" alt="" className="w-100 rounded" />

                  <div class="caption rounded d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-plus fs-1 text-white "></i>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="position-relative d-flex contain">
                <a
                  href=""
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal4"
                >
                  <img src="./imgs/safe.png" alt="" className="w-100 rounded" />

                  <div class="caption rounded d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-plus fs-1 text-white "></i>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="position-relative d-flex contain">
                <a
                  href=""
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal5"
                >
                  <img src="./imgs/submarine.png" alt="" className="w-100 rounded" />

                  <div class="caption rounded d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-plus fs-1 text-white "></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="page-section">
        <div className="container">
          <div className="row">
            <h1 className="text-center text-white">ABOUT</h1>

            <div className="d-flex align-items-center justify-content-center">
              <div className="line me-3 "></div>
              <div>
                {" "}
                <i class="fa-solid fa-star text-white fs-5"></i>{" "}
              </div>
              <div className="line ms-3"></div>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-lg-4 ml-auto">
              <p className="text-white">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-lg-4 mr-auto">
              <p className="text-white">
                You can create your own custom avatar for the masthead, change
                the icon in the dividers, and add your email address to the
                contact form to make it fully functional!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="page-section">
        <div className="container">
          <div className="row mb-5 mt-2">
            <h1 className="text-center">CONTACT ME</h1>

            <div className="d-flex align-items-center justify-content-center">
              <div className="line2 me-3"></div>
              <div>
                {" "}
                <i class="fa-solid fa-star  fs-5"></i>{" "}
              </div>
              <div className="line2 ms-3"></div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <form>
                <div className="control-group">
                  <div className="form-group pb-3">
                    <input
                      class="form-control"
                      id="name"
                      type="text"
                      placeholder="Name"
                      required="required" /* data-validation-required-message="Please enter your name." aria-invalid="false" */
                    />
                  </div>
                </div>

                <div className="control-group">
                  <div className="form-group pb-3">
                    <input
                      class="form-control"
                      id="email"
                      type="email"
                      placeholder="Email Address"
                      required="required" /* data-validation-required-message="Please enter your name." aria-invalid="false" */
                    />
                  </div>
                </div>

                <div className="control-group">
                  <div className="form-group pb-3">
                    <input
                      class="form-control"
                      id="phone"
                      type="tel"
                      placeholder="Phone Number"
                      required="required" /* data-validation-required-message="Please enter your name." aria-invalid="false" */
                    />
                  </div>
                </div>

                <div className="control-group">
                  <div className="form-group pb-3">
                    <textarea
                      name=""
                      id="message"
                      rows="5"
                      placeholder="Message"
                      required="required"
                      className="form-control"
                    ></textarea>
                  </div>
                </div>

                <div class="btn-form">
                  <button class="btn btn-primary p-4 fs-5" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="footer">
        <footer className="footer text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-5 ">
                <h4>LOCATION</h4>
                <p className="lead">
                  2215 John Daniel Drive <br /> Clark, MO 65243
                </p>
              </div>
              <div className="col-lg-4 mb-5 ">
                <h4>AROUND THE WEB</h4>
                <a href="#!" className="btn btn-outline-light btn-social mx-1">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#!" className="btn btn-outline-light btn-social mx-1">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="#!" className="btn btn-outline-light btn-social mx-1">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#!" className="btn btn-outline-light btn-social mx-1">
                  <i class="fa-brands fa-dribbble"></i>
                </a>
              </div>
              <div className="col-lg-4 mb-5 ">
                <h4>ABOUT FREELANCER</h4>
                <p className="lead mb-0">
                  Freelance is a free to use, MIT licensed Bootstrap theme
                  created by Route
                </p>
              </div>
            </div>
          </div>
        </footer>
        <div className="copyright py-4 text-white text-center">
          <div className="container">
            <small>Copyright © Your Website 2021</small>
          </div>
        </div>
      </section>

      
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            
              <button
                type="button"
                class="btn-close close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            
            <div class="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h1 className="fs-1">LOG CABIN</h1>
                    <img src="./imgs/cabin.png" alt="" className="w-100 rounded mb-5" />
                    <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.
                    </p>

                  </div>

                </div>
              </div>
              
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      </div>


      <div
        class="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            
              <button
                type="button"
                class="btn-close close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            
            <div class="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h1 className="fs-1">TASTY CAKE</h1>
                    <img src="./imgs/cake.png" alt="" className="w-100 rounded mb-5" />
                    <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.
                    </p>

                  </div>

                </div>
              </div>
              
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel2"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            
              <button
                type="button"
                class="btn-close close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            
            <div class="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h1 className="fs-1">CIRCUS TENT</h1>
                    <img src="./imgs/circus.png" alt="" className="w-100 rounded mb-5" />
                    <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.
                    </p>

                  </div>

                </div>
              </div>
              
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal3"
        tabindex="-1"
        aria-labelledby="exampleModalLabel3"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            
              <button
                type="button"
                class="btn-close close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            
            <div class="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h1 className="fs-1">CONTROLLER</h1>
                    <img src="./imgs/game.png" alt="" className="w-100 rounded mb-5" />
                    <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.
                    </p>

                  </div>

                </div>
              </div>
              
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal4"
        tabindex="-1"
        aria-labelledby="exampleModalLabel4"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            
              <button
                type="button"
                class="btn-close close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            
            <div class="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h1 className="fs-1">LOCKED SAFE</h1>
                    <img src="./imgs/safe.png" alt="" className="w-100 rounded mb-5" />
                    <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.
                    </p>

                  </div>

                </div>
              </div>
              
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal5"
        tabindex="-1"
        aria-labelledby="exampleModalLabel5"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            
              <button
                type="button"
                class="btn-close close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            
            <div class="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h1 className="fs-1">SUBMARINE</h1>
                    <img src="./imgs/submarine.png" alt="" className="w-100 rounded mb-5" />
                    <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.
                    </p>

                  </div>

                </div>
              </div>
              
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
