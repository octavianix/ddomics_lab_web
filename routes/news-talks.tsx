import { createFileRoute } from "@tanstack/react-router";
import { NewsListing } from "@/components/NewsListing";
import { newsItems } from "@/lib/lab-data";

export const Route = createFileRoute("/news/talks")({
  head: () => ({
    meta: [
      { title: "Talks — DDOmics Lab News" },
      {
        name: "description",
        content:
          "Invited talks and conference presentations from the DDOmics Lab at NCCS Pune.",
      },
    ],
  }),
  component: NewsTalksPage,
});

function NewsTalksPage() {
  const items = newsItems.filter((n) => n.category === "Talks");
  return (
    <NewsListing
      items={items}
      eyebrow="Newsroom / Talks"
      title={<em>Talks</em>}
      lede="Invited talks, conference presentations and seminars given by the lab."
    />
  );
}
