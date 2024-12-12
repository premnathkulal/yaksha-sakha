import { HimmelaTerms } from "../utils/enum";

export const TanpuraTypes = [
  {
    key: "yaksha-low",
    title: "Yaksha low",
  },
  {
    key: "yaksha-high",
    title: "Yaksha high",
  },
  {
    key: "tanpura-pa",
    title: "Tanpura PA",
  },
  {
    key: "tanpura-ma",
    title: "Tanpura MA",
  },
];

export const MusicNotation = [
  {
    id: "c",
    indian: "Sa",
    western: "C",
    kannada: "ಸ",
    kannadaNotation: "ಬಿಳಿ-1",
    fullIndianTitle: "Shadja",
    frequency: 261.63,
  },
  {
    id: "c#",
    indian: "Ri",
    western: "C#",
    kannada: "ರಿ",
    kannadaNotation: "ಕಪ್ಪು-1",
    fullIndianTitle: "Rishabha",
    frequency: 277.18,
  },
  {
    id: "d",
    indian: "Ri",
    western: "D",
    kannada: "ರಿ",
    kannadaNotation: "ಬಿಳಿ-2",
    fullIndianTitle: "Rishabha",
    frequency: 293.66,
  },
  {
    id: "d#",
    indian: "Ga",
    western: "D#",
    kannada: "ಗ",
    kannadaNotation: "ಕಪ್ಪು-2",
    fullIndianTitle: "Gandhara",
    frequency: 311.13,
  },
  {
    id: "e",
    indian: "Ga",
    western: "E",
    kannada: "ಗ",
    kannadaNotation: "ಬಿಳಿ-3",
    fullIndianTitle: "Gandhara",
    frequency: 329.63,
  },
  {
    id: "f",
    indian: "Ma",
    western: "F",
    kannada: "ಮ",
    kannadaNotation: "ಬಿಳಿ-4",
    fullIndianTitle: "Madhyama",
    frequency: 349.23,
  },
  {
    id: "f#",
    indian: "Ma",
    western: "F#",
    kannada: "ಮ",
    kannadaNotation: "ಕಪ್ಪು-3",
    fullIndianTitle: "Madhyama",
    frequency: 369.99,
  },
  {
    id: "g",
    indian: "Pa",
    western: "G",
    kannada: "ಪ",
    kannadaNotation: "ಬಿಳಿ-5",
    fullIndianTitle: "Panchama",
    frequency: 392.0,
  },
  {
    id: "g#",
    indian: "Dha",
    western: "G#",
    kannada: "ದ",
    kannadaNotation: "ಕಪ್ಪು-4",
    fullIndianTitle: "Dhaivata",
    frequency: 415.3,
  },
  {
    id: "a",
    indian: "Dha",
    western: "A",
    kannada: "ದ",
    kannadaNotation: "ಬಿಳಿ-6",
    fullIndianTitle: "Dhaivata",
    frequency: 440.0,
  },
  {
    id: "a#",
    indian: "Ni",
    western: "A#",
    kannada: "ನಿ",
    kannadaNotation: "ಕಪ್ಪು-5",
    fullIndianTitle: "Nishada",
    frequency: 466.16,
  },
  {
    id: "b",
    indian: "Ni",
    western: "B",
    kannada: "ನಿ",
    kannadaNotation: "ಬಿಳಿ-7",
    fullIndianTitle: "Nishada",
    frequency: 493.88,
  },
];

export const TalaInfo = [
  {
    id: "tala-eka",
    talaStructure: [2, 1, 1],
    talaRepresentation: ["ತಕ-ಧಿಮಿ", "ತಕ", "ಜನು"],
    talaCounts: 4,
    talaName: "ಏಕ ತಾಳ",
  },
  {
    id: "tala-jampe",
    talaStructure: [2, 1, 1, 2, 1, 1, 1, 1],
    talaRepresentation: ["ತಾಂ", "ತ", "ತ್ತ", "ತಾಂ", "ತ", "ತ್ತ", "ತ", "ತ್ತ"],
    talaCounts: 10,
    talaName: "ಜಂಪೆ ತಾಳ",
  },
  {
    id: "tala-trivude",
    talaStructure: [2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1],
    talaRepresentation: [
      "ತಾಂ",
      "ತ",
      "ತ್ತ",
      "ತ",
      "ತ್ತ",
      "ತಾಂ",
      "ತ",
      "ತ್ತ",
      "ತಾಂ",
      "ತ",
      "ತ್ತ",
    ],
    talaCounts: 14,
    talaName: "ತ್ರಿವುಡೆ ತಾಳ",
  },
  {
    id: "tala-aadi",
    talaStructure: [],
    talaRepresentation: [],
    talaCounts: 8,
    talaName: "ಆದಿ ತಾಳ",
  },
  {
    id: "tala-roopaka",
    talaStructure: [],
    talaRepresentation: [],
    talaCounts: 6,
    talaName: "ರೂಪಕ ತಾಳ",
  },
  {
    id: "tala-twarita-trivude",
    talaStructure: ["2+1", 2, 2],
    talaRepresentation: ["ತಕಿಟ", "ತಕ", "ಧಿಮಿ"],
    talaCounts: 7,
    talaName: "ತ್ವರಿತ ತ್ರಿವುಡೆ ತಾಳ",
  },
  {
    id: "tala-twarita-jampe",
    talaStructure: [],
    talaRepresentation: [],
    talaCounts: 7,
    talaName: "ತ್ವರಿತ ಜಂಪೆ ತಾಳ",
  },
  {
    id: "tala-taitithi",
    talaStructure: [],
    talaRepresentation: [],
    talaCounts: 3,
    talaName: "ತೈತಿತ್ತಿ ತಾಳ",
  },
];

export const AvartaTypes = [
  {
    id: "avarta",
    title: "ಅವರ್ತ",
    type: HimmelaTerms.Avarta,
    isCountRequired: true,
  },
  {
    id: "bidita",
    title: "ಬಿಡಿತ",
    type: HimmelaTerms.Bidita,
    isCountRequired: false,
  },
  {
    id: "muktaya",
    title: "ಮುಕ್ತಾಯ",
    type: HimmelaTerms.Muktaya,
    isCountRequired: false,
  },
  {
    id: "chalu-1",
    title: "ಚಾಲು (1)",
    type: HimmelaTerms.Chalu,
    isCountRequired: false,
  },
  {
    id: "chalu-2",
    title: "ಚಾಲು (2)",
    type: HimmelaTerms.Chalu,
    isCountRequired: false,
  },
  {
    id: "chalu-3",
    title: "ಚಾಲು (3)",
    type: HimmelaTerms.Chalu,
    isCountRequired: false,
  },
];
