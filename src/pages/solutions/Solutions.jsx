import React from "react";
import "./solutions.css";

const Solutions = () => {
    return (
        <div className="solutions-container">
            <section id="solutions-1">
                <div className="heading flex f-column f-center">
                    <h1 className="heading-1">Discover solutions at Equinix</h1>
                    <p className="main-para">
                        Solve your business problems with products and services
                        from Equinix and our partners. Get started with
                        reference designs that match your needs.
                    </p>
                </div>
            </section>
            <section id="solutions-2">
                <div className="heading flex f-center">
                    <h3 className="heading-3">Technology solutions</h3>
                </div>
                <div className="card-container flex f-align-center f-around">
                    <div className="cards flex f-column f-center">
                        <h5 className="heading-5">Compute Solutions</h5>
                        <p className="sub-para">Explore compute </p>
                    </div>
                    <div className="cards flex f-column f-center">
                        <h5 className="heading-5">Networking Solutions</h5>
                        <p className="sub-para">Explore networking</p>
                    </div>
                    <div className="cards flex f-column f-center">
                        <h5 className="heading-5">Storage Solutions</h5>
                        <p className="sub-para">Explore storage</p>
                    </div>
                </div>
            </section>
            <section id="solutions-3">
                <div className="heading flex f-center">
                    <h3 className="heading-3">Solve for key use cases</h3>
                </div>
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-around">
                            <h5 className="heading-5">Gain Agility</h5>
                            <p className="sub-para">
                                Solve for Time-to-Market, Pay Per Use, Remote
                                Automation, Scalability and Application
                                Development.
                            </p>
                            <div className="hp-links flex f-center">
                                <p className="sub-para">Explore Agility</p>
                                <span class="material-symbols-outlined">
                                    trending_flat
                                </span>
                            </div>
                        </div>
                        <div className="cards flex f-column f-around">
                            <h5 className="heading-5">Increase Performance</h5>
                            <p className="sub-para">
                                Solve for User Experience, Low Latency, High
                                Bandwidth, and Automation Explore Performance
                            </p>
                            <div className="hp-links flex f-center">
                                <p className="sub-para">Explore Performance</p>
                                <span class="material-symbols-outlined">
                                    trending_flat
                                </span>
                            </div>
                        </div>
                        <div className="cards flex f-column f-around">
                            <h5 className="heading-5">Expand Market Reach</h5>
                            <p className="sub-para">
                                Solve for Mergers & Acquisitions, Divestment,
                                Geographical Expansion, Market Entry, and Global
                                Reach.
                            </p>
                            <div className="hp-links flex f-center">
                                <p className="sub-para">Explore Market Reach</p>
                                <span class="material-symbols-outlined">
                                    trending_flat
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-around">
                            <h5 className="heading-5">Maintain Control</h5>
                            <p className="sub-para">
                                Solve for Compliance, Data Privacy, Regulation,
                                Security, and ESG.
                            </p>
                            <div className="hp-links flex f-center">
                                <p className="sub-para">
                                    Explore Maintaining Control
                                </p>
                                <span class="material-symbols-outlined">
                                    trending_flat
                                </span>
                            </div>
                        </div>
                        <div className="cards flex f-column f-around">
                            <h5 className="heading-5">Optimize Costs</h5>
                            <p className="sub-para">
                                Solve for CAPEX/OPEX, Cloud Repatriation, Cloud
                                Migration, Cloud Data Egress Cost, Remote
                                Administration and reduce infrastructure TCO.
                            </p>
                            <div className="hp-links flex f-center">
                                <p className="sub-para">
                                    Explore cost optimization
                                </p>
                                <span class="material-symbols-outlined">
                                    trending_flat
                                </span>
                            </div>
                        </div>
                        <div className="cards flex f-column f-around">
                            <h5 className="heading-5">Build Resilience</h5>
                            <p className="sub-para">
                                Solve for Business Continuity, Disaster
                                Recovery, Security, No Vendor lock-in, Workload
                                Mobility and Risk Mitigation
                            </p>
                            <div className="hp-links flex f-center">
                                <p className="sub-para">Explore resilience</p>
                                <span class="material-symbols-outlined">
                                    trending_flat
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="solutions-4">
                <div className="heading flex f-center">
                    <h3 className="heading-3">
                        Customer-inspired case studies
                    </h3>
                </div>
                <div className="card-container flex f-align-center f-around">
                    <div className="cards flex f-column f-align-center f-around">
                        <h5 className="heading-5">
                            Expanding into restrictive markets
                        </h5>
                        <p className="sub-para">
                            See how this Singapore-based e-commerce company
                            expanded its platform from an online store to an
                            international marketplace where vendors from around
                            the world could sell to customers globally.
                        </p>
                        <p className="sub-para">View case study</p>
                    </div>
                    <div className="cards flex f-column f-align-center f-around">
                        <h5 className="heading-5">
                            Reducing latency while lowering emissions
                        </h5>
                        <p className="sub-para">
                            See how this US-based food and beverage company
                            enabled automated manufacturing, cutting-edge
                            consumer mobile apps, and an ambitious
                            sustainability program targeting net-zero carbon
                            emissions.
                        </p>
                        <p className="sub-para">View case study</p>
                    </div>
                    <div className="cards flex f-column f-align-center f-around">
                        <h5 className="heading-5">
                            Scale globally without barriers
                        </h5>
                        <p className="sub-para">
                            Explore how this Amsterdam-based global gaming
                            company reduced latency and improved the current
                            user experience by leveraging Platform Equinix to
                            scale infrastructure globally without barriers.{" "}
                        </p>
                        <p className="sub-para">View case study</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Solutions;
