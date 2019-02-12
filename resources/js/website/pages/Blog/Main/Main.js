import React from 'react';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faFacebook } from "@fortawesome/free-brands-svg-icons";
//import { faTwitter } from "@fortawesome/free-brands-svg-icons";
///import { faYoutube } from "@fortawesome/free-brands-svg-icons";

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faFacebook } from "@fortawesome/free-brands-svg-icons";
//import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import Welcome from '../../../components/layouts/Welcome/Welcome';
import {
   Row,
   Col,
   Container
} from 'reactstrap';

import '../styles/main.scss';

class Main extends React.Component {

   render() {
      let articles;
      if(this.props.articles.length !== 0)
          articles = this.props.articles.reverse().map(elem => {
              const urlPost = "article/"+elem.slug;
              return (
                  <Col className="left" xs="12" sm="6" md="6" lg="6" xl="6" key={elem.id}>
                      <div className="clearfix"></div>
                      <div className="posts">
                          <Row className="post">
                              <Col xs="12" sm="9" md="9" lg="9" xl="9">
                                  <h1>
                                      <a href={urlPost}>{elem.title}</a>
                                  </h1>
                                  <h2 className="desc">{elem.description.substr(0,60)}</h2>
                                  <h6 className="author"><a href="#">{elem.user_id}</a></h6>
                                  <h6 className="date">{elem.date}</h6>
                              </Col>
                              <Col xs="12" sm="3" md="3" lg="3" xl="3" className="col-img">
                                  <img src={'images/'+elem.image_id} alt="img" />
                              </Col>
                          </Row>
                      </div>
                  </Col>
              );
          })
      else
          articles = <h6 >No Posts</h6>
      return (
         <main>
            <Container fluid>
                <Welcome />
                <section className="posts">
                    <div className="posts--top">
                        <h2>Articles</h2>
                        <a href="/blog">more</a>
                    </div>
                    <Row>
                        { articles }
                    </Row>
                </section>
            </Container>
         </main>
      );

   }
}

export default Main;