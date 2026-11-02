import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#shop", label: "Shop" },
  { href: "#drops", label: "Drops" },
  { href: "#about-us", label: "About" },
  { href: "#contact-us", label: "Support" },
];

export const shoes = [
  {
    thumbnail: bigShoe1,
    bigShoe: bigShoe1,
    name: "Ridge Runner",
  },
  {
    thumbnail: bigShoe2,
    bigShoe: bigShoe2,
    name: "Night Court",
  },
  {
    thumbnail: bigShoe3,
    bigShoe: bigShoe3,
    name: "Moss Trail",
  },
];

export const statistics = [
  { value: "180+", label: "Models" },
  { value: "12", label: "Drops a year" },
  { value: "90k", label: "Pairs shipped" },
];

export const categories = [
  { name: "Running", detail: "Road & tempo" },
  { name: "Court", detail: "Indoor grip" },
  { name: "Trail", detail: "Dirt & rock" },
  { name: "Daily", detail: "All-day pairs" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Ridge Runner",
    price: "$165",
    tag: "Running",
  },
  {
    imgURL: shoe5,
    name: "Night Court",
    price: "$180",
    tag: "Court",
  },
  {
    imgURL: shoe6,
    name: "Moss Trail",
    price: "$195",
    tag: "Trail",
  },
  {
    imgURL: shoe7,
    name: "City Daily",
    price: "$150",
    tag: "Lifestyle",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Ships in 3 days",
    subtext: "Every pair leaves the warehouse packed and tracked — no add-on fees.",
  },
  {
    imgURL: shieldTick,
    label: "30-day wear test",
    subtext: "Walk them. Run them. Send them back if the fit is wrong.",
  },
  {
    imgURL: support,
    label: "Fit desk, not a chatbot",
    subtext: "Real people help you pick a last, size, and surface.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Jonas Hale",
    rating: 4.9,
    feedback:
      "Finally a shop that sells shoes like a shop — not a billboard. The Ridge Runner held up on 40km weeks.",
  },
  {
    imgURL: customer2,
    customerName: "Amina Cole",
    rating: 4.8,
    feedback:
      "Night Court is the first indoor pair I have owned that does not cook my feet. Fit desk nailed the size.",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Ridge Runner", link: "#shop" },
      { name: "Night Court", link: "#shop" },
      { name: "Moss Trail", link: "#shop" },
      { name: "City Daily", link: "#shop" },
      { name: "New drops", link: "#drops" },
      { name: "Gift cards", link: "#contact-us" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "#about-us" },
      { name: "FAQs", link: "#about-us" },
      { name: "How it works", link: "#about-us" },
      { name: "Privacy policy", link: "#contact-us" },
      { name: "Payment policy", link: "#contact-us" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      {
        name: "omarmfattouh45@gmail.com",
        link: "mailto:omarmfattouh45@gmail.com",
      },
      { name: "+201284681320", link: "tel:+201284681320" },
    ],
  },
];

export const socialMedia = [
  {
    src: facebook,
    alt: "VELT on Facebook",
    href: "https://www.facebook.com/",
  },
  {
    src: twitter,
    alt: "VELT on X",
    href: "https://x.com/",
  },
  {
    src: instagram,
    alt: "VELT on Instagram",
    href: "https://www.instagram.com/",
  },
];
