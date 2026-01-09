import { defineConfig } from 'tinacms';

// Tina CMS Configuration
export default defineConfig({
  branch:
    process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    'main',
  // For Tina Cloud (production) - set these in your environment
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      {
        name: 'blog',
        label: 'Blog Posts',
        path: 'content/blog',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'slug',
            label: 'Slug',
            required: true,
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Date',
            required: true,
          },
          {
            type: 'string',
            name: 'excerpt',
            label: 'Excerpt',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
          {
            type: 'image',
            name: 'featuredImage',
            label: 'Featured Image',
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
          },
          {
            type: 'boolean',
            name: 'published',
            label: 'Published',
          },
        ],
      },
      {
        name: 'portfolio',
        label: 'Portfolio Projects',
        path: 'content/portfolio',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'slug',
            label: 'Slug',
          },
          {
            type: 'image',
            name: 'thumbnail',
            label: 'Thumbnail',
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'string',
            name: 'technologies',
            label: 'Technologies',
            list: true,
          },
          {
            type: 'string',
            name: 'liveUrl',
            label: 'Live URL',
          },
          {
            type: 'string',
            name: 'githubUrl',
            label: 'GitHub URL',
          },
          {
            type: 'boolean',
            name: 'featured',
            label: 'Featured',
          },
          {
            type: 'number',
            name: 'order',
            label: 'Order',
          },
        ],
      },
    ],
  },
});
