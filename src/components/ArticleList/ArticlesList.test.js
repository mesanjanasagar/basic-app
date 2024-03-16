import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ArticlesList from "./ArticlesList";

const MockArticlesList = () => {
    return (
        <BrowserRouter>
            <ArticlesList />
        </BrowserRouter>
    )
}

describe("ArticlesList", () => {

    beforeEach(() => {
        // console.log("RUNS BEFORE EACH TEST")
        jest.mock("../../__mocks__/axios")
    })

    // beforeAll(() => {
    //     console.log("RUNS ONCE BEFORE ALL TESTS")
    // })

    // afterEach(() => {
    //     console.log("RUNS AFTER EACH TEST")
    // })

    // afterAll(() => {
    //     console.log("RUNS ONCE AFTER ALL TESTS")
    // })

    it('should fetch and render component', async () => {
        render(
            <MockArticlesList />
        );
    });

    it('should fetch and check for the article in component', async () => {
      render(
          <MockArticlesList />
      );
    expect(screen.findByText('Most Popular Articles')).toBeTruthy();
    expect(screen.findByTestId('article-heading-h1')).toBeTruthy();
  });
})