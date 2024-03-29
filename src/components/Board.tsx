import styled from 'styled-components';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatIcon from '@mui/icons-material/Chat';
import { Stack, styled as MUIStyled } from '@mui/material';

const Board = () => {
  return (
    <BoardContainer>
      <TitleContainer>
        <Stack direction="row">
          <Title direction="row">
            <StarIcon />
            <span>토픽 베스트</span>
          </Title>
          <Stack direction="row">
            <span>더보기</span>
            <RightIcon />
          </Stack>
        </Stack>
      </TitleContainer>
      <Body>
        <Stack direction="row">
          <Category>프로야구</Category>
          <div>롯데 제발 올해는 </div>
        </Stack>
        <Stack direction="row">
          <ThumbUpOffAltIcon />
          <div style={{ width: '30px' }} /> {/* 임시 div, 추후 삭제 예정 */}
          <ChatIcon />
          <div style={{ width: '30px' }} /> {/* 임시 div, 추후 삭제 예정 */}
        </Stack>
      </Body>
    </BoardContainer>
  );
};

export default Board;

const BoardContainer = styled.div`
  margin-top: 40px;
`;

const TitleContainer = styled.div`
  border-bottom: 2px #e2e2e2 solid;
  height: 46px;
  vertical-align: -webkit-baseline-middle;
`;

const Title = MUIStyled(Stack)({
  width: '1000px',
  fontSize: '20px',
  fontWeight: 600,
});

const StarIcon = MUIStyled(StarPurple500Icon)({
  paddingTop: '1px',
  paddingRight: '2px',
});

const RightIcon = MUIStyled(KeyboardArrowRightIcon)({
  paddingTop: '1px',
  paddingRight: '2px',
});

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  cursor: pointer;
`;

const Category = styled.div`
  border: 1px solid #222222;
  padding: 1px 3px;
  margin-right: 5px;
`;
