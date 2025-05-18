import { useRef, useState } from "react";

type RuleSet = {
  required?: string | boolean;
  pattern?: {
    value: RegExp;
    message: string;
  };
  validate?: (value: string) => true | string;
};

type Validator = (value: string) => string | null;

const useFormValidation = <T extends Record<keyof T, string>>() => {
  const fields = useRef<Partial<Record<keyof T, { validator: Validator }>>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const register = (name: keyof T, rules: RuleSet) => {
    const validator: Validator = (value) => {
      if (rules.required) {
        const requiredMsg =
          typeof rules.required === "string"
            ? rules.required
            : "필수 입력입니다";
        if (!value) return requiredMsg;
      }

      if (rules.pattern && !rules.pattern.value.test(value)) {
        return rules.pattern.message;
      }

      if (rules.validate) {
        const result = rules.validate(value);
        if (result !== true) return result;
      }

      return null;
    };

    fields.current[name] = { validator };

    return {
      name,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const errorMsg = validator(value);
        setErrors((prev) => ({ ...prev, [name]: errorMsg || "" }));
      },
    };
  };

  //   매개변수로 콜백함수를 등록하여 훅을 사용하는곳에서도 등록된 Form data 에 접근이 가능하도록 하기 위해 콜백함수를 등록합니다.
  const handleSubmit = (onValid: (data: T) => void) => {
    return (e: React.FormEvent) => {
      e.preventDefault();

      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      // FormData 객체에서 일반 JS 객체로 변환하기 위해
      // formdata.get("username")은 가능하지만 formData.username은 불가
      const values = Object.fromEntries(formData.entries()) as T;

      // 등록한 fields ref의 validator 실행
      // 이전 register 등록시 validator에 대한 정보가 클로저로 담겨짐
      const newErrors: Partial<Record<keyof T, string>> = {};
      for (const key in fields.current) {
        const value = values[key] ?? "";
        const err = fields.current[key]?.validator(value);
        if (err) newErrors[key] = err;
      }

      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
        onValid(values);
      }
    };
  };

  return { register, handleSubmit, errors };
};

export default useFormValidation;
