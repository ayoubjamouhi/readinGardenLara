import React from 'react';
import {
   Button
} from 'reactstrap';
import './welcome.scss';
class Welcome extends React.Component {
   render() {
      return (
         <section className="welcome">
                    <div className="text">
                        <h1>Welcome to readinGarden</h1>
                        <h5>We’ll deliver the best stories and ideas on the topics you care about most straight to your homepage, app, or inbox.</h5>
                        <div className="buttons">
                            <Button className="get--started"><a href="/blog">Get started</a></Button>
                            <Button className="learn--more"><a href="/about-us">Learn more</a></Button>
                        </div>
                    </div>
         </section>
      );
   }
}

export default Welcome;