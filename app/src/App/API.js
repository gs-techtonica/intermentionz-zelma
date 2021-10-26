import React, { useEffect } from "react";

import useApi from "../auth/useApi";

const API = () => {
  const [otherQuote, setOtherQuote] = React.useState({});

  const { apiClient } = useApi();
  const [responseObj, setResponseObj] = React.useState({});
  const [quote, setQuote] = React.useState("");
  const [author, setAuthor] = React.useState("");

  // add new Affirmation/task
  const [tasks, setTasks] = React.useState([]);
  const [task, setTask] = React.useState("");
  const loadTasks = React.useCallback(
    async () => setTasks(await apiClient.getTasks()),
    [apiClient],
  );
  const addTask = (taskName) => apiClient.addTask(taskName).then(loadTasks);

  const canAdd = task !== "";

  const handleChange = () => {
    setTask(quote);
    addTask(task);
  };

  // 2nd API
  const loadQuote = async () => {
    // async () => setOtherQuote(await apiClient.getQuote()),
    // [apiClient],
  };
  // fetch should be inside a useEffect so it doesn't get caught in an infinite loop when assigning response to 'setResponseObj' state
  useEffect(() => {
    // 2nd API
    loadQuote();
    console.log(otherQuote);

    fetch(
      `https://quotes.rest/qod?language=en`,
      // `https://api.openweathermap.org/data/2.5/weather?units=${unit}&q=${uriEncodedCity}&appid=81eaae9c9ea6f28f239fe73eebafd259`
      // {
      //   method: 'GET',
      //   headers: {
      //     'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      //     'x-rapidapi-key': `81eaae9c9ea6f28f239fe73eebafd259`,
      //   },
      // }
    )
      .then((response) => response.json())

      .then((response) => {
        console.log(response);
        setResponseObj(response);
        setQuote(response.contents.quotes[0].quote);
        setAuthor(response.contents.quotes[0].author);
        // console.log("response.status is " + response.status);
        // 2nd version: 200 is a string
        // // in this API, we had to use success to check if it passed or not
        if (!response.success) {
          throw new Error();
        }

        // console.log("this is the responseObj");
        // takes take the json & saves json response as responseObj state
        // setLoading(false);
      });
  }, []);
  console.log("quotes are", quote);

  // I want to uncomment this
  // .catch((err) => {
  //   setError(true);
  //   // setLoading(false);
  //   console.log("error");
  // });

  return (
    <div className="quote-wrapper">
      <h2 className="quote-header">Quote of the Day</h2>
      <form>
        <p className="quote-p">
          "{quote}" - {author}
        </p>

        {/* <button onClick={handleChange} className="add-btn-1" disabled={!canAdd}>
          Add
        </button> */}
        <p className="add-p">
          * If you like this quote, feel free to copy & paste into Affirmations
          Field above
        </p>
      </form>
    </div>
  );
};

export default API;
