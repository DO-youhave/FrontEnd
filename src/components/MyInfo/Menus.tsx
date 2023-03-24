import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';
import { currentPath } from '../../utils/currentPath';

export const menus: { id: string; name: string }[] = [
  { id: ROUTES.MY_PAGE.RECENT, name: '최근 알림' },
  { id: ROUTES.MY_PAGE.POSTING, name: '내가 쓴 글' },
  { id: ROUTES.MY_PAGE.COMMENT, name: '내가 쓴 댓글' },
  { id: ROUTES.MY_PAGE.BOOKMARK, name: '내가 찜한 전단지' },
  { id: ROUTES.MY_PAGE.LOGOUT, name: '로그아웃' },
  { id: ROUTES.MY_PAGE.EXIT, name: '회원탈퇴' },
];

const Menus = () => {
  const navigate = useNavigate();
  const handleClick = (id: string) => navigate(id);

  return (
    <Navigation>
      {menus.map(({ id, name }) => (
        <Menu key={id} id={currentPath(id)} onClick={() => handleClick(id)}>
          {name}
        </Menu>
      ))}
    </Navigation>
  );
};

export default Menus;

const Navigation = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-left: 30px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Menu = styled.li`
  cursor: pointer;
  color: #a3a3a3;
  &:hover {
    color: #000;
  }
  &#current {
    color: #000;
  }
`;
