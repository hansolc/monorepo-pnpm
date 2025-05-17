// deprecated

import { createContext, PropsWithChildren, useContext, useRef } from "react";

type ValidatorRegistry = Record<string, () => boolean>;

interface FormContextProps {
  registerValidation: (key: string, validator: () => boolean) => void;
  unregisterValidation: (key: string) => void;
  isFormValid: () => boolean;
}

const FormContext = createContext<FormContextProps>({
  registerValidation: () => {},
  unregisterValidation: () => {},
  isFormValid: () => false,
});

export const useForm = () => useContext(FormContext);

export const FormProvider = ({ children }: PropsWithChildren) => {
  // state을 사용하지 않은 이유는 Form Validation은 최종 버튼을 눌렀을 때 한번만 검사하면 된다.
  // 따라서 re-rendering의 필요가 없다.
  const validators = useRef<ValidatorRegistry>({});

  const registerValidation = (key: string, fn: () => boolean) => {
    validators.current[key] = fn;
  };

  // 컴포넌트 unmount시 해제
  const unregisterValidation = (key: string) => {
    delete validators.current[key];
  };

  // 등록된 모든 유효성이 통과되는지 테스트
  const isFormValid = () => {
    console.log(validators);
    return Object.values(validators.current).every((fn) => fn());
  };

  return (
    <FormContext.Provider
      value={{ registerValidation, unregisterValidation, isFormValid }}
    >
      {children}
    </FormContext.Provider>
  );
};
