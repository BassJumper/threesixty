import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Page from "react-page-loading";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import "animate.css/animate.min.css";
import "./assets/css/style.scss";
import "./assets/css/responsive.scss";
import Home from "./pages/Home";
import BlogPostDemo from "./pages/BlogPostDemo";
import DummyPage from './pages/DummyPage';
import WhoWeWorkWith from "./pages/WhoWeWorkWith";
import ExistingClient from './pages/ExistingClient';
import OurServices from './pages/OurServices';
import WhyChooseUs from './pages/WhyChooseUs';
import OurTeam from './pages/OurTeam';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import Article from './pages/Article';
import Service from './pages/Service';

//TODO: [TECH-DEBT] - Convert all to Typescript
class App extends Component {
  render() {
    return (
        <div className="App">
            <div>
                <Page loader={"bubble-spin"} color={"#3d2f8f"} size={9}>
                    <Switch>
                        <Route path="/blogpostdemo" component={BlogPostDemo} />
                        <Route path="/dummypage" component={DummyPage} />
                        <Route path="/whoweworkwith" component={WhoWeWorkWith} />
                        <Route path="/whychooseus" component={WhyChooseUs} />
                        <Route path="/existingclient" component={ExistingClient} />
                        <Route path="/ourservices" component={OurServices} />
                        <Route path="/ourteam" component={OurTeam} />
                        <Route path="/blog" component={Blog} />
                        <Route path="/service" component={Service} />
                        <Route path="/contactus" component={ContactUs} />
                        <Route path="/article" component={Article} />
                        <Route path="/" component={Home} />
                    </Switch>
                </Page>
            </div>
      </div>
    );
  }
}

export default App;
