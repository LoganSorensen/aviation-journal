import React, { useState, useEffect } from "react";
import axios from "axios";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddArticle = (props) => {
  const [article, setArticle] = useState({
    title: "",
    author: "",
    date: "",
    category: "",
    content: "",
    sources: [],
    tags: [],
    reference_id: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/articles")
      .then((res) => {
        const newArticleId = res.data[res.data.length - 1].id + 1;
        setArticle({ ...article, reference_id: newArticleId });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const addSource = () => {
    const sourceField = document.querySelector(".source-field");
    if (sourceField.value !== "") {
      setArticle({
        ...article,
        sources: [...article.sources, sourceField.value],
      });
      sourceField.value = "";
    }
  };

  const removeSource = (index) => {
    const sources = [...article.sources];
    sources.splice(index, 1);
    setArticle({ ...article, sources: sources });
  };

  const addTag = () => {
    const tagField = document.querySelector(".tag-field");
    if (tagField.value !== "") {
      setArticle({ ...article, tags: [...article.tags, tagField.value] });
      tagField.value = "";
    }
    console.log("tags", article.tags);
  };

  const removeTag = (index) => {
    const tags = [...article.tags];
    tags.splice(index, 1);
    setArticle({ ...article, tags: tags });
  };

  const getDate = () => {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const createArticle = (e) => {
    e.preventDefault();
    setArticle({...article, date: getDate()})
    axiosWithAuth()
      .post("http://localhost:5000/api/articles", article)
      .then((res) => {
          console.log(res);
        })
        .catch((err) => {
            console.log(err);
          });
        // props.history.push('/')
      };
      // console.log(props);

  return (
    <div>
      <form className="article-form">
        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Author"
          name="author"
          onChange={handleChange}
        />
        <select
          name="category"
          id="categories"
          defaultValue="select"
          onChange={handleChange}
        >
          <option value="select" disabled>
            Select a category
          </option>
          <option value="History">History</option>
          <option value="Future of Flight">Future of Flight</option>
          <option value="Interviews">Interviews</option>
          <option value="Unique Aircraft">Unique Aircraft</option>
          <option value="Science">Science</option>
        </select>
        <textarea
          placeholder="Content"
          name="content"
          onChange={handleChange}
        />
        <div className="sources">
          {article.sources.map((source, index) => {
            return (
              <div key={index} className="source">
                <p>{source}</p>
                <button type="button" onClick={() => removeSource(index)}>
                  Remove
                </button>
              </div>
            );
          })}
        </div>
        <div className="input-group">
          <input type="text" placeholder="Sources" className="source-field" />
          <button type="button" onClick={addSource}>
            Add Source
          </button>
        </div>
        <div className="tags">
          {article.tags.map((tag, index) => {
            return (
              <div key={index} className="tag">
                <p>{tag}</p>
                <button type="button" onClick={() => removeTag(index)}>
                  Remove
                </button>
              </div>
            );
          })}
        </div>
        <div className="input-group">
          <input type="text" placeholder="Tags" className="tag-field" />
          <button type="button" onClick={addTag}>
            Add Tag
          </button>
        </div>
        <button className="create-btn" type="submit" onClick={createArticle}>
          Create Article
        </button>
      </form>
    </div>
  );
};

export default AddArticle;
