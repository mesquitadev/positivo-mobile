import React, { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import {
  Container,
  Icon,
  IconContainer,
  IconError,
  Input,
  InputContainer,
  TextError,
  TooltipButton,
} from './styles';

interface Props extends TextInputProps {
  control: Control | undefined;
  name: string;
  icon: string;
  error: string | undefined;
}

interface InputRef {
  focus(): void;
}

const InputForm: React.ForwardRefRenderFunction<InputRef, Props> = (
  { control, name, icon, error, ...rest }: Props,
  ref
) => {
  const inputElementRef = useRef<any>(null);
  const [isFocused, setIsFocused] = useState(false);
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current?.focus();
    },
  }));

  return (
    <Controller
      control={control}
      render={({ field: { onChange, value } }) => (
        <Container isFocused={isFocused} isErrored={!!error}>
          <InputContainer>
            <Input
              icon={icon}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              ref={inputElementRef}
              onChangeText={onChange}
              value={value}
              {...rest}
            />
          </InputContainer>
          {icon && (
            <IconContainer>
              <Icon name={icon} />
            </IconContainer>
          )}

          {error && (
            <TooltipButton popover={<TextError>{error}</TextError>} actionType="press">
              <IconError name="alert-circle" />
            </TooltipButton>
          )}
        </Container>
      )}
      name={name}
    />
  );
};

export default forwardRef(InputForm);
