import { ComponentProps, useState, useMemo } from 'react';
import { Spacing, Flex, useTextStyle } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';

import { DELIVERY_REQUEST_TEXT } from 'order/model/DeliveryRequestText';
import { colors } from 'common/constants';
import { MineryButton, MText } from 'common/components';

export function DeliveryRequest({
  onClose,
  setRequest,
}: {
  onClose: () => void;
  setRequest: (str: string) => void;
}) {
  const [selectedRequest, setSelectedRequest] = useState(-1);
  const [writtenText, setWrittenText] = useState('');
  const isActive = useMemo(() => {
    if (selectedRequest !== -1 && selectedRequest !== 3) return true;
    else {
      if (writtenText.length > 0) return true;
      return false;
    }
  }, [selectedRequest, writtenText]);

  return (
    <Container>
      <MText size="xxl" weight="semibold" color={colors.gray900}>
        배송 시 요청사항
      </MText>
      <Spacing height={4} />
      {DELIVERY_REQUEST_TEXT.map((text: string, index: number) => {
        return (
          <RequestWrapper
            key={text}
            onClick={() => {
              setSelectedRequest(index);

              if (index !== 3) setWrittenText('');
            }}
          >
            <Round isSelected={selectedRequest === index}>
              <div className="inner_round" />
            </Round>
            <MText size="lg" weight="medium" color={colors.gray900}>
              {text}
            </MText>
          </RequestWrapper>
        );
      })}
      {selectedRequest === 3 && (
        <RequestTextInput
          placeholder="요청사항을 입력해주세요. (25자 이내)"
          maxLength={25}
          onChange={(e) => {
            setWrittenText(e.target.value);
          }}
        />
      )}
      <Spacing height={24} />
      <Button
        isActive={isActive}
        onClick={() => {
          if (selectedRequest !== 3)
            setRequest(DELIVERY_REQUEST_TEXT[selectedRequest]);
          else setRequest(writtenText);

          onClose();
        }}
      >
        <MText
          size="xl"
          weight="medium"
          color={isActive ? colors.defaultWhite : colors.gray500}
        >
          다음
        </MText>
      </Button>
    </Container>
  );
}

const Container = styled.div`
  padding: 24px 20px;
`;

const RequestWrapper = styled(Flex.CenterVertical)`
  padding: 11px 0 11px 4px;
  gap: 6px;
`;

const Round = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 2px solid
    ${({ isSelected }) =>
      isSelected ? colors.primary700Default : colors.gray400};
  border-radius: 20px;

  .inner_round {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: ${({ isSelected }) =>
      isSelected ? colors.primary700Default : undefined};
  }
`;

function RequestTextInput(props: ComponentProps<'input'>) {
  const textStyle = useTextStyle({ size: 'base' });
  return <StyledRequestTextInput {...props} style={textStyle} />;
}

const StyledRequestTextInput = styled.input`
  &::placeholder {
    color: ${colors.gray400};
  }
  color: ${colors.gray900};
  padding: 12px 16px;
  border: 1px solid ${colors.gray200};
  border-radius: 6px;
  width: 100%;
`;

const Button = styled(MineryButton)<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 6px;
  background-color: ${({ isActive }) =>
    isActive ? colors.primary700Default : colors.gray200};
`;
