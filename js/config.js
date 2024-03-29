let respecConfig = {
  useLogo: true,
  useLabel: true,
  license: "cc0",
  specStatus: "WV",
  specType: "BD",
  pubDomain: "dk",
  shortName: "roadmap",
  publishDate: "2022-03-24",
  publishVersion: "1.0",
  
  isSubmission: true,
  editors:
    [
      {
        name: "Logius Standaarden",
        company: "Logius",
        companyURL: "https://github.com/Logius-standaarden",
      }
    ],
  authors:
    [
      {
        name: "Logius Standaarden",
        company: "Logius",
        companyURL: "https://github.com/Logius-standaarden",
      }
    ],
    github: "https://github.com/Logius-standaarden/Digikoppeling-Algemeen",


  // Create PDF and link to file in header (optional):
  alternateFormats: [
      {
          label: "pdf",
          uri: "roadmap.pdf",
      },
  ],
};


/*

var respecConfig = {
  //voor specStatus mogelijkheden zie https://github.com/centrumvoorstandaarden/respec/wiki/specStatus
  specStatus: "DEF",
  //voor specType mogelijkheden zie https://github.com/centrumvoorstandaarden/respec/wiki/specType
  specType: "BD",

  // The specification's publish domain, which is used to publish the specification
  // the url in the header thisVersion is generated like `<conf.nl_organisationPublishURL>/<conf.pubDomain>/<specStatus>-<specType.toLowerCase()>-<conf.shortName>}-conf.publishDate>/`
  pubDomain: "dk",
  shortName: "roadmap",

  // Voor publishDate zie https://github.com/w3c/respec/wiki/publishDate
  // Als er geen publishDate is opgegeven, genereert ReSpec de datum o.b.v. de laatste wijzigingen
  // Belangrijk: als publishDate niet opgegeven is, wordt bij de link "Laatst gepubliceerde versie" "geen" gezet. Anders wordt een link opgebouwd voor de laatste versie, met het formaat:
  // https://publicatie.centrumvoorstandaarden.nl/{pubDomain}/{shortName}
  publishDate: "2022-03-24",

  // Vul in om een korte extra uitleg te weergeven op de docs.centrumvoorstandaarden.nl website.
  // subExplanation: "",
  addSectionLinks: true,

  publishVersion: "1.0",
  previousPublishVersion: "1.0",

  // Als er een eerder gepubliceerde versie is, geef dan de datum daarvan op
  //previousPublishDate: "2017-05-31",
  // Zie https://github.com/w3c/respec/wiki/previousMaturity. Dit moet een
  // Als previousMaturity niet opgegeven wprdt, maar previousPublishDate wel, dan wordt dezelfde status gebruikt als bij specStatus
  //previousMaturity: "DK-VV",
  // licentie. Kiezen uit:
  license: 'cc-by-nd',
  // logos: [], // Geef een lege array op als er geen Geonovum logo moet staan
  doJsonLd: true,
  editors: [
    {
      name: "Peter Haasnoot",
      company: "Logius",
      companyURL: "http://www.logius.nl/",
    },
  ],
  authors: [
    {
      name: "Peter Haasnoot",
      company: "Logius",
      companyURL: "http://www.logius.nl/",
    },
  ],
  // shortName = korte naam voor in de url van het document, gebruik alleen letters, cijfers en eventueel '-'
  // url van de github repository waar je in werkt
  github: "https://github.com/Logius-standaarden/Digikoppeling-Algemeen",


  alternateFormats: [
      {
      label: "pdf",
      uri: "Roadmap-Digikoppeling.pdf",
    },
  ],



  // For Consultatieversies (specStatus="GN-CV") there is a default text in the section "Status of this document" that contains an emailaddress for feedback and comments on the document.
  nl_emailComments: "digikoppeling@logius.nl",

  // this parameter will add the tag_name of the latest release to the document Title
  // only set this parameter when a release has been set
  nl_addReleaseTagTitle: true,

  // if you use a single document for your spec, which uses more than one markdown H1 header, e.g. '# inleiding'
  // this configuration can be set to make sure that the alle H1 headers and navigation bars are preserved
  nl_markdownSplitH1sections: true,

  // in some cases the Repository of a Specification document and the Issue- and PR bases are split
  // thi scan be configured below
  // if not set, the url's will be generated on the respecConfig.github automatically  
  nl_github: {
    //    issueBase: "https://github.com/Logius-standaarden/Digikoppeling-Wat-is-Digikoppeling/issues",
    revision: "https://github.com/Logius-standaarden/Digikoppeling-Algemeen",
    //  pullrequests: "https://github.com/Logius-standaarden/Digikoppeling-Wat-is-Digikoppeling/pulls"
  },

  // nl_organisationName is used for some company specific values in the header (and Sotd)
  // currently supported: Logius and Geonovum (default)  
  nl_organisationName: "Logius",

  // prefix for the names of company specific css, svg and ico prefixes
  // defaults to "GN-"  
  nl_organisationPrefix: "LS-",

  nl_markdownCodeClass: "code",

  // if nl_markdownEmbedImageInFigure is set to true images in markdown generated content will be surrounded with <figures> element
  // so that figures can be linked are be a part of table of figures
  nl_markdownEmbedImageInFigure: true,

  // this url points to the folder where organsation specific css files are stored
  // defaults to https://tools.geostandaarden.nl/respec/style/ if not set
  nl_organisationStylesURL: "https://publicatie.centrumvoorstandaarden.nl/respec/style/",
  // nl_organisationStylesURL: "http://localhost:8081/respec/style/",

  // nl_organisationPublishURL points to organisation specifica publication page, used in header
  // defaults to  https://docs.geostandaarden.nl/"
  nl_organisationPublishURL: "https://publicatie.centrumvoorstandaarden.nl/",

  // nl_logo refers to company logo
  // defaults to https://tools.geostandaarden.nl/respec/style/logos/Geonovum.svg
  nl_logo: {
    src: "https://publicatie.centrumvoorstandaarden.nl/respec/style/logos/figure-logius.svg",
    alt: "Logius",
    id: "Logius",
    height: 77,
    width: 44,
    url: "https://www.logius.nl/standaarden",
  },



  // in localBiblio kun je bibliografische items opnemen. In de tekst kun je dan tussen blokhaken verwijzen naar de korte naam bv [NEN3610].
  localBiblio: {
    NEN3610: {
      href: "http://www.nen.nl/web/Normshop/Norm/NEN-36102011-nl.htm",
      title:
        "Basismodel Geo-informatie - Termen, definities, relaties en algemene regels voor de uitwisseling van informatie over aan de aarde gerelateerde ruimtelijke objecten",
      authors: [""],
      date: "Maart 2011",
      publisher: "Nederlands Normalisatie-instituut",
    },
    "Voorwaarden Digikoppeling": {
      href: "https://www.logius.nl/diensten/digikoppeling/documentatie/voorwaarden-digikoppeling",
      title:
        "Voorwaarden Digikoppeling",
      date: "1 januari 2021",
      publisher: "Logius",
    },
    "Gebruiksvoorwaarden Digikoppeling": {
      href: "https://www.logius.nl/diensten/digikoppeling/documentatie/gebruiksvoorwaarden-digikoppeling",
      title:
        "Gebruiksvoorwaarden Digikoppeling",
      date: "1 januari 2021",
      publisher: "Logius",
    },
    "Algemene Voorwaarden Logius": {
      href: "https://www.logius.nl/onze-organisatie/zakendoen-met-logius/voorwaarden/algemene-voorwaarden-logius",
      title:
        "Algemene voorwaarden Logius",
      date: "12 juni 2018",
      publisher: "Logius",
    },
    "Eisen Pkioverheid": {
      href: "https://www.logius.nl/diensten/pkioverheid/aansluiten-als-tsp/pogramma-van-eisen",
      title: "Programma van Eisen (PKIoverheid)",
      publisher: "Logius",
    },
    "PKI PvE": {
      href: "https://logius.nl/sites/default/files/public/bestanden/diensten/PKIoverheid/Programme%20of%20Requirements%20part%203j_%20Certificate%20Policy%20for%20Server%20certificates%20in%20Server%202020%20%28EV%20G1%29%20Domain-4.9.pdf",
      title: "Programma van Eisen Pkioverheid, deel 3j",
      publisher: "Logius",
    }
  }
  //format: "markdown",
};
*/
