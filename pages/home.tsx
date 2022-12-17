import { Suspense } from 'react';

import Container from '../components/Container';
import Hero from './home/Hero';
import Inspiration from './home/Inspiration';
import Carousel from './home/Carousel';
import Creatives from './home/Creatives';
import Pricing from './home/Pricing';
import Testimonials from './home/Testimonials';
import Faqs from './home/Faqs';
import Blog from './home/Blog';
import Cta from './home/Cta';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <Hero />
        <Inspiration />
        <Carousel />
        <Creatives />
        <Pricing />
        <Testimonials />
        <Faqs />
        <Blog />
        <Cta />
      </Container>
    </Suspense>
  );
}
