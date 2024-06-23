import { FaLinkedin, FaTwitterSquare, FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export const footerContent = [
  {
    title: "CampusKart",
    subtitles: [
      {
        text: "About Us",
        href: "/about",
      },
      {
        text: "Contact Us",
        href: "/blank",
      },
      {
        text: "Sale In CK",
        href: "/blank",
      },
      {
        text: "Career Opportunities",
        href: "/blank",
      },
    ],
  },
  {
    title: "Customer Services",
    subtitles: [
      {
        text: "FAQs",
        href: "/blank",
      },
      {
        text: "",
        href: "/blank",
      },
      {
        text: "Privacy Policy",
        href: "/blank",
      },
    ],
  },
  {
    title: "Support Assistant",
    subtitles: [
      {
        text: "How to Place an Order",
        href: "/blank",
      },
      {
        text: "How to list your Product",
        href: "/blank",
      },
      {
        text: "Payment Options",
        href: "/blank",
      },
    ],
  },
];

export const socialMedia = [
  {
    name: "instagram",
    icon: AiFillInstagram,
    href: "/",
  },
  {
    name: "linkedin",
    icon: FaLinkedin,
    href: "/",
  },
  {
    name: "twitter",
    icon: FaTwitterSquare,
    href: "/",
  },
  {
    name: "telegram",
    icon: FaTelegramPlane,
    href: "/",
  },
];
