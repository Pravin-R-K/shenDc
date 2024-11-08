import Assets from "../../../Assets";
import "./dcexcellence.css";

const DcExcellence = () => {
    return (
        <div className="dc-container">
            <section id="dc-1">
                <div className="heading flex f-column f-center">
                    <h1 className="heading-1">
                        Experience data center excellence at Shen
                    </h1>
                    <p className="main-para">
                        Streamline and scale your data center infrastructure
                        with the industry's leading data center experts at your
                        back.
                    </p>
                </div>
            </section>
            <section id="dc-2">
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <h4 className="heading-4">Sustainable</h4>
                            <h2 className="heading-2">96%</h2>
                            <h5 className="heading-5">Renewable Coverage</h5>
                            <p className="sub-para">
                                96% of our global energy consumption is
                                addressed by renewables with worldwide sites
                                committed to 100% renewable coverage by 2030.
                                Our data centers reflect our holistic and
                                innovative approach to sustainability.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <h4 className="heading-4">Reliable</h4>
                            <h2 className="heading-2">99.9999%</h2>
                            <h5 className="heading-5">Uptime</h5>
                            <p className="sub-para">
                                Build mission critical infrastructure on the
                                world's most trusted and reliable data center
                                platform.
                            </p>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <h4 className="heading-4">Secure</h4>
                            <h2 className="heading-2">24/7/365</h2>
                            <h5 className="heading-5">Security</h5>
                            <p className="sub-para">
                                Equinix IBX centers feature patented multi-level
                                physical security with sophisticated biometric
                                and video technology backed by trained staff on
                                the premises 24/7/365.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <h4 className="heading-4">Trusted</h4>
                            <h2 className="heading-2">10,000+</h2>
                            <h5 className="heading-5">Customers</h5>
                            <p className="sub-para">
                                Our experts can help you streamline your data
                                center operations and optimize your
                                infrastructure strategy. Build with the world’s
                                digital infrastructure leaders on your team.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="dc-3">
                <div className="heading flex f-column f-center">
                    <h3 className="heading-3">
                        Our experts have fine-tuned what it means to run a
                        mission-critical data center
                    </h3>
                    <p className="main-para">
                        Shen customers power the world's digital economy. But
                        digital business is underpinned by physical
                        infrastructure and that infrastructure is powered and
                        built by the world's leading data center design and
                        operations team.
                    </p>
                </div>
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.datacenters
                                        .datacenterExcellence.power
                                }
                                alt="Power"
                                width="100"
                            />
                            <h5 className="heading-5">Power</h5>
                            <p className="sub-para">
                                Our power systems include full uninterruptible
                                power supply (UPS) systems with N+1 redundancy
                                levels or greater and backup generator systems.
                                In case of a power outage, batteries turn on
                                immediately, followed within 8 seconds by the
                                generators, which power the entire data center.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.datacenters
                                        .datacenterExcellence.cooling
                                }
                                alt="Cooling"
                                width="100"
                            />
                            <h5 className="heading-5">Cooling</h5>
                            <p className="sub-para">
                                To keep equipment operating at its peak, each
                                data center houses a multicomponent temperature
                                control system running 24/7. Throughout our
                                global footprint, we continuously implement the
                                latest cooling techniques to ensure performance
                                and use energy-saving practices.
                            </p>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.datacenters
                                        .datacenterExcellence.redundancy
                                }
                                alt="Redundancy"
                                width="100"
                            />
                            <h5 className="heading-5">Redundancy</h5>
                            <p className="sub-para">
                                All IBXs feature built-in redundancy for power,
                                cooling, and interconnection to ensure your
                                mission-critical infrastructure stays up and
                                running.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <img
                                src={
                                    Assets.images.datacenters
                                        .datacenterExcellence.interConnection
                                }
                                alt="InterConnection"
                                width="100"
                            />
                            <h5 className="heading-5">Interconnection</h5>
                            <p className="sub-para">
                                Choose from thousands of clouds, networks and
                                digital supply chain partners to optimize your
                                digital infrastructure. Easily discover,
                                transact and innovate with your customers,
                                suppliers and partners to create and consume new
                                value.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DcExcellence;
