import React, { Component } from 'react';

import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #000000;
  font-weight: bold;

  &:last-child {
    border-bottom: none;
  }
`;

interface IListProps {
  data: number
}

class ListItem extends Component<IListProps> {
  render() {
    const { data } = this.props;

    return (
      <Item>{data}</Item>
    );
  }
}

export default ListItem;
