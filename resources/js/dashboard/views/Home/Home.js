import React from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Col,
    Container,
    Row,
} from 'reactstrap';
import './Home.scss';
import './featured.scss';
import './welcome.scss';
import './featured-members.scss';

class Home extends React.Component {
    componentDidMount() {

    }

    render() {
        console.log(this.props.articles);
        const article1 = <Col className="left" xs="12" sm="5" md="5" lg="5" xl="5">
            <img src="http://via.placeholder.com/300x200" alt="img" />
            <h1>
                <Link to={"post/" + this.props.articles[this.props.articles.length - 4].id}>
                    {this.props.articles[this.props.articles.length - 4].title}
                </Link>
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
                    <img src="http://via.placeholder.com/300x200" alt="img" />
                </div>
                <h1>
                    <Link to={"post/" + this.props.articles[this.props.articles.length - 3].id}>

                        {this.props.articles[this.props.articles.length - 3].title}
                    </Link>
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
                    <img src="http://via.placeholder.com/300x200" alt="img" />
                </div>
                <h1>
                    <Link to={"post/" + this.props.articles[this.props.articles.length - 2].id}>
                        {this.props.articles[this.props.articles.length - 2].title}
                    </Link>
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
            <img src="http://via.placeholder.com/300x200" alt="img" />
            <h1>
                <Link to={"post/" + this.props.articles[this.props.articles.length - 1].id}>
                    {this.props.articles[this.props.articles.length - 1].title}
                </Link>
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
            <Container fluid>

                <section className="featured">
                    <Row>
                        {article1} {article_center} {article_right}
                    </Row>
                </section>
                <section className="welcome">
                    <div className="text">
                        <h1>Welcome to readinGarden</h1>
                        <h5>We’ll deliver the best stories and ideas on the topics you care about most straight to your homepage, app, or inbox.</h5>
                        <div>
                            <Button className="get--started">Get started</Button>
                            <Button className="learn--more">Learn more</Button>
                        </div>
                    </div>
                </section>
                <section className="featured-members">
                    <Row>
                        <Col className="left" xs="12" sm="7" md="7" lg="7" xl="7">
                            <div className="posts--top">
                                <h2>
                                    <Link to="blog">
                                        Featured for members
                                    </Link>
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
                                                    <Link to={"post/"+elem.id}>
                                                        {elem.title}
                                                    </Link>
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
                                            <img src="http://via.placeholder.com/300x200" alt="img" />
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
                                <Link to="help">Help</Link>
                                <Link to="blog">Blog</Link>
                                <Link to="privacy">Privacy</Link>
                                <Link to="contact-us">Contact us</Link>
                                <Link to="about">About</Link>
                            </div>
                        </Col>
                    </Row>
                </section>
            </Container>
        );
    }
}
export default Home;