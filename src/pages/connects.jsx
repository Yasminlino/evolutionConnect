import React, { useState, useEffect } from "react";
import logo from "../assets/images/Logos/logo-evolution-sports.webp";
import logoMethod from "../assets/images/Logos/logo-the-evolution-method.webp";
import logoLiveADream from "../assets/images/Logos/logo-live-a-dream_files.webp";
import perfilFabricio from "../assets/images/Logos/perfil-fabricio.webp";
import "../pages/connects.css";

function SocialLink({ icon, href, label }) {
    return (
        <a className="social-card" href={href} target="_blank" rel="noopener noreferrer">
            <i className={`bi ${icon} me-2`}></i> {label}
        </a>
    );
}

function AccordionItem({ id, title, links, logo }) {
    return (
        <div className="accordion-item bg-transparent border-0">
            <h2 className="accordion-header" id={`heading-${id}`}>
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse-${id}`}
                    aria-expanded="false"
                    aria-controls={`collapse-${id}`}
                >
                    {/* Exibe o ícone do YouTube se for o canal do YouTube, senão exibe a logo */}
                    {id === "canal-youtube" ? (
                        <i className="bi bi-youtube me-2" style={{ fontSize: "2.2rem", color: "#ff0000" }}></i>
                    ) : (
                        <img src={logo} alt={`${title} logo`} className="accordion-logo me-2" />
                    )}
                    {title}
                </button>
            </h2>
            <div
                id={`collapse-${id}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading-${id}`}
                data-bs-parent="#socialAccordion"
            >
                <div className="accordion-body">
                    {links.map(({ icon, href, label }, index) => (
                        <SocialLink key={index} icon={icon} href={href} label={label} />
                    ))}
                </div>
            </div>
        </div>
    );
}

const accordionData = [
    {
        id: "fabricio-de-souza",
        title: "FABRICIO DE SOUSA",
        links: [
            { icon: "bi-instagram", href: "https://www.instagram.com/fabriciodesousaoficial/", label: "@fabriciodesousaoficial" },
            { icon: "bi-facebook", href: "https://www.facebook.com/fabricio.desousa.775", label: "Fabricio de Sousa" },
        ],
        logo: perfilFabricio,
    },
    {
        id: "the-evolution-method",
        title: "THE EVOLUTION METHOD",
        links: [
            { icon: "bi-link-45deg", href: "https://theevolutionmethod.com/", label: "Elimine 10kg em 30 dias" },
        ],
        logo: logoMethod,
    },
    {
        id: "live-a-dream",
        title: "LIVE A DREAM",
        links: [
            {
                icon: "bi-whatsapp",
                href: "https://wa.me/554197147744?text=Ol%C3%A1%2C%20poderia%20me%20dar%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20live%20a%20dream%3F", label: "Live A Dream"
            },
            { icon: "bi-instagram", href: "https://instagram.com/liveadream", label: "Live A Dream" },
        ],
        logo: logoLiveADream,
    },
    {
        id: "evolution-house",
        title: "EVOLUTION HOUSE",
        links: [
            { icon: "bi-whatsapp", href: "https://wa.me/554197258589?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Evolution%20Sports..", label: "Evolution House" },
            { icon: "bi-instagram", href: "https://instagram.com/evolutionhousecwb", label: "@evolutionhousecwb" },
            { icon: "bi-facebook", href: "https://facebook.com/evolutionhousecwb", label: "Evolution House Suplementos" },
        ],
        logo: logo,
    },
    {
        id: "canal-youtube",
        title: "CANAL YOUTUBE",
        links: [
            {
                icon: "bi-youtube",
                href: "https://www.youtube.com/@fabriciometododaevolucao",
                label: "Canal YouTube"
            }
        ],
        logo: null,
    },
];

export default function Connects() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnimate(true), 50);
    }, []);

    return (
        <div className="justify-items-center">
            <div
                className={animate ? `fade-in-up head` : "head"}
                style={animate ? { animationDelay: `0.4s` } : {}}
            >
                <div className="logo-wrapper me-3">
                    <img src={logo} alt="Logo Evolution House" className="rounded-circle" />
                </div>
                <div className="text-white">
                    <h5 className="mb-1 fw-bold">Evolution House CWB</h5>
                    <p className="mb-0">
                        <i className="bi bi-geo-alt-fill me-1"></i>
                        Des. Cid Campelo - 3888 - CIC
                    </p>
                </div>
            </div>

            <div className={`accordion mt-4 w-100 ${animate ? "fade-in-up delay-2" : ""}`} id="socialAccordion">
                {accordionData.map(({ id, title, links, logo }, index) => (
                    <div key={id} className={animate ? `fade-in-up delay-${index + 3}` : ""}>
                        <AccordionItem
                            id={id}
                            title={title}
                            links={links}
                            logo={logo}
                        />
                    </div>
                ))}
            </div>

        </div>
    );
}