import { Divider, Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { useState } from 'react';

import { colors } from 'common/constants';
import { WarningTextType, WARNING_TEXT } from 'order/model/WarningText';

export function Warning() {
  const [isShowWaring, setIsShowWarning] = useState(
    Array(WARNING_TEXT.length).fill(false)
  );

  const textIndent = (
    prefixText: string,
    suffixText: string,
    suffixContent?: WarningTextType[]
  ) => {
    return (
      <TextIndent>
        <Text
          size="sm"
          weight="regular"
          color={colors.gray500}
          style={{ minWidth: '15px' }}
        >
          {prefixText}
        </Text>
        <Text size="sm" weight="regular" color={colors.gray500}>
          {suffixText}
          {suffixContent &&
            suffixContent.map((item) =>
              textIndent(item.prefix, item.suffix, item.suffixContent)
            )}
        </Text>
      </TextIndent>
    );
  };

  return (
    <>
      {WARNING_TEXT.map((item, index) => {
        return (
          <Wrapper
            key={item.category}
            onClick={() =>
              setIsShowWarning((prev) => {
                const tmp = [...prev];
                tmp[index] = !tmp[index];
                return tmp;
              })
            }
          >
            <WarningNavWrapper>
              <WarningNavTextWrapper>
                <img
                  src="/assets/exclamation_mark.svg"
                  alt="exclamation-mark"
                  width={12}
                  height={12}
                />
                <Text size="base" weight="medium" color={colors.gray700}>
                  {item.category}
                </Text>
              </WarningNavTextWrapper>
              <img
                src={`/assets/chevron_${
                  isShowWaring[index] ? 'up' : 'down'
                }.svg`}
                alt="chevron-up-down"
                width={24}
                height={24}
              />
            </WarningNavWrapper>
            <ItemWrapper>
              {isShowWaring[index] &&
                item.content.map((texts) => {
                  return (
                    <>
                      <Divider
                        width="calc(100% - 40px)"
                        height={1}
                        color={colors.gray200}
                        style={{ margin: '-4px 0 0 20px' }}
                      />
                      <WarningText>
                        <Text size="sm" weight="regular" color={colors.gray500}>
                          {texts.title}
                        </Text>
                        <br />
                        {texts.content?.map((text) =>
                          textIndent(
                            text.prefix,
                            text.suffix,
                            text.suffixContent
                          )
                        )}
                      </WarningText>
                    </>
                  );
                })}
            </ItemWrapper>
          </Wrapper>
        );
      })}
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: ${colors.gray100};
`;

const WarningNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
`;

const WarningNavTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const ItemWrapper = styled.div`
  max-height: 120px;
  overflow: scroll;
`;

const WarningText = styled.div`
  padding: 16px 20px 20px 20px;
`;

const TextIndent = styled.div`
  display: flex;
  gap: 2px;
`;
