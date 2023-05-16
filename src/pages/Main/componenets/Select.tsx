import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface UiSelectItem {
  label: string;
  data?: any;
}

interface Props {
  items: UiSelectItem[];
  dropUp?: boolean;
  small?: boolean;
  onSelect(selected: UiSelectItem): any;
}

const randomString = () =>
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);

export const Select = ({ options, onChange, value, small, dropUp = false }) => {
  const node = useRef();

  const [open, setOpen] = useState(false);

  const handleClick = (e: any) => {
    // @ts-ignore
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    setOpen(false);
  };

  const handleChange = (selectedValue) => {
    onChange(selectedValue);
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <SelectWrapper ref={node} open={open} small={small} dropUp={dropUp}>
      <SelectCurrent open={open} small={small} onClick={() => setOpen(!open)}>
        {value}
      </SelectCurrent>

      {
        <SelectListWrapper dropUp={dropUp} small={small} open={open}>
          {open &&
            options
              .filter((opt) => opt !== value)
              .map((opt, index, arr) => (
                <SelectListItem
                  key={`select-item-${randomString()}`}
                  small={small}
                  last={index === arr.length - 1}
                  onClick={() => handleChange(opt)}
                >
                  {opt}
                </SelectListItem>
              ))}
        </SelectListWrapper>
      }
    </SelectWrapper>
  );
};

const itemHeightBig = '40px';
const itemHeightSmall = '40px';

const getItemHightSize = (small: boolean) =>
  small ? itemHeightSmall : itemHeightBig;

const SelectListItem = styled.div<{
  small: boolean;
  last: boolean;
  dropUp: boolean;
}>`
  display: flex;
  min-height: ${(props) => getItemHightSize(props.small)};
  max-height: ${(props) => getItemHightSize(props.small)};
  align-items: center;
  padding-left: 13px;
  justify-content: flex-start;

  &:hover {
    background: #282831;
  }
`;

const SelectListWrapper = styled.div`
  width: 100%;
  position: absolute;
  background: #454550;
  list-style: none;

  border-top-left-radius: ${({ dropUp }) => (dropUp ? '10px' : '0px')};
  border-top-right-radius: ${({ dropUp }) => (dropUp ? '10px' : '0px')};
  border-bottom-left-radius: ${({ dropUp }) => (dropUp ? '0px' : '10px')};
  border-bottom-right-radius: ${({ dropUp }) => (dropUp ? '0px' : '10px')};

  & > div:first-child {
    &:hover {
      border-top-left-radius: ${({ dropUp }) => (dropUp ? '10px' : '0px')};
      border-top-right-radius: ${({ dropUp }) => (dropUp ? '10px' : '0px')};
    }
  }

  & > div:last-child {
    &:hover {
      border-bottom-left-radius: ${({ dropUp }) => (dropUp ? '0px' : '10px')};
      border-bottom-right-radius: ${({ dropUp }) => (dropUp ? '0px' : '10px')};
    }
  }

  top: ${({ dropUp, small }) => {
    const size = getItemHightSize(small);
    if (dropUp) {
      return 'calc((' + size + ' * 2) * -1)';
    }

    return size;
  }};
`;

const ItemStyled = styled.div`
  display: flex;
  align-items: center;
  padding-left: 13px;
  justify-content: flex-start;
`;

const SelectCurrent = styled(ItemStyled)<{ small: boolean; open: boolean }>`
  min-height: ${(props) => getItemHightSize(props.small)};
  max-height: ${(props) => getItemHightSize(props.small)};

  & > div {
    width: 100%;
    height: 100%;
    padding-left: 13px;
  }

  &:hover {
    background-color: ${(props) => (props.open ? '' : '#50505B')};
    border-radius: ${(props) => (props.open ? '' : '10px')};
  }

  &::after {
    content: '';
    top: ${(props) => {
      if (props.small) {
        return props.open ? '10px' : '6px';
      }

      return props.open ? '15px' : '8px';
    }};
    right: ${(props) => (props.small ? '10px' : '25px')};
    border: solid #fff;
    padding: ${(props) => (props.small ? '3px' : '5px')};
    display: inline-block;
    position: absolute;
    border-width: 0 2px 2px 0;

    transform: rotate(${(props) => (props.open ? '225deg' : '45deg')});
    -webkit-transform: rotate(${(props) => (props.open ? '225deg' : '45deg')});

    transition: 0.5s;
  }
`;

const getSelectWrapperBorderRaius = (dropUp, open) => {
  if (dropUp) {
    return `
      border-top-left-radius: ${open ? '0px' : '1px'};
      border-top-right-radius: ${open ? '0px' : '1px'};
      border-bottom-left-radius: 1px;
      border-bottom-right-radius: 1px;
    `;
  }

  return `
      border-top-left-radius: 1px;
      border-top-right-radius: 1px;
      border-bottom-left-radius: ${open ? '0px' : '1px'};
      border-bottom-right-radius: ${open ? '0px' : '1px'};
  `;
};

const SelectWrapper = styled.div<{
  small: boolean;
  dropUp: boolean;
  open: boolean;
  ref: any;
}>`
  cursor: pointer;

  color: white;
  z-index: 1;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  position: relative;
  min-width: ${(props) => (props.small ? '60px' : '80px')};
  min-height: ${(props) => getItemHightSize(props.small)};
  max-height: ${(props) => getItemHightSize(props.small)};
  background: black;

  ${(props) =>
    getSelectWrapperBorderRaius(
      props.dropUp,
      props.open
    )}/* border-top-left-radius: 1px;
  border-top-right-radius: 1px;
  border-bottom-left-radius: ${(props) => (props.open ? '0px' : '0px')};
  border-bottom-right-radius: ${(props) => (props.open ? '0px' : '0px')}; */
`;
