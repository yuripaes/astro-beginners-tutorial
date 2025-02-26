import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

type Props = CollectionEntry<"blog">;

export const GET: APIRoute = async function get({ site }) {
    const posts = await getCollection("blog");
    const items = posts
        .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
        .map(({ data: { date, title, description }, slug }) => ({
            title,
            description,
            link: `${site}${slug}`,
            pubDate: new Date(date),
        }));

    return rss({
        title: "Novelty Cycles",
        description: "Novelty Cycles Blog Posts",
        site: site.toString(),
        customData: `<language>en-us</language>`,
        items
    });
}