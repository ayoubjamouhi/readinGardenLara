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
                            <Button className="get--started">Get started</Button>
                            <Button className="learn--more">Learn more</Button>
                        </div>
                    </div>
         </section>
      );
   }
}

export default Welcome;