import React, { Component } from "react";
import './App.css';
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [],
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/links/")
      .then((res) => this.setState({ links: res.data }))
      .catch((err) => console.log(err));
  };

  renderItems = () => {
    return this.state.links.map((link) => (
      <div
        key={link.id}
        className="col-md-7 text-center mx-auto"
      >
          <a
	    href={link.link}
	    className="text-decoration-none  text-capitalize"
	  >
              <div className="insta-box link-box mt-3">
                  {link.title}
              </div>
          </a>
      </div>
    ));
  };

  render() {
    return (
      <main className="container mx-auto">
          <div className="row mt-3 ">
              <div className="col-md-7 text-center mx-auto">
                  <div className="profile-image img-fluid ">
                      <img src="https://www.gravatar.com/avatar/5b39fd748ae40b7e80a5b6addb630ffa?s=200" alt="profile" className="rounded-circle"></img>
                      <h3 className="h5 mt-3 mb-4">@felipetio aka Felipe Vieira</h3>
                  </div>
              </div>

              {this.renderItems()}

              <div className="col-md-7  text-center mx-auto">
                  <div className="footer  mt-5">
                      <div className="icon d-flex justify-content-center align-items-baseline">
	          	    <h5 className="ml-2"><a href={process.env.PUBLIC_URL + '/felipetio.pub'} download='felipetio.pub'>F1A2 B49A BBC9 E883 A99B 6130 A88C 0EF4 F9CF 7E33</a></h5>
                      </div>
                  </div>
              </div>
          </div>
      </main>
    );
  }
}

export default App;

