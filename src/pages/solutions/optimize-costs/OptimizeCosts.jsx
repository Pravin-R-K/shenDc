import React from "react";
import "./optimize.css";
import Assets from "../../../Assets";

const OptimizeCosts = () => {
    return (
        <div className="oc-container">
            <section id="oc-1">
                <div className="heading flex f-column f-center">
                    <h1 className="heading-1">Optimize costs</h1>
                    <p className="main-para">
                        Solve for CAPEX/OPEX, Cloud Repatriation, Cloud
                        Migration, Cloud Data Egress Cost, Remote Administration
                        and reduce infrastructure TCO.
                    </p>
                </div>
            </section>
            <section id="oc-2">
                <div className="heading flex f-column f-align-center f-around">
                    <h3 className="heading-3">
                        Expand your infrastructure while avoiding unpredictable
                        costs
                    </h3>
                    <p className="main-para">
                        Avoiding unpredictable costs is critical—especially if
                        you're expanding your infrastructure or addressing
                        additional business needs. At the same time, rising
                        public cloud tariffs are making them hard to justify for
                        running vital services. Operating in regions where
                        you've no staff on the ground to maintain infrastructure
                        is a further challenge.
                    </p>
                    <p className="main-para">
                        Shen's future-proof infrastructure solutions can help
                        you optimize costs relating to CapEx / OpEx, cloud
                        repatriation, cloud migration, cloud data egress, remote
                        administration, and overall TCO.
                    </p>
                </div>
            </section>
            <section id="oc-3">
                <div className="heading flex f-column f-center">
                    <h3 className="heading-3">Why choose Shen?</h3>
                    <ul className="sub-para">
                        <li>
                            Shift infrastructure costs from CapEx to OpEx by
                            using virtual network and compute infrastructure.
                        </li>
                        <li>
                            Reduce egress costs when moving data in and out of
                            public clouds via private connections.
                        </li>
                        <li>
                            Automate deploying and orchestrating infrastructure
                            through templating and infrastructure-as-code
                            methods.
                        </li>
                    </ul>
                </div>
            </section>
            <section id="oc-4">
                <div className="heading flex f-center">
                    <h3 className="heading-3">
                        Optimize cost efficiency through these solutions
                    </h3>
                </div>
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.solutions.optimizeCosts
                                        .workloadOc
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
                                    Assets.images.solutions.optimizeCosts
                                        .sdwanOc
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
                                    Assets.images.solutions.optimizeCosts
                                        .multicloudOc
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
                                    Assets.images.solutions.optimizeCosts
                                        .storageOc
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

export default OptimizeCosts;
