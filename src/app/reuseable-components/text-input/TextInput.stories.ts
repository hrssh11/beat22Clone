import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { TextInputComponent } from './text-input.component';

const meta: Meta<TextInputComponent> = {
  title: 'Atoms/Inputs/TextInput',
  component: TextInputComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  tags: ['autodocs'],
  render: (args: TextInputComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<TextInputComponent>;

export const Default: Story = {
  args: {
    placeholder: 'Placeholder text',
    label: 'Label Text',
    id: 'input-01',
  },
};
export const Required: Story = {
  args: {
    value: 'Required Input Text',
    label: 'Label Text',
    id: 'input-02',
    required: true,
  },
};
export const Disabled: Story = {
  args: {
    placeholder: 'Placeholder text',
    label: 'Label Text',
    value: 'Text area input text',
    disabled: true,
    id: 'input-03',
  },
};
export const Error: Story = {
  args: {
    value: 'Input Text',
    label: 'Label Text',
    error: true,
    id: 'input-04',
    errorMessage: 'Input Error Message',
  },
};
export const Hinted: Story = {
  args: {
    value: 'Hinted Input Text',
    label: 'Label Text',
    id: 'input-05',
    hint: 'Input hint',
  },
};
export const IconRight: Story = {
  args: {
    value: 'Input Text',
    id: 'input-06',
    iconRight: 'calendar',
  },
};
export const IconLeft: Story = {
  args: {
    value: 'Input Text',
    id: 'input-06',
    iconLeft: 'search',
  },
};
export const IconRightDisabled: Story = {
  args: {
    value: 'Input Text',
    id: 'input-07',
    iconRight: 'search',
    disabled: true,
  },
};
