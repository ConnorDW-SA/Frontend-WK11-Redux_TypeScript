import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import { Info } from "../types/Info";


const ArticleDetails = () => {
  const [selectArticle, setSelectArticle] = useState<Info | null>(null);

  const params = useParams();
  console.log("PARAMS", params);

  const id = params.articleID;

  useEffect(() => {
    fetchArticleDetails();
  }, []);

  const fetchArticleDetails = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles/" + id
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setSelectArticle(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {selectArticle && (
        <Container>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={selectArticle.imageUrl} alt="" />
            <Card.Body>
              <Card.Title>{selectArticle.title}</Card.Title>
              <Card.Text>{selectArticle.summary}</Card.Text>
              <Card.Text>
                <p>Date of publishing: </p>
                {selectArticle.publishedAt}
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      )}
    </div>
  );
};

export default ArticleDetails;
