import React from "react";
import "./secureds.css";

const SecureDs = () => {
    return (
        <div className="secureds-container">
            <section id="secure-1">
                <div className="heading flex f-column f-center">
                    <h2 className="heading-2">
                        Non-cage space designed to support critical 24-hour
                        operations and/or provide functional storage space.
                    </h2>
                    <p className="main-para">
                        Designed for office and storage needs, Equinix Flex
                        Space offers security, power, cooling, and
                        interconnection.
                    </p>
                </div>
            </section>
            <div className="sub-para secure-heading">PRODUCT BENEFITS</div>
            <section id="secure-2">
                <div className="card-container flex f-column f-align-center f-around">
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">
                                Complete functionality and comfort
                            </h5>
                            <p className="sub-para">
                                Utilize amenities such as conference rooms,
                                bathrooms, kitchenettes, breakrooms, and faxing
                                and copying services
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">
                                State-of-the-art safety and security
                            </h5>
                            <p className="sub-para">
                                Biometric hand reader and solid doors with
                                pin-proxy card, along with fire suppression and
                                smoke detection systems in every unit.
                            </p>
                        </div>
                    </div>
                    <div className="sub-container flex f-align-center f-around">
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">Ample storage space</h5>
                            <p className="sub-para">
                                Stage and store equipment and replacement parts.
                                Single-occupant storage space: 50x125 feet2
                                (15x38 meters2). Shared storage space: 3.6x4x5
                                feet2 (1.09x1.2x1.5 meters2)(Silicon Valley1 and
                                Silicon Valley 3 data centers only)
                            </p>
                        </div>
                        <div className="cards flex f-column f-align-center f-around">
                            <h5 className="heading-5">Superior Design, 24/7</h5>
                            <p className="sub-para">
                                Take advantage of mission-critical, 24-hour
                                operation centers with fluorescent, parabolic
                                lighting, acoustically protected ceilings and
                                walls and shared HVAC system for units and
                                hallways.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SecureDs;
