import { defineSchema } from "tinacms";

export const schema = defineSchema({
  collections: [
    {
      label: "Projects",
      name: "projects",
      path: "src/content/projects",
      format: "mdx",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          required: true,
        },
        {
          type: "string",
          name: "category",
          label: "Category",
          options: [
            "binary-exploitation",
            "web",
            "network",
            "malware",
            "active-directory",
            "forensics",
            "crypto",
            "other",
          ],
          required: true,
        },
        {
          type: "string",
          name: "tags",
          label: "Tags",
          list: true,
        },
        {
          type: "image",
          name: "image",
          label: "Cover Image",
        },
        {
          type: "string",
          name: "githubUrl",
          label: "GitHub URL",
        },
        {
          type: "string",
          name: "liveUrl",
          label: "Live URL",
        },
        {
          type: "boolean",
          name: "featured",
          label: "Featured",
        },
        {
          type: "datetime",
          name: "date",
          label: "Date",
          required: true,
        },
        {
          type: "rich-text",
          name: "body",
          label: "Body",
          isBody: true,
        },
      ],
    },
    {
      label: "Writeups",
      name: "writeups",
      path: "src/content/writeups",
      format: "mdx",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          required: true,
        },
        {
          type: "string",
          name: "category",
          label: "Category",
          options: ["ctf", "vulnerability", "technique", "tool", "lab"],
          required: true,
        },
        {
          type: "string",
          name: "tags",
          label: "Tags",
          list: true,
        },
        {
          type: "string",
          name: "difficulty",
          label: "Difficulty",
          options: ["easy", "medium", "hard", "insane"],
        },
        {
          type: "datetime",
          name: "date",
          label: "Date",
          required: true,
        },
        {
          type: "rich-text",
          name: "body",
          label: "Body",
          isBody: true,
        },
      ],
    },
    {
      label: "Certifications",
      name: "certifications",
      path: "src/content/certifications",
      format: "md",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
        },
        {
          type: "string",
          name: "issuer",
          label: "Issuer",
          required: true,
        },
        {
          type: "image",
          name: "image",
          label: "Badge Image",
        },
        {
          type: "string",
          name: "verifyUrl",
          label: "Verification URL",
        },
        {
          type: "datetime",
          name: "date",
          label: "Date",
          required: true,
        },
      ],
    },
    {
      label: "Tools",
      name: "tools",
      path: "src/content/tools",
      format: "md",
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name",
          required: true,
        },
        {
          type: "string",
          name: "category",
          label: "Category",
          options: ["recon", "exploitation", "forensics", "network", "web", "binary", "password", "wireless"],
          required: true,
        },
        {
          type: "number",
          name: "proficiency",
          label: "Proficiency (1-5)",
          min: 1,
          max: 5,
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Description",
        },
        {
          type: "string",
          name: "icon",
          label: "Icon (emoji or class)",
        },
      ],
    },
    {
      label: "Site Config",
      name: "siteConfig",
      path: "src/content",
      format: "json",
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "tagline",
          label: "Tagline",
        },
        {
          type: "string",
          name: "bio",
          label: "Bio",
          multiline: true,
        },
        {
          type: "string",
          name: "email",
          label: "Email",
        },
        {
          type: "string",
          name: "github",
          label: "GitHub URL",
        },
        {
          type: "string",
          name: "linkedin",
          label: "LinkedIn URL",
        },
        {
          type: "string",
          name: "twitter",
          label: "Twitter/X URL",
        },
        {
          type: "string",
          name: "hackerone",
          label: "HackerOne URL",
        },
        {
          type: "string",
          name: "hackthebox",
          label: "HackTheBox URL",
        },
      ],
    },
  ],
});
