import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  groups: [
    {
      name: "content",
      title: "Content",
    },
    {
      name: "meta",
      title: "Meta",
    },
  ],
  fields: [
    defineField({
      group: "meta",
      name: "meta_title",
      type: "string",
      title: "Meta title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      group: "content",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "excerpt",
      group: "content",
      title: "Excerpt",
      type: "string",
    }),
    defineField({
      name: "slug",
      group: "content",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "author",
      group: "content",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      group: "content",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
    }),
    defineField({
      name: "categories",
      group: "content",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "publishedAt",
      group: "content",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "body",
      group: "content",
      title: "Body",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
