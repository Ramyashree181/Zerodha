import React from 'react';

function Hero() {
    return ( 
    <div className="container-fluid px-5 m-4">
      <div className="row">

        {/* LEFT – ACCORDION */}
        <div className="col-md-8">
          <div className="accordion" id="supportAccordion">

            {/* Account Opening */}
            <div className="accordion-item m-4">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#accountOpening"
                >
                  <i className="fa-solid fa-plus"></i>&nbsp;&nbsp;&nbsp;&nbsp;Account Opening
                </button>
              </h2>
              <div
                id="accountOpening"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul>
                    <li>Resident individual</li>
                    <li>Minor</li>
                    <li>Non residental Indian</li>
                    <li>Company, partnership, HUF and LLP</li>
                    <li>Glossary</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Zerodha Account */}
            <div className="accordion-item m-4 border-top">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#zerodhaAccount"
                >
                  <i className="fa-regular fa-circle-user"></i>&nbsp;&nbsp;&nbsp;&nbsp;Your Zerodha Account
                </button>
              </h2>
              <div
                id="zerodhaAccount"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul>
                    <li>Your profile</li>
                    <li>Account modification</li>
                    <li>CMR & DP</li>
                    <li>Nomination</li>
                    <li>Transfer and convertion of securities</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Kite */}
            <div className="accordion-item m-4 border-top">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#kite"
                >
                  <i className="fa-brands fa-kickstarter"></i>&nbsp;&nbsp;&nbsp;&nbsp;Kite
                </button>
              </h2>
              <div
                id="kite"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul>
                    <li>IPO</li>
                    <li>Trading FAQs</li>
                    <li>MTF and Margins</li>
                    <li>Charts and orders</li>
                    <li>Alerts</li>
                  </ul>
                </div>
              </div>
            </div>

        {/* Funds */}
            <div className="accordion-item m-4 border-top">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#funds"
                >
                  <i className="fa-solid fa-indian-rupee-sign"></i>&nbsp;&nbsp;&nbsp;&nbsp;Funds
                </button>
              </h2>
              <div
                id="funds"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul>
                    <li>Add Money</li>
                    <li>Withdraw money</li>
                    <li>Add bank account</li>
                    <li>eMandates</li>
                  </ul>
                </div>
              </div>
            </div>

        {/* Coin */}
            <div className="accordion-item m-4 border-top">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#coin"
                >
                  <i className="fa-solid fa-coins"></i>&nbsp;&nbsp;&nbsp;&nbsp;Coin
                </button>
              </h2>
              <div
                id="coin"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul>
                    <li>Mutual funds</li>
                    <li>National Pension Scheme (NPS)</li>
                    <li>Features on Coin</li>
                    <li>Payments and Orders</li>
                    <li>General</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Console */}
            <div className="accordion-item m-4 border-top">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#console"
                >
                  <i className="fa-solid fa-id-card-clip"></i>&nbsp;&nbsp;&nbsp;&nbsp;Console
                </button>
              </h2>
              <div
                id="funds"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul>
                    <li>Portfolio</li>
                    <li>Corporate actions</li>
                    <li>Funds statement</li>
                    <li>Reports</li>
                    <li>Profile</li>
                    <li>Segments</li>
                  </ul>
                </div>
              </div>
            </div>

            
          </div>
        </div>
        

        {/* RIGHT – QUICK LINKS + ISSUES */}
        <div className="col-md-4">

          <div className="border rounded p-3 mb-4 border-solid-left-3px">
            <h6 className="fw-bold">Latest Updates</h6>
            <ul className="ps-3">
              <li><a href="#">Issue with price updates on Kite <span className="text-success">[Resolved]</span></a></li>
              <li><a href="#">Surveillance measure on scrips – January 2026</a></li>
            </ul>
          </div>

          <div className="border rounded p-3 mb-4">
            <h5 className="fw-bold">Quick links</h5>
            <ol className="ps-3">
              <li>Track account opening</li>
              <li>Track segment activation</li>
              <li>Intraday margins</li>
              <li>Kite user manual</li>
              <li>Learn how to create a ticket</li>
            </ol>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Hero;