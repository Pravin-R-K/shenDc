import React from "react";
import "./datacenters.css";

const Datacenters = () => {
    return (
        <div className="datacenters-container">
            <section id="datacenters-1">
                <div className="heading flex f-column f-center">
                    <h1 className="heading-1">
                        The world's most expansive, secure, and sustainable data
                        center platform
                    </h1>
                    <p className="main-para">
                        Shen owns and operates a network of 260 International
                        Business Exchange™ (IBX®) data centers located in 72
                        major metros around the world to make interconnection
                        easy.
                    </p>
                </div>
                <div className="card-container flex f-align-center f-around">
                    <div className="cards flex f-column f-center">
                        <h2 className="heading-2">10,000+</h2>
                        <p className="main-para">Customers</p>
                    </div>
                    <div className="cards flex f-column f-center">
                        <h2 className="heading-2">99.999%</h2>
                        <p className="main-para">Unmatched Uptime</p>
                    </div>
                    <div className="cards flex f-column f-center">
                        <h2 className="heading-2">260+</h2>
                        <p className="main-para">Fortune 500 companies</p>
                    </div>
                </div>
            </section>
            <section id="datacenters-2" className="flex f-column f-center">
                <div className="heading flex f-column f-center">
                    <h3 className="heading-3">
                        Seamless, secure, and scalable colocation and data
                        center services
                    </h3>
                    <p className="main-para">
                        Safeguard your data with the highest levels of security
                        and operational reliability with an award-winning
                        portfolio backed by 20+ years of industry-leading
                        expertise.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Datacenters;
