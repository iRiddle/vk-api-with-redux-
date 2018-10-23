import React, { Component } from "react";
import PropTypes from "prop-types";

export class Page extends Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText;
    this.props.getPhotos(year);
  };
  render() {
    const { year, photos, isFetching } = this.props;
    return (
      <div className="ib page">
        <p>
          <button className="btn" onClick={this.onBtnClick}>
            2018
          </button>{" "}
          <button className="btn" onClick={this.onBtnClick}>
            2017
          </button>{" "}
          <button className="btn" onClick={this.onBtnClick}>
            2016
          </button>{" "}
          <button className="btn" onClick={this.onBtnClick}>
            2015
          </button>
        </p>
        <h3>{year} год</h3>
        {isFetching ? <p>Download...</p> :<p>You have {photos.length} photos</p> }
      </div>
    );
  }
}

Page.propType = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
};
