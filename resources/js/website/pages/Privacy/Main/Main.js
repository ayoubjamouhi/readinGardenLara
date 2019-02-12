import React from 'react';


import {
    Container
} from 'reactstrap';
import '../styles/main.scss';

class Main extends React.Component {
    render() {
        return (
            <main>
                <Container>
                    <section>
                        <h1>Privacy Policy</h1>
                        <ol className="privacy--top">
                            <li><a href="/privacy#number1">Who we are</a></li>
                            <li><a href="/privacy#number2">About this privacy notice</a></li>
                            <li><a href="/privacy#number3">Changes href this privacy notice</a></li>
                            <li><a href="/privacy#number4">Personal data we collect</a></li>
                            <li><a href="/privacy#number5">Third party sites, apps and platforms</a></li>
                            <li>
                                <a href="/privacy#number6">Cookie policy</a>
                                <ol>
                                    <li>
                                        <a href="/privacy#number6-1">Essential cookies</a>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <a href="/privacy#number7">Essential cookies</a>
                                <ol>
                                    <li>
                                        <a href="/privacy#number7-1">EU users</a>
                                    </li>
                                    <li>
                                        <a href="/privacy#number7-2">California privacy rights</a>
                                    </li>
                                </ol>
                            </li>

                        </ol>
                        <ol className="privacy">
                            <li id="number1">
                                readinGarden is an website for articles.
                            </li>
                            <li id="number2">
                                This privacy notice tells you how readinGarden work.
                            </li>
                            <li id="number3">
                                Our privacy notice was last updated on 11 Junary 2019.  If you have any questions about this privacy you can emailing on privacy@readingarden.com
                            </li>
                            <li id="number4">
                                <span>
                                    We dont collect any information about you for now:
                                </span>
                            </li>
                            <li id="number5">
                                <span>
                                    Third party sites and platforms
                                </span>
                                <p>
                                    Our sites may include links to third-party sites and social media platforms, including Facebook, Twitter. Clicking on those links may allow third parties to collect or share data about you. We do not control third-party sites, apps and social media platforms and we encourage you to read their privacy notices so that you understand how they process information about you.
                                </p>
                            </li>
                            <li id="number6">
                                <span>Cookie policy</span>
                                <p>
                                    Cookies are small data store in your hard drive for now we dont use it.
                                </p>
                                <ol>
                                    <li id="number6-1">
                                        <span>Essential cookies</span>
                                        <p>
                                            Analytics cookies are used by us and by third parties who process data for us for data analytics purposes (for example Google Analytics) so that we can manage and improve the performance and design of our sites and apps and for monitoring, auditing, research and reporting.
                                        </p>

                                        <p>
                                            We may collect the following personal data through essential cookies: a unique ID assigned to your device; IP address; device and browser type; operating system; referring URLs; content viewed or other actions taken on our sites and apps; time and date of those actions; country and language selected.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li id="number7">
                                <span>Your legal rights</span>
                                <ol>
                                    <li id="number7-1">
                                        <span>EU users</span>
                                        <p>You can ask for Google analytics data.</p>
                                    </li>
                                    <li id="number7-2">
                                        <span>California privacy rights</span>
                                        <p>You can ask for Google analytics data.</p>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </section>
                </Container>
            </main>
        );
    }
}
export default Main;