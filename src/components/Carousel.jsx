import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

const NewsCarousel = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const getNewsData = async () => {
      const resp = (
        await axios.get(
          "https://newsapi.org/v2/everything?q=covid-19&apiKey=2d93d262007248b18dbbf71961515d74&pageSize=10"
        )
      ).data;
      setNewsData(resp.articles);
    };
    getNewsData();
  }, []);

  if (newsData.length > 0) {
    return (
      <Carousel>
        {newsData.map((article, index) => {
          if (article.urlToImage === "") {
            return "";
          } else {
            return (
              <Carousel.Item>
                <div className="carouselItem">
                  <img
                    className="carouselImage"
                    src={article.urlToImage}
                    alt="First slide"
                  />

                  <Carousel.Caption>
                    <h3>
                      <a
                        className="articleLink"
                        target="_blank"
                        rel="noreferrer"
                        href={article.url}
                      >
                        {article.title}
                      </a>
                    </h3>
                    <p>{`by ${article.source.name}`}</p>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            );
          }
        })}
      </Carousel>
    );
  } else {
    return <div></div>;
  }
};

export default NewsCarousel;
