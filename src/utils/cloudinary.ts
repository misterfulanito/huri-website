import { Cloudinary } from '@cloudinary/url-gen';

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

  if (options?.width) {
    image.resize(`w_${options.width}`);
  }

  if (options?.height) {
    image.resize(`h_${options.height}`);
  }

  image.quality(options?.quality || 'auto');
  image.format(options?.format || 'auto');

  return image.toURL();
}
