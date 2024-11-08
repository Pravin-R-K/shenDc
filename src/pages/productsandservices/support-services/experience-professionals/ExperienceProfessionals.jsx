import React from "react";
import "./professionals.css";

const ExperienceProfessionals = () => {
    return (
        <div className="ep-container">
            <section id="ep-1">
                <div className="heading flex f-column f-center">
                    <h4 className="heading-4">Edge Specialists</h4>
                    <h2 className="heading-2">
                        Experienced IT professionals to solve for the edge{" "}
                    </h2>
                    <p className="main-para">
                        Shen edge specialists are a team of experienced IT
                        professionals who enable customers, prospects, and
                        partners to develop innovative solutions to solve
                        business challenges at the digital edge.
                    </p>
                </div>
            </section>
            <div className="sub-para ep-heading">BENEFITS</div>
            <section id="ep-2">
                <div className="card-container flex f-align-center f-around">
                    <div className="cards flex f-column f-align-center f-around">
                        <h5 className="heading-5">Business case expertise</h5>
                        <p className="sub-para">
                            Experience in application development and
                            deployment, and the creation and maintenance of
                            infrastructure that supports complex environments
                            across multiple platforms, including cloud,
                            distributed systems, and complex networking.
                        </p>
                    </div>
                    <div className="cards flex f-column f-align-center f-around">
                        <h5 className="heading-5">
                            Edge subject matter experts
                        </h5>
                        <p className="sub-para">
                            Edge specialists guide customers in best practices
                            and recommended configurations for the technical
                            aspects of our “as a Service” offerings and
                            supporting technology, including SDN/NFV
                            architecture, SD-WAN, IaaS, and orchestration and
                            automation.
                        </p>
                    </div>
                    <div className="cards flex f-column f-align-center f-around">
                        <h5 className="heading-5">Innovative solutions</h5>
                        <p className="sub-para">
                            Our experts have years of global experience helping
                            enterprises across all major industries successfully
                            transform their digital business infrastructure by
                            bringing ideas and innovative solutions to
                            customers.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExperienceProfessionals;
