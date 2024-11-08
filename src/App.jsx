import { BrowserRouter, Route, Routes } from "react-router-dom";

// NAVBAR
import NavBar from "./components/navbar/NavBar";

// HOME PAGE
import Home from "./pages/home/Home";
import About from "./pages/home/about/About";

// DATCENTERS
import Datacenters from "./pages/datacenters/Datacenters";
import ColocationServices from "./pages/datacenters/colocation-services/ColocationServices";
import DcExcellence from "./pages/datacenters/datacenter-excellence/DcExcellence";
import EcosystemDiscovery from "./pages/datacenters/ecosystem-discovery/EcosystemDiscovery";

// PRODUCTS & SERVICES
import ProductsServices from "./pages/productsandservices/ProductsServices";

// PRODUCTS & SERVICES - DIGITAL SERVICES
import DigitalServices from "./pages/productsandservices/digital-services/DigitalServices";
import OnDemandService from "./pages/productsandservices/digital-services/on-demand-service/OnDemandService";
import BareMetalConnect from "./pages/productsandservices/digital-services/bare-metal-connect/BareMetalConnect";
import DigitalInfrastructure from "./pages/productsandservices/digital-services/digital-infrastructure/DigitalInfrastructure";
import MultiCloudRouting from "./pages/productsandservices/digital-services/multicloud-routing/MultiCloudRouting";
import SeamlessSynchronize from "./pages/productsandservices/digital-services/seamless-synchronizaton/SeamlessSynchronize";

// PRODUCTS & SERVICES - DATACENTER SERVICES
import DatacenterServices from "./pages/productsandservices/datacenter-services/DatacenterServices";
import InterconnectionDs from "./pages/productsandservices/datacenter-services/interconnection-ds/InterconnectionDs";
import RealtimeDs from "./pages/productsandservices/datacenter-services/realtime-ds/RealtimeDs";
import RemoteSupportDs from "./pages/productsandservices/datacenter-services/remote-support/RemoteSupportDs";
import DatacenterExperts from "./pages/productsandservices/datacenter-services/datacenter-experts/DatacenterExperts";
import SecureDs from "./pages/productsandservices/datacenter-services/secure-ds/SecureDs";

// PRODUCTS & SERVICES - INTERCONNECTION SERVICES
import InterconnectionServices from "./pages/productsandservices/interconnection-services/InterconnectionServices";
import DirectBusinessConnect from "./pages/productsandservices/interconnection-services/direct-business-connect/DirectBusinessConnect";
import LeverageSolution from "./pages/productsandservices/interconnection-services/leverage-solution/LeverageSolution";
import ResilientInternet from "./pages/productsandservices/interconnection-services/resilient-internet/ResilientInternet";
import LowLatency from "./pages/productsandservices/interconnection-services/low-latency/LowLatency";
import MetroConnect from "./pages/productsandservices/interconnection-services/metro-connect/MetroConnect";
import DarkFiber from "./pages/productsandservices/interconnection-services/dark-fiber/DarkFiber";

// PRODUCTS & SERVICES - SUPPORT SERVICES
import SupportServices from "./pages/productsandservices/support-services/SupportServices";
import DataChallenges from "./pages/productsandservices/support-services/data-challenges/DataChallenges";
import ExperienceProfessionals from "./pages/productsandservices/support-services/experience-professionals/ExperienceProfessionals";
import PlanDesign from "./pages/productsandservices/support-services/plan-design/PlanDesign";
import DeployPlatform from "./pages/productsandservices/support-services/deploy-platform/DeployPlatform";

// SOLUTIONS
import Solutions from "./pages/solutions/Solutions";
import Compute from "./pages/solutions/compute/Compute";
import Networking from "./pages/solutions/networking/Networking";
import Storage from "./pages/solutions/storage/Storage";
import GainAgility from "./pages/solutions/gain-agility/GainAgility";
import IncreasePerformance from "./pages/solutions/increase-performance/IncreasePerformance";
import ExpandMarketReach from "./pages/solutions/expand-market-reach/ExpandMarketReach";
import MaintainControl from "./pages/solutions/maintain-control/MaintainControl";
import OptimizeCosts from "./pages/solutions/optimize-costs/OptimizeCosts";
import BuildResilience from "./pages/solutions/build-resilience/BuildResilience";
import PrivateAi from "./pages/solutions/private-ai/PrivateAi";
import Sustainability from "./pages/solutions/sustainability/Sustainability";

const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route element={<NavBar />}>
                        {/* HOME */}
                        <Route index element={<Home />} />
                        <Route path="/about" element={<About />} />

                        {/* DATA CENTERS */}
                        <Route path="/data-centers" element={<Datacenters />} />
                        <Route
                            path="/colocation-services"
                            element={<ColocationServices />}
                        />
                        <Route
                            path="/datacenter-excellence"
                            element={<DcExcellence />}
                        />
                        <Route
                            path="/ecosystem-discovery"
                            element={<EcosystemDiscovery />}
                        />

                        {/* PRODUCTS & SERVICES */}
                        <Route
                            path="/productsandservices"
                            element={<ProductsServices />}
                        />

                        {/* PRODUCTS & SERVICES - DIGITAL SERVICES */}
                        <Route
                            path="/digital-services"
                            element={<DigitalServices />}
                        />
                        <Route
                            path="/on-demand-service"
                            element={<OnDemandService />}
                        />
                        <Route
                            path="/bare-metal-connect"
                            element={<BareMetalConnect />}
                        />
                        <Route
                            path="/digital-infrastructure"
                            element={<DigitalInfrastructure />}
                        />
                        <Route
                            path="/seamless-synchronization"
                            element={<SeamlessSynchronize />}
                        />
                        <Route
                            path="/multicloud-routing"
                            element={<MultiCloudRouting />}
                        />

                        {/* PRODUCTS & SERVICES - DATACENTER SERVICES */}

                        <Route
                            path="/datacenter-services"
                            element={<DatacenterServices />}
                        />
                        <Route
                            path="/interconnection-ready-colocation"
                            element={<InterconnectionDs />}
                        />
                        <Route
                            path="/real-time-infrastructure-monitoring"
                            element={<RealtimeDs />}
                        />
                        <Route
                            path="/remote-support"
                            element={<RemoteSupportDs />}
                        />
                        <Route
                            path="/deployments-datacenter-experts"
                            element={<DatacenterExperts />}
                        />
                        <Route
                            path="/secure-on-site-deployment"
                            element={<SecureDs />}
                        />

                        {/* PRODUCTS & SERVICES - INTERCONNECTION SERVICES */}
                        <Route
                            path="/interconnection-services"
                            element={<InterconnectionServices />}
                        />
                        <Route
                            path="/direct-connect-partners"
                            element={<DirectBusinessConnect />}
                        />
                        <Route
                            path="/leverage-solutions"
                            element={<LeverageSolution />}
                        />
                        <Route
                            path="/resilient-internet-access"
                            element={<ResilientInternet />}
                        />
                        <Route
                            path="/low-latency-connections"
                            element={<LowLatency />}
                        />
                        <Route
                            path="/metro-connect"
                            element={<MetroConnect />}
                        />
                        <Route path="/dark-fiber" element={<DarkFiber />} />

                        {/* PRODUCTS & SERVICES - SUPPORT SERVICES */}
                        <Route
                            path="/support-services"
                            element={<SupportServices />}
                        />
                        <Route
                            path="/data-challenges"
                            element={<DataChallenges />}
                        />
                        <Route
                            path="/experience-professionals"
                            element={<ExperienceProfessionals />}
                        />
                        <Route path="/plan-design" element={<PlanDesign />} />
                        <Route
                            path="/deploy-platform"
                            element={<DeployPlatform />}
                        />

                        {/* SOLUTIONS */}
                        <Route path="/solutions" element={<Solutions />} />
                        <Route path="/compute" element={<Compute />} />
                        <Route path="/networking" element={<Networking />} />
                        <Route path="/storage" element={<Storage />} />
                        <Route path="/gain-agility" element={<GainAgility />} />
                        <Route
                            path="/increase-performance"
                            element={<IncreasePerformance />}
                        />
                        <Route
                            path="/expand-market-reach"
                            element={<ExpandMarketReach />}
                        />
                        <Route
                            path="/maintain-control"
                            element={<MaintainControl />}
                        />
                        <Route
                            path="/optimize-costs"
                            element={<OptimizeCosts />}
                        />
                        <Route
                            path="/build-resilience"
                            element={<BuildResilience />}
                        />
                        <Route path="/private-ai" element={<PrivateAi />} />
                        <Route
                            path="/sustainability"
                            element={<Sustainability />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
