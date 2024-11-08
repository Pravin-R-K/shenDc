import React from "react";
import "./digitalservices.css";
import Assets from "../../../Assets";
import { useNavigate } from "react-router-dom";

const DigitalServices = () => {
    const navigate = useNavigate();

    return (
        <div className="ds-container">
            <section id="ds-1">
                <div className="heading flex f-column f-center">
                    <h1 className="heading-1">
                        Consume network infrastructure on-demand, globally and
                        instantly
                    </h1>
                    <p className="main-para">
                        Deploy digital infrastructure securely and rapidly with
                        virtual network services, Timing-as-a-Service and
                        automated bare metal powered by software-defined
                        interconnection.
                    </p>
                </div>
            </section>
            <section id="ds-2">
                <div className="sub-container flex f-around f-align-center">
                    <div className="heading flex f-column f-align-center f-around">
                        <h2 className="heading-2">
                            Drive your digital infrastructure strategy with Shen
                        </h2>
                        <p className="main-para">
                            As a global interconnection and ecosystem leader,
                            we're dedicated to helping digital leaders bring
                            together and interconnect their digital
                            infrastructure on our global platform to gain
                            maximum competitive advantage. We envision a future
                            in which digital leaders assemble infrastructure on
                            demand in minutes - anywhere in the world - from an
                            ecosystem of providers.
                        </p>
                    </div>
                    <div className="ds2-image">
                        <img
                            src={
                                Assets.images.productsServices.digitalServices
                                    .digStructure
                            }
                            alt="Digital structure"
                            width="600"
                        />
                    </div>
                </div>
            </section>
            <div className="dig-heading sub-para">
                DO MORE WITH DIGITAL INFRASTRUCTURE
            </div>
            <section id="ds-3">
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .digitalServices.hybridCloud
                                }
                                alt="Hybrid cloud"
                                width="100"
                            />
                            <h5 className="heading-5">
                                Simplify hybrid cloud deployments
                            </h5>
                            <p className="sub-para">
                                Create best-of-breed hybrid multicloud
                                architectures by using digital services adjacent
                                to leading public clouds and networks.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .digitalServices.virtual
                                }
                                alt="Virtual connection"
                                width="100"
                            />
                            <h5 className="heading-5">
                                Instant, virtual connections
                            </h5>
                            <p className="sub-para">
                                Simplify connections to thousands of service
                                providers in the industry's largest, reliable
                                infrastructure ecosystem.
                            </p>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .digitalServices.lowLatency
                                }
                                alt="Low latency performance"
                                width="100"
                            />
                            <h5 className="heading-5">
                                Enable low-latency performance
                            </h5>
                            <p className="sub-para">
                                Deploy close to customers and locations to
                                improve quality of experience and drive a
                                competitive advantage.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .digitalServices.highPerformance
                                }
                                alt="High performance"
                                width="100"
                            />
                            <h5 className="heading-5">
                                Increase performance, innovation, security, and
                                scale
                            </h5>
                            <p className="sub-para">
                                Scale hybrid deployments, achieve network
                                agility, directly connect to partners and
                                providers easily and securely.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="ds-4">
                <div className="heading flex f-center">
                    <h3 className="heading-3">
                        Go live with digital advantage in hours
                    </h3>
                </div>
                <div className="card-container flex f-column f-around f-align-center">
                    <div className="sub-container flex f-align-center f-around">
                        <div
                            onClick={(e) => {
                                navigate("/on-demand-service");
                            }}
                            className="cards flex f-column f-align-center f-around"
                        >
                            <img
                                src={
                                    Assets.images.productsServices
                                        .digitalServices.onDemandHl
                                }
                                alt="On-demand service"
                                width="150"
                            />
                            <h5 className="heading-5">On-demand Service</h5>
                            <p className="sub-para">
                                On-demand digital infrastructure and services at
                                software speed ensured through
                                secure,software-defined interconnection.
                            </p>
                            <div
                                onClick={(e) => {
                                    navigate("/on-demand-service");
                                }}
                                className="hyper-link flex f-center"
                            >
                                <span to="/on-demand-service">Link Here</span>
                                <span class="material-symbols-outlined">
                                    trending_flat
                                </span>
                            </div>
                        </div>
                        <div
                            onClick={(e) => {
                                navigate("/bare-metal-connect");
                            }}
                            className="cards flex f-column f-align-center f-around"
                        >
                            <img
                                src={
                                    Assets.images.productsServices
                                        .digitalServices.bareMetalHl
                                }
                                alt="Bare Metal"
                                width="150"
                            />
                            <h5 className="heading-5">Bare metal connect</h5>
                            <p className="sub-para">
                                On-demand, high-performance bare metal, directly
                                integrate
                            </p>
                            <div
                                onClick={(e) => {
                                    navigate("/bare-metal-connect");
                                }}
                                className="hyper-link flex f-center"
                            >
                                <span to="/bare-metal-connect">Link Here</span>
                                <span class="material-symbols-outlined">
                                    trending_flat
                                </span>
                            </div>
                        </div>
                        <div
                            onClick={(e) => {
                                navigate("/digital-infrastructure");
                            }}
                            className="cards flex f-column f-align-center f-around"
                        >
                            <img
                                src={
                                    Assets.images.productsServices
                                        .digitalServices.networkEdgeHl
                                }
                                alt="Network Edge"
                                width="150"
                            />
                            <h5 className="heading-5">
                                Ready to go digital infrastructure at the edge
                            </h5>
                            <p className="sub-para">
                                Get virtual services that run on a modular
                                infrastructure platform while reducing
                                complexity, cost and increasing ease of
                                management.
                            </p>
                            <div
                                onClick={(e) => {
                                    navigate("/digital-infrastructure");
                                }}
                                className="hyper-link flex f-center"
                            >
                                <span to="/digital-infrastructure">
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
                                navigate("/seamless-synchronization");
                            }}
                            className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .digitalServices.precisiomTimeHl
                                }
                                alt="Precision Time"
                                width="150"
                            />
                            <h5 className="heading-5">
                                Seamless Synchronization
                            </h5>
                            <p className="sub-para">
                                Onsite time-as-a-service application for
                                distributed enterprises system.
                            </p>
                            <div
                                onClick={(e) => {
                                    navigate("/seamless-synchronization");
                                }}
                                className="hyper-link flex f-center"
                            >
                                <span to="/seamless-synchronization">
                                    Link Here
                                </span>
                                <span class="material-symbols-outlined">
                                    trending_flat
                                </span>
                            </div>
                        </div>
                        <div
                            onClick={(e) => {
                                navigate("/multicloud-routing");
                            }}
                            className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .digitalServices.cloudRouterHl
                                }
                                alt="Cloud Router"
                                width="150"
                            />
                            <h5 className="heading-5">
                                Multi Cloud routing on demand
                            </h5>
                            <p className="sub-para">
                                Optimize the deployment of a physical router or
                                running software like a typical virtual
                                router—without licensing or device management.
                                Reduce complexity and connect applications and
                                data across different clouds in no time.
                            </p>
                            <div
                                onClick={(e) => {
                                    navigate("/multicloud-routing");
                                }}
                                className="hyper-link flex f-center"
                            >
                                <span to="/multicloud-routing">Link Here</span>
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

export default DigitalServices;
