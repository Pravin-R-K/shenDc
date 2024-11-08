import React from "react";
import "./supportservice.css";
import { useNavigate } from "react-router-dom";
import Assets from "../../../Assets";

const SupportServices = () => {
    const navigate = useNavigate();

    return (
        <div className="ss-container">
            <section id="ss-1">
                <div className="heading flex f-column f-center">
                    <h1 className="heading-1">
                        Unlock the power of the platform with our experts
                    </h1>
                    <p className="main-para">
                        Discover the business value delivered by the
                        performance, scalability and interconnection of an
                        expertly architected digital solution. See how customers
                        can accelerate digital transformation from
                        proof-of-concept to full-scale production to increase
                        the return on investment.
                    </p>
                </div>
            </section>
            <section id="ss-2">
                <div className="heading flex f-center">
                    <h3 className="heading-3">
                        Expert advisory, integration, and managed services
                    </h3>
                </div>
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div
                            onClick={(e) => {
                                navigate("/data-challenges");
                            }}
                            className="cards flex f-column f-align-center f-around"
                        >
                            <img
                                src={
                                    Assets.images.productsServices
                                        .supportServices.solveNetworkHl
                                }
                                alt="Data challenges"
                                width="150"
                            />
                            <h5 className="heading-5">
                                Solve network, security, and data challenges
                            </h5>
                            <p className="sub-para">
                                Discover the benefits of bringing data and
                                applications together with specialized data
                                center solutions and managed services.
                            </p>
                            <div
                                onClick={(e) => {
                                    navigate("/data-challenges");
                                }}
                                className="hyper-link flex f-center"
                            >
                                <span to="/data-challenges">Link Here</span>
                                <span class="material-symbols-outlined">
                                    trending_flat
                                </span>
                            </div>
                        </div>
                        <div
                            onClick={(e) => {
                                navigate("/experience-professionals");
                            }}
                            className="cards flex f-column f-align-center f-around"
                        >
                            <img
                                src={
                                    Assets.images.productsServices
                                        .supportServices.professionalsHl
                                }
                                alt="Experienced Professionals"
                                width="150"
                            />
                            <h5 className="heading-5">
                                Experienced professionals to solve for the edge
                            </h5>
                            <p className="sub-para">
                                Work with an expert team who enables customers,
                                prospects and partners to develop innovative
                                solutions to solve business challenges at the
                                digital edge.
                            </p>
                            <div
                                onClick={(e) => {
                                    navigate("/experience-professionals");
                                }}
                                className="hyper-link flex f-center"
                            >
                                <span to="/experience-professionals">
                                    Link Here
                                </span>
                                <span class="material-symbols-outlined">
                                    trending_flat
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div
                            onClick={(e) => {
                                navigate("/plan-design");
                            }}
                            className="cards flex f-column f-align-center f-around"
                        >
                            <img
                                src={
                                    Assets.images.productsServices
                                        .supportServices.planDesignHl
                                }
                                alt="IT Infrastructure"
                                width="150"
                            />
                            <h5 className="heading-5">
                                Plan and design IT infrastructure
                            </h5>
                            <p className="sub-para">
                                Through comprehensive knowledge of the
                                innovative technologies, solutions, and services
                                capabilities available at Shen, augment your
                                team's knowledge and expertise.
                            </p>
                            <div
                                onClick={(e) => {
                                    navigate("/plan-design");
                                }}
                                className="hyper-link flex f-center"
                            >
                                <span to="/plan-design">Link Here</span>
                                <span class="material-symbols-outlined">
                                    trending_flat
                                </span>
                            </div>
                        </div>
                        <div
                            onClick={(e) => {
                                navigate("/deploy-platform");
                            }}
                            className="cards flex f-column f-align-center f-around"
                        >
                            <img
                                src={
                                    Assets.images.productsServices
                                        .supportServices.deployTestHl
                                }
                                alt="Deployment"
                                width="150"
                            />
                            <h5 className="heading-5">
                                Deploy and test distributed IT on Platform Shen
                            </h5>
                            <p className="sub-para">
                                Get the ability to experiment with distributed
                                IT at comprehensive test facilities that
                                replicate the Platform Equinix technology
                                environment.
                            </p>
                            <div
                                onClick={(e) => {
                                    navigate("/deploy-platform");
                                }}
                                className="hyper-link flex f-center"
                            >
                                <span to="/deploy-platform">Link Here</span>
                                <span class="material-symbols-outlined">
                                    trending_flat
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SupportServices;
