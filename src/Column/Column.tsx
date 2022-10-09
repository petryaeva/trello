import { useState, useCallback } from "react";
import { MdOutlineAdd } from "react-icons/md";
import cn from 'classnames';
import { COLORS } from "../app/ColorsConstants";
import Button from "../Button/Button";
import "./column.scss";
import { ITrelloList } from "../redux/trelloReduxTypes";
import { useDispatch } from "react-redux";
import { setColumnTitle } from "../redux/trelloActionCreators";
import { ENTER_KEY } from "../app/constants";

function Column({id, title, tasks}: ITrelloList) {
  const dispatch = useDispatch();
  const [header, setHeader] = useState(title);
  const [isEditHeader, setIsEditHeader] = useState(false);

  const setActiveTextarea = () => {
    // TODO: add focus on textarea when click by header
    // headerRef.current?.focus();
    setIsEditHeader(true);
  }

  const getEditedHeader = useCallback((event) => {
    const text = event.target.value;

    setHeader(text);
	}, []);

  const setEditedHeader = useCallback((event) => {
    if (event.keyCode === ENTER_KEY) {
      console.log('kek');
      event.preventDefault();
      dispatch(setColumnTitle(header, id));
      setIsEditHeader(false);
    }
	}, [id, header]);

  return (
    <section className="column" tabIndex={1} key={id}>
      <div className="column__header" onFocus={setActiveTextarea} onClick={setActiveTextarea}>
          <h2 className="g--ellipsis" tabIndex={2}>{header}</h2>
          <textarea
            onChange={getEditedHeader}
            onKeyDown={setEditedHeader}
            value={header}
            autoFocus
            className={cn('column__header-textarea', {'column__header-textarea--visible': isEditHeader})}
            aria-label={header}
            maxLength={100}
          >
            {header}
          </textarea>
      </div>

      {tasks && <div className="column__content">
        {tasks.map(item => <>{item}</>)}
      </div>}

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
