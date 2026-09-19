import { createFileRoute } from "@tanstack/react-router";
import { NewsListing } from "@/components/NewsListing";
import { newsItems } from "@/lib/lab-data";

export const Route = createFileRoute("/news/announcements")({
  head: () => ({
    meta: [
      { title: "Announcements — DDOmics Lab News" },
      {
        name: "description",
        content: "Lab announcements from the DDOmics Lab at NCCS Pune.",
      },
    ],
  }),
  component: NewsAnnouncementsPage,
});

function NewsAnnouncementsPage() {
  const items = newsItems.filter((n) => n.category === "Announcements");
  return (
    <NewsListing
      items={items}
      eyebrow="Newsroom / Announcements"
      title={<em>Announcements</em>}
      lede="Lab-wide announcements and updates."
    />
  );
}
