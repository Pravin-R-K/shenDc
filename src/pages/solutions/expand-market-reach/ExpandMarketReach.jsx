import React from "react";
import "./emr.css";
import Assets from "../../../Assets";

const ExpandMarketReach = () => {
    return (
        <div className="emr-container">
            <section id="emr-1">
                <div className="heading flex f-column f-center">
                    <h1 className="heading-1">Expand Market Reach</h1>
                    <p className="main-para">
                        Solve for Mergers & Acquisitions, Divestment,
                        Geographical Expansion, Market Entry and Global Reach
                    </p>
                </div>
            </section>
            <section id="emr-2">
                <div className="heading flex f-column f-align-center f-around">
                    <h3 className="heading-3">Enter new markets seamlessly</h3>
                    <p className="main-para">
                        New market opportunities can come and go in no time.
                        That's why the last thing you need is delays while the
                        hardware is installed—or you consolidate or separate
                        networks having acquired a company or sold one.
                    </p>
                    <p className="main-para">
                        At Shen, we can support your market entry strategy
                        around mergers and acquisitions, divestment, and
                        geographical expansion with future-proof infrastructure
                        solutions that extend your reach worldwide.
                    </p>
                </div>
            </section>
            <section id="emr-3">
                <div className="heading flex f-column f-center">
                    <h3 className="heading-3">Why choose Shen?</h3>
                    <ul className="sub-para">
                        <li>
                            Proximity to markets: Global availability in 55+
                            markets
                        </li>
                        <li>
                            Optimize public cloud accessibility thanks to the
                            most on-ramps in the market
                        </li>
                        <li>
                            Automate infrastructure deployment through
                            programmable infrastructure
                        </li>
                    </ul>
                </div>
            </section>
            <section id="emr-4">
                <div className="heading flex f-center">
                    <h3 className="heading-3">
                        Fast-track market reach through these solutions
                    </h3>
                </div>
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.solutions.expandMarketReach
                                        .appEmr
                                }
                                alt="Applicatin Modernization"
                                width="100"
                            />
                            <h5 className="heading-5">
                                Infrastructure Modernization
                            </h5>
                            <p className="sub-para">
                                Boost performance and reliability compared to
                                legacy systems by improving physical and digital
                                infrastructure.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.solutions.expandMarketReach
                                        .sdEmr
                                }
                                alt="SD-WAN Shen"
                                width="100"
                            />
                            <h5 className="heading-5">SD-WAN at Shen</h5>
                            <p className="sub-para">
                                Architect your SD-WAN at Shen with unmatched
                                global reach, and access to network services and
                                the cloud.
                            </p>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.solutions.expandMarketReach
                                        .multiCloudEmr
                                }
                                alt="Multi-Cloud networking"
                                width="100"
                            />
                            <h5 className="heading-5">
                                Multi-Cloud Networking
                            </h5>
                            <p className="sub-para">
                                Solve any-to-any cloud routing and achieve
                                better performance and more efficient use of
                                network resources.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.solutions.expandMarketReach
                                        .datasecurityEmr
                                }
                                alt="Data security"
                                width="100"
                            />
                            <h5 className="heading-5">
                                Data Sovereignty and Security
                            </h5>
                            <p className="sub-para">
                                Explore secure data and storage solutions to
                                meet customers' regulatory and governance
                                requirements across the globe.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExpandMarketReach;
