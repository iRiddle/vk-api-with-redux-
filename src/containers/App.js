import React, { Component } from "react";
import { User } from "../components/User";
import { Page } from "../components/Page";

import { connect } from "react-redux";
import { getPhotos } from "../actions/PageActions";

class App extends Component {
  render() {
    const { user, page, getPhotosAction } = this.props;

    return (
      <div className="row">
        <Page
          photos={page.photos}
          year={page.year}
          getPhotos={getPhotosAction}
          isFetching={page.isFetching}
        />
        <User name={user.name} />
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store);
  return {
    user: store.user,
    page: store.page
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getPhotosAction: year => dispatch(getPhotos(year))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App); //Подключи компонент к стору
