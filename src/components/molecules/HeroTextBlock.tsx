import React from 'react';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import Button from '../atoms/Button';

const HeroTextBlock: React.FC = () => (
  <div className="max-w-2xl">
    <Heading level={1} className="mb-6">
      Reach Your Local<br />Store By Malinau Maps
    </Heading>
    <Paragraph className="mb-8 text-white">
      Increase your local pride by showing your business on our system.<br />
      We connect you with people looking for your products and services.<br />
    </Paragraph>
    <Button variant="primary" className="mt-2 shadow-lg">Start now</Button>
  </div>
);

export default HeroTextBlock; 