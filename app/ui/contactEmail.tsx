import { ReactElement } from 'react';
import {
  Body,
  Container,
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
            <Section>
              <Text className="text-base leading-6 text-black">
                <span className="font-bold text-black">Name: </span>
                {name}
              </Text>
              <Text className="text-base leading-6 text-black">
                <span className="font-bold text-black">Email: </span>
                {email}
              </Text>
              <Text className="text-base leading-6 text-black">
                <span className="font-bold text-black">Message:</span>
                <br />
                {message}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
