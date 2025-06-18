import { useRef, useState } from "react";
import { fieldSet, input, label as labelStyle } from "./Label.css";
import { sprinkles } from "@styles/sprinkles.css";
import useFocus from "@hooks/useFocus";
import TextField from "@base/TextField";
import { InputStateTypes } from "src/base/TextField/types";
import { FrameworkInputProps } from "../types";
import useTyping from "@hooks/useTyping";

const Input = ({
  label,
  clear,
  error,
  inputConfig,
  outlined,
  className,
  ...props
}: FrameworkInputProps) => {
  const { disabled, value, onChange } = props;
  const {
    prefix,
    suffix,
    leadingIcon,
    trailingIcon,
    supportingText,
    fixedHeight,
  } = inputConfig ?? {};
  // uncontrolled input 제어를 위함
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  // input tag 상태
  const [inputState, setInputState] = useState<InputStateTypes>("blur");
  const focusEvents = useFocus({
    onFocusCallback: () => setInputState("focused"),
    onBlurCallback: () => setInputState("blur"),
  });
  const refValue = inputRef.current?.value;
  // Controlled 가 아닌 경우 이벤트 리스너 등록
  const { isTyping, startTyping } = useTyping({
    value: value,
    inputRef: inputRef,
  });
  return (
    <TextField
      value={value}
      onChange={onChange}
      state={inputState}
      error={error}
      isTyping={isTyping}
      className={className}
    >
      <TextField.Fieldset
        className={fieldSet({
          type: outlined ? "outlined" : "filled",
          fixedHeight: !!fixedHeight,
        })}
        disabled={disabled}
        inputRef={inputRef}
      >
        {leadingIcon && (
          <TextField.IconWrapper>{leadingIcon}</TextField.IconWrapper>
        )}
        {/* Outlined 일 경우에는 fieldset, legend 조합 유지를 위해 div 바깥에서 렌더링 */}
        {outlined && (
          <TextField.FloatingLabel
            className={labelStyle({
              floated: inputState === "focused" || !!refValue,
              leadingIcon: !!leadingIcon,
            })}
            tag="legend"
          >
            {label}
          </TextField.FloatingLabel>
        )}
        <div className={sprinkles({ flex: 1, position: "relative" })}>
          {/* Filled 일 경우에는 label 과 flex-col 형식으로 렌더링 */}
          {!outlined && (
            <TextField.FloatingLabel
              className={labelStyle({
                floated: inputState === "focused" || !!refValue,
              })}
            >
              {label}
            </TextField.FloatingLabel>
          )}
          <TextField.InputWithFix
            ref={inputRef}
            pfix={{ position: "prefix", text: prefix }}
            sfix={{ position: "suffix", text: suffix }}
            className={input({ fixedHeight: !!fixedHeight })}
            fixedHeight={fixedHeight}
            type={props.type}
            name={props.name}
            {...focusEvents}
          />
        </div>
        {!!trailingIcon && (
          <TextField.IconWrapper>{trailingIcon}</TextField.IconWrapper>
        )}
        {clear && (
          <TextField.Clear
            as={clear}
            elRef={inputRef}
            startTyping={startTyping}
          />
        )}
      </TextField.Fieldset>
      <TextField.SupportingText className={sprinkles({ px: 16 })}>
        {supportingText}
      </TextField.SupportingText>
    </TextField>
  );
};

export default Input;
