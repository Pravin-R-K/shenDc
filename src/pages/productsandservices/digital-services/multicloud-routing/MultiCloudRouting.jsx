import React from "react";
import "./cloudrouting.css";
import Assets from "../../../../Assets";

const MultiCloudRouting = () => {
    return (
        <div className="cloud-routing-conatiner">
            <section id="mcr-1">
                <div className="sub-container flex f-around f-align-center">
                    <div className="heading flex f-column f-around">
                        <h2 className="heading-2">
                            Enable multi-cloud routing easily, quickly, and
                            cost-effective
                        </h2>
                        <p className="main-para">
                            Shen Cloud Router makes it easy to connect
                            applications and data across different clouds. Spin
                            up virtual routing and connect between AWS, Azure,
                            Google, Oracle, and your private cloud in minutes
                            from any of our unmatched, cloud-adjacent locations,
                            globally. With high-performance and private
                            connections, your data is not exposed to the risks
                            of the public internet.
                        </p>
                        <p className="main-para">
                            As a service, Shen Cloud Router helps you avoid the
                            expense and hassle of deploying a physical router—or
                            licensing and managing your own virtual alternative.
                            Drastically reduce cloud data egress charges when
                            compared to routing over the internet.
                        </p>
                    </div>
                    <div className="img">
                        <img
                            src={
                                Assets.images.productsServices.digitalServices
                                    .multicloudRouter.multiCloudBg
                            }
                            alt="Multi-Cloud Router"
                            width="800"
                        />
                    </div>
                </div>
            </section>
            <section id="mcr-2">
                <div className="heading flex f-center">
                    <h3 className="heading-3">Why Cloud Router?</h3>
                </div>
                <div className="card-container flex f-align-center f-around">
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={
                                Assets.images.productsServices.digitalServices
                                    .multicloudRouter.accelerateCloud
                            }
                            alt="Accelerate Multi-cloud"
                            width="100"
                        />
                        <h5 className="heading-5">
                            Built to accelerate multi-cloud adoption
                        </h5>
                        <p className="sub-para">
                            Avoid vendor lock-in while gaining unmatched low
                            latency access between your public clouds.
                        </p>
                    </div>
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={
                                Assets.images.productsServices.digitalServices
                                    .multicloudRouter.plugPlay
                            }
                            alt="High Performance"
                            width="100"
                        />
                        <h5 className="heading-5">
                            Plug and play resilient and high-performance
                            networking for multi-cloud
                        </h5>
                        <p className="sub-para">
                            Privately route applications and data in different
                            clouds with high-throughput, built-in redundancy.
                        </p>
                    </div>
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={
                                Assets.images.productsServices.digitalServices
                                    .multicloudRouter.optimizeCloud
                            }
                            alt="Multi-cloud Deployments"
                            width="100"
                        />
                        <h5 className="heading-5">
                            Optimize multi-cloud deployments
                        </h5>
                        <p className="sub-para">
                            Cost-effectively enables cloud-to-cloud connectivity
                            from virtual router with a few clicks.
                        </p>
                    </div>
                </div>
            </section>
            <section id="mcr-3">
                <div className="heading flex f-center">
                    <h3 className="heading-3">Product features</h3>
                </div>
                <div className="sub-para desc flex f-column f-center">
                    <div className="points flex f-align-center">
                        <span class="material-symbols-outlined">task_alt</span>
                        <p>
                            Zero backhauling traffic by spinning up a virtual
                            router closer to your services for dynamic routing
                            between public clouds.
                        </p>
                    </div>
                    <div className="points flex f-align-center">
                        <span class="material-symbols-outlined">task_alt</span>
                        <p>
                            By provisioning connections and routing on our
                            easy-to-use porta, you can automate via APIs.
                        </p>
                    </div>
                    <div className="points flex f-align-center">
                        <span class="material-symbols-outlined">task_alt</span>
                        <p>
                            Bypassing the public internet with private,
                            low-latency connections will also lower data egress
                            fees.
                        </p>
                    </div>
                    <div className="points flex f-align-center">
                        <span class="material-symbols-outlined">task_alt</span>
                        <p>
                            By leveraging built-in resiliency while configuring
                            redundant connections, a diverse virtual router will
                            be assigned, saving you the time and expense of
                            deploying redundant virtual routers.
                        </p>
                    </div>
                    <div className="points flex f-align-center">
                        <span class="material-symbols-outlined">task_alt</span>
                        <p>
                            Extend your WAN by joining multiple virtual routers
                            with multipoint connectivity across our
                            software-defined global network.
                        </p>
                    </div>
                    <div className="points flex f-align-center">
                        <span class="material-symbols-outlined">task_alt</span>
                        <p>
                            No predefined bandwidth commit levels, no virtual
                            connection maximum per virtual router, with support
                            for hundreds of GBPS aggregate throughput.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MultiCloudRouting;
