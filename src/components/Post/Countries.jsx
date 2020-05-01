import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayDetail from './DisplayDetail';
import classes from './Style.module.css';

function Posts(props) {
  const [loading, setLoading] = useState(true);
  const [CountryList, setCountryList] = useState([]);
  const [selectedSpecData, setSelectedSpecData] = useState(null);

  useEffect(() => {
    axios
      .get('https://api.covid19api.com/countries')
      .then((response) => {
        if (response['data'] && response.data.length) {
          setCountryList(response.data.slice(0, 20));
          setLoading(false);

        }
      })
      .catch((err) => {
        console.error('[CountryList.jsx]', err.message);
      });
  }, []);

  const handlePostClick = (specData) => {
    setSelectedSpecData(specData);
  };

  let content = null;
  if (loading) {
    content = <h3 className={classes.loading}>Loading...</h3>;
  } else {
    content = CountryList.map((covidapi) => {
      return (
        <h3
          className={classes.title}
          key={covidapi.ISO2}
          onClick={() => handlePostClick(covidapi.Slug)}
        >
          {covidapi.Country}
        </h3>
      );
    });
  }
  return (
    <div>
        <div className="navigation">
            <ul>
                <li onClick={() => handlePostClick("world")}>World</li>
                <li onClick={() => handlePostClick("summary")}>Summary</li>
                <li onClick={() => handlePostClick("stats")}>Stats</li>
            </ul>
        </div>

        <div className="row mt-3 flex-column">
            {content}
        </div>
        {<DisplayDetail specData={selectedSpecData} />} 
    </div>
  );
}

export default Posts;