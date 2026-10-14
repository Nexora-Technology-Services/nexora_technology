import type { Metadata } from "next";
import IndustriesServed from "@/app/components/IndustriesServed";

export const metadata: Metadata = {
  title: "Industries Served | Nexora Technology Services",
  description:
    "Explore Nexora's domain-specific technology engineering across BFSI, Manufacturing, Retail & E-Commerce, Hi-Tech, Energy & Utilities, Logistics, and Aviation.",
};

export default function IndustriesServedPage() {
  return <IndustriesServed />;
}
