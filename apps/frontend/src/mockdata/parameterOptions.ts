export interface ParameterCategory {
  label: string;
  items: string[];
}

export interface ParameterOptions {
  genres: string[];
  styles: string[];
  tonality: string[];
  synths: string[];
}

export const parameterOptions: ParameterOptions = {
  genres: [
    "Electronic",
    "Hip-Hop",
    "Ambient",
    "House",
    "Techno",
    "Dubstep",
    "Trap",
    "Lo-Fi",
    "Jazz",
    "Rock",
  ],
  styles: [
    "Acid",
    "Airy",
    "Atmospheric",
    "Bright",
    "Dark",
    "Warm",
    "Cold",
    "Dreamy",
    "Aggressive",
    "Smooth",
    "Gritty",
    "Clean",
  ],
  tonality: [
    "Major",
    "Minor",
    "Chromatic",
    "Modal",
    "Pentatonic",
    "Blues",
    "Harmonic Minor",
    "Melodic Minor",
    "Dorian",
    "Phrygian",
  ],
  synths: [
    "Moog",
    "Prophet-5",
    "DX7",
    "Juno-106",
    "Minimoog",
    "MS-20",
    "TB-303",
    "Jupiter-8",
    "OB-Xa",
    "ARP 2600",
  ],
};

export const categoryLabels: Record<keyof ParameterOptions, string> = {
  genres: "Genres",
  styles: "Styles",
  tonality: "Tonality",
  synths: "Synths",
};
