import React from "react";
import { useLocation } from "react-router-dom";
import "./ArticleDetail.css";

function ArticleDetail() {
  const location = useLocation();
  const article = location?.state?.article;
  const index = location?.state?.index;

  return (
    <div className="article-detail" data-testid={`article-detail-${index}`}>
      <h1 className="title">
        {article?.title}
      </h1>
      <p className="abstract">
        {article?.abstract}
      </p>

      <div className="article-info">
        <p>
          <strong>Published Date:</strong>
          {article?.published_date}
        </p>
        <p>
          <strong>Section:</strong>
          {article?.section}
        </p>
      </div>
    </div>
  );
}

export default ArticleDetail;
