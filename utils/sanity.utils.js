import { createClient } from "@sanity/client"

const client = createClient({
    projectId: "kqvfdjy6",
    dataset: "production",
    useCdn: true
});
export async function getProjects() {
    const query = `*[_type == "project"] {
        name,
        year,
        genre,
        'image': image.asset->url
    }`;

    return await client.fetch(query);
}

export async function getTestimonials() {
    const query = `*[_type == "testimonial"]{
        name,
        rating,
        'image': image.asset->url,
        testimonial,
        designation
    }`;

    return await client.fetch(query);
}

export async function getTeamData() {
    const query = `*[_type == "team"]{
        name,
        'image': image.asset->url
    }`;

    return await client.fetch(query);
}

export async function getRecentProjects() {
    const query = `*[_type == "project"] | order(_createdAt desc)[0..3] {
        name,
        year,
        genre,
        'image': image.asset->url
    }`;

    return await client.fetch(query);
}