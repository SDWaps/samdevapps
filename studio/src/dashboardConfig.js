export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62205954bf68035a8f062c95",
                  title: "Sanity Studio",
                  name: "samdevapps-studio",
                  apiId: "14449f6e-0dc1-4b34-9a9c-da4455170c5f",
                },
                {
                  buildHookId: "622059544d991964119bbb05",
                  title: "Blog Website",
                  name: "samdevapps",
                  apiId: "ae66df36-366d-4a19-9016-60cc5249c321",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/SDWaps/samdevapps",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://samdevapps.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
