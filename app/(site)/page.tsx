import { FC } from 'react';
import { getMenu } from '@/api/menu';
import Button from '@/components/Button/Button';
import Htag from '@/components/Htag/Htag';
import Tag from '@/components/Tag/Tag';
import TagP from '@/components/TagP/TagP';

const Home: FC = async () => {
  const menu = await getMenu(0);

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
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;
