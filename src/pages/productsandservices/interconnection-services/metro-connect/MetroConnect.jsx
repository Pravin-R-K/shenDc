import React from "react";
import "./metroconnect.css";

const MetroConnect = () => {
    return (
        <div className="metro-connect-container">
            <section id="metro-connect-1">
                <div className="heading flex f-center">
                    <h2 className="heading-2">
                        Connect to multiple data centers within a metro
                    </h2>
                </div>
            </section>
            <section id="metro-connect-2">
                <div className="heading flex f-center">
                    <p className="main-para">
                        Shen Metro Connect services provide direct, dedicated,
                        carrier-grade network links between customers in one
                        Shen International Business Exchange data center and
                        partners in another IBX within the same metro. With
                        Metro Connect you'll enjoy fast, convenient, and
                        affordable integration with customers, partners, and
                        service providers within the Shen digital ecosystem.
                        Your organization will benefit from highly reliable,
                        extremely low-latency communication, system integration,
                        and data exchange.
                    </p>
                </div>
            </section>
            <div className="sub-para metro-connect-heading">
                FEATURES AND BENEFITS
            </div>
            <section id="metro-connect-3">
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">
                                Speed and interface options
                            </h5>
                            <p className="sub-para">
                                Shen offers both dedicated Layer 1 and
                                switch-based Layer 2 services in a variety of
                                configurations. All service types are available
                                as active or passive solutions. Get the data
                                sheet to learn more about these.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">
                                Direct ecosystem access
                            </h5>
                            <p className="sub-para">
                                Metro Connect you have access to a vibrant
                                digital ecosystem of business partners and
                                service providers. Worldwide Shen customers
                                include 1,800+ network providers, 2,950+ cloud
                                and IT service providers, 600+ digital content
                                providers, and 3,200+ enterprises.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">Enhanced performance</h5>
                            <p className="sub-para">
                                Metro Connect services eliminate the need for
                                local loops and expensive dark fiber trenching.
                                Proximity to your partners and customers reduces
                                latency, jitter, and failure. It also improves
                                speed and reliability and accelerates
                                provisioning.
                            </p>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">Increased flexibility</h5>
                            <p className="sub-para">
                                Interconnecting your partner ecosystem in a
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
                                Metro Connect services are significantly less
                                expensive than connecting via local loops.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MetroConnect;
