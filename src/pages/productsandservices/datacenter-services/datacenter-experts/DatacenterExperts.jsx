import React from "react";
import "./dataexperts.css";

const DatacenterExperts = () => {
    return (
        <div className="dataexpert-container">
            <section id="dataexpert-1">
                <div className="heading flex f-center">
                    <h2 className="heading-2">
                        Easily manage deployments with data center experts and
                        certified technology partners
                    </h2>
                </div>
            </section>
            <div className="sub-para dataexpert-heading">BENEFITS</div>
            <section id="dataexpert-2">
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">Turnkey services </h5>
                            <p className="sub-para">
                                Shen can plan and project-manage your entire
                                deployment including designing the cage.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">One vendor, one invoice</h5>
                            <p className="sub-para">
                                We vet and manage all vendor partners, and
                                consolidate all billing on a single invoice.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">World-class design</h5>
                            <p className="sub-para">
                                Our colocation expertise ensures an efficient
                                design that optimizes space and guarantees easy
                                service access.
                            </p>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">Shen structured cabling</h5>
                            <p className="sub-para">
                                We offer structured cabling that reduces
                                complexity and downtime risk, simplifies service
                                and supports scalability.
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">Future-proofing</h5>
                            <p className="sub-para">
                                We use our knowledge of data center technology
                                to provide flexible solutions that accommodate
                                growth and change.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="dataexpert-3">
                <div className="heading flex f-center">
                    <h3 className="heading-3">Features</h3>
                </div>
                <div className="sub-para desc flex f-column f-center">
                    <div className="points flex f-align-center">
                        <span class="material-symbols-outlined">
                            radio_button_checked
                        </span>
                        <p>
                            Source everything you need: cages and cabinets,
                            power distribution systems, cable management
                            equipment, security systems, and accessories.
                        </p>
                    </div>
                    <div className="points flex f-align-center">
                        <span class="material-symbols-outlined">
                            radio_button_checked
                        </span>
                        <p>
                            Ensure all equipment performs consistently and
                            interoperates seamlessly within our data centers.
                        </p>
                    </div>
                    <div className="points flex f-align-center">
                        <span class="material-symbols-outlined">
                            radio_button_checked
                        </span>
                        <p>
                            Schedule all deliveries to arrive when access is
                            available.
                        </p>
                    </div>
                    <div className="points flex f-align-center">
                        <span class="material-symbols-outlined">
                            radio_button_checked
                        </span>
                        <p>
                            Utilize our proven, repeatable migration process to
                            assure high availability, low risk, and fast
                            migration.
                        </p>
                    </div>
                    <div className="points flex f-align-center">
                        <span class="material-symbols-outlined">
                            radio_button_checked
                        </span>
                        <p>
                            Have your deployments expansion-ready and
                            future-proof through your Shen Team.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DatacenterExperts;
