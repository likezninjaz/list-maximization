import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from './layout';
import { setListScroll, setListScrollType } from '../../store/actions/list';

interface IListProps {
  setListScroll: setListScrollType
}

class List extends Component<IListProps> {
  public render() {

    const { setListScroll } = this.props;

    return (
      <Layout onListScroll={setListScroll}/>
    );
  }
}

export default connect(null, { setListScroll })(List);
