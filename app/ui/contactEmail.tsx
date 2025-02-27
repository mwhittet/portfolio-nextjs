import { ReactElement } from 'react';
import {
  Body,
  Container,
  Heading,
  Hr,
  Html,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import { ContactFormType } from '@/app/types';

export default function ContactEmail(props: ContactFormType): ReactElement {
  const { name, email, message } = props;

  return (
    <Html>
      <Tailwind>
        <Body>
          <Container>
            <Heading as="h2">Message</Heading>
            <Hr />
            <Section>
              <Text className="text-base leading-6 text-black">
                <span className="font-bold text-black">Name: </span>
                {name}
              </Text>
              <Text className="text-base leading-6">
                <span className="font-bold text-black">Email: </span>
                {email || 'N/A'}
              </Text>
              <Text className="text-base leading-6 text-black">
                <span className="font-bold text-black">Message:</span>
                <br />
                {message}
              </Text>
            </Section>
            <Hr />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
