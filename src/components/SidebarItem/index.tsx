import { Link } from 'react-router-dom';
import { Container, Info, Title, Description, IconArea, Point } from './styles';
import { ReactComponent as  ProfileIcon } from '../../svg/profile.svg';
import { ReactComponent as  BookIcon } from '../../svg/book.svg';
import { ReactComponent as  MailIcon } from '../../svg/mail.svg';
import { ReactComponent as  DoneIcon } from '../../svg/done.svg';


type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
}

export const SidebarItem = ({title, description, icon, path, active}: Props) => {
  return (
    <Container>
      <Link to={path} className="linkPath">
        <Info>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Info>
        <IconArea active={active}>
          {icon === 'profile' &&
            <ProfileIcon fill="white" width={24} height={24} />
          }
          {icon === 'book' &&
            <BookIcon fill="white" width={24} height={24} />
          }
          {icon === 'mail' &&
            <MailIcon fill="white" width={24} height={24} />
          }
          {icon === 'done' &&
            <DoneIcon fill="white" width={24} height={24} />
          }
        </IconArea>
        <Point active={active}></Point>
      </Link>
    </Container>
  )
}