import { defineConfig, DefaultTheme } from "vitepress";

const sidebar: DefaultTheme.Sidebar = [
  { items: [{ text: "Introdução", link: "/index" }] },
  {
    text: "Guides",
    items: [
      { text: "Let's go", link: "/getting-started" },
    ],
  },
  {
    items: [{ text: "FAQ", link: "/faq" }],
  },
  {
    text: "Avançado",
    items: [
      { text: "File upload", link: "/file-upload" },
    ],
  },
];

export default defineConfig({
  title: "CalcMe-JS",
  base: process.env.BASE_URL || "/",
  markdown: {},
  themeConfig: {
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Guides",
        link: "/introduction",
      },
      {
        text: "API Reference",
        link: "https://calcmejs-community.github.io/reference/index.html",
      },
      {
        text: "GitHub",
        link: "https://github.com/icleitoncosta/calcme-js",
      },
    ],
    sidebar,
  },
});