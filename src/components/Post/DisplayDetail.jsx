import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './Style.module.css';

function Posts({ specData }) {
  const [post, setPost] = useState(null);

  var world = false;
  var global = false;
  var stats = false;
  var country = false;
  var url = "https://api.covid19api.com/"
  if (specData === "world") {
      specData = "world/total"
      world = true;
      global = false;
      stats = false;
      country = false;
  } else if (specData == "summary") {
      global = true;
      world = false;
      stats = false;
      country = false;
  } else if (specData == "stats") {
      global = false;
      world = false;
      stats = true;
      country = false;
  } else {
      url = "https://api.covid19api.com/country/"
  }
  console.log(url + specData)
  useEffect(() => {
    axios
      .get(url + specData)
      .then((response) => {
        if (response['data']) {
          console.log(response.data);
          setPost(response.data);
        }
      })
      .catch((err) => {
        console.error('[PostItem.jsx]', err.message);
      });
  }, [specData]);
  if (!post) return null;

  if (world) {
    return (
        <div className="row m-4">
          <div className={classes.detail}>
            <h2>Total Confirmed: {post.TotalConfirmed}</h2>
            <h2>Total Deaths: {post.TotalDeaths}</h2>
            <h2>Total Recovered: {post.Recovered}</h2>
          </div>
        </div>
      );
  }
  if (global) {
    return (
        <div className="row m-4">
          <div className={classes.detail}>
            <h2>New Confirmed: {post.Global.NewConfirmed}</h2>
            <h2>Total Confirmed: {post.Global.TotalConfirmed}</h2>
            <h2>New Deaths: {post.Global.NewDeaths}</h2>
            <h2>Total Deaths: {post.Global.TotalDeaths}</h2>
            <h2>New Recovered: {post.Global.NewRecovered}</h2>
            <h2>Total Recovered: {post.Global.TotalRecovered}</h2>
          </div>
        </div>
      );
  }
  if (stats) {
    return (
        <div className="row m-4">
          <div className={classes.detail}>
            <h2>Total Cases: {post.Total}</h2>
            <h2>Updated: {post.AllUpdated}</h2>
          </div>
        </div>
      );
  }

  if (country) {
    return (
        <div className="row m-4">
          <div className={classes.detail}>
            <h2>Country: {post.Country}</h2>
            <h2>Country Code: {post.CountryCode}</h2>
            <h2>Country Confirmed: {post.Confirmed}</h2>
            <h2>Country Deaths: {post.Deaths}</h2>
            <h2>Country Recovered: {post.Recovered}</h2>
            <h2>Country Active Cases: {post.Active}</h2>
          </div>
        </div>
      );
  }
  
}

export default Posts;