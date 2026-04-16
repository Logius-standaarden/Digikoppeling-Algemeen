import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  useLogo: true,
  useLabel: true,
  specStatus: "VV",
  specType: "BD",
  pubDomain: "dk",
  shortName: "roadmap",
  publishDate: "2026-03-17",
  publishVersion: "2026-2027",
  previousPublishVersion: "2024-2025",

  editors:
    [
      {
        name: "Logius Standaarden",
        company: "Logius",
        companyURL: "https://logius.nl",
      }
    ],
  authors:
    [
      {
        name: "Logius Standaarden",
        company: "Logius",
        companyURL: "https://logius.nl",
      }
    ],
  github: "https://github.com/Logius-standaarden/Digikoppeling-Algemeen",
});
