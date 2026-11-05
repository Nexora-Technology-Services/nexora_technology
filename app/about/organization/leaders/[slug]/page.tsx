import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLeaderBySlug, getAllLeaders } from "@/data/leaders";
import LeaderProfileClient from "./leader-profile-client";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allLeaders = getAllLeaders();
  return allLeaders.map((leader) => ({
    slug: leader.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const leader = getLeaderBySlug(slug);

  if (!leader) {
    return {
      title: "Leader Not Found | Nexora Technology Services",
      description: "The requested executive profile could not be found.",
    };
  }

  return {
    title: `${leader.name} - ${leader.title} | Leadership | Nexora Technology Services`,
    description: leader.shortBio,
    openGraph: {
      title: `${leader.name} - ${leader.title} | Nexora Technology Services`,
      description: leader.shortBio,
      images: [
        {
          url: leader.image,
          width: 800,
          height: 1067,
          alt: `${leader.name} - ${leader.title}`,
        },
      ],
    },
  };
}

export default async function LeaderProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const leader = getLeaderBySlug(slug);

  if (!leader) {
    notFound();
  }

  return <LeaderProfileClient leader={leader} />;
}
