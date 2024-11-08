import React from "react";
import "./storage.css";
import Assets from "../../../Assets";

const Storage = () => {
    return (
        <div className="storage-container">
            <section id="storage-1">
                <div className="heading flex f-column f-center">
                    <h1 className="heading-1">Storage solutions</h1>
                    <p className="main-para">
                        Leverage storage and data services that are adjacent to
                        public clouds that are cost-optimized and combine
                        high-speed cloud connectivity with full control over
                        your data. Choose industry-leading storage solutions
                        from top vendors.
                    </p>
                </div>
            </section>
            <section id="storage-2">
                <div className="heading flex f-center">
                    <h3 className="heading-3">
                        Your platform for cloud-adjacent data
                    </h3>
                </div>
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-around">
                            <h5 className="heading-5">
                                Convenience, right on your doorstep
                            </h5>
                            <p className="sub-para">
                                Communicate securely between public and private
                                clouds usingShen.
                            </p>
                            <ul className="sub-para">
                                <li>
                                    Access more cloud on-ramps than via any
                                    other operator
                                </li>
                                <li>Make architecture changes quickly</li>
                                <li>Reduce data transfer costs</li>
                            </ul>
                        </div>
                        <div className="cards flex f-column f-around">
                            <h5 className="heading-5">
                                Global reach and availability
                            </h5>
                            <p className="sub-para">
                                Serve your data where you do business
                                geographically with the global Shen platform.
                            </p>
                            <ul className="sub-para">
                                <li>
                                    230 International Business Exchanges™(IBX®)
                                    in 63 major metros
                                </li>
                                <li>Access 1,800+ network providers</li>
                                <li>
                                    Connect with 700+ content and digital media
                                    providers
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-around">
                            <h5 className="heading-5">
                                Predictable storage and data costs
                            </h5>
                            <p className="sub-para">
                                Benefit from Shen storage solutions through our
                                pay-as-you-grow OPEX model.
                            </p>
                            <ul className="sub-para">
                                <li>
                                    Significantly reduce data egress, transit,
                                    and storage access fees
                                </li>
                                <li>
                                    Predictable scalability with cloud-like
                                    deployment options
                                </li>
                                <li>
                                    Eliminate costly data duplication across
                                    clouds and cloud services
                                </li>
                            </ul>
                        </div>
                        <div className="cards flex f-column f-around">
                            <h5 className="heading-5">
                                {" "}
                                More flexibility, more choice
                            </h5>
                            <p className="sub-para">
                                Avoid vendor lock-in to any one cloud or service
                                provider with Shen Platform.
                            </p>
                            <ul className="sub-para">
                                <li>
                                    Access a wide range of Storage-as-a-Service
                                    options
                                </li>
                                <li>
                                    Choose infrastructure solutions including
                                    customized, secure cage or cabinet
                                    colocation deployments
                                </li>
                                <li>Store virtually through Sheet Metal.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-around">
                            <h5 className="heading-5">
                                Streamline compliance, boost security
                            </h5>
                            <p className="sub-para">
                                Separate sensitive data from public clouds, and
                                demonstrate improved resiliency needed to comply
                                with industry and regional regulations.
                            </p>
                            <ul className="sub-para">
                                <li>
                                    Independent backup and recovery environments
                                </li>
                                <li>
                                    Robust protection against malicious
                                    ransomware and other cyber attacks
                                </li>
                                <li>
                                    Secure single-tenant storage as a service
                                    with industry-leading partners
                                </li>
                            </ul>
                        </div>
                        <div className="cards flex f-column f-around">
                            <h5 className="heading-5">
                                Unparalleled cloud access
                            </h5>
                            <p className="sub-para">
                                Bring your applications to the data with secure
                                connectivity via Shen Fabric.
                            </p>
                            <ul className="sub-para">
                                <li>
                                    Access more cloud on-ramps than via any
                                    other operator
                                </li>
                                <li>
                                    Make architectural changes quickly to meet
                                    your business needs
                                </li>
                                <li>
                                    Reduce data egress, transit, and access
                                    costs
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-around">
                            <h5 className="heading-5">
                                Unparalleled cloud access
                            </h5>
                            <p className="sub-para">
                                Bring your applications to the data with secure
                                connectivity via Shen Fabric.
                            </p>
                            <ul className="sub-para">
                                <li>
                                    Access more cloud on-ramps than via any
                                    other operator
                                </li>
                                <li>
                                    Make architectural changes quickly to meet
                                    your business needs
                                </li>
                                <li>
                                    Reduce data egress, transit, and access
                                    costs
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section id="storage-3">
                <div className="heading flex f-center">
                    <h3 className="heading-3">Explore storage solutions</h3>
                </div>
                <div className="card-container flex f-around f-center">
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={Assets.images.solutions.storage.dataSecurity}
                            alt="Data security"
                            width="100"
                        />
                        <h5 className="heading-5">Data Sovereignty and Security</h5>
                        <p className="sub-para">
                            Explore secure data and storage solutions to meet
                            customers' regulatory and governance requirements
                            across the globe.
                        </p>
                    </div>
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={
                                Assets.images.solutions.storage
                                    .businessContinuity
                            }
                            alt="Business continuity"
                            width="100"
                        />
                        <h5 className="heading-5">Business continuity /Disaster recovery</h5>
                        <p className="sub-para">
                            Get dedicated digital infrastructure to support
                            challenges faced by customers who need operational
                            states 24/7/365
                        </p>
                    </div>
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={
                                Assets.images.solutions.storage.storageOptimize
                            }
                            alt="Storage optimize"
                            width="100"
                        />
                        <h5 className="heading-5">Storage optimization</h5>
                        <p className="sub-para">
                            Addresses the hidden costs of cloud storage services
                            and provides enterprise-class, high-performance data
                            services for even the most demanding workload.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Storage;
