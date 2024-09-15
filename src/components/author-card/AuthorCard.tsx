import { Col, Row } from "antd";
import { Avatar } from 'antd';
import UserAvatar from '../../assets/images/image-avatar.webp'

const AuthorCard: React.FC = () => {
  return (
    <Row align="middle" gutter={14} className="mt-5">
      <Col>
      <Avatar size="default" className="border-none" icon={<img src={UserAvatar} />} />
      </Col>
      <Col>
      <strong className="text-[hsl(0,0%,7%)] font-figTree font-semibold">Greg Hooper</strong>
      </Col>
    </Row>
  );
};

export default AuthorCard;