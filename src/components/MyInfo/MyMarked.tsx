import useGetMarkedFlyer from '../../hooks/useGetMarkedFlyer';
import Flyer from '../Street/Flyer';
import { GridBox } from './Recent';

const MyMarked = () => {
  const { flyer } = useGetMarkedFlyer();
  return (
    <GridBox>
      {flyer?.map(({ postId, title, tags, imgUrl }) => (
        <Flyer
          key={postId}
          id='myPosting'
          postId={postId}
          title={title}
          tags={tags}
          imgUrl={imgUrl}
        />
      ))}
    </GridBox>
  );
};

export default MyMarked;
