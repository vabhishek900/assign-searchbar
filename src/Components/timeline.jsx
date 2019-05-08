import React, { Component } from "react";
import Content from "./content";

class Timeline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      items: [],
      data: []
    };

    var dataJson = [
      {
        id: 1,
        name: "Abhi",
        description: "react js Developer",
        date: "09 may 2019",
        time: "12.00  AM",
        image: "https://img.icons8.com/dotty/2x/administrator-male.png"
      },
      {
        id: 2,
        name: "Smit",
        description: "react js Developer",
        date: "21 may 2019",
        time: "5.00  AM",
        image: "https://img.icons8.com/dotty/2x/administrator-male.png"
      },
      {
        id: 3,
        name: "Akash",
        description: "react js Developer",
        date: "31 may 2019",
        time: "11.00  AM",
        image: "https://img.icons8.com/dotty/2x/administrator-male.png"
      }
    ];
    dataJson.forEach(obj => {
      this.state.data.push(obj);
    });
    //console.log(this.state.data);
    this.state.data.forEach(obj => {
      this.state.items.push(<Content details={obj} />);
    });
    this.filterData = this.filterData.bind(this);
  }
  filterData(event) {
    var val = event.target.value;
    this.setState({
      searchText: val
    });
    var updatedFilterData = this.state.data.filter(function(obj) {
      return obj.name.toLowerCase().search(val.toLowerCase()) !== -1;
    });
    var searchItems = [];
    updatedFilterData.forEach(obj => {
      searchItems.push(<Content details={obj} />);
    });
    this.state.items = searchItems;
  }
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container h-100">
          <div className="d-flex justify-content-center h-100">
            <div className="searchbar">
              <input
                className="search_input"
                type="text"
                name=""
                value={this.state.searchText}
                placeholder="Search..."
                onChange={this.filterData}
              />
              <a href="#" className="search_icon">
                <i className="fas fa-search" />
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <h2>TRACK INFO</h2>
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div id="tracking-pre" />
              <div id="tracking">
                <div className="text-center tracking-status-intransit">
                  <p className="tracking-status text-tight">in transit</p>
                </div>
                <div className="tracking-list">{this.state.items}</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Timeline;
