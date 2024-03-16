import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ArticlesList.css";
import { Link } from "react-router-dom";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchArticles = async () => {
      const { data } = await axios.get(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`
      );
      setArticles(data.results);
    };
    fetchArticles();
  }, []);

  return (
    <div className="articles-list" data-testid={"article-heading-container"}>
      <h1 className="title" data-testid={"article-heading-h1"}>
        Most Popular Articles
      </h1>
      <ul className="article-items">
        {articles.map((article, index) => (
          <div
            key={article.id}
            className="article-item"
            data-testid={`article-item-${index}`}
          >
            <Link
              data-testid={`article-item`}
              to={`/article/${article.id}`}
              state={{ article, index }}
              className="article-link"
            >
              <div className="article-title">{article.title}</div>
              <div className="article-date">{article.published_date}</div>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ArticlesList;
