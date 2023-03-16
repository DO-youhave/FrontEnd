import { StreetCategory } from '../../constants/categorys';
import Select from '../shared/Select';

const Category = ({ id }: { id?: string }) => {
  return <Select id={id} type='category' array={StreetCategory} />;
};

export default Category;
