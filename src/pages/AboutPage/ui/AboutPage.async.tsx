import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // В реальных проектах искуственная задержка(setTimeout) недопустим, все это делается с целью теста в своем пет-проекте
  setTimeout(() => resolve(import('./AboutPage')), 1000);
}));
