import "./App.css";
import "./index.css";  // Make sure global styles are imported
import { Element } from "react-scroll";
import { GlowingEffectDemo } from "./components/cards/Card";
import PriceCard from "./components/cards/PriceCard";
import InformationCard from "./components/cards/InfoCard";
import FAQ from "./components/FAQ/Accordion";
import Footer from "./components/footer/footer";
import Landing from "./components/landing/Landing";  // Note the capital L
import { useEffect } from "react";

function App() {
    console.log("App component rendering");
    
    useEffect(() => {
        // Add dark mode by default
        document.documentElement.classList.add('dark');
        // Ensure entire page background uses the exact color requested
        document.body.style.backgroundColor = "#0A0A0A";
        console.log("Dark mode effect executed");
    }, []);

    return (
        <div className="App-wrapper text-white" style={{ backgroundColor: "#0A0A0A" }}>
            <main className="main-content relative">
                <Element id="home_scroll" className="h-screen w-full overflow-hidden">
                    <Landing />
                </Element>
                <Element id="services_scroll" className="section px-16">
                    <GlowingEffectDemo />
                </Element>
                <Element id="pricing_scroll" className="section">
                    <PriceCard />
                </Element>
                <Element id="about_scroll" className="section">
                    <InformationCard />
                </Element>
                <Element id="faq_scroll" className="section">
                    <FAQ />
                </Element>
            </main>
            <Footer />
        </div>
    );
}

export default App;
