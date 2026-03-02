import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "A1 Agent",
  version: packageJson.version,
  copyright: `© ${currentYear}, A1 Agent.`,
  meta: {
    title: "A1 Agent - All in one Agent's Platform",
    description:
      "",
  },
};
