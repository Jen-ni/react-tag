import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { TagContainer } from '../src/containers/tag.container';

const TestComponent = (props) => <TagContainer {...props} />;

describe('Tag unit tests', () => {
  test('verify case-sensitive initial tags', () => {
    render(TestComponent({ id: 'tag', initialTags: ['One', 'ONE'] }));
    expect(screen.getAllByText('One', { exact: false })).toHaveLength(2);
  });

  test('verify case-insensitive initial tags', () => {
    render(TestComponent({ caseInsensitive: true, initialTags: ['One', 'ONE'] }));
    expect(screen.getAllByText('One', { exact: false })).toHaveLength(1);
  });

  test('verify empty tag not allowed', () => {
    const onChange = jest.fn();
    render(TestComponent({ id: 'tag', initialTags: ['One'], onChange }));
    fireEvent.keyDown(screen.getByPlaceholderText('Type and press enter to add'), {
      key: 'Enter',
      code: 'Enter',
      charCode: 13,
    });
    expect(onChange).toHaveBeenCalledTimes(0);
  });

  test('verify a new tag is added successfully', () => {
    const onChange = jest.fn();
    const validate = jest.fn();
    render(TestComponent({ id: 'tag', initialTags: ['One'], onChange, validate }));
    fireEvent.change(screen.getByPlaceholderText('Type and press enter to add'), {
      target: { value: 'Am I visible?' },
    });
    fireEvent.keyDown(screen.getByPlaceholderText('Type and press enter to add'), {
      key: 'Enter',
      code: 'Enter',
      charCode: 13,
    });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(validate).toHaveBeenCalledTimes(3);
    expect(screen.getAllByText('Am I visible?')).toHaveLength(1);
  });

  test('verify a dublicate is not allowed', () => {
    const onChange = jest.fn();
    render(TestComponent({ id: 'tag', initialTags: ['One'], onChange }));
    fireEvent.change(screen.getByPlaceholderText('Type and press enter to add'), {
      target: { value: 'One' },
    });
    fireEvent.keyDown(screen.getByPlaceholderText('Type and press enter to add'), {
      key: 'Enter',
      code: 'Enter',
      charCode: 13,
    });
    expect(onChange).toHaveBeenCalledTimes(0);
    expect(screen.getAllByText('One', { exact: false })).toHaveLength(1);
  });

  test('verify a case-sensitive dublicate is allowed', () => {
    const onChange = jest.fn();
    render(TestComponent({ id: 'tag', initialTags: ['One'], onChange }));
    fireEvent.change(screen.getByPlaceholderText('Type and press enter to add'), {
      target: { value: 'one' },
    });
    fireEvent.keyDown(screen.getByPlaceholderText('Type and press enter to add'), {
      key: 'Enter',
      code: 'Enter',
      charCode: 13,
    });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(screen.getAllByText('One', { exact: false })).toHaveLength(2);
  });

  test('verify a case-insensitive dublicate is not allowed', () => {
    const onChange = jest.fn();
    render(TestComponent({ id: 'tag', caseInsensitive: true, initialTags: ['One'], onChange }));
    fireEvent.change(screen.getByPlaceholderText('Type and press enter to add'), {
      target: { value: 'one' },
    });
    fireEvent.keyDown(screen.getByPlaceholderText('Type and press enter to add'), {
      key: 'Enter',
      code: 'Enter',
      charCode: 13,
    });
    expect(onChange).toHaveBeenCalledTimes(0);
    expect(screen.getAllByText('One', { exact: false })).toHaveLength(1);
  });

  test('verify a tag is removed succesfully', () => {
    const onChange = jest.fn();
    render(TestComponent({ id: 'tag', initialTags: ['One'], onChange }));
    expect(screen.queryByText('One')).not.toBeNull();
    fireEvent.click(screen.getByRole('button'));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(screen.queryByText('One')).toBeNull();
  });
});
