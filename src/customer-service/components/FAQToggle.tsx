import { Text } from '@boxfoxs/bds-web';
import styled from '@emotion/styled';
import { colors } from 'common/constants';
import { useState } from 'react';

interface Props {
  question: string;
  answer: string;
}

const FAQToggle = ({ question, answer }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <LocalContainer>
      <QuestionContainer onClick={toggleExpanded}>
        <Text size="lg" weight="semibold" color={colors.gray900}>
          {question}
        </Text>
        <img
          src="/assets/chevron_up_gray.svg"
          width={24}
          height={24}
          alt="답변 자세히 보기"
          style={{
            transform: expanded ? 'rotate(0deg)' : 'rotate(180deg)',
          }}
        />
      </QuestionContainer>
      <AnswerContainer>
        {(expanded ? answer.split('\n') : [answer.split('\n')[0]]).map(
          (text) => (
            <div style={{ display: 'flex', width: '100%' }}>
              <div>
                <Dot />
              </div>
              <AnswerText expanded={expanded}>{text}</AnswerText>
            </div>
          )
        )}
      </AnswerContainer>
    </LocalContainer>
  );
};

export default FAQToggle;

const LocalContainer = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 6px;
`;

const QuestionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 11px;
  border-bottom: 1px solid ${colors.gray100};
`;

const AnswerContainer = styled.div`
  padding-top: 11px;
  overflow: hidden;
  display: inline-block;
  width: 100%;
`;

const AnswerText = styled.div<{ expanded: boolean }>`
  color: var(--gray-700, #4f4f4f);
  /* Base/Regular */
  font-size: 14px;
  font-family: Pretendard;
  line-height: 140%;
  flex: 1;
  text-overflow: ${(props) => (props.expanded ? 'unset' : 'ellipsis')};
  white-space: ${(props) => (props.expanded ? 'unset' : 'nowrap')};
  overflow: hidden;
`;

const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 100%;
  margin: 7px 10px;
  background: ${colors.gray700};
`;
