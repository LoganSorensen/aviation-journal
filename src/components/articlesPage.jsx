import React, { useState, useEffect } from "react";
import axios from "axios";

const ArticlesPage = () => {
  const [articles, setArticles] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/articles")
      .then((res) => {
        const arr = [];
        res.data.forEach((article) => {
          arr.push({
            ...article,
            sources: article.sources.split(","),
            tags: article.tags.split(","),
          });
        });
        setArticles(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(articles);

  return <div></div>;
};

export default ArticlesPage;
