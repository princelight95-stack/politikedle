import { Politician } from '../models/politician.model';

export const POLITICIANS: Politician[] = [
  // ── SPD ──────────────────────────────────────────────────────────────────
  { id: 'brandt',           name: 'Willy Brandt',               party: 'SPD', state: 'Berlin',                  position: 'Bundeskanzler/in',          birthYear: 1913, gender: 'männlich' },
  { id: 'schmidt',          name: 'Helmut Schmidt',              party: 'SPD', state: 'Hamburg',                 position: 'Bundeskanzler/in',          birthYear: 1918, gender: 'männlich' },
  { id: 'schröder',         name: 'Gerhard Schröder',            party: 'SPD', state: 'Niedersachsen',           position: 'Bundeskanzler/in',          birthYear: 1944, gender: 'männlich' },
  { id: 'scholz',           name: 'Olaf Scholz',                 party: 'SPD', state: 'Hamburg',                 position: 'Bundeskanzler/in',          birthYear: 1958, gender: 'männlich' },

  { id: 'heinemann',        name: 'Gustav Heinemann',            party: 'SPD', state: 'Nordrhein-Westfalen',     position: 'Bundespräsident/in',        birthYear: 1899, gender: 'männlich' },
  { id: 'rau',              name: 'Johannes Rau',                party: 'SPD', state: 'Nordrhein-Westfalen',     position: 'Bundespräsident/in',        birthYear: 1931, gender: 'männlich' },
  { id: 'steinmeier',       name: 'Frank-Walter Steinmeier',     party: 'SPD', state: 'Nordrhein-Westfalen',     position: 'Bundespräsident/in',        birthYear: 1956, gender: 'männlich' },

  { id: 'thierse',          name: 'Wolfgang Thierse',            party: 'SPD', state: 'Berlin',                  position: 'Bundestagspräsident/in',    birthYear: 1943, gender: 'männlich' },
  { id: 'bas',              name: 'Bärbel Bas',                  party: 'SPD', state: 'Nordrhein-Westfalen',     position: 'Bundestagspräsident/in',    birthYear: 1968, gender: 'weiblich' },

  { id: 'vogel',            name: 'Hans-Jochen Vogel',           party: 'SPD', state: 'Bayern',                  position: 'Parteivorsitzende/r',      birthYear: 1926, gender: 'männlich' },
  { id: 'scharping',        name: 'Rudolf Scharping',            party: 'SPD', state: 'Rheinland-Pfalz',         position: 'Parteivorsitzende/r',      birthYear: 1947, gender: 'männlich' },
  { id: 'müntefering',      name: 'Franz Müntefering',           party: 'SPD', state: 'Nordrhein-Westfalen',     position: 'Parteivorsitzende/r',      birthYear: 1940, gender: 'männlich' },
  { id: 'gabriel',          name: 'Sigmar Gabriel',              party: 'SPD', state: 'Niedersachsen',           position: 'Parteivorsitzende/r',      birthYear: 1959, gender: 'männlich' },
  { id: 'nahles',           name: 'Andrea Nahles',               party: 'SPD', state: 'Rheinland-Pfalz',         position: 'Parteivorsitzende/r',      birthYear: 1970, gender: 'weiblich' },
  { id: 'klingbeil',        name: 'Lars Klingbeil',              party: 'SPD', state: 'Niedersachsen',           position: 'Parteivorsitzende/r',      birthYear: 1978, gender: 'männlich' },
  { id: 'esken',            name: 'Saskia Esken',                party: 'SPD', state: 'Baden-Württemberg',       position: 'Parteivorsitzende/r',      birthYear: 1961, gender: 'weiblich' },

  { id: 'schily',           name: 'Otto Schily',                 party: 'SPD', state: 'Nordrhein-Westfalen',     position: 'Bundesminister/in',        birthYear: 1932, gender: 'männlich' },
  { id: 'steinbrück',       name: 'Peer Steinbrück',             party: 'SPD', state: 'Nordrhein-Westfalen',     position: 'Bundesminister/in',        birthYear: 1947, gender: 'männlich' },
  { id: 'wieczorek-zeul',   name: 'Heidemarie Wieczorek-Zeul',  party: 'SPD', state: 'Hessen',                  position: 'Bundesminister/in',        birthYear: 1942, gender: 'weiblich' },
  { id: 'maas',             name: 'Heiko Maas',                  party: 'SPD', state: 'Saarland',                position: 'Bundesminister/in',        birthYear: 1966, gender: 'männlich' },
  { id: 'lambrecht',        name: 'Christine Lambrecht',         party: 'SPD', state: 'Baden-Württemberg',       position: 'Bundesminister/in',        birthYear: 1965, gender: 'weiblich' },
  { id: 'lauterbach',       name: 'Karl Lauterbach',             party: 'SPD', state: 'Nordrhein-Westfalen',     position: 'Bundesminister/in',        birthYear: 1963, gender: 'männlich' },
  { id: 'pistorius',        name: 'Boris Pistorius',             party: 'SPD', state: 'Niedersachsen',           position: 'Bundesminister/in',        birthYear: 1960, gender: 'männlich' },
  { id: 'faeser',           name: 'Nancy Faeser',                party: 'SPD', state: 'Hessen',                  position: 'Bundesminister/in',        birthYear: 1970, gender: 'weiblich' },
  { id: 'schulze',          name: 'Svenja Schulze',              party: 'SPD', state: 'Nordrhein-Westfalen',     position: 'Bundesminister/in',        birthYear: 1968, gender: 'weiblich' },
  { id: 'heil',             name: 'Hubertus Heil',               party: 'SPD', state: 'Niedersachsen',           position: 'Bundesminister/in',        birthYear: 1972, gender: 'männlich' },

  { id: 'mützenich',        name: 'Rolf Mützenich',              party: 'SPD', state: 'Nordrhein-Westfalen',     position: 'MdB / Fraktionsvorsitzende/r', birthYear: 1959, gender: 'männlich' },

  { id: 'wowereit',         name: 'Klaus Wowereit',              party: 'SPD', state: 'Berlin',                  position: 'Ministerpräsident/in',     birthYear: 1953, gender: 'männlich' },
  { id: 'kraft',            name: 'Hannelore Kraft',             party: 'SPD', state: 'Nordrhein-Westfalen',     position: 'Ministerpräsident/in',     birthYear: 1961, gender: 'weiblich' },
  { id: 'weil',             name: 'Stephan Weil',                party: 'SPD', state: 'Niedersachsen',           position: 'Ministerpräsident/in',     birthYear: 1959, gender: 'männlich' },
  { id: 'woidke',           name: 'Dietmar Woidke',              party: 'SPD', state: 'Brandenburg',             position: 'Ministerpräsident/in',     birthYear: 1961, gender: 'männlich' },
  { id: 'tschentscher',     name: 'Peter Tschentscher',          party: 'SPD', state: 'Hamburg',                 position: 'Ministerpräsident/in',     birthYear: 1966, gender: 'männlich' },
  { id: 'schwesig',         name: 'Manuela Schwesig',            party: 'SPD', state: 'Mecklenburg-Vorpommern', position: 'Ministerpräsident/in',     birthYear: 1974, gender: 'weiblich' },

  // ── CDU ──────────────────────────────────────────────────────────────────
  { id: 'adenauer',         name: 'Konrad Adenauer',             party: 'CDU', state: 'Nordrhein-Westfalen',     position: 'Bundeskanzler/in',          birthYear: 1876, gender: 'männlich' },
  { id: 'erhard',           name: 'Ludwig Erhard',               party: 'CDU', state: 'Bayern',                  position: 'Bundeskanzler/in',          birthYear: 1897, gender: 'männlich' },
  { id: 'kiesinger',        name: 'Kurt Georg Kiesinger',        party: 'CDU', state: 'Baden-Württemberg',       position: 'Bundeskanzler/in',          birthYear: 1904, gender: 'männlich' },
  { id: 'kohl',             name: 'Helmut Kohl',                 party: 'CDU', state: 'Rheinland-Pfalz',         position: 'Bundeskanzler/in',          birthYear: 1930, gender: 'männlich' },
  { id: 'merkel',           name: 'Angela Merkel',               party: 'CDU', state: 'Brandenburg',             position: 'Bundeskanzler/in',          birthYear: 1954, gender: 'weiblich' },
  { id: 'merz',             name: 'Friedrich Merz',              party: 'CDU', state: 'Nordrhein-Westfalen',     position: 'Bundeskanzler/in',          birthYear: 1955, gender: 'männlich' },

  { id: 'lübke',            name: 'Heinrich Lübke',              party: 'CDU', state: 'Nordrhein-Westfalen',     position: 'Bundespräsident/in',        birthYear: 1894, gender: 'männlich' },
  { id: 'carstens',         name: 'Karl Carstens',               party: 'CDU', state: 'Bremen',                  position: 'Bundespräsident/in',        birthYear: 1914, gender: 'männlich' },
  { id: 'weizsäcker',       name: 'Richard von Weizsäcker',      party: 'CDU', state: 'Baden-Württemberg',       position: 'Bundespräsident/in',        birthYear: 1920, gender: 'männlich' },
  { id: 'herzog',           name: 'Roman Herzog',                party: 'CDU', state: 'Bayern',                  position: 'Bundespräsident/in',        birthYear: 1934, gender: 'männlich' },
  { id: 'wulff',            name: 'Christian Wulff',             party: 'CDU', state: 'Niedersachsen',           position: 'Bundespräsident/in',        birthYear: 1959, gender: 'männlich' },

  { id: 'süssmuth',         name: 'Rita Süssmuth',               party: 'CDU', state: 'Nordrhein-Westfalen',     position: 'Bundestagspräsident/in',    birthYear: 1937, gender: 'weiblich' },
  { id: 'lammert',          name: 'Norbert Lammert',             party: 'CDU', state: 'Nordrhein-Westfalen',     position: 'Bundestagspräsident/in',    birthYear: 1948, gender: 'männlich' },
  { id: 'schäuble',         name: 'Wolfgang Schäuble',           party: 'CDU', state: 'Baden-Württemberg',       position: 'Bundestagspräsident/in',    birthYear: 1942, gender: 'männlich' },

  { id: 'akk',              name: 'Annegret Kramp-Karrenbauer',  party: 'CDU', state: 'Saarland',                position: 'Parteivorsitzende/r',      birthYear: 1962, gender: 'weiblich' },

  { id: 'vonderleyen',      name: 'Ursula von der Leyen',        party: 'CDU', state: 'Niedersachsen',           position: 'Bundesminister/in',        birthYear: 1958, gender: 'weiblich' },
  { id: 'altmaier',         name: 'Peter Altmaier',              party: 'CDU', state: 'Saarland',                position: 'Bundesminister/in',        birthYear: 1958, gender: 'männlich' },
  { id: 'demaiziere',       name: 'Thomas de Maizière',          party: 'CDU', state: 'Sachsen',                 position: 'Bundesminister/in',        birthYear: 1954, gender: 'männlich' },
  { id: 'spahn',            name: 'Jens Spahn',                  party: 'CDU', state: 'Nordrhein-Westfalen',     position: 'Bundesminister/in',        birthYear: 1980, gender: 'männlich' },
  { id: 'wadephul',         name: 'Johann Wadephul',             party: 'CDU', state: 'Schleswig-Holstein',      position: 'Bundesminister/in',        birthYear: 1963, gender: 'männlich' },

  { id: 'röttgen',          name: 'Norbert Röttgen',             party: 'CDU', state: 'Nordrhein-Westfalen',     position: 'MdB / Fraktionsvorsitzende/r', birthYear: 1965, gender: 'männlich' },
  { id: 'klöckner',         name: 'Julia Klöckner',              party: 'CDU', state: 'Rheinland-Pfalz',         position: 'MdB / Fraktionsvorsitzende/r', birthYear: 1972, gender: 'weiblich' },

  { id: 'laschet',          name: 'Armin Laschet',               party: 'CDU', state: 'Nordrhein-Westfalen',     position: 'Ministerpräsident/in',     birthYear: 1961, gender: 'männlich' },
  { id: 'wüst',             name: 'Hendrik Wüst',                party: 'CDU', state: 'Nordrhein-Westfalen',     position: 'Ministerpräsident/in',     birthYear: 1975, gender: 'männlich' },
  { id: 'wegner',           name: 'Kai Wegner',                  party: 'CDU', state: 'Berlin',                  position: 'Ministerpräsident/in',     birthYear: 1972, gender: 'männlich' },
  { id: 'rhein',            name: 'Boris Rhein',                 party: 'CDU', state: 'Hessen',                  position: 'Ministerpräsident/in',     birthYear: 1972, gender: 'männlich' },
  { id: 'günther',          name: 'Daniel Günther',              party: 'CDU', state: 'Schleswig-Holstein',      position: 'Ministerpräsident/in',     birthYear: 1973, gender: 'männlich' },
  { id: 'haseloff',         name: 'Reiner Haseloff',             party: 'CDU', state: 'Sachsen-Anhalt',          position: 'Ministerpräsident/in',     birthYear: 1954, gender: 'männlich' },
  { id: 'kretschmer',       name: 'Michael Kretschmer',          party: 'CDU', state: 'Sachsen',                 position: 'Ministerpräsident/in',     birthYear: 1975, gender: 'männlich' },
  { id: 'biedenkopf',       name: 'Kurt Biedenkopf',             party: 'CDU', state: 'Sachsen',                 position: 'Ministerpräsident/in',     birthYear: 1930, gender: 'männlich' },

  // ── CSU ──────────────────────────────────────────────────────────────────
  { id: 'strauss',          name: 'Franz Josef Strauß',          party: 'CSU', state: 'Bayern',                  position: 'Ministerpräsident/in',     birthYear: 1915, gender: 'männlich' },
  { id: 'stoiber',          name: 'Edmund Stoiber',              party: 'CSU', state: 'Bayern',                  position: 'Ministerpräsident/in',     birthYear: 1941, gender: 'männlich' },
  { id: 'beckstein',        name: 'Günther Beckstein',           party: 'CSU', state: 'Bayern',                  position: 'Ministerpräsident/in',     birthYear: 1943, gender: 'männlich' },
  { id: 'söder',            name: 'Markus Söder',                party: 'CSU', state: 'Bayern',                  position: 'Ministerpräsident/in',     birthYear: 1967, gender: 'männlich' },
  { id: 'seehofer',         name: 'Horst Seehofer',              party: 'CSU', state: 'Bayern',                  position: 'Bundesminister/in',        birthYear: 1949, gender: 'männlich' },
  { id: 'guttenberg',       name: 'Karl-Theodor zu Guttenberg',  party: 'CSU', state: 'Bayern',                  position: 'Bundesminister/in',        birthYear: 1971, gender: 'männlich' },

  // ── Grüne ─────────────────────────────────────────────────────────────────
  { id: 'kelly',            name: 'Petra Kelly',                 party: 'Grüne', state: 'Bayern',                position: 'MdB / Fraktionsvorsitzende/r', birthYear: 1947, gender: 'weiblich' },
  { id: 'fischer',          name: 'Joschka Fischer',             party: 'Grüne', state: 'Baden-Württemberg',     position: 'Bundesminister/in',        birthYear: 1948, gender: 'männlich' },
  { id: 'trittin',          name: 'Jürgen Trittin',              party: 'Grüne', state: 'Bremen',                position: 'Bundesminister/in',        birthYear: 1954, gender: 'männlich' },
  { id: 'künast',           name: 'Renate Künast',               party: 'Grüne', state: 'Berlin',               position: 'MdB / Fraktionsvorsitzende/r', birthYear: 1955, gender: 'weiblich' },
  { id: 'kretschmann',      name: 'Winfried Kretschmann',        party: 'Grüne', state: 'Baden-Württemberg',     position: 'Ministerpräsident/in',     birthYear: 1948, gender: 'männlich' },
  { id: 'özdemir',          name: 'Cem Özdemir',                 party: 'Grüne', state: 'Baden-Württemberg',     position: 'Bundesminister/in',        birthYear: 1965, gender: 'männlich' },
  { id: 'göring-eckardt',   name: 'Katrin Göring-Eckardt',       party: 'Grüne', state: 'Thüringen',             position: 'MdB / Fraktionsvorsitzende/r', birthYear: 1966, gender: 'weiblich' },
  { id: 'hofreiter',        name: 'Anton Hofreiter',             party: 'Grüne', state: 'Bayern',                position: 'MdB / Fraktionsvorsitzende/r', birthYear: 1970, gender: 'männlich' },
  { id: 'habeck',           name: 'Robert Habeck',               party: 'Grüne', state: 'Schleswig-Holstein',    position: 'Bundesminister/in',        birthYear: 1969, gender: 'männlich' },
  { id: 'baerbock',         name: 'Annalena Baerbock',           party: 'Grüne', state: 'Brandenburg',           position: 'Bundesminister/in',        birthYear: 1980, gender: 'weiblich' },
  { id: 'nouripour',        name: 'Omid Nouripour',              party: 'Grüne', state: 'Hessen',                position: 'Parteivorsitzende/r',      birthYear: 1975, gender: 'männlich' },
  { id: 'lang',             name: 'Ricarda Lang',                party: 'Grüne', state: 'Baden-Württemberg',     position: 'Parteivorsitzende/r',      birthYear: 1994, gender: 'weiblich' },

  // ── FDP ──────────────────────────────────────────────────────────────────
  { id: 'heuss',            name: 'Theodor Heuss',               party: 'FDP', state: 'Baden-Württemberg',       position: 'Bundespräsident/in',        birthYear: 1884, gender: 'männlich' },
  { id: 'scheel',           name: 'Walter Scheel',               party: 'FDP', state: 'Nordrhein-Westfalen',     position: 'Bundespräsident/in',        birthYear: 1919, gender: 'männlich' },
  { id: 'lambsdorff',       name: 'Otto Graf Lambsdorff',        party: 'FDP', state: 'Nordrhein-Westfalen',     position: 'Bundesminister/in',        birthYear: 1926, gender: 'männlich' },
  { id: 'genscher',         name: 'Hans-Dietrich Genscher',      party: 'FDP', state: 'Sachsen-Anhalt',          position: 'Bundesminister/in',        birthYear: 1927, gender: 'männlich' },
  { id: 'westerwelle',      name: 'Guido Westerwelle',           party: 'FDP', state: 'Nordrhein-Westfalen',     position: 'Bundesminister/in',        birthYear: 1961, gender: 'männlich' },
  { id: 'rösler',           name: 'Philipp Rösler',              party: 'FDP', state: 'Niedersachsen',           position: 'Bundesminister/in',        birthYear: 1973, gender: 'männlich' },
  { id: 'kubicki',          name: 'Wolfgang Kubicki',            party: 'FDP', state: 'Schleswig-Holstein',      position: 'MdB / Fraktionsvorsitzende/r', birthYear: 1952, gender: 'männlich' },
  { id: 'buschmann',        name: 'Marco Buschmann',             party: 'FDP', state: 'Nordrhein-Westfalen',     position: 'Bundesminister/in',        birthYear: 1977, gender: 'männlich' },
  { id: 'stark-watzinger',  name: 'Bettina Stark-Watzinger',     party: 'FDP', state: 'Hessen',                  position: 'Bundesminister/in',        birthYear: 1968, gender: 'weiblich' },
  { id: 'wissing',          name: 'Volker Wissing',              party: 'FDP', state: 'Rheinland-Pfalz',         position: 'Bundesminister/in',        birthYear: 1970, gender: 'männlich' },
  { id: 'lindner',          name: 'Christian Lindner',           party: 'FDP', state: 'Nordrhein-Westfalen',     position: 'Parteivorsitzende/r',      birthYear: 1979, gender: 'männlich' },

  // ── AfD ──────────────────────────────────────────────────────────────────
  { id: 'petry',            name: 'Frauke Petry',                party: 'AfD', state: 'Sachsen',                 position: 'Parteivorsitzende/r',      birthYear: 1975, gender: 'weiblich' },
  { id: 'meuthen',          name: 'Jörg Meuthen',                party: 'AfD', state: 'Baden-Württemberg',       position: 'Parteivorsitzende/r',      birthYear: 1961, gender: 'männlich' },
  { id: 'gauland',          name: 'Alexander Gauland',           party: 'AfD', state: 'Brandenburg',             position: 'MdB / Fraktionsvorsitzende/r', birthYear: 1941, gender: 'männlich' },
  { id: 'weidel',           name: 'Alice Weidel',                party: 'AfD', state: 'Baden-Württemberg',       position: 'Parteivorsitzende/r',      birthYear: 1979, gender: 'weiblich' },
  { id: 'chrupalla',        name: 'Tino Chrupalla',              party: 'AfD', state: 'Sachsen',                 position: 'Parteivorsitzende/r',      birthYear: 1975, gender: 'männlich' },
  { id: 'von-storch',       name: 'Beatrix von Storch',          party: 'AfD', state: 'Berlin',                  position: 'MdB / Fraktionsvorsitzende/r', birthYear: 1971, gender: 'weiblich' },

  // ── Linke ────────────────────────────────────────────────────────────────
  { id: 'lafontaine',       name: 'Oskar Lafontaine',            party: 'Linke', state: 'Saarland',              position: 'Parteivorsitzende/r',      birthYear: 1943, gender: 'männlich' },
  { id: 'kipping',          name: 'Katja Kipping',               party: 'Linke', state: 'Sachsen',               position: 'Parteivorsitzende/r',      birthYear: 1978, gender: 'weiblich' },
  { id: 'gysi',             name: 'Gregor Gysi',                 party: 'Linke', state: 'Berlin',                position: 'MdB / Fraktionsvorsitzende/r', birthYear: 1948, gender: 'männlich' },
  { id: 'bartsch',          name: 'Dietmar Bartsch',             party: 'Linke', state: 'Mecklenburg-Vorpommern', position: 'MdB / Fraktionsvorsitzende/r', birthYear: 1958, gender: 'männlich' },
  { id: 'ramelow',          name: 'Bodo Ramelow',                party: 'Linke', state: 'Thüringen',             position: 'Ministerpräsident/in',     birthYear: 1956, gender: 'männlich' },

  // ── BSW ──────────────────────────────────────────────────────────────────
  { id: 'wagenknecht',      name: 'Sahra Wagenknecht',           party: 'BSW', state: 'Nordrhein-Westfalen',     position: 'Parteivorsitzende/r',      birthYear: 1969, gender: 'weiblich' },

  // ── parteilos ─────────────────────────────────────────────────────────────
  { id: 'gauck',            name: 'Joachim Gauck',               party: 'parteilos', state: 'Mecklenburg-Vorpommern', position: 'Bundespräsident/in', birthYear: 1940, gender: 'männlich' },
  { id: 'köhler',           name: 'Horst Köhler',                party: 'parteilos', state: 'Baden-Württemberg',      position: 'Bundespräsident/in', birthYear: 1943, gender: 'männlich' },
];
