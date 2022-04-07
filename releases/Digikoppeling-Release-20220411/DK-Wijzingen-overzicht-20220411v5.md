
# Digikoppeling Release : Uitbreiding Digikoppeling met REST-API Koppelvlakstandaard

De Digikoppeling Standaard is uitgebreid met een Koppelvlakstandaard voor REST-API's. Deze Koppelvlakstandaard is gebaseerd op de API Design Rules (ADR) standaard die ontwikkeld is binnen het Kennisplatform API's.
De architectuur van Digikoppeling is aangepast op de nieuwe koppelvlakspecificatie. De wijziging heeft geen impact op de al bestaande Digikoppeling koppelvlakken, het biedt een extra mogelijkheid naast bestaande opties.

In deze release is opgenomen:

* [Digikoppeling Architectuur 2.0](https://publicatie.centrumvoorstandaarden.nl/dk/architectuur/2.0vv/)
* [Digikoppeling - Koppelvlakspecificatie REST API 1.0](https://publicatie.centrumvoorstandaarden.nl/dk/restapi/)


De uitbreiding van Digikoppeling met het REST API koppelvlak is doorgevoerd in de Digikoppeling documentatie.
Naast het toevoegen van de REST API koppelvlakspecificatie en het aanpassen van het architectuurdocument nav deze toevoeging zijn ook waar nodig de overige documenten tekstueel aangepast voor de toevoeging van deze nieuwe koppelvlakspecificatie.
[Overzicht documenten in deze release](https://logius-standaarden.github.io/Publicatie-Preview/Digikoppeling-Overzicht-Actuele-Documentatie-en-Compliance/Toevoegen_Rest_Api/#wat-zijn-de-huidige-versies-van-documenten).


# Overzicht Wijzigingen



<script src="prism.js"></script>
<h2>Aangepaste documenten</h2>
<h3>Digikoppeling-Koppelvlakstandaard-WUS</h3>
<details><summary>Wijzigingen</summary>	
<pre><code class="language-diff">
<div>
diff --git a/.github/workflows/build.yml b/.github/workflows/build.yml
index dfc4749..0e4c908 100644
--- a/.github/workflows/build.yml
+++ b/.github/workflows/build.yml
@@ -3,6 +3,42 @@ on:
   workflow_dispatch:
   pull_request:
 jobs:
-  main:
-    name: ReSpec
-    uses: Logius-standaarden/Automatisering/.github/workflows/respec.yml@main
+  build:
+    name: Build
+    uses: Logius-standaarden/Automatisering/.github/workflows/build.yml@main
+  check:
+    needs: build
+    name: Check
+    uses: Logius-standaarden/Automatisering/.github/workflows/check.yml@main
+    
+  preview:
+    needs: build
+    name: Preview
+    runs-on: ubuntu-latest
+    if: ${{ github.event_name == 'pull_request' && !github.event.pull_request.head.repo.fork }}
+    steps:
+      - uses: actions/checkout@v2
+      - name: Recover HTML
+        uses: actions/cache@v2
+        with:
+          path: ~/static
+          key: ${{ github.run_id }}      
+      - name: Gather files
+        run: |
+         rm index.html
+         mv ~/static/snapshot.html index.html
+         rm -f *.md *.pdf *.js snapshot.html
+         mkdir ~/content
+         mv ./* ~/content
+         git clone https://user:${{ secrets.BEHEER }}@github.com/Logius-standaarden/Publicatie-Preview.git
+      - name: Commit preview
+        run: |
+         cd Publicatie-Preview
+         rm -f -r ${{ github.event.repository.name }}/${{ github.head_ref }}
+         mkdir -p ${{ github.event.repository.name }}/${{ github.head_ref }}
+         mv ~/content/* ${{ github.event.repository.name }}/${{ github.head_ref }}
+         git add -A
+         git config user.name "GitHub Action"
+         git config user.email "api@logius.nl"
+         git commit -m "new preview build"
+         git push
diff --git a/ch01_Inleiding.md b/ch01_Inleiding.md
index 14358a5..8fe42c7 100644
--- a/ch01_Inleiding.md
+++ b/ch01_Inleiding.md
@@ -28,7 +28,6 @@ opgebouwd:
 
 

<div>
</code></pre>
</details>

