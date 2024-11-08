import React from "react";
import "./lowlatency.css";

const LowLatency = () => {
    return (
        <div className="latency-container">
            <section id="latency-1">
                <div className="heading flex f-center">
                    <h2 className="heading-2">SHEN CROSS CONNECTS</h2>
                </div>
            </section>
            <section id="latency-2">
                <div className="heading flex f-column f-center">
                    <h3 className="heading-3">
                        Link to dynamic ecosystems of business partners,
                        networks, and carriers.
                    </h3>
                    <p className="main-para">
                        A cross-connect is a point-to-point cable link between
                        two customers in the same Shen International Business
                        Exchange data center. With cross connects you receive a
                        fast, convenient, and affordable integration with
                        business partners and service providers within the Shen
                        digital ecosystem. You also get highly reliable,
                        extremely low-latency communication, system integration,
                        and data exchange.
                    </p>
                </div>
            </section>
            <section id="latency-3">
                <div className="heading flex f-center">
                    <h3 className="heading-3">Features and Benefits</h3>
                </div>
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">
                                Direct ecosystem access
                            </h5>
                            <p className="sub-para">
                                Shen Cross Connects provides access to a vibrant
                                digital ecosystem of business partners and
                                service providers including 1,600+ networks,
                                2,750+ cloud and IT service providers, 800+
                                digital content providers, and 2,750+ enterprise
                                platforms worldwide.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">Enhanced Performance</h5>
                            <p className="sub-para">
                                Cross connection eliminates the need for local
                                loops and expensive dark fiber trenching.
                                Proximity to your partners and customers reduces
                                latency, jitter, and failure. It also improves
                                speed and reliability and accelerates
                                provisioning.
                            </p>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">Increased Flexibility</h5>
                            <p className="sub-para">
                                interconnecting your partner ecosystem in a
                                geographically diverse facility, you can
                                flexibly customize your digital edge. To add
                                even more flexibility, Shen engineers design
                                every installation to simplify cable management
                                and optimize scalability.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">
                                Affordable connectivity
                            </h5>
                            <p className="sub-para">
                                Cross Connects are significantly less expensive
                                than local loops and are typically provisioned
                                within a minute.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="latency-4">
                <div className="heading flex f-center">
                    <h3 className="heading-3">
                        Cross Connect Specification By Region
                    </h3>
                </div>
                <div className="card-container flex f-align-center f-around">
                    <div className="cards flex f-column f-align-center f-around">
                        <h5 className="heading-5">Americas</h5>
                        <p className="sub-para">
                            Offers Single-Mode Fiber. Provides intra-customer
                            cross-connect for customers expanding to another
                            space in the same IBX data center. Provides campus
                            cross-connects to connect between buildings or
                            floors via conduits with pre-run single-mode fiber.
                        </p>
                    </div>
                    <div className="cards flex f-column f-align-center f-around">
                        <h5 className="heading-5">EMEA</h5>
                        <p className="sub-para">
                            Offers Single-Mode Fiber. Provides intra-customer
                            cross-connect for customers expanding to another
                            space in the same IBX data center. Provides campus
                            cross-connects to connect between buildings or
                            floors via conduits with pre-run single-mode fiber.
                        </p>
                    </div>
                    <div className="cards flex f-column f-align-center f-around">
                        <h5 className="heading-5">Asia-Pacific</h5>
                        <p className="sub-para">
                            Offers Single-Mode Fiber. Provides intra-customer
                            cross-connects for customers expanding to another
                            space in the same IBX data center.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LowLatency;
