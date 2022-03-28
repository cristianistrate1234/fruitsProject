import React, { Component } from "react";
import { Row, Col, Container, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./slider-product-block.css";
import ProductList from "./product-list";

export default class SliderProductBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [
        {
          product_name: "Cauliflower",
          product_category: "latest",
          price: 30,
          product_img: "/img/cauliflower.jpg",
        },
        {
          product_name: "Organic Quince",
          product_category: "latest",
          price: 30,
          product_img: "/img/quince.jpg",
        },
        {
          product_name: "Tomato Hybrid",
          product_category: "latest",
          price: 30,
          product_img: "/img/tomato.jpg",
        },
        {
          product_name: "Blueberry",
          product_category: "top",
          price: 30 + "$",
          product_img: "/img/blueberry.jpg",
        },
        {
          product_name: "Capsicum-Green",
          product_category: "top",
          price: 30,
          product_img: "/img/capsicum-green.jpg",
        },
        {
          product_name: "Grenade",
          product_category: "top",
          price: 30 + "$",
          product_img: "/img/grenade.jpg",
        },
        {
          product_name: "Hazelnuts Filbert Nut",
          product_category: "review",
          price: 30,
          product_img: "/img/hazelnuts.jpg",
        },
        {
          product_name: "Green Apple",
          product_category: "review",
          price: 30,
          product_img: "/img/apple.jpg",
        },
        {
          product_name: "Fresh Raspberry",
          product_category: "review",
          price: 30,
          product_img: "/img/raspberry.jpg",
        },
        {
          product_name: "Cauliflower",
          product_category: "latest",
          price: 30,
          product_img: "/img/cauliflower.jpg",
        },
        {
          product_name: "Organic Huince",
          product_category: "latest",
          price: 30,
          product_img: "/img/quince.jpg",
        },
        {
          product_name: "Tomato Hybrid",
          product_category: "latest",
          price: 30,
          product_img: "/img/tomato.jpg",
        },
        {
          product_name: "Blueberry",
          product_category: "top",
          price: 30 + "$",
          product_img: "/img/blueberry.jpg",
        },
        {
          product_name: "Capsicum-Green",
          product_category: "top",
          price: 30,
          product_img: "/img/capsicum-green.jpg",
        },
        {
          product_name: "Grenade",
          product_category: "top",
          price: 30 + "$",
          product_img: "/img/grenade.jpg",
        },
        {
          product_name: "Hazelnuts Filbert Nut",
          product_category: "review",
          price: 30,
          product_img: "/img/hazelnuts.jpg",
        },
        {
          product_name: "Green Apple",
          product_category: "review",
          price: 30,
          product_img: "/img/apple.jpg",
        },
        {
          product_name: "Fresh Raspberry",
          product_category: "review",
          price: 30,
          product_img: "/img/raspberry.jpg",
        },
        {
          product_name: "Cauliflower",
          product_category: "latest",
          price: 30,
          product_img: "/img/cauliflower.jpg",
        },
        {
          product_name: "Organic Quince",
          product_category: "latest",
          price: 30,
          product_img: "/img/quince.jpg",
        },
        {
          product_name: "Tomato Hybrid",
          product_category: "latest",
          price: 30,
          product_img: "/img/tomato.jpg",
        },
        {
          product_name: "Blueberry",
          product_category: "top",
          price: 30 + "$",
          product_img: "/img/blueberry.jpg",
        },
        {
          product_name: "Capsicum-Green",
          product_category: "top",
          price: 30,
          product_img: "/img/capsicum-green.jpg",
        },
        {
          product_name: "Grenade",
          product_category: "top",
          price: 30 + "$",
          product_img: "/img/grenade.jpg",
        },
        {
          product_name: "Hazelnuts Filbert Nut",
          product_category: "review",
          price: 30,
          product_img: "/img/hazelnuts.jpg",
        },
        {
          product_name: "Green Apple",
          product_category: "review",
          price: 30,
          product_img: "/img/apple.jpg",
        },
        {
          product_name: "Fresh Raspberry",
          product_category: "review",
          price: 30,
          product_img: "/img/raspberry.jpg",
        },
      ],
    };
  }

  render() {
    const { product } = this.state;
    const latestProduct = product.filter(
      (item) => item.product_category === "latest"
    );
    const topProduct = product.filter(
      (item) => item.product_category === "top"
    );
    const reviewProduct = product.filter(
      (item) => item.product_category === "review"
    );
    const maxItem = 3;

    return (
      <Container>
        <Row>
          <Col md={4} className="product-block">
            <h3>Latest Product</h3>
            <Carousel indicators={false}>
              <Carousel.Item>
                <ul>
                  {latestProduct.map(
                    (element, index) =>
                      index < maxItem && (
                        <ProductList
                          key={index}
                          name={element.product_name}
                          img={element.product_img}
                          price={element.price}
                        />
                      )
                  )}
                </ul>
              </Carousel.Item>
              <Carousel.Item>
                <ul>
                  {latestProduct.map(
                    (element, index) =>
                      index < maxItem && (
                        <ProductList
                          key={index}
                          name={element.product_name}
                          img={element.product_img}
                          price={element.price}
                        />
                      )
                  )}
                </ul>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={4} className="product-block">
            <h3>Latest Product</h3>
            <Carousel indicators={false}>
              <Carousel.Item>
                <ul>
                  {topProduct.map(
                    (element, index) =>
                      index < maxItem && (
                        <ProductList
                          key={index}
                          name={element.product_name}
                          img={element.product_img}
                          price={element.price}
                        />
                      )
                  )}
                </ul>
              </Carousel.Item>
              <Carousel.Item>
                <ul>
                  {topProduct.map(
                    (element, index) =>
                      index < maxItem && (
                        <ProductList
                          key={index}
                          name={element.product_name}
                          img={element.product_img}
                          price={element.price}
                        />
                      )
                  )}
                </ul>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={4} className="product-block">
            <h3>Latest Product</h3>
            <Carousel indicators={false}>
              <Carousel.Item>
                <ul>
                  {reviewProduct.map(
                    (element, index) =>
                      index < maxItem && (
                        <ProductList
                          key={index}
                          name={element.product_name}
                          img={element.product_img}
                          price={element.price}
                        />
                      )
                  )}
                </ul>
              </Carousel.Item>
              <Carousel.Item>
                <ul>
                  {reviewProduct.map(
                    (element, index) =>
                      index < maxItem && (
                        <ProductList
                          key={index}
                          name={element.product_name}
                          img={element.product_img}
                          price={element.price}
                        />
                      )
                  )}
                </ul>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}
