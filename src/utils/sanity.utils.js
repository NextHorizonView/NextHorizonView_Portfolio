import { createClient } from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
    projectId: "kqvfdjy6",
    dataset: "production",
    useCdn: true
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source).width(767).height(630).url();
}

export async function getProjects() {
    const query = `*[_type == "project"] {
        name,
        year,
        industry,
        'id': _id,
        'image': image1.asset->url
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
        'image': image.asset->url,
        linkedIn,
    }`;

    return await client.fetch(query);
}

export async function getRecentProjects() {
    const query = `*[_type == "project" && isRecent == true]{
        name,
        year,
        industry,
        'id': _id,
        'image': image1.asset->url
    }`;

    const projects = await client.fetch(query);
    projects.map(project => {
        project.image = urlFor(project.image);
        console.log(project.image);
    });
    console.log(projects);
    return projects;
}

export async function getProjectById(id) {
    const query = `*[_type == "project" && _id == $id]{
        name,
        year,
        industry,
        'image1': image1.asset->url,
        'image2': image2.asset->url,
        'image3': image3.asset->url,
        'image4': image4.asset->url,
        'image5': image5.asset->url,
        description,
        service,
        links,
        about,
        challenges,
        results,
    }`;

    return await client.fetch(query, { id });
}