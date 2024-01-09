import { IconType } from "react-icons";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import pathConstants from "../routes/pathConstants";
import BrandLogo from "./BrandLogo";
import Container from "./Container";
import Section from "./Section";

const footerLinks = [
    {
        label: "Home",
        href: "/",
        icon: "",
    },
    {
        label: "Products",
        href: "/products",
        icon: "",
    },

    {
        label: "FAQs",
        href: "/faq",
        icon: "",
    },
    {
        label: "Contact",
        href: "/contact",
        icon: "",
    },
];

const socialLinks = [
    {
        label: "Facebook",
        href: "https://www.facebook.com",
        icon: BsFacebook,
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com",
        icon: BsInstagram,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/",
        icon: BsLinkedin,
    },
];
const FooterContactLinks = [
    {
        label: "avocadoes",
        href: "mailto:rizwanahamadcodes@gmail.com",
        icon: SiGmail,
    },
];
const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t-[1px] border-t-gray-200">
            <Section>
                <Container className="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <FooterColumn>
                        <FooterColumnTitle className="flex items-center gap-0.75">
                            <BrandLogo />
                            <Link
                                to={pathConstants.HOME.path}
                                className="text-1">
                                Avocadoes
                            </Link>
                        </FooterColumnTitle>

                        <FooterColumnBody>
                            <p>
                                Welcome to Avocadoes! Your one-stop shop for
                                fresh fruits and vegetables. We're all about
                                delivering quality produce to your doorstep.
                                Taste the freshness, shop with us today
                            </p>
                        </FooterColumnBody>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterColumnTitle>Browse</FooterColumnTitle>
                        <FooterColumnBody>
                            <FooterColumnLinks links={footerLinks} />
                        </FooterColumnBody>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterColumnTitle>Socials</FooterColumnTitle>
                        <FooterColumnBody>
                            <FooterColumnLinks links={socialLinks} />
                        </FooterColumnBody>
                    </FooterColumn>

                    <FooterColumn>
                        <FooterColumnTitle>Contact</FooterColumnTitle>
                        <FooterColumnBody>
                            <FooterColumnLinks links={FooterContactLinks} />
                        </FooterColumnBody>
                    </FooterColumn>
                </Container>
            </Section>
        </footer>
    );
};

type FooterColumnProps = {
    children: React.ReactNode;
};

const FooterColumn = (props: FooterColumnProps) => {
    const { children } = props;
    return <div className="flex flex-col gap-1">{children}</div>;
};

type FooterColumnTitleProps = {
    children: React.ReactNode;
    className?: string;
};

const FooterColumnTitle = (props: FooterColumnTitleProps) => {
    const { className, children } = props;
    return <h4 className={className}>{children}</h4>;
};

type FooterColumnBodyProps = {
    children: React.ReactNode;
};

const FooterColumnBody = (props: FooterColumnBodyProps) => {
    const { children } = props;
    return <div>{children}</div>;
};

type FooterLinkType = {
    label: string;
    href: string;
    icon: string | IconType;
};
type FooterColumnLinksProps = {
    links: FooterLinkType[];
};
const FooterColumnLinks = (props: FooterColumnLinksProps) => {
    const { links } = props;

    return (
        <ul className="flex flex-col gap-0.25">
            {links.map((link) => {
                const { icon: Icon } = link;

                return (
                    <li key={link.href} className="flex gap-0.5 items-center">
                        {typeof Icon === "string" ? null : (
                            <Icon className="text-1.25" />
                        )}
                        <Link className="!font-medium" to={link.href}>
                            {link.label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default Footer;
