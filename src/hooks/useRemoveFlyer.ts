import { useNavigate } from 'react-router-dom';

import { deleteFlyer } from '../apis/FlyerDetail';
import { ROUTES } from '../constants/routes';

const useRemoveFlyer = (postId: number) => {
  const navigate = useNavigate();
  const handleRemove = async () => {
    try {
      if (confirm('전단지를 떼어버릴까요?')) {
        await deleteFlyer(postId);
        alert('전단지가 떼어졌어요!');
        navigate(ROUTES.STREET.DETAIL('', '', 'DATE', ''));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { handleRemove };
};

export default useRemoveFlyer;
