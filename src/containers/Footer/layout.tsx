import React from 'react';
import styled from 'styled-components';

interface IFooterLayoutProps {
  listScrollY: number
}

interface IContainerProps {
  height: number
}

const Container = styled.footer<IContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000;
  color: #ffffff;
  min-height: ${(props: any) => `${props.height}px`};
  font-weight: bold;
`;

export default ({
  listScrollY
}: IFooterLayoutProps) =>
  <Container height={100 - listScrollY}>
    Footer
  </Container>;