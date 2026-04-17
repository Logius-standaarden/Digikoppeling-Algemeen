# Digikoppeling Release 21 april 2026

In deze release is opgenomen:

- [Digikoppeling Koppelvlakstandaard REST-API 4.0.0](https://gitdocumentatie.logius.nl/publicatie/dk/restapi/4.0.0/)
  - [FSC - Core 2.0.0](https://gitdocumentatie.logius.nl/publicatie/fsc/core/2.0.0/)
  - [FSC - Logging 1.1.0](https://gitdocumentatie.logius.nl/publicatie/fsc/logging/1.1.0/)
  - [FSC - External Contract Reference 1.0.0](https://gitdocumentatie.logius.nl/publicatie/fsc/ext/1.0.0/)
- [Digikoppeling Beveiligingstandaarden en voorschriften 2.1.0](https://gitdocumentatie.logius.nl/publicatie/dk/beveilig/2.1.0/)
- [Digikoppeling Overzicht Actuele Documentatie en Compliance 1.13](https://gitdocumentatie.logius.nl/publicatie/dk/actueel/1.13/)

## Goedkeuringen MIDO

- 08-12-2025 Behandeling in Technisch Overleg
- 17-03-2026 Behandeling Programmeringstafel Gegevensuitwisseling
- 09-04-2026 Vaststelling Programmeringsraad GDI

## Wijzigingen

De volgende wijzigingen per document zijn onderdeel van deze release.

### Digikoppeling Koppelvlakstandaard REST-API en FSC

#### Digikoppeling REST-API profiel

- Verwijzen naar ADR versie 2.1
- Verwijzen naar FSC versie 2.0
- [Duplicatie van regels verminderd](https://github.com/Logius-standaarden/Digikoppeling-Koppelvlakstandaard-REST-API/pull/56)

#### FSC (Federated Service Connectivity)

##### FSC Standaard

De Federated Service Connectivity (FSC)-standaard specificaties beschrijven een manier om technisch interoperabele API-gateway-functionaliteit te implementeren, die federatieve authenticatie en veilige verbindingen omvat in een grootschalig dynamisch API-landschap.


##### FSC Core

Het core profiel van de FSC-standaard biedt functionaliteit:

- om Services te ontdekken;
- om verzoeken te routeren naar Services in andere contexten (bijv. van binnen organisatie A naar organisatie B);
- om autorisaties aan te vragen en te beheren die nodig zijn om verbinding te maken met genoemde Services;
- om de autorisatie te delegeren om verbinding te maken of Services te publiceren namens een andere organisatie.

De core-standaard FSC specificeert de basis voor de werking van de standaard:
- [Add properties object to Grants & update hashing algorithm](https://github.com/Logius-standaarden/fsc-core/pull/25)
- [Nieuwe error codes in Open FSC](https://github.com/Logius-standaarden/fsc-core/pull/55)
- [Open FSC versie in het contract opgenomen](https://github.com/Logius-standaarden/fsc-core/pull/51)
- [Outway-autorisatie op basis van een domeinnaam](https://github.com/Logius-standaarden/fsc-core/pull/53)
- [Content hash improvement](https://github.com/Logius-standaarden/fsc-core/pull/24)
- [Certificate renewal](https://github.com/Logius-standaarden/fsc-core/pull/14)

##### Extensies

Aanvullende functionaliteit wordt gestandaardiseerd in extensies en kan van toepassing zijn indien je FSC op een bepaalde manier wilt toepassen die de core (bewust) niet ondersteunt.

- [FSC logging update](https://github.com/Logius-standaarden/fsc-logging/pull/1)
- [FSC External Contract Reference extensie - nieuwe extensie voor een referentie naar een bestaand (papieren) contract](https://github.com/Logius-standaarden/fsc-external-contract-reference)

##### FSC test suite
De FSC test suite bevat een lijst met testdocumentatie die ontwikkeld is om de conformiteit en interoperabiliteit van de implementaties van FSC-componenten te waarborgen. Bij nieuwe features/wijzigingen in de core-standaard worden bijbehorende testen beschreven in de test suite. De testen voor het nieuwe properties-veld staan hieronder:

- [Test-suite FSC](https://github.com/Logius-standaarden/fsc-test-suite)
- [Bijbehorende test cases Properties](https://github.com/Logius-standaarden/fsc-test-suite/pull/3)

### Digikoppeling Beveiligingstandaarden en voorschriften

- [XML Signing parameters conform NCSC voorschriften](https://github.com/Logius-standaarden/Digikoppeling-Beveiligingsstandaarden-en-voorschriften/pull/17)
- [TLS 1.3 status aangescherpt naar "Zeer aanbevolen"](https://github.com/Logius-standaarden/Digikoppeling-Beveiligingsstandaarden-en-voorschriften/pull/21)

### Digikoppeling Overzicht Actuele Documentatie en Compliance

Dit document is bijgewerkt met de bovenstaande versies.
