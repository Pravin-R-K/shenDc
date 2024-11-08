import React from "react";
import "./leverage.css";

const LeverageSolution = () => {
    return (
        <div className="leverage-container">
            <section id="leverage-1">
                <div className="heading flex f-center">
                    <h2 className="heading-2">SHEN INTERNET EXCHANGES</h2>
                </div>
            </section>
            <section id="leverage-2">
                <div className="heading flex f-column f-center">
                    <h3 className="heading-3">
                        The best of peers, markets and traffic
                    </h3>
                    <p className="main-para">
                        Shen Internet Exchange enables networks, content
                        providers, and very large enterprises to exchange
                        internet traffic through the largest global peering
                        solution.
                    </p>
                </div>
            </section>
            <div className="sub-para leverage-heading">BENEFITS</div>
            <section id="leverage-3">
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">Options</h5>
                            <p className="sub-para">
                                Aggregate traffic to multiple peers on one
                                physical port, and handle multiple small peers
                                while moving high-traffic peers to private
                                interconnects.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">Performance</h5>
                            <p className="sub-para">
                                Minimize network hops and congestion for
                                enterprise content and applications.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">Controls</h5>
                            <p className="sub-para">
                                Create and manage your connections, on demand,
                                through a globally consistent portal.
                            </p>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">Reduce costs</h5>
                            <p className="sub-para">
                                Aggregate thousands of peering sessions onto a
                                single hardware platform, the largest internet
                                exchange (IX) with the most peers, markets, and
                                traffic, further reducing the need for IP
                                transit.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">Rich ecosystem</h5>
                            <p className="sub-para">
                                Discover and connect to thousands of networks,
                                large enterprises, and cloud and IT service
                                providers.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">Greater visibility</h5>
                            <p className="sub-para">
                                View detailed reports and monitor network
                                performance across peering locations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="leverage-4">
                <div className="heading flex f-column f-center">
                    <h3 className="heading-3">Features</h3>
                    <p className="main-para">
                        Ability to create an isolated broadcast domain, Private
                        VLAN, for direct bilateral peering.
                    </p>
                </div>
                <div className="sub-para lists flex f-column f-align-center f-around">
                    <div className="list-desc flex f-align-center">
                        <span class="material-symbols-outlined">
                            radio_button_checked
                        </span>
                        <p>
                            The Multi-Lateral Peering Exchange (MLPE) allows you
                            to securely exchange routing information with
                            multiple peers through a redundant pair of BGP
                            sessions.
                        </p>
                    </div>
                    <div className="list-desc flex f-align-center">
                        <span class="material-symbols-outlined">
                            radio_button_checked
                        </span>
                        <p>
                            Remotely Triggered Black Hole (RTBH) based support
                            for BGP filters to drop attack traffic from
                            participating peers before it reaches your router.
                        </p>
                    </div>
                    <div className="list-desc flex f-align-center">
                        <span class="material-symbols-outlined">
                            radio_button_checked
                        </span>
                        <p>1, 10, and 100 Gbps port connectivity options.</p>
                    </div>
                </div>
            </section>
            <section id="leverage-5">
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">Mobility Exchange</h5>
                            <p className="sub-para">
                                Mobility Exchange at Shen is a fully managed,
                                ethernet-based switching platform designed
                                specifically for the exchange of mobile internet
                                traffic.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">
                                Redundant infrastructure
                            </h5>
                            <p className="sub-para">
                                Shen provides Mobility Exchange operators with a
                                fully redundant LAN infrastructure for improved
                                service delivery.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">
                                Private bilateral peering
                            </h5>
                            <p className="sub-para">
                                Freedom to negotiate private peering
                                arrangements without any restrictions.
                            </p>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">SLA</h5>
                            <p className="sub-para">
                                Mobility Exchange offers operators stringent
                                SLAs with an uptime guarantee of 99.99% for
                                individual ports.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">
                                VLAN trunking encapsulation
                            </h5>
                            <p className="sub-para">
                                Trunking encapsulation can consolidate multiple
                                physical links onto fewer VLAN trunk ports,
                                increasing network efficiency.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">
                                Dedicated Mobility Exchange Portal
                            </h5>
                            <p className="sub-para">
                                Shen offers full-service transparency with
                                access to port-level statistics on a dedicated
                                portal for Mobility Exchange.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LeverageSolution;
