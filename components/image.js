import { getStrapiMedia } from '../lib/media';
import NextImage from 'next/image';

const Image = ({ image }) => {
    console.log('Image: ', JSON.stringify(image));
    const { alternativeText, width, height } = image.attributes;

    return (
        <NextImage
            layout="responsive"
            width={width}
            height={height}
            objectFit="contain"
            src={getStrapiMedia(image)}
            alt={alternativeText || ""}
        />
    );
};

export default Image;
