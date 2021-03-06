import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"

import Main from '../components/Main';
import Blog from '../components/Blog';

const Container = styled.div`
  background-color: var(--red);
  padding-top: 10vh;
`;

const IndexPage = () => (
  <Container>
  <Layout>
    <SEO title="AYOUB JAMOUHI portfio - web developer" />
    <Blog />
  </Layout>
  </Container>
)

export default IndexPage
