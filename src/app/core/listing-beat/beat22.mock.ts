import { ChipStyle } from '../../reuseable-components/chips/chips.component';

// Chips Category
const chipsStyle = ChipStyle;
export const ChipsCatgory: {
  label: string;
  style: ChipStyle;
  active?: boolean;
}[] = [
  {
    label: 'Trending Beats ',
    style: chipsStyle.PINK,
    active: false,
  },
  { label: 'WAV under ₹999', style: chipsStyle.SKYBLUE, active: false },
  {
    label: 'Wav + Stems under ₹1,999',
    style: chipsStyle.GRADIANTPINK,
    active: false,
  },
  {
    label: 'Beats with Exclusive',
    style: chipsStyle.ORANGE,
    active: false,
  },
];

// Filter

export const FilterList = [
  {
    label: 'Beat Types',
    filterType: 'checkbox',
    options: [
      { label: 'Beats', value: 'beats' },
      { label: 'Beat With Hook', value: 'Beat With Hook' },
      { label: 'Switch Beat', value: 'Switch Beat' },
    ],
  },
  {
    label: 'Mood',
    filterType: 'checkbox',
    options: [
      { label: 'Complex', value: 'complex' },
      { label: 'Epic', value: 'epic' },
      { label: 'Happy', value: 'happy' },
      { label: 'Hyper', value: 'hyper' },
      { label: 'Positive', value: 'positive' },
      { label: 'Powerful', value: 'powerful' },
      { label: 'Trippy', value: 'trippy' },
      { label: 'Accomplished', value: 'accomplished' },
      { label: 'Atmospheric', value: 'atmospheric' },
      { label: 'Captivating', value: 'captivating' },
      { label: 'Depressed', value: 'depressed' },
      { label: 'Disappointed', value: 'disappointed' },
      { label: 'Hopeful', value: 'hopeful' },
      { label: 'Hypnotic', value: 'hypnotic' },
      { label: 'Inspiring', value: 'inspiring' },
      { label: 'Peaceful', value: 'peaceful' },
      { label: 'Playful', value: 'playful' },
      { label: 'Suspenseful', value: 'suspenseful' },
      { label: 'Triumphant', value: 'triumphant' },
      { label: 'Upbeat', value: 'upbeat' },
      { label: 'Uplifting', value: 'uplifting' },
    ],
  },
  {
    label: 'Tempo',
    filterType: 'range',
    options: [],
  },

  {
    label: 'Genre',
    filterType: 'range',
    options: [],
  },

  {
    label: 'Keys',
    filterType: 'checkbox',
    options: [],
  },

  {
    label: 'Instruments',
    filterType: 'checkbox',
    options: [],
  },

  {
    label: 'Price',
    filterType: 'range',
    options: [],
  },
];
