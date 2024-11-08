import React from "react";
import "./ondemand.css";
import Assets from "../../../../Assets";

const OnDemandService = () => {
    return (
        <div className="demand-service-container">
            <section id="ods-1">
                <div className="heading flex f-center">
                    <h2 className="heading-2">
                        The On-Demand Service Architecture
                    </h2>
                </div>
                <div className="card-container flex f-align-center f-around">
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={
                                Assets.images.productsServices.digitalServices
                                    .onDemandServices.uberConnect
                            }
                            alt="Uber connect"
                            width="100"
                        />
                        <h5 className="heading-5">Uber connectivity</h5>
                        <p className="sub-para">
                            Quickly and easily interconnects physical and
                            virtual digital infrastructure. Universally
                            applicable solution format.
                        </p>
                    </div>
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={
                                Assets.images.productsServices.digitalServices
                                    .onDemandServices.demandRollout
                            }
                            alt="Demand rollout"
                            width="100"
                        />
                        <h5 className="heading-5">On-demand rollout</h5>
                        <p className="sub-para">Simple API-driven automation</p>
                        <p className="sub-para">
                            Simple interconnectivity to service providers
                            through the internet infrastructure ecosystem.
                        </p>
                    </div>
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={
                                Assets.images.productsServices.digitalServices
                                    .onDemandServices.builtScales
                            }
                            alt="Built scales"
                            width="100"
                        />
                        <h5 className="heading-5">Built for scales</h5>
                        <p className="sub-para">
                            Scalability of performance achieved through
                            low-latency private connections running over a
                            purpose-built Layer 2 network.
                        </p>
                        <p className="sub-para">
                            Public internet bypass ensures the reduction of
                            security threats.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OnDemandService;
