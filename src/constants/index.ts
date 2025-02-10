import { NavbarItemProps } from "@/components";
import { Service } from "@/types/Service";

export const shopName = "Best Products Shop";

export const navItems: NavbarItemProps[] = [
    { href: "#", text: "Home" },
    { href: "#", text: "Products" },
    { href: "#", text: "About Us" },
    { href: "https://www.pichy.dev", text: "Contact" },
]

export const serviceItems: Service[] = [
    {
        serviceName: "Free Shipping",
        serviceDescription: "Free shipping on all orders",
        serviceImage: "https://picsum.photos/1000/800"
    },
    {
        serviceName: "Customer Support",
        serviceDescription: "24/7 customer support",
        serviceImage: "https://picsum.photos/1000/800"
    },
    {
        serviceName: "Secure Payment",
        serviceDescription: "Secure online payment",
        serviceImage: "https://picsum.photos/1000/800"
    },
    {
        serviceName: "Money Back",
        serviceDescription: "30 days money back guarantee",
        serviceImage: "https://picsum.photos/1000/800"
    },
]