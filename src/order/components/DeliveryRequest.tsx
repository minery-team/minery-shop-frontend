import { useState } from 'react';
import { Text, Spacing } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';

import { DELIVERY_REQUEST_TEXT } from 'order/model/DeliveryRequestText';
import { colors } from 'common/constants';

export function DeliveryRequest({
  onClose,
  setRequest,
}: {
  onClose: () => void;
  setRequest: (str: string) => void;
}) {
  const [selectedRequest, setSelectedRequest] = useState(-1);
  const [writtenText, setWrittenText] = useState('');

  return (
    <Wrapper>
      <Text size="2xl" weight="semibold" color={colors.gray900}>
        배송 시 요청사항
      </Text>
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
            <Text size="lg" weight="medium" color={colors.gray900}>
              {text}
            </Text>
          </RequestWrapper>
        );
      })}
      {selectedRequest === 3 && (
        <RequestTextWrapper>
          <RequestText
            placeholder="요청사항을 입력해주세요. (25자 이내)"
            maxLength={25}
            onChange={(e) => {
              setWrittenText(e.target.value);
            }}
          />
        </RequestTextWrapper>
      )}
      <Spacing height={24} />
      <Button
        size="xl"
        weight="medium"
        color={colors.defaultWhite}
        onClick={() => {
          if (selectedRequest !== 3)
            setRequest(DELIVERY_REQUEST_TEXT[selectedRequest]);
          else setRequest(writtenText);

          onClose();
        }}
      >
        다음
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const RequestWrapper = styled.div`
  display: flex;
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
    width: 12px;
    height: 12px;
    border-radius: 12px;
    background-color: ${({ isSelected }) =>
      isSelected ? colors.primary700Default : undefined};
  }
`;

const RequestTextWrapper = styled.div`
  height: 44px;
  padding: 12px 16px;
  border: 1px solid ${colors.gray200};
  border-radius: 6px;
`;

const RequestText = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;

const Button = styled(Text)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 58px;
  border-radius: 6px;
  background-color: ${colors.primary700Default};
`;
