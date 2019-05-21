import React from 'react';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faFacebook } from "@fortawesome/free-brands-svg-icons";
//import { faTwitter } from "@fortawesome/free-brands-svg-icons";
///import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
   Row,
   Col,
   Container
} from 'reactstrap';
import '../styles/main.scss';
import AdComponent from '../../../components/layouts/Adsense/AdComponent';
class Main extends React.Component {
   componentDidMount() {
      (adsbygoogle = window.adsbygoogle || []).push({});
   }
   render() {
      const slug = document.getElementById('slug').innerHTML
      const post = this.props.article;
      document.title= post.title+'- readinGarden';
      return (
         <main>
            { post != undefined ?
            <Container fluid>
               <section className="post">
                     <div className="image--top">
                           <img src={'/images/'+post.image_id} alt="img" />
                           <p className="credit">Credit: {post.credit}</p>
                     </div>
                     <Row className="bottom">
                           <Col xs="12" sm="1" md="1" lg="1" xl="1" className="left">
                              <div className="share">
                                 <a href="#">
                                       <FontAwesomeIcon icon={ faFacebook } />
                                 </a>
                                 <a href="#">
                                       <FontAwesomeIcon icon={ faTwitter } />
                                 </a>
                              </div>
                           </Col>
                           <Col xs="12" sm="11" md="11" lg="11" xl="11" className="right">
                              <AdComponent />
                              <h3 className="categorie">IN {post.categorie}</h3>
                              <h1 className="title">{post.title}</h1>
                              <h2 className="description">{post.descreption}</h2>
                              <div className="user">
                                 <Row>
                                       <Col xs="12" sm="1" md="1" lg="1" xl="1" className="image">
                                          <img src="/images/admin.png" alt="images" className="img-circle"/>
                                       </Col>
                                       <Col xs="12" sm="4" md="4" lg="4" xl="4" className="info">
                                          <div className="name--follow">
                                             <h6>{post.user_id}</h6>
                                             <button>Follow</button>
                                          </div>
                                          <div className="date">
                                             {post.date}
                                          </div>

                                       </Col>
                                 </Row>
                              </div>
                              <Row className="article">
                                 <Col xs="12" sm="9" md="9" lg="9" xl="9">
                                    <article
                                       id="article"
                                       dangerouslySetInnerHTML={ { __html: post.html } }
                                    ></article>
                                 </Col>
                                 <Col xs="12" sm="3" md="3" lg="3" xl="3">
                                    <AdComponent />
                                 </Col>
                              </Row>

                           </Col>
                     </Row>
                  </section>
            </Container>
            : window.location = "/error404" }
         </main>
      );

   }
}

export default Main;