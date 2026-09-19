import { createFileRoute } from "@tanstack/react-router";
import { NewsListing } from "@/components/NewsListing";
import { newsItems } from "@/lib/lab-data";

export const Route = createFileRoute("/news/media")({
  head: () => ({
    meta: [
      { title: "Media Coverage — DDOmics Lab News" },
      {
        name: "description",
        content:
          "Media coverage and press mentions of the DDOmics Lab at NCCS Pune.",
      },
    ],
  }),
  component: NewsMediaPage,
});

function NewsMediaPage() {
  const items = newsItems.filter((n) => n.category === "Media");
  return (
    <NewsListing
      items={items}
      eyebrow="Newsroom / Media"
      title={<em>Media</em>}
      lede="Press coverage and media mentions of the lab's work."
    />
  );
}
