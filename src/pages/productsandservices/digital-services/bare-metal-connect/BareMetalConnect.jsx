import React from "react";
import "./baremetal.css";
import Assets from "../../../../Assets";

const BareMetalConnect = () => {
    return (
        <div className="baremetal-container">
            <section id="bmc-1">
                <div className="heading flex f-column f-center">
                    <h2 className="heading-2">
                        Infrastructure as competitive advantage
                    </h2>
                    <p className="main-para">
                        Get on-demand, high-performance bare metal, directly
                        integrated to deploy powerful infrastructure in minutes.
                    </p>
                </div>
            </section>
            <section id="bmc-2">
                <div className="heading flex f-center">
                    <h3 className="heading-3">Why Metal</h3>
                </div>
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .digitalServices.bareMetalConnect
                                        .rapidProvision
                                }
                                alt="Rapid Provisioning"
                                width="100"
                            />
                            <h5 className="heading-5">Rapid Provisioning</h5>
                            <p className="sub-para">
                                Designed to set up and deploy a single service
                                on Metal within minutes. A full deployment can
                                be up and running in minutes to enable
                                faster-to-market with applications.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .digitalServices.bareMetalConnect
                                        .globalSearch
                                }
                                alt="Global Search"
                                width="100"
                            />
                            <h5 className="heading-5">Global reach</h5>
                            <p className="sub-para">
                                Reach anyone on demand — cloud, sellers,
                                partners, vendors, customers, and employees —
                                all through one connection.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .digitalServices.bareMetalConnect
                                        .onDemandService
                                }
                                alt="On-demand Service"
                                width="100"
                            />
                            <h5 className="heading-5">On-demand service</h5>
                            <p className="sub-para">
                                Connect a database or application tier on any
                                cloud, to any other database or application tier
                                in the cloud, and internal and external cloud
                                services.
                            </p>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .digitalServices.bareMetalConnect
                                        .crossConnection
                                }
                                alt="Cross-connection services"
                                width="100"
                            />
                            <h5 className="heading-5">
                                Cross-connection services
                            </h5>
                            <p className="sub-para">
                                Award-winning portfolio of physical and virtual
                                interconnection services including the worldwide
                                reach of Shen
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .digitalServices.bareMetalConnect
                                        .connectDeploy
                                }
                                alt="Connect and Deploy"
                                width="85"
                            />
                            <h5 className="heading-5">
                                Securely connect and deploy
                            </h5>
                            <p className="sub-para">
                                Enable a data center platform that brings users,
                                networks, applications, and cloud systems closer
                                to your data.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .digitalServices.bareMetalConnect
                                        .securityService
                                }
                                alt="Security"
                                width="85"
                            />
                            <h5 className="heading-5">Security</h5>
                            <p className="sub-para">
                                Shen Metal offers 100% dedicated single-tenancy,
                                so you can isolate sensitive workloads and
                                access hardware-level security protocols.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BareMetalConnect;
