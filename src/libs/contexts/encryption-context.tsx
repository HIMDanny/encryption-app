import { StorageKey } from "#libs/enums/enums";
import { encryptionService } from "#libs/services/encryption/encryption";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type EncryptionValues = {
  resultPhrase: string;
  encrypt: (phrase: string, key: string) => void;
  decrypt: (phrase: string, key: string) => void;
};

const EncryptionContext = createContext<EncryptionValues>({
  resultPhrase: "",
  encrypt: () => {},
  decrypt: () => {},
});

const EncryptionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [resultPhrase, setResultPhrase] = useState("");

  const encrypt = useCallback((phrase: string, key: string) => {
    localStorage.setItem(StorageKey.SECRET_KEY, key);
    const newPhrase = encryptionService.encode(phrase, key);
    setResultPhrase(newPhrase);
  }, []);

  const decrypt = useCallback((phrase: string, key: string) => {
    localStorage.setItem(StorageKey.SECRET_KEY, key);
    const newPhrase = encryptionService.decode(phrase, key);
    setResultPhrase(newPhrase);
  }, []);

  const encryptionValues: EncryptionValues = useMemo(
    () => ({
      resultPhrase,
      encrypt,
      decrypt,
    }),
    [resultPhrase, encrypt, decrypt],
  );

  return (
    <EncryptionContext.Provider value={encryptionValues}>
      {children}
    </EncryptionContext.Provider>
  );
};

const useEncryption = () => useContext(EncryptionContext);

export { EncryptionContext, EncryptionProvider, useEncryption };
