# react-tag

## Description

Tag component.

Demo can be accessed by running: npm install && npm run storybook

Storybook also has up to date docs and API description for this component.

## Installation

```
npm install react-tag
```

## Demo

Open [demo](http://Jen-ni.github.io/react-tag/storybook-static)

## Code example

```tsx
import { TagContainer } from 'react-tag';

export const SomeComponent = () => {
  return (
    <TagContainer
      className='tag'
      id='tag'
      onChange={(tags: string[]) => {}}
      placeholder='Type and press enter to add'
    />
  );
};
```

## API

### ComponentProps

| Name              | Description                                                                                                                                  | Type         | Optional | Default value                                              |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | :------: | ---------------------------------------------------------- |
| id                | ID attribute for tag container element                                                                                                       | `string`     |          |                                                            |
| caseInsensitive   | False, if tags are case-sensitive. True, otherwise.                                                                                          | `boolean`    |    ✓     | false                                                      |
| className         | Class attribute for tag container element                                                                                                    | `string`     |    ✓     | 'tag'                                                      |
| initialTags       | Initial tag selection                                                                                                                        | `string[]`   |    ✓     | []                                                         |
| onChange          | Callback function for selection change                                                                                                       | `function`   |    ✓     |                                                            |
| placeholder       | Defines if multiple buttons can be selected.                                                                                                 | `string`     |    ✓     | 'Type and press enter to add'                              |
| tagOptions        | Object that allows to override min and max width and tooltip delay for tags                                                                  | `TagOptions` |    ✓     | { minWidth: '50px', maxWidth: '200px', tooltipDelay: 350 } |
| upperCase         | If true, a tag is capitalized automatically False by default.                                                                                | `function`   |    ✓     |                                                            |
| validate          | A custom validation function, which gets tag label as input and returns in case of invalid tag returns an error message and falsy otherwise. | `function`   |    ✓     |                                                            |
| validationMessage | A validation error message, which is shown when user tries to add the same tag twice.                                                        | `number`     |    ✓     | 'Tag value must be unique'                                 |
| width             | The width of the component can be defined in pixels.                                                                                         | `number`     |    ✓     | '100%'                                                     |

## Change log

View the [Change log](CHANGELOG.md)

## Migrate guide

View the [Migrate guide](MIGRATIONGUIDE.md) between major versions

## Storybook docs

Storybook demo has more detailed auto generated code examples and API docs for this component.
