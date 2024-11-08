import React from "react";
import "./privateai.css";
import Assets from "../../../Assets";

const PrivateAi = () => {
    return (
        <div className="ai-container">
            <section id="ai-1">
                <div className="heading flex f-column f-center">
                    <h1 className="heading-1">Private AI with Platform Shen</h1>
                    <p className="main-para">
                        Unlock the power of AI while maintaining control of your
                        data. Deploy Private AI with Platform Shen to protect
                        your proprietary data, reduce regulatory risk, and
                        optimize performance.
                    </p>
                </div>
            </section>
            <section id="ai-2">
                <div className="heading flex f-center">
                    <h3 className="heading-3">Your platform for private AI</h3>
                </div>
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.solutions.privateAi.securityAi
                                }
                                alt="Privacy and Security"
                                width="100"
                            />
                            <h5 className="heading-5">Privacy and security</h5>
                            <p className="sub-para">
                                Harness the power of AI with data privacy and
                                security on Platform Shen. Scale your AI needs
                                on secure, sustainable private infrastructure
                                with total control and access to the lineage of
                                AI models on privately hosted GPUs and
                                interconnections.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.solutions.privateAi
                                        .performanceAi
                                }
                                alt="High performance"
                                width="100"
                            />
                            <h5 className="heading-5">High-performance</h5>
                            <p className="sub-para">
                                Reduce the time it takes to train your AI models
                                with dedicated AI infrastructure. Satisfy the
                                needs of latency-sensitive applications with
                                your infrastructure located at the metro edge.
                                Get high-speed access to your data sources with
                                high-speed connectivity to clouds and data
                                brokers.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.solutions.privateAi
                                        .datacenterAi
                                }
                                alt="Datacenter Services"
                                width="100"
                            />
                            <h5 className="heading-5">Data center services</h5>
                            <p className="sub-para">
                                Deploy and manage complex AI infrastructure
                                seamlessly on Platform Shen, maintaining
                                complete control over your data. Shen data
                                center services include access to high-power
                                equipment and advanced cooling, regulatory
                                compliance, and global reach.
                            </p>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={Assets.images.solutions.privateAi.cloudAi}
                                alt="Cloud adjacency"
                                width="100"
                            />
                            <h5 className="heading-5">Cloud adjacency</h5>
                            <p className="sub-para">
                                Access high-speed and low-latency connectivity
                                to multiple clouds, allowing for high-bandwidth
                                data egress from the clouds to the Shen data
                                centers. Use private direct connectivity to
                                reduce data egress costs substantially compared
                                to the public internet.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.solutions.privateAi
                                        .interconnectionAi
                                }
                                alt="Interconnection"
                                width="100"
                            />
                            <h5 className="heading-5">Interconnection</h5>
                            <p className="sub-para">
                                Take advantage of global ingress points and
                                interconnected fabric to move data to AI
                                training and inference clusters and
                                software-defined APIs for network management on
                                Platform Shen. Get interconnections with 10,000+
                                enterprises, including 2,000+ networks and
                                3,000+ cloud & IT services/providers with
                                Network Function Virtualization and Multi-Cloud
                                Fabric Router support.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.solutions.privateAi.partnersAi
                                }
                                alt="Partners and Ecosystems"
                                width="100"
                            />
                            <h5 className="heading-5">
                                Partners and ecosystems
                            </h5>
                            <p className="sub-para">
                                Leverage an ecosystem of 10k+ companies to
                                perform B2B data transfer for AI workloads. Shen
                                data centers are available in 72 strategic
                                markets in 30+ countries and help with
                                performance and compliance.
                            </p>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.solutions.privateAi.sustainAi
                                }
                                alt="Sustainability"
                                width="100"
                            />
                            <h5 className="heading-5">Sustainability</h5>
                            <p className="sub-para">
                                Build a robust digital infrastructure foundation
                                covered by 96% renewable energy designed for a
                                global scale. Expand your business with energy
                                savings, operational efficiency, and net-zero
                                decarbonization on Platform Shen. Designed for
                                AI and power-intensive computing, get the
                                support you need with high power density racks
                                and advanced cooling.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={Assets.images.solutions.privateAi.endAi}
                                alt="End-to-end AI"
                                width="100"
                            />
                            <h5 className="heading-5">End-to-end AI</h5>
                            <p className="sub-para">
                                Develop and deploy your AI models in the same
                                metros where data is generated. Shen helps you
                                host power-hungry AI infrastructure for AI model
                                development and network-rich interconnected
                                locations for AI inference. Shen can help deploy
                                all the stages of your AI pipeline today.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="ai-3">
                <div className="heading flex f-center">
                    <h3 className="heading-3">Private AI deployment options</h3>
                </div>
                <div className="card-container flex f-around f-center">
                    <div className="cards flex f-column f-align-center f-around">
                        <h5 className="heading-5">
                            Private AI with Shen Colocation
                        </h5>
                        <p className="sub-para">
                            Bring your own partner solutions and AI
                            infrastructure. We provide space, power, advanced
                            cooling, and interconnection.
                        </p>
                    </div>
                    <div className="cards flex f-column f-align-center f-around">
                        <h5 className="heading-5">
                            Private AI with Shen Managed Solutions
                        </h5>
                        <p className="sub-para">
                            Get fully managed Private AI with Shen. We provide
                            management for AI-ready infrastructure, including
                            computing, storage, and networking.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivateAi;
