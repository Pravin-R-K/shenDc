import React from "react";
import "./resilient.css";
import Assets from "../../../../Assets";

const ResilientInternet = () => {
    return (
        <div className="resilient-container">
            <section id="resilient-1">
                <div className="resilient1-container flex f-around f-align-center">
                    <div className="heading flex f-column f-around">
                        <h2 className="heading-2">
                            Get enterprise-grade internet connectivity with the
                            lowest-latency
                        </h2>
                        <p className="main-para">
                            Shen Internet Access, available in global markets,
                            provides internet access in Shen International
                            Business Exchange data centers. With at least two
                            upstream ISPs in each market, Shen Internet Access
                            offers the resiliency that organizations demand and
                            direct connections to major content destinations for
                            superior performance.
                        </p>
                    </div>
                    <div className="img">
                        <img
                            src={
                                Assets.images.productsServices
                                    .interconnectionServices.resilientInternet
                                    .resilientNet
                            }
                            alt="Resilient Internet"
                            width="700"
                        />
                    </div>
                </div>
            </section>
            <section id="resilient-2">
                <div className="heading flex f-center">
                    <h3 className="heading-3">Three ways to connect</h3>
                </div>
                <div className="card-container flex f-align-center f-around">
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={
                                Assets.images.productsServices
                                    .interconnectionServices.resilientInternet
                                    .dedicatePort
                            }
                            alt="Dedicated Port"
                            width="100"
                        />
                        <h5 className="heading-5">Dedicated Port</h5>
                        <p className="sub-para">
                            Get the entire port to provision your Internet
                            Access service.
                        </p>
                    </div>
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={
                                Assets.images.productsServices
                                    .interconnectionServices.resilientInternet
                                    .fabricPort
                            }
                            alt="Fabric Port"
                            width="100"
                        />
                        <h5 className="heading-5">Fabric Port</h5>
                        <p className="sub-para">
                            Use with other virtual connections to provision
                            several services in addition to Internet Access.
                        </p>
                    </div>
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={
                                Assets.images.productsServices
                                    .interconnectionServices.resilientInternet
                                    .networkedgePort
                            }
                            alt="Network Edge Port"
                            width="100"
                        />
                        <h5 className="heading-5">Network Edge Port</h5>
                        <p className="sub-para">
                            Connect your port to Network Edge virtual devices
                            for seamless integration.
                        </p>
                    </div>
                </div>
            </section>
            <section id="resilient-3">
                <div className="heading flex f-center">
                    <h3 className="heading-3">Why Shen Internet Access?</h3>
                </div>
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .interconnectionServices
                                        .resilientInternet.resiliency
                                }
                                alt="Resiliency"
                                width="100"
                            />
                            <h5 className="heading-5">Resiliency</h5>
                            <p className="sub-para">
                                Built-in redundancy with at least two upstream
                                Tier 1 providers per metro. Consistent
                                low-latency services aggregate the world's top
                                Tier 1 backbone service providers with regional
                                internet exchanges.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .interconnectionServices
                                        .resilientInternet.superPerformance
                                }
                                alt="Superior performance"
                                width="100"
                            />
                            <h5 className="heading-5">Superior performance</h5>
                            <p className="sub-para">
                                Integration with Shen Internet Exchange enables
                                direct fast-path connections to major content
                                destinations such as Microsoft Office 365 and
                                Dropbox, with low latency.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .interconnectionServices
                                        .resilientInternet.globalSearchIcs
                                }
                                alt="Global reach"
                                width="100"
                            />
                            <h5 className="heading-5">Global reach</h5>
                            <p className="sub-para">
                                Available in markets worldwide, enabling
                                simplified management and capability for fast
                                business growth.
                            </p>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .interconnectionServices
                                        .resilientInternet.agileScalable
                                }
                                alt="Agility and scalability"
                                width="100"
                            />
                            <h5 className="heading-5">
                                Agility and scalability
                            </h5>
                            <p className="sub-para">
                                Fast to activate, ready-to-use Layer 3 solution
                                lets you easily scale bandwidth to meet emerging
                                demand. With traffic bursting and usage-based
                                billing, pay only for what you use.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .interconnectionServices
                                        .resilientInternet.convenience
                                }
                                alt="Convenience and robust support"
                                width="100"
                            />
                            <h5 className="heading-5">
                                Convenience and robust support
                            </h5>
                            <p className="sub-para">
                                Shen Internet Access, you receive one trusted
                                point of contact for IP service with one
                                invoice, real-time bandwidth reporting, and
                                level-1 support 24/7, 365 days a year.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.productsServices
                                        .interconnectionServices
                                        .resilientInternet.guaranteeUptime
                                }
                                alt="Guaranteed uptime"
                                width="100"
                            />
                            <h5 className="heading-5">Guaranteed uptime</h5>
                            <p className="sub-para">
                                Dual-port configurations carry a 99.99%
                                availability SLA.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResilientInternet;
