import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../styles/color";

// 게시판 아이템 컨테이너
export const BoardItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  width: 964px;
  height: 53px;

  background: ${colors.gray[950]};
  /* border-width: 0px 0px 1px 0px; */
  border-style: solid;
  border-color: ${colors.gray[700]};
  border-radius: 0px;

  border-width: ${({ $isFirst }) => ($isFirst ? "2px 0px 1px 0px" : "0px 0px 1px 0px")};
`;  

//링크 스타일
export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: inherit;
  flex: 2.7;
  font-size: 24px;
  color: ${colors.orange[50]};
  padding-left: 12px;
`;

// 게시판 제목
export const Title = styled.div`
  cursor: pointer;
`;

// 게시판 카테고리
export const Categories = styled.div`
  flex: 1.7;
  display: flex;
  gap: 2px;
  cursor: pointer;
`;

// 게시판 카테고리 태그
export const CategoryTag = styled.span`
  padding: 7px 5px;
  border: 1px solid ${colors.gray[50]};
  border-radius: 8px;
  font-size: 24px;
  color: ${colors.gray[50]};
`;

// 게시판 수정자
export const Modifier = styled.div`
  flex: 1.7;
  color: ${colors.orange[900]};
  font-size: 24px;
  cursor: pointer;
`;