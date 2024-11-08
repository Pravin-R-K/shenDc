import React from "react";
import "./datachallenge.css";
import Assets from "../../../../Assets";

const DataChallenges = () => {
    return (
        <div className="data-challenge-container">
            <section id="data-challenge-1">
                <div className="heading flex f-column f-center">
                    <h4 className="heading-4">
                        Managed Solutions and Enablement Services
                    </h4>
                    <h2 className="heading-2">
                        Streamline IT ops, remove complexity, free up resources,
                        and boost agility
                    </h2>
                    <p className="main-para">
                        Unlock strategic advantage with convenient,
                        fully-managed digital solutions and enablement services
                        that provide the freedom and control of dedicated
                        infrastructure.
                    </p>
                </div>
            </section>
            <section id="data-challenge-2">
                <div className="heading flex f-column f-center">
                    <h3 className="heading-3">
                        Diversify your cloud environment with Equinix
                    </h3>
                    <p className="main-para">
                        Equinix Managed Solutions and Enablement Services opens
                        a new chapter for your IT operations. Our suite of
                        managed solutions brings together public cloud
                        convenience, scalability, and agility without the
                        downsides of vendor lock-in, spiraling costs, and other
                        limitations. Our implementation support for Equinix
                        Fabric and Network Edge makes deploying
                        hybrid/multi-cloud environments even easier. Leverage
                        Equinix's leading-edge infrastructure, innovation, and
                        best-in-class resources to free up your focus for core
                        business priorities.
                    </p>
                </div>
            </section>
            <div className="sub-para dc-heading">KEY BENEFITS</div>
            <section id="data-challenge-3">
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .supportServices.dataChallenges.itStaff
                                }
                                alt="IT staff"
                                width="100"
                            />
                            <h5 className="heading-5">Unburden IT staff</h5>
                            <p className="sub-para">
                                Seamlessly deploy and scale compute, storage,
                                and networking, minimizing deployment and
                                management time while maximizing staff
                                effectiveness elsewhere.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .supportServices.dataChallenges
                                        .reduceRisk
                                }
                                alt="Reduce risk"
                                width="100"
                            />
                            <h5 className="heading-5">Reduce risk</h5>
                            <p className="sub-para">
                                Consume managed solutions in an as-a-service
                                model, taking advantage of Shen's operations
                                expertise, advanced infrastructure, and
                                security—without costly upfront expenses.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .supportServices.dataChallenges
                                        .manageCosts
                                }
                                alt="Manage costs"
                                width="100"
                            />
                            <h5 className="heading-5">Manage costs</h5>
                            <p className="sub-para">
                                Eliminate uncertainty by tightly managing IT
                                spending, moving towards OPEX, and reducing
                                egress fees.
                            </p>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .supportServices.dataChallenges
                                        .optimizeMultiCloud
                                }
                                alt="Hybrid/Multi-cloud"
                                width="100"
                            />
                            <h5 className="heading-5">
                                Optimize for hybrid/multi-cloud
                            </h5>
                            <p className="sub-para">
                                Cherry-pick the best of private and public
                                clouds to deliver the ultimate solution with
                                Shen's unrivaled cloud access and proximity. Let
                                us handle the complexities of implementing
                                interconnection and networking services.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .supportServices.dataChallenges
                                        .improveAgility
                                }
                                alt="Improve agility"
                                width="100"
                            />
                            <h5 className="heading-5">Improve agility</h5>
                            <p className="sub-para">
                                Adapt and pivot as your needs evolve—adjusting
                                managed architecture without costly data
                                migration or duplication.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .supportServices.dataChallenges
                                        .newMarkets
                                }
                                alt="Reach new markets"
                                width="100"
                            />
                            <h5 className="heading-5">Reach new markets</h5>
                            <p className="sub-para">
                                Expand globally without the need for additional
                                staff. Bring your applications closer to your
                                customers within Shen's trusted platform.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DataChallenges;
