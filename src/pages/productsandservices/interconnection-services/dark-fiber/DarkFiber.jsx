import React from "react";
import "./darkfiber.css";

const DarkFiber = () => {
    return (
        <div className="darkfiber-container">
            <section id="darkfiber-1">
                <div className="heading flex f-center">
                    <h2 className="heading-2">
                        Access a rich ecosystem with dark fiber benefits
                    </h2>
                </div>
            </section>
            <section id="darkfiber-2">
                <div className="heading flex f-center">
                    <p className="main-para">
                        Fiber Connex provides dark fiber links between customers
                        and partners in multiple Shen International Business
                        Exchange data centers. Fiber Connex enables fast,
                        convenient, and affordable integration with partners,
                        customers, and service providers across the global Shen
                        digital ecosystem. It supports highly reliable,
                        extremely low-latency communication, system integration,
                        and data exchange.
                    </p>
                </div>
            </section>
            <div className="sub-para darkfiber-heading">
                FEATURES AND BENEFITS
            </div>
            <section id="darkfiber-3">
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">
                                Standard and extended connections
                            </h5>
                            <p className="sub-para">
                                Shen Fiber Connex links a customer's cabinet in
                                an IBX data center to another cabinet in a
                                different IBX site in the same metro. Extended
                                Shen Fiber Connex links a customer's cabinet in
                                an IBX site to a third-party Meet Me Room (MMR)
                                in the same metro.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">
                                Direct ecosystem access
                            </h5>
                            <p className="sub-para">
                                Fiber Connex delivers direct access to a vibrant
                                digital ecosystem of business partners and
                                service providers. Worldwide, Shen customers
                                include 1,800+ networks, 2,950+ cloud, and IT
                                service providers, 600+ digital content
                                providers, and 3,200+ enterprises.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">
                                High-performance, low cost
                            </h5>
                            <p className="sub-para">
                                Reduce Your costs by eliminating the need for
                                local telco loops and expensive dark fiber
                                trenching. Proximity to your partners and
                                customers reduces latency, jitter, and failure.
                                It also improves speed and reliability and
                                accelerates provisioning.
                            </p>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">
                                Convenient and immediate services
                            </h5>
                            <p className="sub-para">
                                Implementing Fiber Connect is fast and easy with
                                direct ordering through the Shen Customer
                                Portal. No additional contracts are required,
                                and installation times can be as short as 24
                                hours.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">Service availability</h5>
                            <p className="sub-para">
                                Fiber Connex is currently available in India,
                                the US, and the Middle East.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DarkFiber;
