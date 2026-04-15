import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  useLogo: true,
  useLabel: true,
  specStatus: "DEF",
  specType: "BD",
  pubDomain: "dk",
  shortName: "roadmap",
  publishDate: "2024-06-11",
  publishVersion: "2024-2025",
  previousPublishVersion: "2022-2023",

  editors:
    [
      {
        name: "Peter Haasnoot",
        company: "Logius",
        companyURL: "https://www.logius.nl",
      }
    ],
  authors:
    [
      {
        name: "Peter Haasnoot",
        company: "Logius",
        companyURL: "https://www.logius.nl",
      }
    ],
  github: "https://github.com/Logius-standaarden/Digikoppeling-Algemeen",
});
