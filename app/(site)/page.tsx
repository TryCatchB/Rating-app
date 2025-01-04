import { FC } from 'react';
import Button from '@/components/Button/Button';
import Htag from '@/components/Htag/Htag';
import Tag from '@/components/Tag/Tag';
import TagP from '@/components/TagP/TagP';
// import Rating from '@/components/Rating/Rating';

const Home: FC = (): JSX.Element => {
  // const [rating, setRating] = useState(0);

  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" arrow="right">
        Button
      </Button>
      <Button appearance="ghost" arrow="down">
        Button
      </Button>
      <TagP size="large">Large</TagP>
      <TagP size="medium">Medium</TagP>
      <TagP size="small">Small</TagP>
      <Tag size="small">Ghost</Tag>
      <Tag size="medium" color="red">
        m
      </Tag>
      <Tag size="medium" color="green">
        m
      </Tag>
      <Tag size="medium" color="grey">
        m
      </Tag>
      <Tag color="primary">m</Tag>
      <Tag color="green">m</Tag>
      {/* <Rating rating={rating} isEditable={true} setRating={setRating} /> */}
    </>
  );
};

export default Home;
