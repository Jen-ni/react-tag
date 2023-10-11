import { KeyboardEvent, useCallback, useState } from 'react';
import styled from 'styled-components';
import { Tag, TagOptions } from '../components/tag.component';

export interface TagContainer {
  id: string;
  caseInsensitive?: boolean;
  className?: string;
  initialTags?: string[];
  onChange?: (tags: string[]) => void;
  placeholder?: string;
  tagOptions?: TagOptions;
  upperCase?: boolean;
  validate?: (label: string) => string | undefined;
  validationMessage?: string;
  width?: number;
}

export interface ContainerProps {
  width?: number;
}

export interface InputProps {
  upperCase?: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
`;

const Input = styled.input<InputProps>`
  border: 1px solid grey;
  outline: none;
  padding: 0.5rem;
  text-transform: ${({ upperCase }) => (upperCase ? 'uppercase' : 'none')};
  ::placeholder {
    text-transform: none;
  }
  width: 100%;
  &.error {
    background-image: linear-gradient(45deg, white calc(100% - 1rem), red 1rem);
    border: 1px solid red;
    outline: none;
    &:hover {
      border-color: red;
    }
    &:focus,
    &:active {
      background-image: linear-gradient(45deg, white calc(100% - 1rem), red 1rem);
      border-color: red;
      // outline: 4px solid red;
    }
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export interface TooltipProps {
  display: string;
}

export const TagContainer = ({
  id,
  caseInsensitive = false,
  className = 'tag',
  onChange,
  placeholder = 'Type and press enter to add',
  tagOptions = { minWidth: '50px', maxWidth: '200px', tooltipDelay: 350 },
  initialTags = [],
  upperCase = false,
  validate,
  validationMessage = 'Tag value must be unique',
  width,
}: TagContainer) => {
  const createTag = useCallback(
    (label: string) => ({
      className: `${className}-${label}`,
      id: `${id}-${label}`,
      label,
    }),
    [className, id],
  );

  const initTags = useCallback(() => {
    let filterDuplicates;
    if (caseInsensitive) {
      const lowerCaseLabels = initialTags.map((item) => item?.trim().toLocaleLowerCase());
      filterDuplicates = (item, index) => item && lowerCaseLabels.indexOf(item.toLocaleLowerCase()) === index;
    } else {
      filterDuplicates = (item, index) => item && initialTags.indexOf(item) === index;
    }
    return initialTags
      .map((label: string) => (upperCase ? label?.trim().toLocaleUpperCase() : label?.trim()))
      .filter(filterDuplicates)
      .filter((item) => !(validate && validate(item)))
      .map((label: string) => createTag(label));
  }, [caseInsensitive, createTag, initialTags, upperCase, validate]);

  const [error, setError] = useState<string>();
  const [tags, setTags] = useState<Tag[]>(initTags());

  const onTagClick = useCallback(
    (label: string) => () => {
      const newSelectionState = tags.filter((b) => b.label !== label);
      setTags(newSelectionState);
      if (onChange) onChange(newSelectionState.map((b) => b.label));
    },
    [tags, setTags, onChange],
  );

  const onInputChange = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement;
      let label = target.value?.trim();
      setError(undefined);
      if (label && e.key === 'Enter') {
        e.preventDefault();
        const validationError = validate && validate(label);
        if (upperCase) label = label.toLocaleUpperCase();
        if (
          (caseInsensitive && tags.some((item: Tag) => item.label?.toLowerCase() === label.toLowerCase())) ||
          tags.some((item: Tag) => item.label === label)
        ) {
          setError(validationMessage);
        } else if (validationError) {
          setError(validationError);
        } else {
          const tag = createTag(label);
          setTags((tags: Tag[]) => [...tags, tag]);
          target.value = '';
          onChange && onChange([...tags.map((item) => item.label), label]);
        }
      }
    },
    [caseInsensitive, createTag, onChange, tags, upperCase, validate, validationMessage],
  );

  return (
    <Container className={className} id={id} width={width}>
      <Input
        className={`${className}-input${error && ' error'}`}
        id={`${id}-input`}
        onKeyDown={onInputChange}
        placeholder={placeholder}
        upperCase={upperCase}
      />
      {tags.length > 0 && (
        <Tags>
          {tags.map((tag: Tag) => {
            return <Tag key={tag.id} onClick={onTagClick(tag.label)} tag={tag} tagOptions={tagOptions} />;
          })}
        </Tags>
      )}
    </Container>
  );
};
