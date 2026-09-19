import { createFileRoute } from "@tanstack/react-router";
import { NewsListing } from "@/components/NewsListing";
import { newsItems } from "@/lib/lab-data";

export const Route = createFileRoute("/news/publications")({
  head: () => ({
    meta: [
      { title: "Publication Alerts — DDOmics Lab News" },
      {
        name: "description",
        content:
          "Publication alerts from the DDOmics Lab microbiome group at NCCS Pune.",
      },
    ],
  }),
  component: NewsPublicationsPage,
});

function NewsPublicationsPage() {
  const items = newsItems.filter((n) => n.category === "Publication");
  return (
    <NewsListing
      items={items}
      eyebrow="Newsroom / Publications"
      title={
        <>
          Publication <em>Alerts</em>
        </>
      }
      lede="New papers from the lab, as they're published."
    />
  );
}
