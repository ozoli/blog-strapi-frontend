import {getStrapiURL} from "./api";

export function getStrapiMedia(media) {
    // console.log('getStrapiMedia: ', JSON.stringify(media));
    const url = String(media.attributes.url);
    // console.log('getStrapiMedia: URL:', url);
    return url.startsWith("/") ? getStrapiURL(url) : url;
}
