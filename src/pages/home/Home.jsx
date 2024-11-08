import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="home-container">
            <section id="home-1">
                <div className="heading flex f-column f-around">
                    <h1 className="heading-1">
                        Digital infrastructure to power your AI transformation
                    </h1>
                    <p className="main-para">
                        As the world's digital infrastructure company, we
                        connect places, partners, and possibilities.
                    </p>
                </div>
            </section>
            <section id="home-2">
                <div className="heading flex f-center">
                    <h2 className="heading-2">Leading companies choose Shen</h2>
                </div>
                <div className="main-para card-container flex f-around">
                    <p>Google Cloud</p>
                    <p>Azure</p>
                    <p>aws</p>
                    <p>zoom</p>
                    <p>NETFLIX</p>
                </div>
            </section>
            <section id="home-3">
                <div className="heading flex f-column f-around">
                    <h3 className="heading-3">
                        Move fast, pivot quickly, with the right digital
                        infrastructure
                    </h3>
                    <p className="main-para">
                        React fast to market opportunities with physical and
                        virtual infrastructure that adapts as your business
                        transforms.
                    </p>
                </div>
            </section>
            <section id="home-4">
                <div className="heading flex f-column f-around">
                    <h3 className="heading-3">
                        Deploy flexible solutions to stay ahead
                    </h3>
                    <p className="main-para">
                        Stay agile and connected by deploying digital services
                        closest to cloud and network densities to evolve your
                        business and ultimately—to succeed.
                    </p>
                </div>
            </section>
            <section id="home-5">
                <div className="heading flex f-column f-around">
                    <h3 className="heading-3">
                        Scale your competitive advantage with Platform Shen
                    </h3>
                    <p className="main-para">
                        Assemble infrastructure in minutes, put workloads and
                        applications close to your users, and stay secure and
                        connected across the most dynamic industries.
                    </p>
                </div>
            </section>
            <section id="home-6">
                <div className="heading flex f-column f-around">
                    <h3 className="heading-3">We believe in a better future</h3>
                    <p className="main-para">
                        Shen is dedicated to doing what it takes to power,
                        protect, and connect organizations and ecosystems to
                        help customers achieve their sustainability goals.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;
