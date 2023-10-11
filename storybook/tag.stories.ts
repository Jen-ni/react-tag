import type { Meta, StoryObj } from '@storybook/react';

import { TagContainer } from '../src/containers/tag.container';

const meta = {
  title: 'Components/Tag',
  component: TagContainer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof TagContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TagStory1: Story = {
  name: 'Tag, default props',
  args: {
    caseInsensitive: false,
    className: 'tag',
    id: 'tag',
    onChange: () => {
      console.log('onChange');
    },
    placeholder: 'Type and press enter to add',
    tagOptions: { minWidth: '50px', maxWidth: '200px', tooltipDelay: 350 },
    initialTags: ['Tag'],
    width: 200,
  },
};

export const TagStory2: Story = {
  name: 'Tag, initial tags',
  args: {
    id: 'tag-2',
    onChange: (tags) => {
      console.log(tags);
    },
    initialTags: [
      'Ready to Rumble',
      "Let's Have My Story Told",
      'Live A Little',
      '1.000.000 Fahrenheit',
      'The Voice You Need To Hear',
      'Life Is A Hurricane',
      'If I',
      'Fear Of Missing Out',
      'Too Old For Fairy Tales',
    ],
  },
};

export const TagStory3: Story = {
  name: 'Tag, tooltip',
  args: {
    id: 'tag-3',
    onChange: (tags) => {
      console.log(tags);
    },
    initialTags: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur, tortor in eleifend tincidunt, neque arcu blandit massa, ut pellentesque tellus leo at velit. Etiam imperdiet finibus gravida.',
    ],
    tagOptions: { maxWidth: '250px', minWidth: '50px', tooltipDelay: 1000 },
  },
};

export const TagStory4: Story = {
  name: 'Tag, placeholder',
  args: {
    id: 'tag-4',
    onChange: (tags) => {
      console.log(tags);
    },
    placeholder: 'Skriv och tryck på enter för att lägga till',
    tagOptions: { maxWidth: '250px', minWidth: '50px' },
  },
};

export const TagStory5: Story = {
  name: 'Tag, no duplicates',
  args: {
    id: 'tag-5',
    onChange: (tags) => {
      console.log(tags);
    },
    initialTags: [' Only once? ', 'Only once? ', ' Only once?', 'Only once?'],
    tagOptions: { maxWidth: '250px', minWidth: '50px' },
  },
};

export const TagStory6: Story = {
  name: 'Tag, case insensitive',
  args: {
    id: 'tag-6',
    caseInsensitive: true,
    onChange: (tags) => {
      console.log(tags);
    },
    initialTags: [' Only once? ', 'ONLY ONCE?'],
    tagOptions: { maxWidth: '250px', minWidth: '50px' },
  },
};

export const TagStory7: Story = {
  name: 'Tag, BIC validator',
  args: {
    id: 'tag-7',
    caseInsensitive: true,
    onChange: (tags) => {
      console.log(tags);
    },
    initialTags: ['AABAFI22', 'HANDFIHH', 'helsfihh', 'This should be filtered away'],
    tagOptions: { maxWidth: '250px', minWidth: '50px' },
    upperCase: true,
    /**
     * BIC is the business identifier code (ISO 9362). This BIC check is not a guarantee for authenticity.
     *
     * BIC pattern: BBBBCCLLbbb (8 or 11 characters long; bbb is optional)
     *
     * BIC definition in detail:
     * - First 4 characters - bank code (only letters)
     * - Next 2 characters - ISO 3166-1 alpha-2 country code (only letters)
     * - Next 2 characters - location code (letters and digits)
     *   a. shall not start with '0' or '1'
     *   b. second character must be a letter ('O' is not allowed) or one of the following digits ('0' for test (therefore not allowed), '1' for passive participant and '2' for active participant)
     * - Last 3 characters - branch code, optional (shall not start with 'X' except in case of 'XXX' for primary office) (letters and digits)
     */
    validate: (value) => {
      return /^([A-Z]{6}[A-Z2-9][A-NP-Z1-2])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(value.toUpperCase())
        ? undefined
        : 'Only valid BIC allowed';
    },
  },
};
