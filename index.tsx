import React from 'react';
import { createRoot } from 'react-dom/client';
import { Deck, DefaultTemplate, MarkdownSlideSet } from 'spectacle';
import mdContent from './slides.md';

const Presentation = () => {
  const theme = {
    colors: {
      primary: '#ffffff',
      secondary: '#dfba19',
      tertiary: '#051730',
      quaternary: '#2563eb',
      quinary: '#000'
    },
  };
  return ( 
    <Deck template={() => <DefaultTemplate />} theme={theme}>
      <MarkdownSlideSet>{mdContent}</MarkdownSlideSet>
    </Deck>
  )
};

createRoot(document.getElementById('app')!).render(<Presentation />);