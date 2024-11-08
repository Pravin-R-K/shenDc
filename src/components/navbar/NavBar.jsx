import { Link, Outlet, useNavigate } from "react-router-dom";
import Assets from "../../Assets";
import "./navbar.css";

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <>
            <header className="flex f-around">
                <div
                    onClick={(e) => {
                        navigate("/");
                    }}
                    className="logo flex f-center"
                >
                    <img src={Assets.images.logo} alt="Logo" width="100" />
                </div>

                <nav className="flex f-around">
                    <div className="link-container flex f-center">
                        <Link to="/data-centers" className="link nav-link">
                            Data Centers
                        </Link>
                        <div className="dropdown f-column">
                            <Link
                                to="/colocation-services"
                                className="link nav-link"
                            >
                                Colocation Services
                            </Link>
                            <Link
                                to="/datacenter-excellence"
                                className="link nav-link"
                            >
                                Datacenter excellence
                            </Link>
                            <Link
                                to="/ecosystem-discovery"
                                className="link nav-link"
                            >
                                Ecosystem Discovery
                            </Link>
                        </div>
                    </div>
                    <div className="link-container flex f-center">
                        <Link
                            to="/productsandservices"
                            className="link nav-link"
                        >
                            Products & Services
                        </Link>
                        <div className="dropdown f-column">
                            <Link
                                to="digital-services"
                                className="link nav-link"
                            >
                                Digital Services
                            </Link>
                            <Link
                                to="datacenter-services"
                                className="link nav-link"
                            >
                                Data Center Services
                            </Link>
                            <Link
                                to="interconnection-services"
                                className="link nav-link"
                            >
                                Interconnection Services
                            </Link>
                            <Link
                                to="support-services"
                                className="link nav-link"
                            >
                                Supportive Services
                            </Link>
                        </div>
                    </div>
                    <div className="link-container flex f-center">
                        <Link to="/solutions" className="link nav-link">
                            Solutions
                        </Link>
                        <div className="dropdown f-column">
                            <Link to="/compute" className="link nav-link">
                                Compute
                            </Link>
                            <Link to="/networking" className="link nav-link">
                                Networking
                            </Link>
                            <Link to="/storage" className="link nav-link">
                                Storage
                            </Link>
                            <Link to="/gain-agility" className="link nav-link">
                                Gain Agility
                            </Link>
                            <Link
                                to="/increase-performance"
                                className="link nav-link"
                            >
                                Increase performance
                            </Link>
                            <Link
                                to="/expand-market-reach"
                                className="link nav-link"
                            >
                                Expand Market reach
                            </Link>
                            <Link
                                to="/maintain-control"
                                className="link nav-link"
                            >
                                Maintain control
                            </Link>
                            <Link
                                to="/optimize-costs"
                                className="link nav-link"
                            >
                                Optimize costs
                            </Link>
                            <Link
                                to="build-resilience"
                                className="link nav-link"
                            >
                                Build resilience
                            </Link>
                            <Link to="/private-ai" className="link nav-link">
                                Private AI
                            </Link>
                            <Link
                                to="/sustainability"
                                className="link nav-link"
                            >
                                Sustainability
                            </Link>
                        </div>
                    </div>
                    <div className="link-container flex f-center">
                        <Link to="/about" className="link nav-link">
                            About Us
                        </Link>
                    </div>
                </nav>
            </header>
            <Outlet />
        </>
    );
};

export default NavBar;
