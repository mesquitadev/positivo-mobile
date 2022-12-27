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
  name: string;
  icon: string;
  error: string | undefined;
}

interface InputRef {
  focus(): void;
}

const InputSearch: React.ForwardRefRenderFunction<InputRef, Props> = (
  { name, icon, error, ...rest }: Props,
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
    <Container isFocused={isFocused} isErrored={!!error}>
      <InputContainer>
        <Input
          icon={icon}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputElementRef}
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
  );
};

export default forwardRef(InputSearch);
