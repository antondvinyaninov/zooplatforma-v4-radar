import { createContext, useContext, useState, useCallback, useMemo, ReactNode, ReactElement } from 'react';

interface ModalContextType {
  activeModal: string | null;
  setActiveModal: (id: string | null) => void;
  modalElements: Record<string, ReactElement>;
  registerModal: (id: string, element: ReactElement) => void;
  unregisterModal: (id: string) => void;
}

export const ModalContext = createContext<ModalContextType>({
  activeModal: null,
  setActiveModal: () => {},
  modalElements: {},
  registerModal: () => {},
  unregisterModal: () => {},
});

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [modalElements, setModalElements] = useState<Record<string, ReactElement>>({});

  const registerModal = useCallback((id: string, element: ReactElement) => {
    setModalElements((prev) => ({ ...prev, [id]: element }));
  }, []);

  const unregisterModal = useCallback((id: string) => {
    setModalElements((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  const contextValue = useMemo(() => ({
    activeModal,
    setActiveModal,
    modalElements,
    registerModal,
    unregisterModal
  }), [activeModal, modalElements, registerModal, unregisterModal]);

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};
