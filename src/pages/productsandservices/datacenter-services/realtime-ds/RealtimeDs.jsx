import React from "react";
import "./realtime.css";
import Assets from "../../../../Assets";

const RealtimeDs = () => {
    return (
        <div className="realtime-container">
            <section id="realtime-1">
                <div className="heading flex f-center">
                    <h2 className="heading-2">Why Shen Smart View?</h2>
                </div>
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .dataCentersServices.realtimeDs
                                        .tailoredVisible
                                }
                                alt="Tailored visibility"
                                width="100"
                            />
                            <h5 className="heading-5">Tailored visibility</h5>
                            <p className="sub-para">
                                Directly access relevant data specific to your
                                deployment at local zone, cage and cabinet
                                levels.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .dataCentersServices.realtimeDs
                                        .actionInsights
                                }
                                alt="Actionable insights"
                                width="100"
                            />
                            <h5 className="heading-5">Actionable insights</h5>
                            <p className="sub-para">
                                React to important events and proactively plan
                                via configurable reports and alerts.
                            </p>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .dataCentersServices.realtimeDs
                                        .globalConsistent
                                }
                                alt="Globally consistent data"
                                width="100"
                            />
                            <h5 className="heading-5">
                                Globally consistent data
                            </h5>
                            <p className="sub-para">
                                Enable a single source of truth across your
                                deployments with data presented the same way
                                globally.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .dataCentersServices.realtimeDs
                                        .apiConsumption
                                }
                                alt="API consumption options"
                                width="100"
                            />
                            <h5 className="heading-5">
                                API consumption options
                            </h5>
                            <p className="sub-para">
                                Available over public and private channels
                                including Webhook, as well as AWS IOT Core,
                                Azure IOT Hub, and Google Pub/Sub.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RealtimeDs;
