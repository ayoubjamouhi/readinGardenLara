import React from 'react';
// Styles
import '../styles/featured.scss';

import {
   Row,
   Col
} from 'reactstrap';

class Featured extends React.Component {
   render() {
      const article1 = <Col className="left" xs="12" sm="5" md="5" lg="5" xl="5">
         <a href={"article/" + this.props.articles[this.props.articles.length - 1].slug}>
            <img src={'images/' + this.props.articles[this.props.articles.length - 1].image_id} alt="img" />
         </a>
         <h1>
            <a href={"article/" + this.props.articles[this.props.articles.length - 1].slug}>
               {this.props.articles[this.props.articles.length - 1].title}
            </a>
         </h1>
         <h2 className="desc">
            {this.props.articles[this.props.articles.length - 1].description}
         </h2>
         <h6 className="author">
            <a href="#">{this.props.articles[this.props.articles.length - 1].user_id} in {this.props.articles[this.props.articles.length - 1].categorie}</a>
         </h6>
         <h6 className="date">
            {this.props.articles[this.props.articles.length - 1].date}
         </h6>
      </Col>
      const article_center = <Col className="center" xs="12" sm="4" md="4" lg="4" xl="4">
         <div>
            <div className="col-img">
               <a href={"article/" + this.props.articles[this.props.articles.length - 2].slug}>
                  <img src={'images/' + this.props.articles[this.props.articles.length - 2].image_id} alt="img" />
               </a>
            </div>
            <h1>
               <a href={"article/" + this.props.articles[this.props.articles.length - 2].slug}>
                  {this.props.articles[this.props.articles.length - 2].title}
               </a>
            </h1>
            <h2 className="desc">
               {this.props.articles[this.props.articles.length - 2].description}
            </h2>
            <h6 className="author">
               <a href="#">{this.props.articles[this.props.articles.length - 2].user_id} in {this.props.articles[this.props.articles.length - 2].categorie}</a>
            </h6>
            <h6 className="date">
               {this.props.articles[this.props.articles.length - 2].date}
            </h6>
         </div>
         <div>
            <div className="col-img">
               <a href={"article/" + this.props.articles[this.props.articles.length - 3].slug}>
                  <img src={'images/' + this.props.articles[this.props.articles.length - 3].image_id} alt="img" />
               </a>
            </div>
            <h1>
               <a href={"article/" + this.props.articles[this.props.articles.length - 3].slug}>
                  {this.props.articles[this.props.articles.length - 3].title}
               </a>
            </h1>
            <h2 className="desc">
               {this.props.articles[this.props.articles.length - 3].description}
            </h2>
            <h6 className="author">
               <a href="#">{this.props.articles[this.props.articles.length - 3].user_id} in {this.props.articles[this.props.articles.length - 3].categorie}</a>
            </h6>
            <h6 className="date">
               {this.props.articles[this.props.articles.length - 3].date}
            </h6>
         </div>
      </Col>
      const article_right = <Col className="right" xs="12" sm="3" md="3" lg="3" xl="3">
         <a href={"article/" + this.props.articles[this.props.articles.length - 4].slug}>
            <img src={'images/' + this.props.articles[this.props.articles.length - 4].image_id} alt="img" />
         </a>
         <h1>
            <a href={"article/" + this.props.articles[this.props.articles.length - 4].slug}>
               {this.props.articles[this.props.articles.length - 4].title}
            </a>
         </h1>
         <h2 className="desc">
            {this.props.articles[this.props.articles.length - 4].description}
         </h2>
         <h6 className="author">
            <a href="#">{this.props.articles[this.props.articles.length - 4].user_id} in {this.props.articles[this.props.articles.length - 4].categorie}</a>
         </h6>
         <h6 className="date">
            {this.props.articles[this.props.articles.length - 4].date}
         </h6>
      </Col>
      return(
         <section className="featured">
            <div className="wave"></div>
            <Row>
               {article1} {article_center} {article_right}
            </Row>
         </section>
      );
   }
}

export default Featured;