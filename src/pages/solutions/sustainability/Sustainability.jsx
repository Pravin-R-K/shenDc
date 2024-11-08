import React from "react";
import "./sustainability.css";
import Assets from "../../../Assets";

const Sustainability = () => {
    return (
        <div className="sustain-container">
            <section id="sustain-1">
                <div className="heading flex f-column f-center">
                    <h1 className="heading-1">Sustainable solutions</h1>
                    <p className="main-para">
                        Solve compliance challenges and accelerate net-zero
                        decarbonization goals—creating value for stakeholders.
                    </p>
                </div>
            </section>
            <section id="sustain-2">
                <div className="heading flex f-center">
                    <h3 className="heading-3">
                        Your platform for sustainability
                    </h3>
                </div>
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.solutions.sustainability
                                        .powerSustain
                                }
                                alt="Leverage power sustain"
                                width="100"
                            />
                            <h5 className="heading-5">
                                Leverage industry-leading power usage
                                effectiveness (PUE)
                            </h5>
                            <p className="sub-para">
                                Benefit from state-of-the-art efficiency in our
                                data centers through air & liquid cooling
                                solutions, circular economy principles, and new
                                tech innovations.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.solutions.sustainability
                                        .footPrint
                                }
                                alt="Minimize footprint"
                                width="100"
                            />
                            <h5 className="heading-5">
                                Minimize footprint, maximize performance
                            </h5>
                            <p className="sub-para">
                                Decouple digital expansion from increasing
                                emissions through clean energy coverage and
                                integrating sustainable tech.
                            </p>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.solutions.sustainability
                                        .accessClean
                                }
                                alt="Access clean energy"
                                width="100"
                            />
                            <h5 className="heading-5">
                                Access clean energy coverage at data centers
                            </h5>
                            <p className="sub-para">
                                Gain renewable energy coverage at no extra cost
                                in the most strategic locations around the
                                world.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.solutions.sustainability
                                        .reduceScope
                                }
                                alt="Reduce scope"
                                width="100"
                            />
                            <h5 className="heading-5">
                                Reduce Scope 1 and 2 emissions and simplify
                                Scope 3 reporting
                            </h5>
                            <p className="sub-para">
                                Moving from on-premise to Platform Shen shifts
                                your IT emissions to Scope 3. Claim zero
                                market-based emissions with an auditable Green
                                Power Report, showing site-level electricity
                                consumption, renewables coverage, and carbon
                                footprint data.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="sustain-3">
                <div className="heading flex f-center">
                    <h3 className="heading-3">Explain sustainable solutions</h3>
                </div>
                <div className="card-container flex f-around f-center">
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={Assets.images.solutions.sustainability.sustain}
                            alt="Sustainability"
                            width="100"
                        />
                        <h5 className="heading-5">
                            Sustainable Transformation with Platform Shen
                        </h5>
                        <p className="sub-para">
                            Take sustainability challenges in your stride
                            through dependable solutions designed for your
                            business.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sustainability;
