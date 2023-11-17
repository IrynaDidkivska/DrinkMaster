import { useState } from 'react';
import {
  StyledPopup,
  StyledPopupContent,
  StyledPopupWrapper,
} from './UserLogoPopup.styled';

export const UserLogoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledPopupWrapper>
      <button onClick={togglePopup}>Открыть Popup</button>

      {isOpen && (
        <StyledPopup>
          <StyledPopupContent>
            <p>Содержимое Popup</p>
            <button onClick={togglePopup}>Закрыть Popup</button>
          </StyledPopupContent>
        </StyledPopup>
      )}
    </StyledPopupWrapper>
  );
};
