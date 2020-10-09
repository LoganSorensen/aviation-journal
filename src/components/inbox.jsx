import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const Inbox = () => {
  const [messages, setMessages] = useState();
  const [selectedMessage, setSelectedMessage] = useState();
  const [checkedMessages, setCheckedMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/messages")
      .then((res) => {
        console.log("run");
        setMessages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const selectMessage = (message) => {
    console.log("selected");
    setSelectedMessage(message);
  };

  const checkMessage = (id) => {
    console.log("checked id:", id);
    if (!checkedMessages.includes(id)) {
      setCheckedMessages([...checkedMessages, id]);
    } else {
      const filtered = checkedMessages.filter((item) => item !== id);
      setCheckedMessages(filtered);
    }
  };

  const deleteMessages = () => {
    console.log(checkedMessages);
    checkedMessages.forEach((id) => {
      console.log("id", id);
      axiosWithAuth()
        .delete(`http://localhost:5000/api/messages/${id}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    uncheckAll();
    fetchMessages();
  };

  const uncheckAll = () => {
    const checkboxes = document.querySelectorAll('.inbox [type="checkbox"]');
    checkboxes.forEach((checkbox) => (checkbox.checked = false));
  };

  console.log(" messages", messages);

  return (
    <div className="inbox">
      {messages && (
        <>
          {messages.length > 0 ? (
            <>
              <div className="messages">
                <div className="toolbar">
                  <button onClick={deleteMessages}>
                    <i className="fas fa-trash-alt"></i>
                  </button>
                  <button>
                    <i className="fas fa-envelope"></i>
                  </button>
                </div>
                {messages &&
                  messages.map((message, index) => {
                    return (
                      <div key={index} className="message">
                        <input
                          type="checkbox"
                          onChange={() => checkMessage(message.id)}
                        />
                        <div
                          className="content"
                          onClick={() => selectMessage(message)}
                        >
                          <p className="name">{message.name}</p>
                          <p>{message.message}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="message-window"></div>
            </>
          ) : (
            <div className="no-messages">
              <i className="fas fa-envelope"></i>
              <p>There are no messages to display</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Inbox;
