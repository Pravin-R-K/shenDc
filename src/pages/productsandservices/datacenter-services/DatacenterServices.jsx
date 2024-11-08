import React from "react";
import "./datacenter.css";
import Assets from "../../../Assets";
import { useNavigate } from "react-router-dom";

const DatacenterServices = () => {
    const navigate = useNavigate();

    return (
        <div className="dcs-container">
            <section id="dcs-1">
                <div className="heading flex f-column f-center">
                    <h1 className="heading-1">
                        Power your infrastructure for your globally
                    </h1>
                    <p className="main-para">
                        Safeguard your data with the highest levels of security
                        and operational reliability with an award-winning
                        portfolio backed by 20+ years of industry-leading
                        expertise.
                    </p>
                </div>
            </section>
            <section id="dcs-2">
                <div className="dcs2-container flex f-around f-align-center">
                    <div className="img">
                        <img
                            src={
                                Assets.images.productsServices
                                    .dataCentersServices.datacenter
                            }
                            alt="Secure and Private data"
                            width="800"
                            height="400"
                        />
                    </div>
                    <div className="heading flex f-column f-align-center f-around">
                        <h4 className="heading-4">
                            Secure and Private Data Centers Services
                        </h4>
                        <h2 className="heading-2">
                            Most secure and consistent operating standards
                        </h2>
                        <p className="main-para">
                            Colocation with Shen is your secure access point
                            into the world's most diverse and dynamic ecosystem
                            of leading services, networks, providers, and
                            partners.
                        </p>
                    </div>
                </div>
            </section>
            <section id="dcs-3">
                <div className="heading flex f-center">
                    <h3 className="heading-3">
                        Deployment with world-class data center services
                    </h3>
                </div>
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div
                            onClick={(e) => {
                                navigate("/interconnection-ready-colocation");
                            }}
                            className="cards flex f-column f-align-center f-around"
                        >
                            <img
                                src={
                                    Assets.images.productsServices
                                        .dataCentersServices.connectionHl
                                }
                                alt="Interconnection"
                                width="150"
                            />
                            <h5 className="heading-5">
                                Interconnection-ready colocation
                            </h5>
                            <p className="sub-para">
                                A private cage or a secure cabinet is your
                                gateway to global business on Platform Shen.
                            </p>
                            <div
                                onClick={(e) => {
                                    navigate(
                                        "/interconnection-ready-colocation"
                                    );
                                }}
                                className="hyper-link flex f-center"
                            >
                                <span to="/interconnection-ready-colocation">
                                    Link Here
                                </span>
                                <span class="material-symbols-outlined">
                                    trending_flat
                                </span>
                            </div>
                        </div>
                        <div
                            onClick={(e) => {
                                navigate(
                                    "/real-time-infrastructure-monitoring"
                                );
                            }}
                            className="cards flex f-column f-align-center f-around"
                        >
                            <img
                                src={
                                    Assets.images.productsServices
                                        .dataCentersServices.realTimeHl
                                }
                                alt="Real-time Infrastructure"
                                width="150"
                            />
                            <h5 className="heading-5">
                                Real-time online infrastructure monitoring
                            </h5>
                            <p className="sub-para">
                                Get on-demand access to environmental and
                                operating information relevant to your data
                                center
                            </p>
                            <div
                                onClick={(e) => {
                                    navigate(
                                        "/real-time-infrastructure-monitoring"
                                    );
                                }}
                                className="hyper-link flex f-center"
                            >
                                <span to="/real-time-infrastructure-monitoring">
                                    Link Here
                                </span>
                                <span class="material-symbols-outlined">
                                    trending_flat
                                </span>
                            </div>
                        </div>
                        <div
                            onClick={(e) => {
                                navigate("/remote-support");
                            }}
                            className="cards flex f-column f-align-center f-around"
                        >
                            <img
                                src={
                                    Assets.images.productsServices
                                        .dataCentersServices.remoteSupportHl
                                }
                                alt="Remote Support"
                                width="150"
                            />
                            <h5 className="heading-5">
                                Remote support all day, every day
                            </h5>
                            <p className="sub-para">
                                Leverage around-the-clock, on-site, operational
                                support service for remote management,
                                installation, and troubleshooting of your data
                                center equipment.
                            </p>
                            <div
                                onClick={(e) => {
                                    navigate("/remote-support");
                                }}
                                className="hyper-link flex f-center"
                            >
                                <span to="/remote-support">Link Here</span>
                                <span class="material-symbols-outlined">
                                    trending_flat
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div
                            onClick={(e) => {
                                navigate("/deployments-datacenter-experts");
                            }}
                            className="cards flex f-column f-align-center f-around"
                        >
                            <img
                                src={
                                    Assets.images.productsServices
                                        .dataCentersServices.dataDeployHl
                                }
                                alt="Datacenter Experts"
                                width="150"
                            />
                            <h5 className="heading-5">
                                Simplify deployments with data center experts
                            </h5>
                            <p className="sub-para">
                                Combine our expertise with the skills and scale
                                of certified technology partners worldwide to
                                streamline your data center deployments.
                            </p>
                            <div
                                onClick={(e) => {
                                    navigate("/deployments-datacenter-experts");
                                }}
                                className="hyper-link flex f-center"
                            >
                                <span to="/deployments-datacenter-experts">
                                    Link Here
                                </span>
                                <span class="material-symbols-outlined">
                                    trending_flat
                                </span>
                            </div>
                        </div>
                        <div
                            onClick={(e) => {
                                navigate("/secure-on-site-deployment");
                            }}
                            className="cards flex f-column f-align-center f-around"
                        >
                            <img
                                src={
                                    Assets.images.productsServices
                                        .dataCentersServices.secureHl
                                }
                                alt="Secure Deployment"
                                width="150"
                            />
                            <h5 className="heading-5">
                                Secure your on-site deployment
                            </h5>
                            <p className="sub-para">
                                Take advantage of a family of products designed
                                to provide security, power, cooling, and
                                interconnection solutions for your
                                mission-critical operations.
                            </p>
                            <div
                                onClick={(e) => {
                                    navigate("/secure-on-site-deployment");
                                }}
                                className="hyper-link flex f-center"
                            >
                                <span to="/secure-on-site-deployment">
                                    Link Here
                                </span>
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

export default DatacenterServices;
