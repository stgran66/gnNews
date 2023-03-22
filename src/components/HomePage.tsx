import { Space, Typography } from 'antd';
const { Text, Title } = Typography;
export const HomePage = () => {
  return (
    <Space
      direction='vertical'
      align='end'
      style={{
        flexGrow: 1,
        padding: '40px',
      }}
    >
      <Title>
        Welcome to <span style={{ color: '#D5EB04' }}>gn</span>News, your go-to
        source for up-to-date news from around the world.
      </Title>
      <Text>
        With gnNews, you can easily access news stories from your selected
        country, so you can stay informed about the latest happenings in the
        places that matter to you most. Our platform features a user-friendly
        interface that makes it easy to navigate through the latest news
        stories. Whether you're interested in breaking news, business updates,
        political developments, or entertainment gossip, gnNews has you covered.
      </Text>
      <Text>
        We understand that staying informed about the world can be overwhelming,
        which is why we've created a customizable experience that lets you focus
        on the countries and topics that interest you most. Simply select your
        country of choice, and you'll be presented with a selection of news
        articles that are relevant to your interests. At gnNews, we're committed
        to providing you with accurate, trustworthy news from around the world.
      </Text>
      <Text>
        Thank you for choosing gnNews as your trusted source of news, and we
        hope you enjoy using our platform to stay informed and engaged with the
        world.
      </Text>
    </Space>
  );
};
