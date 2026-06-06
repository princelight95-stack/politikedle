import { Politician } from '../models/politician.model';

export const POLITICIANS: Politician[] = [
  // SPD
  { id: 'scholz', name: 'Olaf Scholz', party: 'SPD', state: 'Hamburg', position: 'Bundeskanzler/in', birthYear: 1958, gender: 'männlich' },
  { id: 'steinmeier', name: 'Frank-Walter Steinmeier', party: 'SPD', state: 'Nordrhein-Westfalen', position: 'Bundespräsident/in', birthYear: 1956, gender: 'männlich' },
  { id: 'lauterbach', name: 'Karl Lauterbach', party: 'SPD', state: 'Nordrhein-Westfalen', position: 'Bundesminister/in', birthYear: 1963, gender: 'männlich' },
  { id: 'pistorius', name: 'Boris Pistorius', party: 'SPD', state: 'Niedersachsen', position: 'Bundesminister/in', birthYear: 1960, gender: 'männlich' },
  { id: 'faeser', name: 'Nancy Faeser', party: 'SPD', state: 'Hessen', position: 'Bundesminister/in', birthYear: 1970, gender: 'weiblich' },
  { id: 'schulze', name: 'Svenja Schulze', party: 'SPD', state: 'Nordrhein-Westfalen', position: 'Bundesminister/in', birthYear: 1968, gender: 'weiblich' },
  { id: 'heil', name: 'Hubertus Heil', party: 'SPD', state: 'Niedersachsen', position: 'Bundesminister/in', birthYear: 1972, gender: 'männlich' },
  { id: 'bas', name: 'Bärbel Bas', party: 'SPD', state: 'Nordrhein-Westfalen', position: 'Bundestagspräsident/in', birthYear: 1968, gender: 'weiblich' },
  { id: 'klingbeil', name: 'Lars Klingbeil', party: 'SPD', state: 'Niedersachsen', position: 'Parteivorsitzende/r', birthYear: 1978, gender: 'männlich' },
  { id: 'esken', name: 'Saskia Esken', party: 'SPD', state: 'Baden-Württemberg', position: 'Parteivorsitzende/r', birthYear: 1961, gender: 'weiblich' },
  { id: 'mützenich', name: 'Rolf Mützenich', party: 'SPD', state: 'Nordrhein-Westfalen', position: 'MdB / Fraktionsvorsitzende/r', birthYear: 1959, gender: 'männlich' },
  { id: 'schröder', name: 'Gerhard Schröder', party: 'SPD', state: 'Niedersachsen', position: 'Bundeskanzler/in', birthYear: 1944, gender: 'männlich' },
  { id: 'gabriel', name: 'Sigmar Gabriel', party: 'SPD', state: 'Niedersachsen', position: 'Bundesminister/in', birthYear: 1959, gender: 'männlich' },
  { id: 'nahles', name: 'Andrea Nahles', party: 'SPD', state: 'Rheinland-Pfalz', position: 'Parteivorsitzende/r', birthYear: 1970, gender: 'weiblich' },
  { id: 'maas', name: 'Heiko Maas', party: 'SPD', state: 'Saarland', position: 'Bundesminister/in', birthYear: 1966, gender: 'männlich' },
  { id: 'woidke', name: 'Dietmar Woidke', party: 'SPD', state: 'Brandenburg', position: 'Ministerpräsident/in', birthYear: 1961, gender: 'männlich' },
  { id: 'tschentscher', name: 'Peter Tschentscher', party: 'SPD', state: 'Hamburg', position: 'Ministerpräsident/in', birthYear: 1966, gender: 'männlich' },
  { id: 'schwesig', name: 'Manuela Schwesig', party: 'SPD', state: 'Mecklenburg-Vorpommern', position: 'Ministerpräsident/in', birthYear: 1974, gender: 'weiblich' },

  // CDU
  { id: 'merz', name: 'Friedrich Merz', party: 'CDU', state: 'Nordrhein-Westfalen', position: 'Bundeskanzler/in', birthYear: 1955, gender: 'männlich' },
  { id: 'merkel', name: 'Angela Merkel', party: 'CDU', state: 'Brandenburg', position: 'Bundeskanzler/in', birthYear: 1954, gender: 'weiblich' },
  { id: 'laschet', name: 'Armin Laschet', party: 'CDU', state: 'Nordrhein-Westfalen', position: 'Ministerpräsident/in', birthYear: 1961, gender: 'männlich' },
  { id: 'spahn', name: 'Jens Spahn', party: 'CDU', state: 'Nordrhein-Westfalen', position: 'Bundesminister/in', birthYear: 1980, gender: 'männlich' },
  { id: 'wüst', name: 'Hendrik Wüst', party: 'CDU', state: 'Nordrhein-Westfalen', position: 'Ministerpräsident/in', birthYear: 1975, gender: 'männlich' },
  { id: 'wegner', name: 'Kai Wegner', party: 'CDU', state: 'Berlin', position: 'Ministerpräsident/in', birthYear: 1972, gender: 'männlich' },
  { id: 'rhein', name: 'Boris Rhein', party: 'CDU', state: 'Hessen', position: 'Ministerpräsident/in', birthYear: 1972, gender: 'männlich' },
  { id: 'günther', name: 'Daniel Günther', party: 'CDU', state: 'Schleswig-Holstein', position: 'Ministerpräsident/in', birthYear: 1973, gender: 'männlich' },
  { id: 'schäuble', name: 'Wolfgang Schäuble', party: 'CDU', state: 'Baden-Württemberg', position: 'Bundestagspräsident/in', birthYear: 1942, gender: 'männlich' },
  { id: 'demaiziere', name: 'Thomas de Maizière', party: 'CDU', state: 'Sachsen', position: 'Bundesminister/in', birthYear: 1954, gender: 'männlich' },
  { id: 'klöckner', name: 'Julia Klöckner', party: 'CDU', state: 'Rheinland-Pfalz', position: 'MdB / Fraktionsvorsitzende/r', birthYear: 1972, gender: 'weiblich' },
  { id: 'wadephul', name: 'Johann Wadephul', party: 'CDU', state: 'Schleswig-Holstein', position: 'Bundesminister/in', birthYear: 1963, gender: 'männlich' },
  { id: 'kohl', name: 'Helmut Kohl', party: 'CDU', state: 'Rheinland-Pfalz', position: 'Bundeskanzler/in', birthYear: 1930, gender: 'männlich' },

  // CSU
  { id: 'söder', name: 'Markus Söder', party: 'CSU', state: 'Bayern', position: 'Ministerpräsident/in', birthYear: 1967, gender: 'männlich' },
  { id: 'seehofer', name: 'Horst Seehofer', party: 'CSU', state: 'Bayern', position: 'Bundesminister/in', birthYear: 1949, gender: 'männlich' },
  { id: 'strauss', name: 'Franz Josef Strauß', party: 'CSU', state: 'Bayern', position: 'Ministerpräsident/in', birthYear: 1915, gender: 'männlich' },

  // Grüne
  { id: 'habeck', name: 'Robert Habeck', party: 'Grüne', state: 'Schleswig-Holstein', position: 'Bundesminister/in', birthYear: 1969, gender: 'männlich' },
  { id: 'baerbock', name: 'Annalena Baerbock', party: 'Grüne', state: 'Brandenburg', position: 'Bundesminister/in', birthYear: 1980, gender: 'weiblich' },
  { id: 'lang', name: 'Ricarda Lang', party: 'Grüne', state: 'Baden-Württemberg', position: 'Parteivorsitzende/r', birthYear: 1994, gender: 'weiblich' },
  { id: 'nouripour', name: 'Omid Nouripour', party: 'Grüne', state: 'Hessen', position: 'Parteivorsitzende/r', birthYear: 1975, gender: 'männlich' },
  { id: 'özdemir', name: 'Cem Özdemir', party: 'Grüne', state: 'Baden-Württemberg', position: 'Bundesminister/in', birthYear: 1965, gender: 'männlich' },
  { id: 'kretschmann', name: 'Winfried Kretschmann', party: 'Grüne', state: 'Baden-Württemberg', position: 'Ministerpräsident/in', birthYear: 1948, gender: 'männlich' },
  { id: 'göring-eckardt', name: 'Katrin Göring-Eckardt', party: 'Grüne', state: 'Thüringen', position: 'MdB / Fraktionsvorsitzende/r', birthYear: 1966, gender: 'weiblich' },
  { id: 'hofreiter', name: 'Anton Hofreiter', party: 'Grüne', state: 'Bayern', position: 'MdB / Fraktionsvorsitzende/r', birthYear: 1970, gender: 'männlich' },
  { id: 'fischer', name: 'Joschka Fischer', party: 'Grüne', state: 'Baden-Württemberg', position: 'Bundesminister/in', birthYear: 1948, gender: 'männlich' },

  // FDP
  { id: 'lindner', name: 'Christian Lindner', party: 'FDP', state: 'Nordrhein-Westfalen', position: 'Parteivorsitzende/r', birthYear: 1979, gender: 'männlich' },
  { id: 'kubicki', name: 'Wolfgang Kubicki', party: 'FDP', state: 'Schleswig-Holstein', position: 'MdB / Fraktionsvorsitzende/r', birthYear: 1952, gender: 'männlich' },
  { id: 'buschmann', name: 'Marco Buschmann', party: 'FDP', state: 'Nordrhein-Westfalen', position: 'Bundesminister/in', birthYear: 1977, gender: 'männlich' },
  { id: 'stark-watzinger', name: 'Bettina Stark-Watzinger', party: 'FDP', state: 'Hessen', position: 'Bundesminister/in', birthYear: 1968, gender: 'weiblich' },
  { id: 'wissing', name: 'Volker Wissing', party: 'FDP', state: 'Rheinland-Pfalz', position: 'Bundesminister/in', birthYear: 1970, gender: 'männlich' },

  // AfD
  { id: 'weidel', name: 'Alice Weidel', party: 'AfD', state: 'Baden-Württemberg', position: 'Parteivorsitzende/r', birthYear: 1979, gender: 'weiblich' },
  { id: 'chrupalla', name: 'Tino Chrupalla', party: 'AfD', state: 'Sachsen', position: 'Parteivorsitzende/r', birthYear: 1975, gender: 'männlich' },
  { id: 'von-storch', name: 'Beatrix von Storch', party: 'AfD', state: 'Berlin', position: 'MdB / Fraktionsvorsitzende/r', birthYear: 1971, gender: 'weiblich' },
  { id: 'gauland', name: 'Alexander Gauland', party: 'AfD', state: 'Brandenburg', position: 'MdB / Fraktionsvorsitzende/r', birthYear: 1941, gender: 'männlich' },
  { id: 'meuthen', name: 'Jörg Meuthen', party: 'AfD', state: 'Baden-Württemberg', position: 'Parteivorsitzende/r', birthYear: 1961, gender: 'männlich' },

  // Linke
  { id: 'gysi', name: 'Gregor Gysi', party: 'Linke', state: 'Berlin', position: 'MdB / Fraktionsvorsitzende/r', birthYear: 1948, gender: 'männlich' },
  { id: 'ramelow', name: 'Bodo Ramelow', party: 'Linke', state: 'Thüringen', position: 'Ministerpräsident/in', birthYear: 1956, gender: 'männlich' },
  { id: 'bartsch', name: 'Dietmar Bartsch', party: 'Linke', state: 'Mecklenburg-Vorpommern', position: 'MdB / Fraktionsvorsitzende/r', birthYear: 1958, gender: 'männlich' },

  // BSW
  { id: 'wagenknecht', name: 'Sahra Wagenknecht', party: 'BSW', state: 'Nordrhein-Westfalen', position: 'Parteivorsitzende/r', birthYear: 1969, gender: 'weiblich' },

  // parteilos
  { id: 'gauck', name: 'Joachim Gauck', party: 'parteilos', state: 'Mecklenburg-Vorpommern', position: 'Bundespräsident/in', birthYear: 1940, gender: 'männlich' },
  { id: 'köhler', name: 'Horst Köhler', party: 'parteilos', state: 'Baden-Württemberg', position: 'Bundespräsident/in', birthYear: 1943, gender: 'männlich' },
];
