import React from "react";
import "./digitalstructure.css";
import Assets from "../../../../Assets";

const DigitalInfrastructure = () => {
    return (
        <div className="dig-structure-container">
            <section id="dis-1">
                <div className="heading flex f-center">
                    <h2 className="heading-2">Solve for strategic use cases</h2>
                </div>
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .digitalServices.digitalInfrastructure
                                        .multiCloudService
                                }
                                alt="Multi-Cloud networking"
                                width="100"
                            />
                            <h5 className="heading-5">
                                Multi-Cloud networking
                            </h5>
                            <p className="sub-para">
                                Seamlessly integrates network services and
                                private routes between your apps, data, and
                                workloads - across clouds and locations
                                globally.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .digitalServices.digitalInfrastructure
                                        .networkModern
                                }
                                alt="Network modernization"
                                width="100"
                            />
                            <h5 className="heading-5">Network modernization</h5>
                            <p className="sub-para">
                                Instant plug-and-play architecture for new
                                locations. Achieve business agility and scale in
                                minutes.
                            </p>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .digitalServices.digitalInfrastructure
                                        .datacenterMigrate
                                }
                                alt="Data center migration"
                                width="100"
                            />
                            <h5 className="heading-5">
                                Data center migration and consolidation
                            </h5>
                            <p className="sub-para">
                                Transition your physical infrastructure to
                                virtual networking, to optimize traffic at the
                                edge and connect to your cloud and IT services
                                ecosystem with a global platform.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .digitalServices.digitalInfrastructure
                                        .extendWan
                                }
                                alt="Extended WAN"
                                width="100"
                            />
                            <h5 className="heading-5">
                                Extended WAN deployments
                            </h5>
                            <p className="sub-para">
                                Interconnect ecosystems on the Platform on the
                                go while optimizing traffic to the branch
                                seamlessly via WAN integrations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DigitalInfrastructure;
