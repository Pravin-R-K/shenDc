import React from "react";
import "./compute.css";
import Assets from "../../../Assets";

const Compute = () => {
    return (
        <div className="compute-container">
            <section id="compute-1">
                <div className="heading flex f-column f-center">
                    <h1 className="heading-1">Compute</h1>
                    <p className="main-para">
                        Combine dedicated compute and multi-cloud access
                        workload-optimized, hyper-converged infrastructure
                    </p>
                </div>
            </section>
            <section id="compute-2">
                <div className="heading flex f-center">
                    <h3 className="heading-3">
                        Your platform for dedicated cloud
                    </h3>
                </div>
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-around">
                            <h5 className="heading-5">
                                Efficient global infrastructure
                            </h5>
                            <p className="sub-para">
                                Reduce operational complexity with just one
                                convenient platform. Gain speed and agility with
                                a global infrastructure that combines both
                                physical and digital where needed.
                            </p>
                        </div>
                        <div className="cards flex f-column f-around">
                            <h5 className="heading-5">
                                Flexibility to seize opportunities
                            </h5>
                            <p className="sub-para">
                                Scale up and down in just minutes to react
                                quickly by deploying services with responsive,
                                dynamic, on-demand delivery. Choose the
                                providers and technologies you need where you do
                                business.
                            </p>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-around">
                            <h5 className="heading-5">
                                Developer-friendly, end-to-end
                            </h5>
                            <p className="sub-para">
                                Reduce your friction with infrastructure-as-code
                                and easy-to-integrate APIs and developer
                                tooling. Get a fast, self-serve route to
                                connections, secure cabinets, network devices,
                                and bare metal servers.
                            </p>
                        </div>
                        <div className="cards flex f-column f-around">
                            <h5 className="heading-5">
                                Strengthening sustainability
                            </h5>
                            <p className="sub-para">
                                Drive sustainable transformation in 100%
                                renewables-sourced, energy-efficient data
                                centers with virtual infrastructure options.
                                Leverage private and secure connectivity in
                                certified data centers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="compute-3">
                <div className="heading flex f-center">
                    <h3 className="heading-3">Explore compute solutions</h3>
                </div>
                <div className="card-container flex f-around f-center">
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={Assets.images.solutions.compute.cloudWorkload}
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
                            src={Assets.images.solutions.compute.appMordernize}
                            alt="Application modernize"
                            width="100"
                        />
                        <h5 className="heading-5">Application modernization</h5>
                        <p className="sub-para">
                            Increase agility and enhance productivity by
                            transforming legacy applications into modern,
                            efficient, scalable systems.
                        </p>
                    </div>
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={
                                Assets.images.solutions.compute
                                    .structureMordernize
                            }
                            alt="Infrastructure modernize"
                            width="100"
                        />
                        <h5 className="heading-5">
                            Infrastructure modernization
                        </h5>
                        <p className="sub-para">
                            Boost performance and reliability compared to legacy
                            systems by improving physical and digital
                            infrastructure.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Compute;
