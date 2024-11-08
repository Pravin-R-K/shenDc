import React from "react";
import "./seamless.css";
import Assets from "../../../../Assets";

const SeamlessSynchronize = () => {
    return (
        <div className="seam-sync-container">
            <section id="seam-sync-1">
                <div className="heading flex f-center">
                    <h2 className="heading-2">
                        Solution for strategic use cases
                    </h2>
                </div>
                <div className="card-container flex f-align-center f-around">
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={
                                Assets.images.productsServices.digitalServices
                                    .seamlessSynchronization.financeService
                            }
                            alt="Financial services"
                            width="100"
                        />
                        <h5 className="heading-5">Financial services</h5>
                        <p className="sub-para">
                            Enable high-frequency trading platforms to maintain
                            completely precise, secure timing (in the order of
                            ns, single-digit μs) to ensure an ordered sequence
                            of transactions with a layered service stack.
                        </p>
                    </div>
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={
                                Assets.images.productsServices.digitalServices
                                    .seamlessSynchronization.entertainment
                            }
                            alt="Media and entertainment"
                            width="100"
                        />
                        <h5 className="heading-5">Media and entertainment</h5>
                        <p className="sub-para">
                            Real-time streaming services including broadcasting,
                            programmatic advertising, and gaming enterprises can
                            maintain accuracy by preventing “lip-sync” errors
                            and ensuring chronological order of play in
                            multi-player games.
                        </p>
                    </div>
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={
                                Assets.images.productsServices.digitalServices
                                    .seamlessSynchronization.enterpriseApp
                            }
                            alt="Enterprise applications"
                            width="100"
                        />
                        <h5 className="heading-5">Enterprise applications</h5>
                        <p className="sub-para">
                            A minimum narrow drift offset is a must for
                            distributed transactional apps/DBs, accurate
                            ordering of logs, and preventing online attacks
                            (sequence of events).
                        </p>
                    </div>
                </div>
            </section>
            <section id="seam-sync-2">
                <div className="heading flex f-center">
                    <h3 className="heading-3">Why Precision Time</h3>
                </div>
                <div className="card-container flex f-align-center f-around">
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={
                                Assets.images.productsServices.digitalServices
                                    .seamlessSynchronization.timeCost
                            }
                            alt="Time and Cost Savings"
                            width="100"
                        />
                        <h5 className="heading-5">Time and Cost Savings</h5>
                        <p className="sub-para">
                            Shen manages and maintains GPS antenna timing,
                            receivers, grandmaster clocks, and time
                            servers—reducing effort spent on precise timekeeping
                            through PTP network services.
                        </p>
                    </div>
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={
                                Assets.images.productsServices.digitalServices
                                    .seamlessSynchronization.highAccuracy
                            }
                            alt="High accuracy"
                            width="100"
                        />
                        <h5 className="heading-5">High accuracy</h5>
                        <p className="sub-para">
                            Predictable time synchronization with PTP accuracy
                            of up to 50 microseconds.
                        </p>
                    </div>
                    <div className="cards flex f-column f-align-center f-around">
                        <img
                            src={
                                Assets.images.productsServices.digitalServices
                                    .seamlessSynchronization.productFlex
                            }
                            alt="Product flexibility"
                            width="100"
                        />
                        <h5 className="heading-5">Product flexibility</h5>
                        <p className="sub-para">
                            Choose between Precision Time Protocol (PTP
                            services) and Network Time Protocol (NTP services),
                            enable automated provisioning of servers, and
                            leverage the Technical Documentation Center for
                            various methods of cascading time.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SeamlessSynchronize;
