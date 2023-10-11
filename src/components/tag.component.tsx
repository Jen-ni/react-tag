import { MouseEvent } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export interface TagOptions {
  minWidth: string;
  maxWidth: string;
  tooltipDelay?: number;
}

const SpanOverflowHidden = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
`;

const StyledTag = styled.span<TagOptions>`
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ minWidth }) => minWidth || '50px'};
  max-width: ${({ maxWidth }) => maxWidth || '200px'};
  text-wrap: nowrap;
  padding: 5px;
  background: honeydew;
  color: grey;
  border: 1px solid lightslategrey;
  border-radius: 4px;
  span,
  button {
    height: 16px;
  }
  button {
    background: honeydew;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    border: none;
    margin-left: 5px;
    cursor: pointer;
    &:focus {
      border: 1px solid grey;
      svg {
        color: grey;
      }
    }
    &:focus-visible {
      outline: none;
    }
  }
  svg {
    color: grey;
    width: 10px;
  }
  &:hover button {
    svg {
      color: grey;
    }
  }
`;

export interface Tag {
  id: string;
  label: string;
  className?: string;
}

export interface TagProps {
  tag: Tag;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  tagOptions: TagOptions;
}

export const Tag = ({ tag, onClick, tagOptions }: TagProps) => {
  const { id, className = 'tag' } = tag;

  return (
    <StyledTag id={id} className={className} {...tagOptions}>
      <SpanOverflowHidden>{tag.label}</SpanOverflowHidden>
      <button onClick={onClick}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </StyledTag>
  );
};
