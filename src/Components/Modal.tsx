import React from 'react';
import Modal from 'react-modal';
import s from './modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  bounds: [[number, number], [number, number]] | null;
}

const CustomModal: React.FC<ModalProps> = ({ isOpen, onRequestClose, bounds }) => {
  return (
    <div className={`${s.modal} ${isOpen ? s.active : ''}`}>
      <div style={{ margin: '0 auto' }}>
        <div>
          {' '}
          <h2>Координаты выделенной области</h2>
          {bounds?.length === 2 && (
            <div>
              <p>
                Юго-западный угол: {bounds[0][0]}, {bounds[0][1]}
              </p>
              <p>
                Северо-восточный угол: {bounds[1][0]}, {bounds[1][1]}
              </p>
            </div>
          )}
          <button onClick={onRequestClose}>Закрыть</button>{' '}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
