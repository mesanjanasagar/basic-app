import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ArticleDetail from './ArticleDetail';

describe('ArticleDetail', () => {
  // Mock article data
  let article = {
    id: 1,
    title: 'Test Article',
    abstract: 'Test Abstract',
    published_date: '2024-03-16',
    section: 'Test Section'
  };
let index=0;

  const MockArticlesList = () => {
    return (
        <MemoryRouter initialEntries={['/article']}>
        <ArticleDetail article={article} index={index}/>
      </MemoryRouter>
    )
}

  it('renders article detail',  () => {
    // Render component with article data
     render(<MockArticlesList/>);
  });

});
