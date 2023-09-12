import React, { useState, useCallback } from 'react';
import Highlighter from 'react-highlight-words';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Popper from '@material-ui/core/Popper';
import styles from './autocomplete.module.scss';
import { CSSProperties } from '@material-ui/styles';
import { debounce } from '@material-ui/core';
import { DotLoading } from 'new-components/Search';

const DefaultRightIcon = ({ style }) => (
  <svg
    style={style || {}}
    width="51"
    height="51"
    viewBox="0 0 51 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Icons/Down">
      <path
        id="Vector 1"
        d="M17.9945 23.031C17.6187 22.6263 17.6421 21.9936 18.0468 21.6178C18.4516 21.242 19.0843 21.2654 19.4601 21.6701L17.9945 23.031ZM30.9945 21.6701C31.3703 21.2654 32.003 21.242 32.4077 21.6178C32.8125 21.9936 32.8359 22.6263 32.4601 23.031L30.9945 21.6701ZM25.2273 29.3506L25.9601 30.031C25.7709 30.2348 25.5054 30.3506 25.2273 30.3506C24.9492 30.3506 24.6837 30.2348 24.4945 30.031L25.2273 29.3506ZM19.4601 21.6701L25.9601 28.6701L24.4945 30.031L17.9945 23.031L19.4601 21.6701ZM24.4945 28.6701L30.9945 21.6701L32.4601 23.031L25.9601 30.031L24.4945 28.6701Z"
        fill="#01272F"
      />
    </g>
  </svg>
);

const OptionIcon = ({
  value,
  getOptionIcon,
  className,
}) => {
  const icon =
    typeof value != 'string' && value && getOptionIcon && getOptionIcon(value);
  if (icon) {
    return (
      <img className={className} src={icon} alt="icon" height={20} width={20} />
    );
  }
  return null;
};

const Highlight = ({ children }) => (
  <strong className="gordita-medium theme-teal">{children}</strong>
);

const Results = (props) => {
  const {
    id,
    options,
    selectedLabel,
    onSelect,
    getOptionLabel,
    getOptionIcon,
    optionClassName,
    hilightText,
  } = props;
  if (options && options.length <= 0) {
    return (
      <button
        className={`${styles.searc_result_option} ${optionClassName || ''}`}
        style={{ textAlign: 'center' }}
        onClick={(e) => {
          onSelect(e, null, null);
        }}
      >
        <span>No results found</span>
      </button>
    );
  }
  return (
    <>
      {options.map((o, i) => {
        const optionLabel = getOptionLabel(o);
        const selected = optionLabel == selectedLabel;
        return (
          <button
            key={`select-option-${id}-${i}`}
            data-selected={selected}
            className={`${styles.searc_result_option} ${
              selected ? styles.option_selected : ''
            } ${optionClassName || ''}`}
            onClick={(e) => {
              onSelect(e, o, i);
            }}
          >
            <OptionIcon value={o} getOptionIcon={getOptionIcon} />

            {hilightText ? (
              <Highlighter
                searchWords={selectedLabel ? [selectedLabel] : ''}
                textToHighlight={optionLabel}
                autoEscape={true}
                caseSensitive={false}
                highlightTag={Highlight}
              ></Highlighter>
            ) : (
              <span>{optionLabel}</span>
            )}
          </button>
        );
      })}
    </>
  );
};

export default function CustomInputAutocomplete(props) {
  const {
    id,
    options,
    onChange,
    onSearch,
    onSelectSuggestion,
    inputProps,
    popperProps,
    labelExtractor,
    optionIconExtractor,
    value,
    hideSearch,
    dropdownIconStyle,
    optionClassName = '',
    searchClassName = '',
  } = props;

  const selectBoxOptions = options || [];
  const [rootRef, setRootRef] = useState(null);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const [suggestions, setSearchSuggestions] = useState([]);

  const defaultLabelExtractor = (s) => (s ? `${s}` : '');

  const getOptionLabel = (v) => {
    const getLabel = labelExtractor || defaultLabelExtractor;
    if (v) {
      return getLabel(v);
    }
    return '';
  };

  const onSuperSearch = async (searchTerm) => {
    try {
      if (onSearch) {
        setSearchLoading(true);
        const suggestionsArr = await onSearch(searchTerm);
        setSearchSuggestions([...suggestionsArr]);
        setSearchLoading(false);
      }
    } catch (error) {
      setSearchLoading(false);
      setSearchSuggestions([]);
      console.log(error);
    }
  };

  const debouncedOnSearch = useCallback(debounce(onSuperSearch, 1100), []);

  const _onSearch = (value = '') => {
    setSearchTerm(value);
    if (onSearch) {
      setSearchLoading(true);
      debouncedOnSearch(value);
    }
  };

  const closeDropDown = () => {
    setOpen(false);
    setSearchSuggestions([]);
    setSearchLoading(false);
    setSearchTerm('');
  };

  const clickAwayHandler = () => {
    closeDropDown();
  };

  const filterOptions = (ops) => {
    if (searchTerm && onSearch ? searchTerm.length > 3 : true) {
      return ops.filter((t) =>
        getOptionLabel(t)
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase())
      );
    }
    return ops;
  };

  const onSelectValue = (e, selectedValue, index) => {
    setOpen(false);
    onChange(e, selectedValue, index);
  };

  const disabled = inputProps && (inputProps.disabled || inputProps.readOnly);

  const toggleOpen = (e) => {
    e.preventDefault();
    if (disabled) {
      return;
    }
    setOpen(!open);
  };

  const onClickSearch = (e) => {
    e.preventDefault();
    onSuperSearch(searchTerm);
  };

  const onChangeSearch = (e) => {
    const value = e.target.value || '';
    _onSearch(value);
  };

  const onClickSuggestion = (e, value) => {
    if (value && onSelectSuggestion) {
      onSelectSuggestion(value);
    }
    closeDropDown();
  };

  return (
    <ClickAwayListener touchEvent={false} onClickAway={clickAwayHandler}>
      <div
        id={`auto-complete-${id}`}
        className={styles.auto_complete_root}
        ref={setRootRef}
      >
        <OptionIcon
          value={value}
          getOptionIcon={optionIconExtractor}
          className={styles.auto_complete_result_icon}
        />
        <input
          {...(inputProps || {})}
          value={getOptionLabel(value)}
          type="text"
          readOnly={true}
          onClick={toggleOpen}
        />
        {!disabled && (
          <button onClick={toggleOpen}>
            <DefaultRightIcon style={dropdownIconStyle} />
          </button>
        )}
        <Popper
          {...(popperProps || {})}
          anchorEl={rootRef}
          open={open}
          style={{
            width: (rootRef && rootRef.clientWidth) || 300,
            zIndex: 2900,
            ...(popperProps?.style || {}),
          }}
        >
          {open && (
            <div className={styles.auto_complete_search_root}>
              {!hideSearch ? (
                <div
                  className={`${styles.auto_complete_search} ${searchClassName}`}
                >
                  <form action="#">
                    <input
                      type="text"
                      autoComplete="new-password"
                      placeholder="Search"
                      autoFocus
                      value={searchTerm || ''}
                      onChange={onChangeSearch}
                    />
                  </form>
                  <button
                    className={styles.search_button}
                    onClick={onClickSearch}
                  >
                    <img
                      src="/images/search-icon.svg"
                      alt="search icon"
                      height={20}
                      width={20}
                    />
                  </button>
                </div>
              ) : null}
              {searchLoading ? (
                <div className="mt-2 mb-n1">
                  <DotLoading />
                </div>
              ) : null}
              <div
                className={styles.auto_complete_search_results}
                style={{ padding: hideSearch ? '10px 0px' : '0px' }}
              >
                {onSearch && searchTerm ? (
                  <Results
                    id={`auto-complete-suggestion-${id}`}
                    selectedLabel={searchTerm}
                    options={suggestions}
                    getOptionLabel={getOptionLabel}
                    getOptionIcon={optionIconExtractor}
                    onSelect={onClickSuggestion}
                    optionClassName={optionClassName}
                    hilightText={true}
                  />
                ) : searchLoading ? null : (
                  <Results
                    id={`auto-complete-result-${id}`}
                    selectedLabel={getOptionLabel(value)}
                    options={filterOptions(selectBoxOptions)}
                    getOptionLabel={getOptionLabel}
                    getOptionIcon={optionIconExtractor}
                    onSelect={onSelectValue}
                    optionClassName={optionClassName}
                  />
                )}
              </div>
            </div>
          )}
        </Popper>
      </div>
    </ClickAwayListener>
  );
}
