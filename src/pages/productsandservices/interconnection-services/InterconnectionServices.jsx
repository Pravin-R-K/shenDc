import React from "react";
import "./interconnection.css";
import Assets from "../../../Assets";
import { useNavigate } from "react-router-dom";

const InterconnectionServices = () => {
    const navigate = useNavigate();
    return (
        <div className="ics-container">
            <section id="ics-1">
                <div className="heading flex f-column f-center">
                    <img
                        src={
                            Assets.images.productsServices
                                .interconnectionServices.mainInterconnection
                        }
                        alt="Interconnection Services"
                        width="100"
                    />
                    <h1 className="heading-1">Interconnection Services</h1>
                    <p className="main-para">
                        Direct dynamic connections to customers, employees and
                        partners with our data center footprint.
                    </p>
                </div>
            </section>
            <section id="ics-2">
                <div className="heading flex f-column f-center">
                    <h2 className="heading-2">
                        Build dynamic connections to scale your business
                    </h2>
                    <p className="main-para">
                        The challenge to globally scale the internet inspired
                        our product suite—connecting you directly and
                        dynamically to customers, employees and partners with
                        our data center footprint.
                    </p>
                </div>
            </section>
            <section id="ics-3">
                <div className="heading flex f-center">
                    <h3 className="heading-3">
                        Grow your business with our industry-leading services
                    </h3>
                </div>
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div
                            onClick={(e) => {
                                navigate("/direct-connect-partners");
                            }}
                            className="cards flex f-column f-align-center f-around"
                        >
                            <img
                                src={
                                    Assets.images.productsServices
                                        .interconnectionServices.connectHl
                                }
                                alt="Connection"
                                width="150"
                            />
                            <h5 className="heading-5">
                                Directly connect to partners and providers
                            </h5>
                            <p className="sub-para">
                                Connect digital infrastructure and services on
                                demand at software speed via secure,
                                software-defined interconnection.
                            </p>
                            <div
                                onClick={(e) => {
                                    navigate("/direct-connect-partners");
                                }}
                                className="hyper-link flex f-center"
                            >
                                <span to="/direct-connect-partners">
                                    Link Here
                                </span>
                                <span class="material-symbols-outlined">
                                    trending_flat
                                </span>
                            </div>
                        </div>
                        <div
                            onClick={(e) => {
                                navigate("/leverage-solutions");
                            }}
                            className="cards flex f-column f-align-center f-around"
                        >
                            <img
                                src={
                                    Assets.images.productsServices
                                        .interconnectionServices.edgeSolutionHl
                                }
                                alt="Edge Solution"
                                width="150"
                            />
                            <h5 className="heading-5">
                                Leverage the largest bleeding edge solution
                            </h5>
                            <p className="sub-para">
                                Exchange internet traffic with networks, content
                                providers, and large enterprises across more
                                than markets.
                            </p>
                            <div
                                onClick={(e) => {
                                    navigate("/leverage-solutions");
                                }}
                                className="hyper-link flex f-center"
                            >
                                <span to="/leverage-solutions">Link Here</span>
                                <span class="material-symbols-outlined">
                                    trending_flat
                                </span>
                            </div>
                        </div>
                        <div
                            onClick={(e) => {
                                navigate("/resilient-internet-access");
                            }}
                            className="cards flex f-column f-align-center f-around"
                        >
                            <img
                                src={
                                    Assets.images.productsServices
                                        .interconnectionServices.resilientHl
                                }
                                alt="High-performance"
                                width="150"
                            />
                            <h5 className="heading-5">
                                Resilient and high-performance internet access
                            </h5>
                            <p className="sub-para">
                                With at least two upstream ISPs in each of the
                                markets get the resiliency that organizations
                                demand and direct connections to major content
                                destinations for superior performance.
                            </p>
                            <div
                                onClick={(e) => {
                                    navigate("/resilient-internet-access");
                                }}
                                className="hyper-link flex f-center"
                            >
                                <span to="/resilient-internet-access">
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
                                navigate("/low-latency-connections");
                            }}
                            className="cards flex f-column f-align-center f-around"
                        >
                            <img
                                src={
                                    Assets.images.productsServices
                                        .interconnectionServices.highReliableHl
                                }
                                alt="Highly reliable"
                                width="150"
                            />
                            <h5 className="heading-5">
                                Highly reliable, low-latency connections
                            </h5>
                            <p className="sub-para">
                                Link to dynamic ecosystems of business partners,
                                networks, carriers with a fast, convenient, and
                                affordable integration solution
                            </p>
                            <div
                                onClick={(e) => {
                                    navigate("/low-latency-connections");
                                }}
                                className="hyper-link flex f-center"
                            >
                                <span to="/low-latency-connections">
                                    Link Here
                                </span>
                                <span class="material-symbols-outlined">
                                    trending_flat
                                </span>
                            </div>
                        </div>
                        <div
                            onClick={(e) => {
                                navigate("/metro-connect");
                            }}
                            className="cards flex f-column f-align-center f-around"
                        >
                            <img
                                src={
                                    Assets.images.productsServices
                                        .interconnectionServices.multipleDataHl
                                }
                                alt="Multiple Datacenters"
                                width="150"
                            />
                            <h5 className="heading-5">
                                Connect to multiple data centers within a metro
                            </h5>
                            <p className="sub-para">
                                Get direct, dedicated, carrier-grade network
                                links between one IBX data center and partners
                                in another IBX within the same metro.
                            </p>
                            <div
                                onClick={(e) => {
                                    navigate("/metro-connect");
                                }}
                                className="hyper-link flex f-center"
                            >
                                <span to="/metro-connect">Link Here</span>
                                <span class="material-symbols-outlined">
                                    trending_flat
                                </span>
                            </div>
                        </div>
                        <div
                            onClick={(e) => {
                                navigate("/dark-fiber");
                            }}
                            className="cards flex f-column f-align-center f-around"
                        >
                            <img
                                src={
                                    Assets.images.productsServices
                                        .interconnectionServices.darkFiberHl
                                }
                                alt="Rich Ecosystem"
                                width="150"
                            />
                            <h5 className="heading-5">
                                Access a rich ecosystem with dark fiber
                            </h5>
                            <p className="sub-para">
                                Enable dark fiber links for fast, convenient and
                                affordable integration with partners, customers
                                and service providers across the global Shen
                                digital ecosystem.
                            </p>
                            <div
                                onClick={(e) => {
                                    navigate("/dark-fiber");
                                }}
                                className="hyper-link flex f-center"
                            >
                                <span to="/dark-fiber">Link Here</span>
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

export default InterconnectionServices;
