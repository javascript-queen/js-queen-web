import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


var moment = require("moment");

const BlogMedium = () => {
  const [mediumData, setMediumData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@js-queen`
    )
      .then(res => res.json())
      .then(response => {
        setMediumData(response.items);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  const newArray = mediumData
  .filter(article => article.categories.length > 0)
  .slice(0, 2);

  return (
    <div id="blog" className="container-fluid mt-4">
      {isLoading && <p>Fetching data from Medium!</p>}

      <Row>
        {newArray.map(article => (
          <Col md="4" className="mb-3" key={article.guid}>
            <div>
              <Card>
                <CardImg top width="100%" src={article.thumbnail} alt="img" />
                <CardBody>
                  <CardTitle>
                    <a href={article.link} target="_blank" rel="noopener noreferrer">{article.title}</a>
                  </CardTitle>
                  <CardSubtitle>
                    Published:{" "}
                    {moment(article.pubDate).format("dddd, MMMM Do YYYY")}
                  </CardSubtitle>
                </CardBody>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BlogMedium;