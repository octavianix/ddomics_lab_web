import { createFileRoute } from "@tanstack/react-router";
import { NewsListing } from "@/components/NewsListing";
import { newsItems } from "@/lib/lab-data";

export const Route = createFileRoute("/news/career-notifications")({
  head: () => ({
    meta: [
      { title: "Career Notifications — DDOmics Lab News" },
      {
        name: "description",
        content:
          "Openings, fellowships and career notifications from the DDOmics Lab at NCCS Pune.",
      },
    ],
  }),
  component: NewsCareerPage,
});

function NewsCareerPage() {
  const items = newsItems.filter((n) => n.category === "Career Notification");
  return (
    <NewsListing
      items={items}
      eyebrow="Newsroom / Career Notifications"
      title={
        <>
          Career <em>Notifications</em>
        </>
      }
      lede="Openings, fellowships and other career notifications from the lab."
    />
  );
}
