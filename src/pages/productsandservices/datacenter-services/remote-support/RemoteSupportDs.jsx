import React from "react";
import "./remotesupport.css";
import Assets from "../../../../Assets";

const RemoteSupportDs = () => {
    return (
        <div className="remote-support-container">
            <section id="remote-support-1">
                <div className="heading flex f-column f-center">
                    <h2 className="heading-2">
                        Round-the-clock, on-site, operational support service
                        for your data center equipment
                    </h2>
                    <p className="main-para">
                        Smart Hands tech support service offers remote server
                        access, custom installations and equipment
                        troubleshooting 24 hours a day at all IBX data centers.
                    </p>
                </div>
            </section>
            <section id="remote-support-2">
                <div className="card-container flex f-align-center f-around">
                    <div className="cards flex f-column f-around">
                        <div className="desc">
                            <h5 className="heading-5">
                                Leverage the Shen Customer Portal for all your
                                Smart Hands needs
                            </h5>
                        </div>
                        <div className="sub-para lists flex f-column">
                            <div className="list-desc flex f-align-center">
                                <span class="material-symbols-outlined">
                                    radio_button_checked
                                </span>
                                <p>Equipment Installation Services</p>
                            </div>
                            <div className="list-desc flex f-align-center">
                                <span class="material-symbols-outlined">
                                    radio_button_checked
                                </span>
                                <p>Rack and Stack Services</p>
                            </div>
                            <div className="list-desc flex f-align-center">
                                <span class="material-symbols-outlined">
                                    radio_button_checked
                                </span>
                                <p>Troubleshooting</p>
                            </div>
                            <div className="list-desc flex f-align-center">
                                <span class="material-symbols-outlined">
                                    radio_button_checked
                                </span>
                                <p>Remote Management</p>
                            </div>
                            <div className="list-desc flex f-align-center">
                                <span class="material-symbols-outlined">
                                    radio_button_checked
                                </span>
                                <p>Cabling Services</p>
                            </div>
                            <div className="list-desc flex f-align-center">
                                <span class="material-symbols-outlined">
                                    radio_button_checked
                                </span>
                                <p>Logistics Support</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="cards flex f-column f-align-center f-around"
                        style={{ height: "70%" }}
                    >
                        <img
                            src={
                                Assets.images.productsServices
                                    .dataCentersServices.remoteSupportDs
                                    .smartHand
                            }
                            alt="Smart Hand Plan"
                            width="200"
                        />
                        <h5 className="heading-5">Smart Hand Plan</h5>
                        <p className="sub-para">
                            Save time, money and hassle with our prepaid
                            discount program includes smart and customized
                            payment schedules.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RemoteSupportDs;
