import React from "react";
import "./gainagility.css";
import Assets from "../../../Assets";

const GainAgility = () => {
    return (
        <div className="ga-container">
            <section id="ga-1">
                <div className="heading flex f-column f-center">
                    <h1 className="heading-1">Gain agility</h1>
                    <p className="main-para">
                        Solve for Time-to-Market, Pay Per Use, Remote
                        Automation, Scalability and Application Development.
                    </p>
                </div>
            </section>
            <section id="ga-2">
                <div className="heading flex f-column f-align-center f-around">
                    <h3 className="heading-3">
                        React quickly and rapidly scale with your infrastructure
                    </h3>
                    <p className="main-para">
                        The ability to react quickly to changing markets and
                        rapidly scale infrastructure up and down has never been
                        more important. You need to be ready to do so securely
                        and flexibly by connecting to multiple clouds. As well
                        as speed up future deployments through remote
                        automation—including configuration—and efficient
                        application development.
                    </p>
                    <p className="main-para">
                        Shen can help you choose the right solutions to ensure a
                        short reaction time through future-proof infrastructure
                        that's designed both for now and tomorrow.
                    </p>
                </div>
            </section>
            <section id="ga-3">
                <div className="heading flex f-column f-center">
                    <h3 className="heading-3">Why choose Shen?</h3>
                    <ul className="sub-para">
                        <li>Global availability in markets</li>
                        <li>
                            Robust security—by-passing the public internet if
                            needed
                        </li>
                        <li>
                            On-demand, pay-per-use resources for quick, easy
                            scalability
                        </li>
                        <li>
                            Convenient public cloud accessibility thanks to the
                            most on-ramps in the market
                        </li>
                        <li>
                            Easy access to your infrastructure and markets via
                            datacenters
                        </li>
                    </ul>
                </div>
            </section>
            <section id="ga-4">
                <div className="heading flex f-center">
                    <h3 className="heading-3">
                        Gain agility through these solutions
                    </h3>
                </div>
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.solutions.gainAgility
                                        .appModern
                                }
                                alt="Applicatin Modernization"
                                width="100"
                            />
                            <h5 className="heading-5">
                                Application Modernization
                            </h5>
                            <p className="sub-para">
                                Increase agility and enhance productivity by
                                transforming legacy applications into modern,
                                efficient, scalable systems.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={Assets.images.solutions.gainAgility.sdShen}
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
                                    Assets.images.solutions.gainAgility
                                        .cloudAgility
                                }
                                alt="Cloud Access"
                                width="100"
                            />
                            <h5 className="heading-5">Cloud Access</h5>
                            <p className="sub-para">
                                Use a range of technologies to integrate public
                                cloud resources reliably and securely into your
                                digital infrastructure.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.solutions.gainAgility
                                        .storageAgility
                                }
                                alt="Storage optimization"
                                width="100"
                            />
                            <h5 className="heading-5">Storage Optimization</h5>
                            <p className="sub-para">
                                Addresses the hidden costs of cloud storage
                                services and gets enterprise-class,
                                high-performance data services for even the most
                                demanding workloads.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GainAgility;
