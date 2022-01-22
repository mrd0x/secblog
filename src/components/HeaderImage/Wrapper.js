import styled from 'styled-components';

const Wrapper = styled.div`
  border: 5px solid #000;
  border-radius: 50%;
  height: 160px;
  margin: 0 auto 15px auto;
  overflow: hidden;
  width: 160px;
  max-height:300px;

  img {
    position: relative;
    top: 29px;
    padding: 5px;
    border-radius: 0%;
    width: 130px;
    object-fit: contain;
  }
`;

export default Wrapper;