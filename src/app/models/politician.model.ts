export type Party =
  | 'CDU' | 'CSU' | 'SPD' | 'Grüne' | 'FDP'
  | 'AfD' | 'Linke' | 'BSW' | 'parteilos';

export type GermanState =
  | 'Baden-Württemberg' | 'Bayern' | 'Berlin' | 'Brandenburg'
  | 'Bremen' | 'Hamburg' | 'Hessen' | 'Mecklenburg-Vorpommern'
  | 'Niedersachsen' | 'Nordrhein-Westfalen' | 'Rheinland-Pfalz'
  | 'Saarland' | 'Sachsen' | 'Sachsen-Anhalt' | 'Schleswig-Holstein'
  | 'Thüringen';

export type PositionLevel =
  | 'Bundeskanzler/in'
  | 'Bundespräsident/in'
  | 'Bundesminister/in'
  | 'Ministerpräsident/in'
  | 'Bundestagspräsident/in'
  | 'Parteivorsitzende/r'
  | 'MdB / Fraktionsvorsitzende/r';

export type Gender = 'männlich' | 'weiblich';

export type Religion = 'katholisch' | 'evangelisch' | 'konfessionslos' | 'muslimisch' | 'jüdisch';

export type Beruf =
  | 'Jurist'
  | 'Ökonom'
  | 'Naturwissenschaftler'
  | 'Journalist'
  | 'Unternehmer'
  | 'Gewerkschafter'
  | 'Lehrer/Akademiker'
  | 'sonstiges';

export type AkademischerTitel = 'Prof. Dr.' | 'Dr.' | 'keiner';

export interface Politician {
  id: string;
  name: string;
  party: Party;
  state: GermanState;
  position: PositionLevel;
  birthYear: number;
  gender: Gender;
  religion: Religion;
  beruf: Beruf;
  titel: AkademischerTitel;
  erstmandat: number;
  quote?: string;
}

export type CompareResult = 'correct' | 'partial' | 'wrong';

export interface GuessComparison {
  politician: Politician;
  party: CompareResult;
  state: CompareResult;
  stateRegion: string;
  position: CompareResult;
  birthYear: CompareResult;
  birthYearDirection: 'higher' | 'lower' | 'exact';
  birthYearDiff: number;
  gender: CompareResult;
  religion: CompareResult;
  beruf: CompareResult;
  titel: CompareResult;
  erstmandat: CompareResult;
  erstmandatDirection: 'higher' | 'lower' | 'exact';
  erstmandatDiff: number;
  isCorrect: boolean;
}

export const PARTY_FAMILY: Record<Party, string> = {
  'Linke': 'links',
  'BSW': 'links',
  'SPD': 'mitte-links',
  'Grüne': 'mitte-links',
  'FDP': 'mitte',
  'CDU': 'mitte-rechts',
  'CSU': 'mitte-rechts',
  'AfD': 'rechts',
  'parteilos': 'parteilos',
};

export const STATE_REGION: Record<GermanState, string> = {
  'Hamburg': 'Nord',
  'Bremen': 'Nord',
  'Schleswig-Holstein': 'Nord',
  'Niedersachsen': 'Nord',
  'Mecklenburg-Vorpommern': 'Nord',
  'Nordrhein-Westfalen': 'West',
  'Rheinland-Pfalz': 'West',
  'Saarland': 'West',
  'Hessen': 'West',
  'Bayern': 'Süd',
  'Baden-Württemberg': 'Süd',
  'Berlin': 'Ost',
  'Brandenburg': 'Ost',
  'Sachsen': 'Ost',
  'Sachsen-Anhalt': 'Ost',
  'Thüringen': 'Ost',
};

export const POSITION_LEVEL_GROUP: Record<PositionLevel, string> = {
  'Bundeskanzler/in': 'Kanzleramt',
  'Bundespräsident/in': 'Staatsoberhaupt',
  'Bundesminister/in': 'Bundesregierung',
  'Ministerpräsident/in': 'Exekutive Land',
  'Bundestagspräsident/in': 'Legislative Bund',
  'MdB / Fraktionsvorsitzende/r': 'Legislative Bund',
  'Parteivorsitzende/r': 'Parteiführung',
};

// Christian (partial), secular/other (unique)
export const RELIGION_GROUP: Record<Religion, string> = {
  'katholisch': 'christlich',
  'evangelisch': 'christlich',
  'konfessionslos': 'säkular',
  'muslimisch': 'nicht-christlich-religiös',
  'jüdisch': 'nicht-christlich-religiös',
};

// Akademiker vs Praktiker – gives partial when same broad category
export const BERUF_GROUP: Record<Beruf, string> = {
  'Jurist': 'akademiker',
  'Ökonom': 'akademiker',
  'Naturwissenschaftler': 'akademiker',
  'Lehrer/Akademiker': 'akademiker',
  'Journalist': 'praktiker',
  'Unternehmer': 'praktiker',
  'Gewerkschafter': 'praktiker',
  'sonstiges': 'praktiker',
};

// Dr. / Prof. Dr. share 'doktor' group → partial
export const TITEL_GROUP: Record<AkademischerTitel, string> = {
  'Prof. Dr.': 'doktor',
  'Dr.': 'doktor',
  'keiner': 'kein-doktor',
};
