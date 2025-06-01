import React from "react";
import logo from "../assets/images/Logos/logo-evolution-sports.png";
import logoMethod from "../assets/images/Logos/logo-the-evolution-method.webp";
import perfilFabricio from "../assets/images/Logos/perfil-fabricio.jpg";
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
                    <img src={logo} alt={`${title} logo`} className="accordion-logo me-2" />
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

export default function Connects() {
    const accordionData = [
        {
            id: "evolution-house",
            title: "EVOLUTION HOUSE",
            links: [
                { icon: "bi-whatsapp", href: "https://wa.me/5541999999999", label: "Evolution House" },
                { icon: "bi-instagram", href: "https://instagram.com/evolutionhousecwb", label: "@evolutionhousecwb" },
                { icon: "bi-facebook", href: "https://facebook.com/evolutionhousecwb", label: "Evolution House Suplementos" },
                { icon: "bi-youtube", href: "https://youtube.com/@evolutionhouse", label: "@EvolutionHouse" },
            ],
            logo: logo,
        },
        {
            id: "the-evolution-method",
            title: "THE EVOLUTION METHOD",
            links: [
                { icon: "bi-whatsapp", href: "https://wa.me/5541999888777", label: "The Evolution Method" },
                { icon: "bi-instagram", href: "https://instagram.com/theevolutionmethod", label: "The Evolution Method" },
                { icon: "bi-facebook", href: "https://facebook.com/theevolutionmethod", label: "The Evolution Method" },
                { icon: "bi-youtube", href: "https://youtube.com/@theevolutionmethod", label: "The Evolution Method" },
            ],
            logo: logoMethod,
        },
        {
            id: "fabricio-de-souza",
            title: "FABRICIO DE SOUZA",
            links: [
                { icon: "bi-whatsapp", href: "https://wa.me/5541999555444", label: "Fabricio" },
                { icon: "bi-instagram", href: "https://instagram.com/fabricio.desouza", label: "Fabricio" },
                { icon: "bi-facebook", href: "https://facebook.com/fabricio.desouza", label: "Fabricio" },
                { icon: "bi-linkedin", href: "https://linkedin.com/in/fabriciodesouza", label: "LinkedIn Fabricio" },
                { icon: "bi-youtube", href: "https://youtube.com/@fabriciodesouza", label: "Fabricio" },
            ],
            logo: perfilFabricio,
        },
        {
            id: "live-a-dream",
            title: "LIVE A DREAM",
            links: [
                { icon: "bi-whatsapp", href: "https://wa.me/5541999333222", label: "Live A Dream" },
                { icon: "bi-instagram", href: "https://instagram.com/liveadream", label: "Live A Dream" },
                { icon: "bi-facebook", href: "https://facebook.com/liveadream", label: "Live A Dream" },
                { icon: "bi-youtube", href: "https://youtube.com/@liveadream", label: "Live A Dream" },
                { icon: "bi-twitter", href: "https://twitter.com/liveadream", label: "Twitter Live A Dream" },
            ],
            logo: logo,
        },
    ];


    return (
        <div className="connects-wrapper">
            <div className="connects-header d-flex align-items-start justify-content-center">
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

            <div className="accordion mt-4 w-100" id="socialAccordion">
                {accordionData.map(({ id, title, links, logo }) => (
                    <AccordionItem key={id} id={id} title={title} links={links} logo={logo} />
                ))}
            </div>
        </div>
    );
}
