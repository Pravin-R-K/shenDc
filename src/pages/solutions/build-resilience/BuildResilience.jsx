import React from "react";
import "./resilience.css";
import Assets from "../../../Assets";

const BuildResilience = () => {
    return (
        <div className="br-container">
            <section id="br-1">
                <div className="heading flex f-column f-center">
                    <h1 className="heading-1">Build Resilience</h1>
                    <p className="main-para">
                        Solve for Business Continuity, Disaster Recovery,
                        Security, No Vendor lock-in, Workload Mobility, and Risk
                        Mitigation
                    </p>
                </div>
            </section>
            <section id="br-2">
                <div className="heading flex f-column f-center">
                    <h3 className="heading-3">Why choose Shen?</h3>
                    <ul className="sub-para">
                        <li>
                            Vendor neutrality that welcomes all leading service
                            providers on Platform Shen
                        </li>
                        <li>
                            Global uptime through always-on access across 31
                            countries
                        </li>
                        <li>
                            Easy expansion of your current backup and storage
                            strategy thanks to direct access to all leading
                            vendors
                        </li>
                    </ul>
                </div>
            </section>
            <section id="br-3">
                <div className="heading flex f-center">
                    <h3 className="heading-3">
                        Build resiliency through these solutions
                    </h3>
                </div>
                <div className="card-container flex f-align-center f-around">
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={
                                Assets.images.solutions.buildResilience
                                    .datasecurityBr
                            }
                            alt="Data security"
                            width="100"
                        />
                        <h5 className="heading-5">
                            Data Sovereignty and Security
                        </h5>
                        <p className="sub-para">
                            Explore secure data and storage solutions to meet
                            customers' regulatory and governance requirements
                            across the globe.
                        </p>
                    </div>
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={
                                Assets.images.solutions.buildResilience
                                    .continuityBr
                            }
                            alt="Business continuity"
                            width="100"
                        />
                        <h5 className="heading-5">
                            Business Continuity/Disaster Recovery
                        </h5>
                        <p className="sub-para">
                            Get dedicated digital infrastructure to support
                            challenges faced by customers who need operational
                            states 24/7/365.
                        </p>
                    </div>
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={
                                Assets.images.solutions.buildResilience
                                    .storageBr
                            }
                            alt="Storage optimization"
                            width="100"
                        />
                        <h5 className="heading-5">Storage Optimization</h5>
                        <p className="sub-para">
                            Addresses the hidden costs of cloud storage services
                            and provides enterprise-class, high-performance data
                            services for even the most demanding workloads.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BuildResilience;
