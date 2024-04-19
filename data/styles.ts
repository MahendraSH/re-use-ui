// styles
//

export interface style {
  label: string;
  description: string;
  link: string;
  type: string;
  color: string;
}

export const styles: style[] = [
  {
    label: "tailwindcss-only",
    description: "Tailwindcss only",
    link: "https://tailwindcss.com/",
    type: "tailwindcss",
    color: "#06b6d4",
  },
  {
    label: "shadcn-ui",
    description: "Shadcn UI",
    link: "https://ui.shadcn.com/",
    type: "shadcn-ui",
    color: "#facc15",
  },
  {
    label: "daisyui",
    description: "DaisyUI",
    link: "https://daisyui.com/",
    type: "daisyui",
    color: "#01ff22",
  },
];
