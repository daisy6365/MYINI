import { useCallback, Dispatch, useRef, useEffect } from 'react';

import { IMPORTANCE_LIST, IMPORTANCE_TEXT } from 'constants/index';
import './style.scss';
import { ELEMENTPOS, ROW } from 'types/Requirement';

interface Props {
  setIsImportanceOpen: Dispatch<React.SetStateAction<boolean>>;
  clickElementPos: ELEMENTPOS;
  idx: number;
  store: any;
}

export default function ImportanceModal({
  setIsImportanceOpen,
  clickElementPos,
  idx,
  store,
}: Props) {
  const modalContainer = useRef() as React.MutableRefObject<HTMLDivElement>;

  const selectImportance = useCallback(
    (importance: number) => {
      store.pjt.rows[idx].importance = importance;
      setIsImportanceOpen(false);
    },
    [store, idx],
  );

  useEffect(() => {
    modalContainer.current.style.left = `${clickElementPos.x}px`;
    modalContainer.current.style.top = `${clickElementPos.y}px`;
    modalContainer.current.style.width = `${clickElementPos.width}px`;
  }, [clickElementPos]);

  return (
    <div
      className="division-list-empty"
      onClick={() => setIsImportanceOpen(false)}
    >
      <div
        className="division-list-container"
        onClick={(e) => e.stopPropagation()}
        ref={modalContainer}
      >
        <div className="division-list-overflow">
          {IMPORTANCE_LIST.map((e: number, i: number) => {
            return (
              <span
                className={`division-row ${
                  store.pjt.rows[idx].importance === e && 'select'
                }`}
                key={i}
                onClick={() => selectImportance(e)}
              >
                {IMPORTANCE_TEXT[e]}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
