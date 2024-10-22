import { FC } from 'react';
import Button from '@/components/Button/Button';
import Htag from '@/components/Htag/Htag';
import TagP from '@/components/TagP/TagP';
import Tag from '@/components/Tag/Tag';

const Home: FC = (): JSX.Element => {
  return (
    <div>
      <Htag tag="h1">Title</Htag>
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
    </div>
  );
};

export default Home;
