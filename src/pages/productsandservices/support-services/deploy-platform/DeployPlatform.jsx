import React from "react";
import "./deployplatform.css";
import Assets from "../../../../Assets";

const DeployPlatform = () => {
    return (
        <div className="deploy-container">
            <section id="deploy-1">
                <div className="heading flex f-column f-center">
                    <h4 className="heading-4">Solution Validation Centers</h4>
                    <h2 className="heading-2">
                        Get the ability to deploy and test your distributed IT
                        on Platform
                    </h2>
                    <p className="main-para">
                        Shen Solution Validation Centers offer the ability to
                        deploy and test your distributed IT on Platform, live,
                        before committing to full-scale production. Available in
                        19 global markets and staffed by Shen Global Solution
                        Architects, Shen Solution Validation Centers are
                        comprehensive test facilities that replicate the
                        Platform Shen technology environment.
                    </p>
                </div>
            </section>
            <div className="sub-para deploy-heading">BENEFITS</div>
            <section id="deploy-2">
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">Test technology stacks</h5>
                            <p className="sub-para">
                                Test stacks that support private, public, and
                                hybrid cloud deployment.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">Trial distributed architectures</h5>
                            <p className="sub-para">
                                Run simultaneous deployments in multiple
                                Solution Validation Centers around the world.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">Stress-test application</h5>
                            <p className="sub-para">
                                Measure how applications perform when moved off
                                legacy systems and onto the new platform.
                            </p>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">Optimize performance</h5>
                            <p className="sub-para">
                                Enhanced Infrastructure components, network
                                connections, and applications.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">Overcome technical barriers</h5>
                            <p className="sub-para">
                                Get full-scale deployments to meet business
                                requirements and lower risks.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">Improve migration</h5>
                            <p className="sub-para">
                                Enable quick, easy migration from
                                proof-of-concept to full-scale production.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="deploy-3">
                <div className="deploy3-container flex f-around f-align-center">
                    <div className="heading flex f-column f-around">
                        <h3 className="heading-3">Worldwide Availability</h3>
                        <p className="main-para">
                            We offer the broadest global reach and most
                            sophisticated test sites in the industry. Solution
                            Validation Centers are currently located in 18
                            strategic markets around the globe, with plans for
                            further worldwide expansion.
                        </p>
                    </div>
                    <div className="img">
                        <img
                            src={
                                Assets.images.productsServices.supportServices
                                    .deployPlatform.worldAvailable
                            }
                            alt="World Availability"
                            width="700"
                        />
                    </div>
                </div>
            </section>
            <section id="deploy-4">
                <div className="deploy4-container flex f-around f-align-center">
                    <div className="img">
                        <img
                            src={
                                Assets.images.productsServices.supportServices
                                    .deployPlatform.expertPlan
                            }
                            alt="Expert Plan"
                            width="700"
                        />
                    </div>
                    <div className="heading flex f-column f-around">
                        <h3 className="heading-3">Expert Strategic Planning</h3>
                        <p className="main-para">
                            Our Global Solution Architects are veteran
                            technology consultants who lead all Solution
                            Validation Center projects. Your Solution Architect
                            will help you make the right strategic technology
                            decisions for your business. The architect will help
                            define migration strategies from testing to
                            production and create a comprehensive plan that best
                            suits your business needs.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DeployPlatform;
