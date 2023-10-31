import React, { useState, useEffect } from "react";
import { Layout, Typography, Divider, Col, Row, Card, Image, Button } from "antd";
import Rating from "./Rating";
import { getRecipe } from "../../api";

import { useGetProductQuery } from "../../redux/apiSlice";
const { Title } = Typography;

const RecipeDetail = ({ id }) => {
  const [recipe, setRecipe] = useState({});
  const { data: product, isLoading } = useGetProductQuery(id);

  useEffect(() => {
   
    if (!isLoading && product) {
      setRecipe(product?.post);
    }
  }, [id, isLoading]);

  return (
    
    <div className="form-container">
      {recipe ?
      (
      <Layout>
        <Row>
          <Col span={8} align="left">
            <Title level={2} style={{ color: "#871400" }}>
              {recipe.title}
            </Title>
          </Col>
          <Col span={8} align="right">
            <Rating score={recipe.rating} />
          </Col>
        </Row>

        <Row>
          <Col span={12} align="left">
            <Card title="Image">
              <img src={recipe?.id?.img||""} alt="product" className="productDetailImg"  />
              <Button>Add Review</Button>
            
            </Card>
            
          </Col>
          <Col span={12} align="left">
            <Card title="Ingredients" >
              <ul>
                {recipe.ingredients &&
                  recipe.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </Card>
            <Card title="Review" >
              <ol>
                {recipe.reviews &&
                  recipe.reviews.map(({ id, text }) => (
                    <li key={id}>{text}</li>
                  ))}
              </ol>
            </Card>
          </Col>
        </Row>
      </Layout>):"No record Found"}
    </div>
  );
};

export default RecipeDetail;
