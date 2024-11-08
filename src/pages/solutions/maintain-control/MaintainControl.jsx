import React from "react";
import "./maintain.css";
import Assets from "../../../Assets";

const MaintainControl = () => {
    return (
        <div className="mc-container">
            <section id="mc-1">
                <div className="heading flex f-column f-center">
                    <h1 className="heading-1">Maintain control</h1>
                    <p className="main-para">
                        Solve for Compliance, Data Privacy, Regulation, Security
                        and ESG
                    </p>
                </div>
            </section>
            <section id="mc-2">
                <div className="heading flex f-column f-align-center f-around">
                    <h3 className="heading-3">
                        Meet compliance, regulation and data privacy standards
                    </h3>
                    <p className="main-para">
                        Meeting regulatory requirements isn't optional—it's a
                        necessity. That's whether you're keeping data in local
                        geographies or safe harbors. There's also pressure to
                        shrink your carbon footprint and energy spend, not to
                        mention save on energy costs and upgrade security.
                    </p>
                    <p className="main-para">
                        At Shen, we can support your ability to control
                        compliance, regulation, data privacy, security, and ESG
                        challenges with future-proof infrastructure solutions
                        that can grow with you.
                    </p>
                </div>
            </section>
            <section id="mc-3">
                <div className="heading flex f-column f-center">
                    <h3 className="heading-3">Why choose Shen?</h3>
                    <ul className="sub-para">
                        <li>Global availability</li>
                        <li>
                            Keep your data in the region where it belongs—choose
                            from 240+ datacenters in 55+ markets
                        </li>
                        <li>
                            Reduce your carbon footprint—thanks to 100% green
                            energy in AMER and EMEA, 94% globally
                        </li>
                        <li>
                            Benefit from robust security—by-passing the public
                            internet if needed
                        </li>
                        <li>
                            Deploy single-tenant infrastructure through
                            dedicated bare metal servers
                        </li>
                    </ul>
                </div>
            </section>
            <section id="mc-4">
                <div className="heading flex f-center">
                    <h3 className="heading-3">
                        Gain control though these solutions
                    </h3>
                </div>
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.solutions.maintainControl
                                        .workloadMc
                                }
                                alt="Cloud workload"
                                width="100"
                            />
                            <h5 className="heading-5">
                                Cloud Workload Optimization
                            </h5>
                            <p className="sub-para">
                                Reduce cost, improve reliability, and enhance
                                performance by optimizing infrastructure
                                configuration.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.solutions.maintainControl
                                        .appMc
                                }
                                alt="Application modernization"
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
                                src={
                                    Assets.images.solutions.maintainControl
                                        .sdwanMc
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
                                    Assets.images.solutions.maintainControl
                                        .multicloudMc
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
                                    Assets.images.solutions.maintainControl
                                        .datasecurityMc
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
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.solutions.maintainControl
                                        .storageMc
                                }
                                alt="Storage optimization"
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
                </div>
            </section>
        </div>
    );
};

export default MaintainControl;
