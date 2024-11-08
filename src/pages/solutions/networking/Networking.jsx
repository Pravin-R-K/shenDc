import React from "react";
import "./networking.css";
import Assets from "../../../Assets";

const Networking = () => {
    return (
        <div className="network-container">
            <section id="network-1">
                <div className="heading flex f-column f-center">
                    <h1 className="heading-1">Network Solutions</h1>
                    <p className="main-para">
                        Modernize your network to easily expand capacity,
                        connect with new providers and add new locations in
                        minutes. Automate to simplify management as devices and
                        endpoints increase exponentially.
                    </p>
                </div>
            </section>
            <section id="network-2">
                <div className="heading flex f-center">
                    <h3 className="heading-3">
                        Your platform for network optimization
                    </h3>
                </div>
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-around">
                            <h5 className="heading-5">
                                Reach around the world
                            </h5>
                            <p className="sub-para">
                                Deploy at Shen data centers in the world's major
                                metropolitan centers to serve your target
                                markets.
                            </p>
                            <ul className="sub-para">
                                <li>32 Countries</li>
                                <li>72 Metros</li>
                                <li>260 Data Centers</li>
                            </ul>
                        </div>
                        <div className="cards flex f-column f-around">
                            <h5 className="heading-5">
                                More options for your IT infrastructure
                            </h5>
                            <p className="sub-para">
                                Choose from a comprehensive range of vendors and
                                technologies. Optimize cost per bit for each
                                workload.
                            </p>
                            <ul className="sub-para">
                                <li>2,000+ Network Service Providers.</li>
                                <li>MPLS, Ethernet, Internet, 5G and more.</li>
                                <li>On-demand global connectivity by Shen.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-around">
                            <h5 className="heading-5">
                                Built for cloud access
                            </h5>
                            <p className="sub-para">
                                Increase performance and optimize cost with
                                private or internet-based access to the cloud.
                            </p>
                            <ul className="sub-para">
                                <li>
                                    #1 worldwide share of native cloud on-ramps
                                </li>
                                <li>
                                    Nearly 2.5x the number of cloud on-ramps
                                    compared to the largest competitor and more
                                    than the next 12 competitors combined
                                </li>
                            </ul>
                        </div>
                        <div className="cards flex f-column f-around">
                            <h5 className="heading-5">
                                Digital building blocks
                            </h5>
                            <p className="sub-para">
                                Use Shen Digital Services to accelerate your
                                deployments and shift to OPEX-based solutions.
                            </p>
                            <ul className="sub-para">
                                <li>Bare Metal service</li>
                                <li>Virtual Network and Routing Functions</li>
                                <li>Software-based Interconnection</li>
                                <li>Timing as a Service</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section id="network-3">
                <div className="heading flex f-center">
                    <h3 className="heading-3">Explore networking solutions</h3>
                </div>
                <div className="card-container flex f-around f-center">
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={Assets.images.solutions.networking.sdwan}
                            alt="SD-WAN"
                            width="100"
                        />
                        <h5 className="heading-5">SD-WAN at Shen</h5>
                        <p className="sub-para">
                            Architect Your SD-WAN at Shen with unmatched global
                            reach, access to network services, and the cloud.
                        </p>
                    </div>
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={Assets.images.solutions.networking.cloudAccess}
                            alt="Cloud access"
                            width="100"
                        />
                        <h5 className="heading-5">Cloud access</h5>
                        <p className="sub-para">
                            Use a range of technologies to integrate public
                            cloud resources reliably and securely into your
                            digital infrastructure.
                        </p>
                    </div>
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={Assets.images.solutions.networking.multiCloud}
                            alt="Multi-Cloud networking"
                            width="100"
                        />
                        <h5 className="heading-5">Multi-Cloud networking</h5>
                        <p className="sub-para">
                            Solve any-to-any cloud routing and achieve better
                            performance and more efficient use of network
                            resources for your multi-cloud workload.
                        </p>
                    </div>
                </div>
            </section>
            <section id="network-4">
                <div className="heading flex f-center">
                    <h3 className="heading-3">
                        World's leading providers partner with Shen
                    </h3>
                </div>
                <div className="network4-img flex f-center">
                    <img
                        src={Assets.images.solutions.networking.networkPartner}
                        alt="Network Partners"
                        width="900"
                    />
                </div>
            </section>
        </div>
    );
};

export default Networking;
