
import './App.css';

function App() {
  return (
    <>
    <div className="container py-3 text-center">
      <header>
        <div className="row  align-items-center   ">
          <div className="col d-flex logo ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="40"
              viewBox="0 0 128 128"
              className=""
            >
              <path
                fill="#fff"
                d="M98.8 60.9L102.6 66.8 98.8 66.8 98.8 111 29.2 111 29.2 67.9 23.8 66.3 29.2 60.9 64 24.8z"
              ></path>
              <path
                fill="#c7d7e2"
                d="M40.3 111L40.3 71.8 59.6 71.8 59.6 111M64 17L17.6 64 23.5 69.9 64 27.8 104.5 69.9 110.4 64 98.8 52.3 98.8 24.8 87.2 24.8 87.2 40.5z"
              ></path>
              <path
                fill="#c7d7e2"
                d="M48.5,58.2L48.5,58.2c3.1-17.4,27.8-17.4,30.9,0l0,0H48.5z"
              ></path>
              <path
                fill="#454b54"
                d="M98.8,114H29.2c-1.7,0-3-1.3-3-3V70.9h-4.7c-0.8,0-1.6-0.3-2.2-0.9l-3.9-3.9c-1.2-1.2-1.2-3,0-4.2 l46.4-47c1.1-1.1,3.1-1.1,4.3,0l18,18.3v-8.4c0-1.7,1.3-3,3-3h11.6c1.7,0,3,1.3,3,3V51l10.7,10.9c1.2,1.2,1.2,3,0,4.2l-3.9,3.9 c-0.6,0.6-1.3,0.9-2.1,0.9l0,0h-4.7V111C101.8,112.7,100.4,114,98.8,114z M32.2,108h63.5V67.9c0-0.8,0.3-1.6,0.9-2.1 c0.6-0.6,1.4-0.9,2.1-0.9h6.5l0.9-0.9l-9.5-9.6c-0.6-0.6-0.9-1.3-0.9-2.1V27.8h-5.6v12.7c0,1.2-0.7,2.3-1.9,2.8 c-1.1,0.5-2.4,0.2-3.3-0.7L64,21.3L21.9,64l0.9,0.9h6.5c0.8,0,1.6,0.3,2.1,0.9c0.6,0.6,0.9,1.3,0.9,2.1L32.2,108L32.2,108z"
              ></path>
              <path fill="#c7d7e2" d="M68.4 71.8H87.7V91.4H68.4z"></path>
              <path
                fill="#e3f3f7"
                d="M49.9 77.69999999999999A3.9 3.9 0 1 0 49.9 85.5A3.9 3.9 0 1 0 49.9 77.69999999999999Z"
              ></path>
            </svg>
            <p className="fw-bold head fs-5 py-1 "> Estatify</p>
          </div>
          <div className="col-6  text-center nav fw-bolder    ">
            <nav className="nav navbar-expand-lg ">
              <div className=" navbar " id="navbarNavDropdown">
                <ul className="navbar-nav column-gap-3 ">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#">
                      How it works
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Home Valuations
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col nav fw-bold  ">
            <ul className="nav nav-pills ">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Login/Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link contact" aria-current="page" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main className=" mt-3 rounded-3 ">
        <section className=" ms-5 ">
          <div className="row mt-3 fw-bold text-start ">
            {" "}
            <div className="col  align-content-center  ">
              <h1 style={{ color: "#0E3642" }} className="">
                The ease of buying <br />a dream{" "}
                <span style={{ color: "#328b87" }}>house</span>
              </h1>
              <p className=" font mt-3" style={{ fontSize: "1rem" }}>
                No matter how quickly you need to make an offer, our <br />{" "}
                data and experts are always available. Let's start now!
              </p>
              <div className="row mt-3 row-cols-1 ">
                <div className="col  new">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width={20}
                      className="second"
                    >
                      <path
                        fill="#328b87"
                        d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z"
                      />
                    </svg>
                    <span className=" font m-2 second  "> 17.2M</span>
                    <span className=" font second">
                      {" "}
                      Owned from properties transactions.
                    </span>
                  </div>
                </div>
                <div className="col mt-2 ">
                  <div className="new">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      width={20}
                      className=" second"
                    >
                      <path
                        fill="#328b87"
                        d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                      />
                    </svg>

                    <span className=" font m-2 second ">24k+</span>

                    <span className=" font second">
                      {" "}
                      propertiesfor buy or sell.
                    </span>
                  </div>
                </div>{" "}
              </div>{" "}
            </div>
            <div className="col ">
              <img src="build.jpg" alt="build" />
            </div>
            <div className="   menu">
              <div className="col">
                <div className="list-inline " id="list-tab" role="tablist">
                  <input
                    type="radio"
                    className="btn-check "
                    name="btnradio"
                    id="btnradio1"
                    autocomplete="off"
                    checked
                  />
                  <label className="btn btn-outline-light " for="btnradio1">
                    <a
                      className="list-inline-item  list-inline-item-action active "
                      id="list-buy-list"
                      data-bs-toggle="list"
                      href="#list-buy"
                      role="tab"
                      aria-controls="list-buy"
                    >
                      Buy
                    </a>
                  </label>
                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio2"
                    autocomplete="off"
                  />
                  <label class="btn btn-outline-light" for="btnradio2">
                    <a
                      className="list-inline-item list-inline-item-action"
                      id="list-rent-list"
                      data-bs-toggle="list"
                      href="#list-rent"
                      role="tab"
                      aria-controls="list-rent"
                    >
                      Rent
                    </a>
                  </label>
                  <input
                    type="radio"
                    className="btn-check "
                    name="btnradio"
                    id="btnradio3"
                    autocomplete="off"
                  />
                  <label class="btn btn-outline-light " for="btnradio3">
                    <a
                      className="list-inline-item list-inline-item-action"
                      id="list-co-list"
                      data-bs-toggle="list"
                      href="#list-co"
                      role="tab"
                      aria-controls="list-co"
                    >
                      Co-Living
                    </a>
                  </label>
                </div>
              </div>
              <div className="col pop rounded-3 d-flex ">
                <div className="tab-content " id="nav-tabContent">
                  <div
                    className="tab-pane fade show active "
                    id="list-buy"
                    role="tabpanel"
                    aria-labelledby="list-buy-list"
                  >
                    {" "}
                    <div className=" d-flex text-center ">
                      <div className="d-grid align-items-center text-center w-100">
                        <p className="font ">City/Street</p>

                        <select
                          className="form-select border-0 text-center fs-6"
                          aria-label="Default select example"
                        >
                          <option selected>Riyadh</option>
                          <option value="1">London</option>
                          <option value="2">paris</option>
                          <option value="3">seoul</option>
                        </select>
                      </div>
                      <div className="d-grid align-items-center text-center w-100">
                        <p className="font">Property Type</p>
                        <select
                          className="form-select border-0 text-center fs-6"
                          aria-label="Default select example"
                        >
                          <option selected>Modular Homes</option>
                          <option value="1">Flat</option>
                          <option value="2">Flat</option>
                          <option value="3">Flat</option>
                        </select>
                      </div>
                      <div className="d-grid align-items-center text-center w-100">
                        <p className="font">Price Range </p>
                        <select
                          className="form-select border-0 text-center fs-6 "
                          aria-label="Default select example"
                        >
                          <option selected>$15.000-$25.000</option>
                          <option value="1">$25.000-$35.000</option>
                          <option value="2">$35.000-$45.000</option>
                          <option value="3">$45.000-$55.000</option>
                        </select>
                      </div>
                      <button className="btn search ms-3 fw-semibold ">
                        {" "}
                        Search
                      </button>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show"
                    id="list-rent"
                    role="tabpanel"
                    aria-labelledby="list-rent-list"
                  >
                    <div className=" d-flex ">
                      <div className="d-grid align-items-center text-center w-100">
                        <p className="font">City/Street</p>

                        <select
                          className="form-select border-0 text-center fs-6"
                          aria-label="Default select example"
                        >
                          <option selected>Riyadh</option>
                          <option value="1">London</option>
                          <option value="2">paris</option>
                          <option value="3">seoul</option>
                        </select>
                      </div>
                      <div className="d-grid align-items-center text-center w-100">
                        <p className="font">Property Type</p>
                        <select
                          className="form-select border-0 text-center fs-6"
                          aria-label="Default select example"
                        >
                          <option selected>Modular Homes</option>
                          <option value="1">Flat</option>
                          <option value="2">Flat</option>
                          <option value="3">Flat</option>
                        </select>
                      </div>
                      <div className="d-grid align-items-center text-center w-100">
                        <p className="font">Price Range </p>
                        <select
                          className="form-select border-0 text-center fs-6"
                          aria-label="Default select example"
                        >
                          <option selected>$15.000-$25.000</option>
                          <option value="1">$25.000-$35.000</option>
                          <option value="2">$35.000-$45.000</option>
                          <option value="3">$45.000-$55.000</option>
                        </select>
                      </div>
                      <button className="btn search ms-3 fw-semibold">
                        {" "}
                        Search
                      </button>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade  show "
                    id="list-co"
                    role="tabpanel"
                    aria-labelledby="list-co-list"
                  >
                    <div className=" d-flex align-itmes-center ">
                      <div className="d-grid align-items-center text-center w-100">
                        {" "}
                        <p className="font">City/Street</p>
                        <select
                          className="form-select border-0  fs-6"
                          aria-label="Default select example"
                        >
                          <option selected>Riyadh</option>
                          <option value="1">London</option>
                          <option value="2">paris</option>
                          <option value="3">seoul</option>
                        </select>
                      </div>
                      <div className="d-grid align-items-center text-center w-100 ">
                        <p className="font">Property Type</p>
                        <select
                          className="form-select border-0  fs-6"
                          aria-label="Default select example"
                        >
                          <option selected>Modular Homes</option>
                          <option value="1">Flat</option>
                          <option value="2">Flat</option>
                          <option value="3">Flat</option>
                        </select>
                      </div>
                      <div className="d-grid align-items-center text-center w-100">
                        <p className="font">Price Range </p>
                        <select
                          className="form-select border-0  fs-6"
                          aria-label="Default select example"
                        >
                          <option selected>$15.000-$25.000</option>
                          <option value="1">$25.000-$35.000</option>
                          <option value="2">$35.000-$45.000</option>
                          <option value="3">$45.000-$55.000</option>
                        </select>
                      </div>
                      <button className="btn search ms-3 fw-semibold">
                        {" "}
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-5">
        <div className="row ms-2 ">
          <div className="col d-flex ">
            <div className="row card_head d-grid text-start m-3">
              <div className="col mt-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  width={30}
                >
                  <path
                    fill="#328b87"
                    d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"
                  />
                </svg>
              </div>
              <div className="col">
                <p className="card_title mt-3">Your bid</p>
                <p className="font text-wrap fw-medium">
                  Find out what you need to offer within 24 hours.
                </p>
              </div>
            </div>
            <div className="row card_head d-grid text-start  m-3">
              <div className="col mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  width={30}
                >
                  <path
                    fill="#328b87"
                    d="M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z"
                  />
                </svg>
              </div>
              <div className="col">
                <p className="card_title mt-3">Data-driven</p>
                <p className="font text-wrap fw-medium">
                  Know what comparable homes are sold for.
                </p>
              </div>
            </div>
            <div className="row card_head d-grid text-start  m-3">
              <div className="col mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  width={30}
                >
                  <path
                    fill="#328b96"
                    d="M48 48h88c13.3 0 24-10.7 24-24s-10.7-24-24-24H32C14.3 0 0 14.3 0 32V136c0 13.3 10.7 24 24 24s24-10.7 24-24V48zM175.8 224a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-26.5 32C119.9 256 96 279.9 96 309.3c0 14.7 11.9 26.7 26.7 26.7h56.1c8-34.1 32.8-61.7 65.2-73.6c-7.5-4.1-16.2-6.4-25.3-6.4H149.3zm368 80c14.7 0 26.7-11.9 26.7-26.7c0-29.5-23.9-53.3-53.3-53.3H421.3c-9.2 0-17.8 2.3-25.3 6.4c32.4 11.9 57.2 39.5 65.2 73.6h56.1zm-89.4 0c-8.6-24.3-29.9-42.6-55.9-47c-3.9-.7-7.9-1-12-1H280c-4.1 0-8.1 .3-12 1c-26 4.4-47.3 22.7-55.9 47c-2.7 7.5-4.1 15.6-4.1 24c0 13.3 10.7 24 24 24H408c13.3 0 24-10.7 24-24c0-8.4-1.4-16.5-4.1-24zM464 224a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-80-32a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM504 48h88v88c0 13.3 10.7 24 24 24s24-10.7 24-24V32c0-17.7-14.3-32-32-32H504c-13.3 0-24 10.7-24 24s10.7 24 24 24zM48 464V376c0-13.3-10.7-24-24-24s-24 10.7-24 24V480c0 17.7 14.3 32 32 32H136c13.3 0 24-10.7 24-24s-10.7-24-24-24H48zm456 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H608c17.7 0 32-14.3 32-32V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v88H504z"
                  />
                </svg>
              </div>
              <div className="col">
                <p className="card_title mt-3">Objective</p>
                <p className="font text-wrap fw-medium">
                  Get advice and feedback based on solid data.
                </p>
              </div>
            </div>
            <div className="row card_head d-grid text-start  m-3">
              <div className="col mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width={30}
                >
                  <path
                    fill="#328b87"
                    d="M432 64H208c-8.8 0-16 7.2-16 16V96H128V80c0-44.2 35.8-80 80-80H432c44.2 0 80 35.8 80 80V304c0 44.2-35.8 80-80 80H416V320h16c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zM0 192c0-35.3 28.7-64 64-64H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192zm64 32c0 17.7 14.3 32 32 32H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32 14.3-32 32z"
                  />
                </svg>
              </div>
              <div className="col">
                <p className="card_title mt-3">Unlimited</p>
                <p className="font text-wrap fw-medium">
                  The agreement is valid until the time you buy the house.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </>
  );
}

export default App;
