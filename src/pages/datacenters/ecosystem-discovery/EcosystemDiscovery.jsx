import React from "react";
import Assets from "../../../Assets";
import "./ecosystem.css";

const EcosystemDiscovery = () => {
    return (
        <div className="ed-container">
            <section id="ed-1">
                <div className="heading flex f-column f-center">
                    <h1 className="heading-1">
                        Discover digital partners and connection opportunities
                        in minutes
                    </h1>
                    <p className="main-para">
                        Choose from thousands of clouds, networks, and digital
                        supply chain partners to optimize your digital
                        infrastructure. Easily discover, transact, and innovate
                        with your customers, suppliers, and partners to create
                        and consume new value.
                    </p>
                </div>
            </section>
            <section id="ed-2">
                <div className="heading flex f-column f-center">
                    <h3 className="heading-3">
                        See the possibilities with the world's largest industry
                        ecosystems on Shen Platform
                    </h3>
                    <p className="main-para">
                        Digital leaders access dynamic ecosystems by deploying
                        and interconnecting their infrastructure close to
                        partners. As both suppliers and consumers, they gain a
                        network effect that continuously compounds their value.
                    </p>
                </div>
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.datacenters.ecosystemDiscovery
                                        .optimize
                                }
                                alt="Optimize"
                                width="100"
                            />
                            <h5 className="heading-5">Optimize your digital supply chain</h5>
                            <p className="sub-para">
                                Instantly build your supply chain ecosystem
                                while driving growth.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.datacenters.ecosystemDiscovery
                                        .performance
                                }
                                alt="Performance"
                                width="100"
                            />
                            <h5 className="heading-5">Deliver better performance</h5>
                            <p className="sub-para">
                                Meet your customers' needs faster and at a lower
                                cost.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.datacenters.ecosystemDiscovery
                                        .newbuy
                                }
                                alt="New buyers"
                                width="100"
                            />
                            <h5 className="heading-5">Discover new buyers</h5>
                            <p className="sub-para">
                                Find partners with our Marketplace matchmaker
                                tool.
                            </p>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.datacenters.ecosystemDiscovery
                                        .location
                                }
                                alt="Locations"
                                width="100"
                            />
                            <h5 className="heading-5">Expand into locations</h5>
                            <p className="sub-para">
                                Find locations with the optimal ecosystem fit
                                for your business.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.datacenters.ecosystemDiscovery
                                        .grow
                                }
                                alt="Growth"
                                width="100"
                            />
                            <h5 className="heading-5">
                                Grow your business through indirect sales
                                channels
                            </h5>
                            <p className="sub-para">
                                Utilize your indirect sales channels to drive
                                profitability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EcosystemDiscovery;
