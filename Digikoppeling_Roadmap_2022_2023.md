# Roadmap Digikoppeling 2024-2025



*  Onderzoek Signing & Encryptie toevoegen aan RESTful API profiel
*  Onderzoek impact invoering ebMS3/AS4
*  Aansluiting FSC standaard op Digikoppeling
*  Best practice Grote Berichten icm met Digikoppeling REST API (?)
*  Best practice Grote Berichten icm eDelivery EMBS3/AS4 (?)
*  Periodiek actualiseren architectuur
*  Periodiek actualiseren beveiligingsvoorschriften

uit DK 2030 discussie:
* Machtigingen / oplossing voor sleutelbos probleem SAAS levernaciers
* OAuth gebruik in Digikoppeling REST_API
* Beveiligingsvoorschriften relateren aan BIO
* Notificaties (?)


## Achtergrond


Digikoppeling bevordert interoperabiliteit door digitale berichtuitwisseling te standaardiseren. Hierbij maakt Digikoppeling gebruik van internationale open standaarden. Daarmee is Digikoppeling een belangrijke pijler voor de Generieke Digitale Infrastructuur (GDI) die publieke dienstverlening en uitvoering mogelijk maakt.

Digikoppeling bestaat uit een set standaarden die het mogelijk maakt om berichten tussen overheidsinstellingen en organisaties die met of binnen de overheid digitaal informatie willen uitwisselen, op gestandaardiseerde wijze veilig uit te wisselen. Gebruik van deze standaarden wordt ondersteund door de Digikoppeling voorzieningen; de Centrale OIN Raadpleegvoorziening, de Compliance voorzieningen en het CPA Register. Dit ten behoeve van ontwikkeling en implementatie van systemen die Digikoppeling toepassen. Daarmee is Digikoppeling de invulling van de servicegerichte architectuur die de Nederlandse Overheid Referentie Architectuur (NORA) voorschrijft.

Door middel van deze roadmap wil de productgroep Digikoppeling richting geven aan het product voor de komende jaren en duidelijkheid geven over de toekomst van Digikoppeling.

## Doel roadmap

Dit document is gericht op het voorbereiden van de tactische keuzes voor doorontwikkeling van de Digikoppeling standaard én voorzieningen in de komende jaren. Hierbij is rekening gehouden met de vele ontwikkelingen die spelen rond Digikoppeling zoals

* het toenemende gebruik van op REST API gebaseerde webservices
* het vernieuwde OIN beleid
* de ontwikkelingen rond Europese standaarden voor Gegevensuitwisseling

De Roadmap Digikoppeling heeft als doel te beschrijven hoe de Digikoppeling standaard en de voorzieningen in de periode van 2024 t/m 2026 meegroeien met de behoeften van haar gebruikers. 

## Totstandkoming Roadmap

Deze Roadmap is opgesteld door Beheerteam Digikoppeling van Logius. Hierbij is gekeken naar de (toekomstige) ontwikkelingen rond de Digikoppeling standaard, vragen van het Technisch Overleg Digikoppeling en lopende vragen en wensen vanuit de markt over de voorzieningen. Vervolgens is een aantal onderwerpen benoemd die als project opgepakt zullen worden en is er gerangschikt op prioriteit.

De onderwerpen voor het standaardendeel van de roadmap zijn  besproken door het Technisch Overleg (TO) en de concept roadmap is in 28-09-2023 ter vaststelling ingediend. De leden van het TO konden hier zowel mondeling als schriftelijk op reageren en deze reacties zijn meegenomen in voorliggende (** CONCEPT / DEFINITIEVE**) versie.

## Positionering Digikoppeling

De scope van Digikoppeling zal niet veranderen:  
Digikoppeling maakt het mogelijk dat organisaties die, met of binnen de overheid, digitaal informatie willen uitwisselen dit op een gestandaardiseerde wijze veilig kunnen doen. Het is in beginsel geen infrastructuur maar een set aan afspraken over het gebruik van internationale open standaarden. Digikoppeling kent wel ondersteunende voorzieningen maar deze zijn gericht op ondersteuning van het ontwikkelproces bij implementatie van Digikoppeling en niet op directe ondersteuning van productie-situaties zelf.

Interoperabiliteit is gewaarborgd omdat Digikoppeling bestaat uit standaarden die breed in de markt worden ondersteund en omdat voor Digikoppeling specifieke opties zijn gekozen.  
Digikoppeling is daarmee een essentiële bouwsteen van de elektronische overheid en vult de door NORA voorgeschreven servicegerichte architectuur in.

## Onderwerpen Digikoppeling Standaarden

In eerdere edities van de Digikoppeling roadmap liepen de onderwerpen met betrekking tot de Digikoppeling standaarden en aanverwante voorzieningen door elkaar heen. In deze editie heeft de productgroep Digikoppeling ervoor gekozen deze onderdelen afzonderlijk weer te geven. De onderwerpen van de roadmap Digikoppeling voorzieningen staan [hier](https://logius.nl/diensten/digikoppeling/documentatie/digikoppeling-roadmap-2020-2021#onderwerpen-digikoppeling-voorzieningen) .


### Onderzoek Signing & Encryptie toevoegen aan RESTful API profiel

_Wat is het issue of de wens?_

Digikoppeling EBMS & WUS kennen specifieke profielen voor signing & encryptie, het huidige Digikoppeling RESTful API profiel kent dit nog niet

_Wat gaat er gebeuren?_

Wanneer het REST API profiel door het OBDO wordt goedgekeurd voor opname op de pas-toe-of-leg-uit lijst van het Forum Standaardisatie zal het onderdeel signing en encryptie worden ingevuld, hierbij zal worden aangesloten op de ontwikkelingen binnen het kennisplatform API's.

_Wat is het resultaat?_

Een Digikoppeling standaard waarin voor het Digikoppeling REST API profiel ondersteuning is voor signing & encryptie.

_Wanneer gaat dit gebeuren?_

Q2 2022-Q4 2023


### Onderzoek impact invoering ebMS3/AS4

_Wat is het issue of de wens?_

De ebMS2 standaard wordt niet verder doorontwikkeld. Het ligt daarom voor de hand om te kijken of ebMS2 vervangen kan worden ebMS3. En dan met name het AS4 profiel hierop. Dit is ook onderdeel van de EU eDelivery standaard voor gegevensuitwisseling over landsgrenzen heen.

In 2018 heeft Digikoppeling laten onderzoeken of en wanneer het zinnig is om ebMS2 vervangen door de nieuwe versie. Naar aanleiding van dat onderzoek besloot het TO dat er voorlopig geen directe aanleiding is om ebMS2 actief te vervangen.

Begin 2020 is in het TO besloten om ebMS2 weliswaar nog niet actief te vervangen, maar dat het wel zinnig is om als Digikoppeling bij te houden hoe de ondersteuning van ebMS2, vanuit leveranciers, zich ontwikkeld en als eens te verkennen welk ebMS3 profiel eventueel bruikbaar zal zijn binnen de Digikoppeling standaard.

_Wat gaat er gebeuren?_

Digikoppeling gaat verkennen of het eDelivery ebMS3 AS4 profiel geschikt is voor gebruik binnen Digikoppeling en wat daar nog eventueel aan toegevoegd dient te worden.

Daarnaast zal Digikoppeling partijen, die ervaring hebben met het opstellen van een eigen ebMS3 profiel, uitnodigen om in het TO te komen vertellen hoe dit proces is verlopen.

_Wat is het resultaat?_

Met bovengenoemde acties heeft Digikoppeling in de 2e helft van 2023 een goed beeld van moeilijkheden en mogelijkheden van het gebruik van de ebMS3 standaard zodat eind 2023 met het TO opnieuw besproken kan worden of en op welke termijn het zinnig is om over te gaan op de nieuwe versie.

_Wanneer gaat dit gebeuren?_

Q2 2022 -  Q4 2023


### Periodiek actualiseren architectuur

_Wat is het issue of de wens?_

De Digikoppeling architectuur dient periodiek te worden bijgewerkt om goed aan te blijven aansluiten bij ontwikkelingen in de NORA, Gemma, KP-API's en andere overheidsbrede architectuur ontwikkelingen;

_Wat gaat er gebeuren?_

_Bijwerken van het huidige architectuurdocument_

_Wat is het resultaat?_

Een nieuwe versie van het architectuur document

_Wanneer gaat dit gebeuren?_

Q3 2022 & Q3 2023

### Periodiek actualiseren beveiligingsvoorschriften

_Wat is het issue of de wens?_

De Digikoppeling architectuur dient periodiek te worden bijgewerkt om goed aan te blijven aansluiten bij ontwikkelingen in de NORA, Gemma, KP-API's en andere overheidsbrede architectuur ontwikkelingen;

_Wat gaat er gebeuren?_

_Bijwerken van het huidige architectuurdocument_

_Wat is het resultaat?_

Een nieuwe versie van het architectuur document

_Wanneer gaat dit gebeuren?_

Q3 2022 & Q3 2023



### Tijdlijn Roadmap Digikoppeling Standaarden

De roadmap Digikoppeling is 28-09-2023 geactualiseerd, __'vet gedrukt'__ zijn de onderwerpen die doorlopen in 2023-Q4
('niet vetgedrukt' zijn onderwerpen die afgerond zijn).

| Activiteit | Q1 2024 | Q2 2024 | Q3 2024 | Q4 2024 | Q1 2025 | Q2 2025 | Q3 2025 | Q4 2025 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |  
| Signing & Encryptie toevoegen aan RESTful API profiel | X   | X   | X   | X   |  X   | X    | X    |   X |
| Onderzoek impact invoering ebMS3/AS4 |    |     |   |    |    |    |  X   | X    |
| Periodiek actualiseren beveiligingsvoorschriften |     |     | X   |     |     |     | X   |     |

