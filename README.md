# Luotea Asemakierto

Asemanhoidon tarkastuskäynti puhelimella. Käyttäjinä Luotean kiinteistönhoitajat ja alihankkijat, noin kuusi käyntiä asemaa kohden vuodessa. Sisarsovellus Kohdekierrolle.

**Käyttö:** avaa https://juntsa.github.io/asemanhoito/ puhelimessa ja valitse *Lisää kotinäytölle*. Käyttöohje: [ohje.html](ohje.html).

## Toiminta

- Kävijän nimi ja yritys täytetään kerran.
- Asemat lisätään puhelimessa tai tuodaan tiedostosta (JSON tai CSV, sarakkeet `nimi;numero;osoite;paikkakunta`).
- Uusi käynti tuo edellisen käynnin avoimet poikkeamat: Korjattu / Ennallaan / Pahentunut.
- Tarkastuskohdat: Kunnossa / Poikkeama / Korjattu paikalla / Ei asemalla. Tyhjä tarkoittaa, ettei kohtaa tarkastettu. Ei asemalla muistetaan asemakohtaisesti.
- Jokaisella kohdalla vastuutaho (Oma työ / Aseman omistaja / Kauppias), pikasyyt, Vikailmoitus tehty -merkintä ja tarvittaessa ⓘ-ohje.
- Tulos-% ja korjattavat asiat vastuutahoittain, kopioitavissa viestiksi (261110.3).
- Osiot näytetään vuodenajan mukaan. Muiden vuodenaikojen osiot saa auki käsin.
- 📷 ja 🎤 jokaisen kohdan rivillä, käyntimuistio.
- Vertailukuvat: avoimen poikkeaman kuvat säilyvät seuraavaan käyntiin ja näkyvät rinnakkain uuden kuvan kanssa (261110.2).
- 📤 Lähetä käynti: JSON-tiedosto (käynti ja kuvat) puhelimen jakovalikolla. Sama tiedosto avautuu toisella puhelimella (*Avaa käynti tiedostosta*).

## Tiedot

- Tiedot pysyvät laitteella (localStorage + IndexedDB). Lomake ei lähetä tietoja palvelimelle. Poikkeus: sanelussa puhe käsitellään puhelimen puheentunnistuksessa (Apple tai Google).
- Repo on julkinen: asemalistaa, osoitteita tai sopimustietoja ei tallenneta tähän repoon.

## Kehitys

- Tarkastuskohdat ovat `index.html`:n alussa taulukossa `OSIOT`. Tekstit ovat yleisiä: yrityskohtaiset nimet ja ohjeet lisätään, kun lomake siirtyy yrityksen järjestelmään.
- Kohdan `id` ei saa muuttua käyttöönoton jälkeen, koska avoimet poikkeamat seuraavat sitä käynniltä toiselle.
- Build-numero `BUILD` (index.html) ja `VERSIO` (sw.js) nostetaan yhdessä.
