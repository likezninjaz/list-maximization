import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from './layout';
import { getScrollY } from '../../store/selectors/list';

interface IHeaderProps {
  listScrollY: number
}

class Header extends Component<IHeaderProps> {
  render() {
    return (
      <Layout
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state: any) => ({
  listScrollY: getScrollY(state)
});

export default connect(mapStateToProps)(Header);
