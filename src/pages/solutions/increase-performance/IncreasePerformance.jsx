import React from "react";
import "./performance.css";
import Assets from "../../../Assets";

const IncreasePerformance = () => {
    return (
        <div className="ip-container">
            <section id="ip-1">
                <div className="heading flex f-column f-center">
                    <h1 className="heading-1">Increase performance</h1>
                    <p className="main-para">
                        Solve for User Experience, Low Latency, High Bandwidth,
                        and Automation
                    </p>
                </div>
            </section>
            <section id="ip-2">
                <div className="heading flex f-column f-align-center f-around">
                    <h3 className="heading-3">Transform user experience</h3>
                    <p className="main-para">
                        Slow-reacting apps—run over slow functioning
                        systems—lead to a poor user experience. Add new,
                        speed-hungry demands to the equation and sub-par
                        performance can make a bad situation even worse.
                    </p>
                    <p className="main-para">
                        Shen's futureproof infrastructure solutions can
                        transform the user experience through low latency and
                        high bandwidth, as well as support increasing
                        automation.
                    </p>
                </div>
            </section>
            <section id="ip-3">
                <div className="heading flex f-column f-center">
                    <h3 className="heading-3">Why choose Shen?</h3>
                    <ul className="sub-para">
                        <li>
                            Run mission-critical workloads on distributed
                            servers supported by high-speed connectivity
                        </li>
                        <li>
                            Deploy and orchestrate infrastructure automatically
                            using templating and infrastructure-as-code methods
                        </li>
                        <li>Locate your infrastructure close to your users</li>
                    </ul>
                </div>
            </section>
            <section id="ip-4">
                <div className="heading flex f-center">
                    <h3 className="heading-3">
                        Increase performance through these solutions
                    </h3>
                </div>
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.solutions.increasePerformance
                                        .appIp
                                }
                                alt="Applicatin Modernization"
                                width="100"
                            />
                            <h5 className="heading-5">
                                Application Modernization
                            </h5>
                            <p className="sub-para">
                                Increase agility and enhance productivity by
                                transforming legacy applications into modern,
                                efficient, scalable system.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.solutions.increasePerformance
                                        .sdIp
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
                                    Assets.images.solutions.increasePerformance
                                        .cloudIp
                                }
                                alt="Cloud Access"
                                width="100"
                            />
                            <h5 className="heading-5">Cloud Access</h5>
                            <p className="sub-para">
                                Use a range of technologies to integrate public
                                cloud resources reliably and securely into your
                                digital infrastructure.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.solutions.increasePerformance
                                        .storageIp
                                }
                                alt="Storage optimization"
                                width="100"
                            />
                            <h5 className="heading-5">Storage Optimization</h5>
                            <p className="sub-para">
                                Addresses the hidden costs of cloud storage
                                services and get enterprise-class,
                                high-performance data services for even the most
                                demanding workloads.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IncreasePerformance;
