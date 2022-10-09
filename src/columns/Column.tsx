import { useState, useCallback, useRef } from "react";
import { MdOutlineAdd } from "react-icons/md";
import cn from 'classnames';
import { COLORS } from "../app/ColorsConstants";
import Button from "../Button/Button";
import "./column.scss";

function Column() {
  const [header, setHeader] = useState("Some header");
  const [isEditHeader, setIsEditHeader] = useState(false);
  const headerRef = useRef(null);

  const setActiveTextarea = () => {
    headerRef?.current?.focus();
    setIsEditHeader(true);
  }

  const getEditedHeader = useCallback(() => {
    console.log(headerRef);
    const text = headerRef?.current?.value || '';

    setHeader(text);
	}, []);

  return (
    <section className="column">
      <div className="column__header" onFocus={setActiveTextarea} onClick={setActiveTextarea}>
          <h2 className="g--ellipsis">{header}</h2>
          <textarea
            ref={headerRef}
            onChange={getEditedHeader}
            value={header}
            autoFocus
            className={cn('column__header-textarea', {'column__header-textarea--visible': isEditHeader})}
            aria-label={header}
            maxLength={100}
          >
            {header}
          </textarea>
      </div>
      <div className="column__content"></div>

      <Button text="Добавить карточку">
        <MdOutlineAdd
          color={COLORS.gray}
          size={18}
          className="column__btn-icon"
        />
      </Button>
    </section>
  );
}

export default Column;
