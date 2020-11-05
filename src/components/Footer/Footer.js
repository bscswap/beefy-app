import React  from 'react';
import {
  Container,
  Column,
  Title,
  Link,
  FAIcon,
  BrandIcon,
  LinkLabel,
} from './style';

const Footer = () => {
  return (
    <Container>
      <Column>
        <Title>LOA DEFI</Title>

        <Link href="https://www.loaprotocol.io" target="_blank">
          <FAIcon type='globe' />
          <LinkLabel>website</LinkLabel>
        </Link>

        <Link href="https://medium.com/@loaprotocol" target="_blank">
          <BrandIcon type='medium' />
          <LinkLabel>news</LinkLabel>
        </Link>

        <Link href="https://github.com/loaprotocol" target="_blank">
          <BrandIcon type='github' />
          <LinkLabel>source</LinkLabel>
        </Link>
      </Column>

      <Column>
        <Title>products</Title>
        <Link href="https://lfi.loaprotocol.io" target="_blank">
          <FAIcon type='hand-holding-usd' />
          <LinkLabel>app</LinkLabel>
        </Link>
      </Column>

      <Column>
        <Title>socials</Title>
        <Link href="https://twitter.com/officialloapro1" target="_blank">
          <BrandIcon type='twitter' />
          <LinkLabel>twitter</LinkLabel>
        </Link>
        <Link href="https://t.me/LOAProtocol_KR" target="_blank">
          <BrandIcon type='telegram' />
          <LinkLabel>telegram</LinkLabel>
        </Link>

      </Column>
    </Container>
  );
}

export default Footer;
