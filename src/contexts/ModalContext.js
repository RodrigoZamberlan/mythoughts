import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, handleModal }}>
      {children}
    </ModalContext.Provider>
  );
};
