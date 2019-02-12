import React from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import Footer from '../Footer/Footer';
import './post.scss';

class Post extends React.Component {

    componentDidMount() {
        const id = this.props.location.pathname.split('/')[2];
        const post = this.props.articles.find(
            elem => elem.id == id);
            console.log(post);
        document.title = post.title+" - "+ post.user_id;
    }
    render() {
        const id = this.props.location.pathname.split('/')[2];
        const post = this.props.articles.find(
            elem => elem.id == id);
        if(post == undefined) {
            this.props.history.push('/404');
        }
        console.log(document.querySelector('#article'));
        //document.querySelector('#article').innerHTML = post.html;
        return (
            <React.Fragment>
                <section className="post">
                    <div className="image--top">
                        <img src={'images/'+post.image_id} alt="img" />
                        <p className="credit">Credit: fasphotogrpahic/iStock/Getty Images Plus</p>
                    </div>
                    <Row className="bottom">
                        <Col xs="12" sm="2" md="2" lg="2" xl="2" className="left">
                            <div className="share">
                                <a href="#">
                                    <i className="fa fa-facebook" style={ {color: '#4267B2'} }></i>
                                </a>
                                <a href="#">
                                    <i className="fa fa-twitter" style={ {color: '#8ED0F8'} }></i>
                                </a>
                                <a href="#">
                                    <i className="fa fa-youtube" style={ {color: '#FF0000'} }></i>
                                </a>
                            </div>
                        </Col>
                        <Col xs="12" sm="10" md="10" lg="10" xl="10" className="right">
                            <h3 className="categorie">{post.categorie}</h3>
                            <h1 className="title">{post.title}</h1>
                            <h2 className="description">{post.descreption}</h2>
                            <div className="user">
                                <Row>
                                    <Col xs="12" sm="1" md="1" lg="1" xl="1" className="image">
                                        <img src="http://via.placeholder.com/50x50" alt="images" className="img-circle" />
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
                            <article id="article" dangerouslySetInnerHTML={ { __html: post.html } }>

                            </article>
                        </Col>
                    </Row>
                </section>
                <Footer />
            </React.Fragment>
        )
    }
}
export default Post;