import './index.less';

type Props = {
  isOpen: boolean;
  onClose: () => void;
} & WithChildren;

export const Modal = ({ children, isOpen, onClose }: Props) => {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div
            className="modal__container"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                onClose();
              }
            }}
          >
            <div className="modal__wrapper">
              <div
                className="modal__close"
                onClick={() => {
                  onClose();
                }}
              ></div>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
