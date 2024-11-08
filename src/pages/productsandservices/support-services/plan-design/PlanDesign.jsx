import React from "react";
import "./plandesign.css";

const PlanDesign = () => {
    return (
        <div className="plan-design-container">
            <section id="plan-design-1">
                <div className="heading flex f-column f-center">
                    <h4 className="heading-4">Global Solutions Architects </h4>
                    <h2 className="heading-2">
                        Plan and design your IT infrastructure with the help of
                        expert technology consultants
                    </h2>
                    <p className="main-para">
                        Shen Global Solution Architects (GSAs) are experts in
                        distributed IT who work with your organization to
                        maximize the return on your IT investment in Platform
                        Shen. Through comprehensive knowledge of the innovative
                        technologies, solutions, and services capabilities
                        available at Shen, our GSA team augments your team’s
                        knowledge and expertise; effectively providing virtual
                        CTO/CIO analysis and recommendations.
                    </p>
                </div>
            </section>
            <div className="sub-para plan-design-heading">BENEFITS</div>
            <section id="plan-design-3">
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">Deep expertise </h5>
                            <p className="sub-para">
                                GSA is a veteran consultant with the technology
                                and industry experience to help you plan and
                                design IT infrastructure, networks, and cloud
                                migrations with minimal risk.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">IT extension</h5>
                            <p className="sub-para">
                                We extend your IT staff with network design and
                                operations, large-scale cloud deployments,
                                facility operations, enterprise architectures,
                                and business analytics.
                            </p>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">
                                Greater performance and efficiency
                            </h5>
                            <p className="sub-para">
                                The GSA team optimizes your organization's IT
                                performance and ROI by effectively utilizing the
                                technologies available within Platform
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">Strategic solutions</h5>
                            <p className="sub-para">
                                Gsas help you develop new IT solutions and
                                ecosystems that interconnect your sales,
                                channel, and business development organizations
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PlanDesign;
