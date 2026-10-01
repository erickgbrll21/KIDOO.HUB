import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { ServicePage } from "@/components/service/ServicePage";
import { SERVICES, SERVICE_LIST, type ServiceSlug } from "@/lib/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_LIST.map((s) => ({ slug: s.slug }));
}

const getService = (slug: string) =>
  slug in SERVICES ? SERVICES[slug as ServiceSlug] : null;

export async function generateMetadata({
  params,
}: PageProps<"/solucoes/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} — KIDOO HUB`,
    description: service.description,
  };
}

export default async function Page({ params }: PageProps<"/solucoes/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <Header />
      <main>
        <ServicePage slug={service.slug} />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
