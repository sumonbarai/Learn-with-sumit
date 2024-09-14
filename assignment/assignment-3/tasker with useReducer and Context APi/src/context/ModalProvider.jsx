/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const ModalContext = createContext(null);

const ModalProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <ModalContext.Provider value={{ show, setShow }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => useContext(ModalContext);

export { useModal, ModalProvider };
