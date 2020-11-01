import React, { useState } from "react";
import Header from "../header/header";
import S_footer from "../s_footer/s_footer";
import pro1 from "../../Assets/pro1.jpg";
import pro2 from "../../Assets/pro2.jpg";
import pro3 from "../../Assets/pro3.jpg";
import pro4 from "../../Assets/pro4.jpg";
import pro5 from "../../Assets/pro5.jpg";
import "./product.scss";

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";

const Product = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div>
      <Header />

      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Tab1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            More Tabs
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4>Tab 1 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
      {/* <div className="product">
        <div className="label">
          <h3>/ Labels</h3>
          <div className="lab_pics">
            <img src={pro1} alt="pic" />
            <img src={pro2} alt="pic" />
            <img src={pro3} alt="pic" />
            <img src={pro4} alt="pic" />
            <img src={pro5} alt="pic" />
          </div>
        </div>
        <div style={{ background: "white", color: "white" }}>uu</div>

        <div className="books">
          <h3>/ Books</h3>
          <div className="books_pics">
            <img src={pro1} alt="pic" />
            <img src={pro2} alt="pic" />
            <img src={pro3} alt="pic" />
            <img src={pro4} alt="pic" />
            <img src={pro5} alt="pic" />
          </div>
        </div>
        <div style={{ background: "white", color: "white" }}>uu</div>

        <div className="tags">
          <h3>/ Tags</h3>
          <div className="tags_pics">
            <img src={pro1} alt="pic" />
            <img src={pro2} alt="pic" />
            <img src={pro3} alt="pic" />
            <img src={pro4} alt="pic" />
            <img src={pro5} alt="pic" />
          </div>
        </div>
        <div style={{ background: "white", color: "white" }}>uu</div>
      </div> */}
      <S_footer />
    </div>
  );
};

export default Product;
