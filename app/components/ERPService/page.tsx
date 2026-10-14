import type { Metadata } from "next";
import ERPService from "@/app/components/ERPService";

export const metadata: Metadata = {
  title: "Enterprise Resource Planning (ERP) Solutions | Nexora Technology",
  description:
    "End-to-end ERP services — implementation, custom development, upgrades, global rollouts, and 24/7 support — designed to streamline enterprise operations.",
};

export default function ERPServicePage() {
  return <ERPService />;
}
