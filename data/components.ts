// list of components
/* 
  {
     label : string  // name of the component
     description : string  // a short description on the component
     link : string  // link to the component
     usage : string  // usage of the component
  }
 */

export interface component {
  label: string;
  description: string;
  link: string;
  usage:
    | "libraries"
    | "all"
    | "cards"
    | "tables"
    | "forms"
    | "charts"
    | "layout"
    | "authentication"
    | "landing-page";
}
export const usages: string[] = [
  "libraries",
  "all",
  "cards",
  "tables",
  "forms",
  "charts",
  "layout",
  "authentication",
  "landing-page",
];

export const components: component[] = [
  {
    label: "hero sections",
    description: "hero section of all the websites",
    link: "/docs/components/hero-section",
    usage: "landing-page",
  },
  {
    label: "login pages",
    description: "login page of all the websites",
    link: "/docs/components/login-page",
    usage: "authentication",
  },
  {
    label: "footers",
    description: "footer of all the websites",
    link: "/docs/components/footer",
    usage: "layout",
  },
  {
    label: "navbars",
    description: "navbar of all the websites",
    link: "/docs/components/navbar",
    usage: "layout",
  },
  {
    label: "buttons",
    description: "button of all the websites",
    link: "/docs/components/button",
    usage: "all",
  },
  {
    label: "alerts",
    description: "alert of all the websites",
    link: "/docs/components/alert",
    usage: "all",
  },
  {
    label: "cards",
    description: "card of all the websites",
    link: "/docs/components/card",
    usage: "cards",
  },
  {
    label: "tables",
    description: "table of all the websites",
    link: "/docs/components/table",
    usage: "tables",
  },
  {
    label: "forms",
    description: "form of all the websites",
    link: "/docs/components/form",
    usage: "forms",
  },
  {
    label: "modals",

    description: "modal of all the websites",
    link: "/docs/components/modal",
    usage: "all",
  },
  {
    label: "inputs",
    description: "input of all the websites",
    link: "/docs/components/input",
    usage: "forms",
  },
  {
    label: "images",
    description: "image of all the websites",
    link: "/docs/components/image",
    usage: "cards",
  },
  {
    label: "lists",
    description: "list of all the websites",
    link: "/docs/components/list",
    usage: "all",
  },
  {
    label: "icons",
    description: "icon of all the websites",
    link: "/docs/components/icon",
    usage: "all",
  },
  {
    label: "text-areas",
    description: "text-area of all the websites",
    link: "/docs/components/text-area",
    usage: "forms",
  },
  {
    label: "charts",
    description: "chart of all the websites",
    link: "docs/components/chart",
    usage: "charts",
  },
  {
    label: "tailwindcs-libs-or-ui",
    description: "tailwindcss libraries or ui libraries",
    link: "docs/components/tailwindcss-libs-ui",
    usage: "libraries",
  },
  {
    label: "pagination",
    description: "pagination of all the websites",
    link: "docs/components/pagination",
    usage: "all",
  },
  {
    label: "sidebar",
    description: "sidebar of all the websites",
    link: "docs/components/sidebar",
    usage: "layout",
  },
  {
    label: "dropdowns",
    description: "dropdown of all the websites",
    link: "docs/components/dropdown",
    usage: "all",
  },
  {
    label: "mode-toggles",
    description: "mode toggle  dark mode of all the websites",
    link: "docs/components/mode-toggle",
    usage: "layout",
  },
  {
    label: "breadcrumb",
    description: "breadcrumb of all the websites",
    link: "docs/components/breadcrumb",
    usage: "all",
  },
  {
    label: "animatons",
    description: "animation of all the websites",
    link: "docs/components/animation",
    usage: "all",
  },
  {
    label: "others",
    description: "others of all the websites",
    link: "docs/components/others",
    usage: "all",
  },
];
