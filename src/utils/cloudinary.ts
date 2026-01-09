import { Cloudinary } from '@cloudinary/url-gen';
import { scale } from '@cloudinary/url-gen/actions/resize';

// Initialize Cloudinary instance
export const cloudinary = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  },
});

// Helper function to get optimized image URL
export function getCloudinaryImageUrl(
  publicId: string,
  options?: {
    width?: number;
    height?: number;
    quality?: string;
    format?: string;
  }
) {
  const image = cloudinary.image(publicId);

  if (options?.width && options?.height) {
    image.resize(scale().width(options.width).height(options.height));
  } else if (options?.width) {
    image.resize(scale().width(options.width));
  } else if (options?.height) {
    image.resize(scale().height(options.height));
  }

  image.quality(options?.quality || 'auto');
  image.format(options?.format || 'auto');

  return image.toURL();
}
