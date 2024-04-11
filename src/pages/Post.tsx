import styled from 'styled-components';
import { Stack, styled as MUIStyled } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

const Post = () => {
  return (
    <PostContainer>
      <TitleContainer>
        <Title>노래를 찾습니다 도와줘</Title>
        <Writer>블라블라</Writer>
        <Info direction="row" spacing={2}>
          <div>
            <AccessTimeIcon fontSize="small" style={{ verticalAlign: 'middle' }} />
            <InfoText>2일</InfoText>
          </div>
          <div>
            <RemoveRedEyeOutlinedIcon fontSize="small" style={{ verticalAlign: 'middle' }} />
            <InfoText>21k</InfoText>
          </div>
          <div>
            <ChatBubbleOutlineRoundedIcon fontSize="small" style={{ verticalAlign: 'middle' }} />
            <InfoText>164</InfoText>
          </div>
        </Info>
      </TitleContainer>
      <ContentContainer>
        <ContentArea>
          어디선가 들은 응원가인것 같은데 안타 안타 안타안타 <br /> 이런 노래였어 ㅠㅠ 혹시 제목 아는 사람?
        </ContentArea>
        <Info direction="row" spacing={2}>
          <div>
            <ThumbUpOffAltIcon fontSize="small" style={{ verticalAlign: 'middle' }} />
            <InfoText>13</InfoText>
          </div>
          <div>
            <ChatBubbleOutlineRoundedIcon fontSize="small" style={{ verticalAlign: 'middle' }} />
            <InfoText>164</InfoText>
          </div>
        </Info>
      </ContentContainer>
    </PostContainer>
  );
};

export default Post;

const PostContainer = styled.div`
  margin-inline: 20px;
`;

const TitleContainer = styled.div`
  padding-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  line-height: 32px;
`;

const Writer = styled.div`
  font-size: 14px;
  margin-top: 16px;
  line-height: 16px;
`;

const Info = MUIStyled(Stack)({
  fontSize: '12px',
  marginTop: '16px',
  color: '#94969b',
});

const InfoText = styled.p`
  display: inline;
  margin-left: 2px;
`;

const ContentContainer = styled.div`
  border-top: 1px solid #eee;
`;

const ContentArea = styled.div`
  margin: 24px 0px 56px;
  font-size: 16px;
  line-height: 1.75em;
`;
