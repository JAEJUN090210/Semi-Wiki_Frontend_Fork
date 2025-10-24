import styled from "styled-components";
import colors from "../../styles/color";

// 게시판 리스트 컨테이너
export const BoardListContainer = styled.div`
  display: flex;
  position: relative;
  bottom: 100px;
  flex-direction: column;

  max-width: 1044px;
  min-height: 470px;
  height: auto;

  background: ${colors.gray[950]};
  border: 1px solid ${colors.gray[50]};
  border-radius: 24px;

  padding-left: 40px;
  padding-top: 40px;
  padding-bottom: 60px;

  margin-bottom: -50px;
`;

// 게시판 리스트 헤더
export const BoardListHeader = styled.div`
  display: grid;
  grid-template-columns: 405px 1fr 15px 1fr; 
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  margin-left: 11px;
`;

// 게시판 줄
export const Line = styled.div`
  width: 964px;
  border-style: solid;
  border-color: ${colors.gray[700]};
  border-radius: 0px;
  
  border-width: 2px 0px 1px 0px;
`;

// 게시판 리스트 제목
export const BoardListTitle = styled.h2`
  width: 45px;
  height: 29px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: ${colors.gray[50]};
`;

// 게시판 리스트 카테고리
export const BoardListCategory = styled.h2`
  width: 86px;
  height: 29px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: ${colors.gray[50]};
`;

// 게시판 리스트 수정자
export const BoardListModifier = styled.h2`
  width: 65px;
  height: 29px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: ${colors.gray[50]};
`;
