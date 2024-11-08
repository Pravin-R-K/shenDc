import React from "react";
import "./about.css";

const About = () => {
    return (
        <div className="about-container">
            <section id="about-1" className="flex f-column f-center">
                <div className="heading flex f-column f-center">
                    <h2 className="heading-2 flex f-center">Who we are?</h2>
                    <p className="main-para">
                        Shen is the world's digital infrastructure company. We
                        interconnect industry-leading organizations such as
                        finance, manufacturing, retail, transportation,
                        government, healthcare, and education across a
                        digital-first world. Business leaders harness our
                        trusted global platform to bring together and
                        interconnect the foundational infrastructure that powers
                        their success - sustainably and securely.
                    </p>
                    <p className="main-para">
                        Founded in Silicon Valley in 1998 as a vendor-neutral
                        multi-tenant data center provider where leading networks
                        come together to securely connect networks and share
                        data traffic, we chose a name that reflected the
                        company's focus on Equality, Neutrality, and Internet
                        eXchange Shen.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
