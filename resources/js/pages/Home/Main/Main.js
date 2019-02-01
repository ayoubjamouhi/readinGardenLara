import React from 'react';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faFacebook } from "@fortawesome/free-brands-svg-icons";
//import { faTwitter } from "@fortawesome/free-brands-svg-icons";
///import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import Welcome from '../../../components/layouts/Welcome/Welcome';

import {
   Row,
   Col,
   Container
} from 'reactstrap';

class Main extends React.Component {

   render() {

      const article1 = <Col className="left" xs="12" sm="5" md="5" lg="5" xl="5">
         <a href={"post/" + this.props.articles[this.props.articles.length - 4].id}>
            <img src={'images/' + this.props.articles[this.props.articles.length - 4].image_id} alt="img" />
         </a>
         <h1>
            <a href={"post/" + this.props.articles[this.props.articles.length - 4].id}>
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
      const article_center = <Col className="center" xs="12" sm="4" md="4" lg="4" xl="4">
         <div>
            <div className="col-img">
               <a href={"post/" + this.props.articles[this.props.articles.length - 3].id}>
                  <img src={'images/' + this.props.articles[this.props.articles.length - 3].image_id} alt="img" />
               </a>
            </div>
            <h1>
               <a href={"post/" + this.props.articles[this.props.articles.length - 3].id}>
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
         <div>
            <div className="col-img">
               <a href={"post/" + this.props.articles[this.props.articles.length - 2].id}>
                  <img src={'images/' + this.props.articles[this.props.articles.length - 2].image_id} alt="img" />
               </a>
            </div>
            <h1>
               <a href={"post/" + this.props.articles[this.props.articles.length - 2].id}>
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
      </Col>
      const article_right = <Col className="right" xs="12" sm="3" md="3" lg="3" xl="3">
         <a href={"post/" + this.props.articles[this.props.articles.length - 4].id}>
            <img src={'images/' + this.props.articles[this.props.articles.length - 4].image_id} alt="img" />
         </a>
         <h1>
            <a href={"post/" + this.props.articles[this.props.articles.length - 1].id}>
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
      return (
         <main>
            <Container fluid>
               <section className="featured">
                  <Row>
                     {article1} {article_center} {article_right}
                  </Row>
               </section>
               <Welcome />
               <section className="featured-members">
                  <Row>
                     <Col className="left" xs="12" sm="7" md="7" lg="7" xl="7">
                        <div className="posts--top">
                           <h2>
                              <a href="blog">
                                 Featured for members
                                 </a>
                           </h2>
                           <a href="#">More ></a>
                        </div>
                        <div className="clearfix"></div>
                        <div className="posts">
                           {
                              this.props.articles.map(elem => {
                                 return (
                                    <Row className="post" key={elem.id}>
                                       <Col xs="12" sm="9" md="9" lg="9" xl="9">
                                          <h1>
                                             <a href={"post/" + elem.id}>
                                                {elem.title}
                                             </a>
                                          </h1>
                                          <h2 className="desc">{elem.description}</h2>
                                          <h6 className="author">
                                             <a href="#">
                                                {elem.user_id}
                                             </a>
                                          </h6>
                                          <h6 className="date">{elem.date}</h6>
                                       </Col>
                                       <Col xs="12" sm="3" md="3" lg="3" xl="3" className="col-img">
                                          <a href={"post/" + elem.id}>
                                             <img src={'images/' + elem.image_id} alt="img" />
                                          </a>

                                       </Col>
                                    </Row>
                                 );
                              })
                           }
                        </div>
                     </Col>
                     <Col xs="4" sm="1" md="1" lg="1" xl="1"></Col>
                     <Col xs="12" sm="4" md="4" lg="4" xl="4" className="right">
                        <h2 className="top">
                           Popular on readinGarden
                           </h2>
                        <div className="posts">
                           <Row className="post">
                              <Col xs="2" className="left">
                                 <span>01</span>
                              </Col>
                              <Col xs="10" className="right">
                                 <h1><a>The Blockchain Is a Reminder of the Internet’s Failure</a></h1>
                                 <h5 className="author--categorie">
                                    <a>Andrew Leonard</a>
                                    <span> in</span> <a>LOVE/HATE</a>
                                 </h5>
                                 <h6 className="date">Dec 5 . 6 min read</h6>
                              </Col>
                           </Row>
                        </div>
                        <div className="footer">
                           <a href="blog">Blog</a>
                           <a href="privacy">Privacy</a>
                           <a href="contact">Contact us</a>
                           <a href="about">About</a>
                        </div>
                     </Col>
                  </Row>
               </section>
            </Container>
         </main>
      );

   }
}

export default Main;