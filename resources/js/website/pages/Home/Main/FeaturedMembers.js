import React from 'react';
// Styles
import '../styles/featured-members.scss';

import {
   Row,
   Col
} from 'reactstrap';
class FeaturedMembers extends React.Component {
   render() {
      return(
         <section className="featured-members">
            <Row>
               <Col className="left" xs="12" sm="7" md="7" lg="7" xl="7">
                  <div className="posts--top">
                     <h2>
                        <a href="blog">
                           Featured for members
                           </a>
                     </h2>
                     <a href="/blog">More ></a>
                  </div>

                  <div className="clearfix"></div>
                  <div className="posts">
                     {
                        this.props.articles.filter(elem => {
                           return elem.is_featured == 1
                        }).map(elem => {
                           return (
                              <Row className="post" key={elem.id}>
                                 <Col xs="12" sm="9" md="9" lg="9" xl="9">
                                    <h1>
                                       <a href={"article/" + elem.slug}>
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
                                    <a href={"article/" + elem.slug}>
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
      );
   }
}

export default FeaturedMembers;