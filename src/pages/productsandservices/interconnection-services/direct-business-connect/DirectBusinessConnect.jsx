import React from "react";
import "./businessconnect.css";
import Assets from "../../../../Assets";

const DirectBusinessConnect = () => {
    return (
        <div className="business-connect-container">
            <section id="business-connect-1">
                <div className="heading flex f-column f-center">
                    <h2 className="heading-2">
                        How digital business connects?
                    </h2>
                </div>
            </section>
            <section id="business-connect-2">
                <div className="heading flex f-column f-center">
                    <h3 className="heading-3">
                        Flexible, virtual interconnection
                    </h3>
                    <p className="main-para">
                        Connect digital infrastructure and services on demand at
                        software speed via secure, software-defined
                        interconnection. Scale hybrid deployments, achieve
                        network agility, and connect to partners and providers
                        easily and securely.
                    </p>
                </div>
            </section>
            <section id="business-connect-3">
                <div className="heading flex f-center">
                    <img
                        src={
                            Assets.images.productsServices
                                .interconnectionServices.directBusinessConnect
                                .whyLayer
                        }
                        alt="Layer"
                        width="75"
                    />
                    <h3 className="heading-3">Why Layer?</h3>
                </div>
                <div className="card-container flex f-align-center f-around">
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={
                                Assets.images.productsServices
                                    .interconnectionServices
                                    .directBusinessConnect.connectEverything
                            }
                            alt="Connect Everything"
                            width="100"
                        />
                        <h5 className="heading-5">
                            Connect everything everywhere
                        </h5>
                        <p className="sub-para">
                            Quickly and easily interconnect physical and virtual
                            digital infrastructure. Reach global markets across
                            our expanding footprint of 50+ locations.
                        </p>
                    </div>
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={
                                Assets.images.productsServices
                                    .interconnectionServices
                                    .directBusinessConnect.deployDemand
                            }
                            alt="Deploy on-demand"
                            width="100"
                        />
                        <h5 className="heading-5">Deploy on-demand</h5>
                        <p className="sub-para">
                            Connect via APIs for automated provisioning.
                            Simplify how you interconnect with thousands of
                            service providers in the industry's largest
                            infrastructure ecosystem.
                        </p>
                    </div>
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={
                                Assets.images.productsServices
                                    .interconnectionServices
                                    .directBusinessConnect.buildConfidence
                            }
                            alt="Build Confidence"
                            width="100"
                        />
                        <h5 className="heading-5">Build with confidence</h5>
                        <p className="sub-para">
                            Improve performance with low-latency private
                            connections running over a purpose-built Layer 2
                            network. Bypassing the public internet reduces
                            security threats and attacks surfaces.
                        </p>
                    </div>
                </div>
            </section>
            <section id="business-connect-4">
                <div className="business4-container flex f-around f-align-center">
                    <div className="heading flex f-column f-around">
                        <h3 className="heading-3">Direct access to a world of service providers</h3>
                        <p className="main-para">
                            Access to hundreds of network, communication,
                            security, and cloud providers- all from a single
                            location.
                        </p>
                        <p className="main-para">
                            Leverage infrastructure and services for more
                            flexible architectures Discover new types of service
                            providers, with new providers adding services every
                            month.
                        </p>
                    </div>
                    <div className="img">
                        <img
                            src={
                                Assets.images.productsServices
                                    .interconnectionServices
                                    .directBusinessConnect.cloudProviders
                            }
                            alt="Top 10 Cloud Providers"
                            width="800"
                        />
                    </div>
                </div>
            </section>
            <section id="business-connect-5">
                <div className="business5-container flex f-around f-align-center">
                    <img
                        src={
                            Assets.images.productsServices
                                .interconnectionServices.directBusinessConnect
                                .multicloudRoutingIcs
                        }
                        alt="Multi-cloud Routing"
                        width="800"
                    />
                    <div className="heading flex f-column f-around">
                        <h3 className="heading-3">
                            Get scalable, high-performance multi-cloud routing
                            with no hardware requirements
                        </h3>
                        <p className="main-para">
                            Built for multi-cloud networking, Fabric Cloud
                            Router takes the costs and complexity out of
                            connecting applications and data across multiple
                            cloud providers, easily spins up virtual routing,
                            and connects between AWS, Google Cloud, and
                            Microsoft Azure, and Oracle Cloud in minutes.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DirectBusinessConnect;
