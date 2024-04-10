import styled from 'styled-components';

const Post = () => {
  return (
    <div>
      <Title>노래를 찾습니다 도와줘</Title>
      <Writer>닉네임</Writer>
      <Info>2일 뷰:21K 댓:164</Info>
      <div>__</div>
      <div>어디선가 들은 응원가인것 같은데 안타 안타 안타안타</div>
      <div>추:13 댓:164</div>
    </div>
  );
};

export default Post;

const Title = styled.h2`
  font-size: 24px;
  line-height: 32px;
`;

const Writer = styled.div`
  font-size: 14px;
  margin-top: 16px;
  line-height: 16px;
`;

const Info = styled.div`
  
`
