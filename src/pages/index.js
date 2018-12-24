import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Application, ApplicationBlank, ApplicationNew } from '../components/application'


const IndexPage = () => (
  <Layout>
    <SEO title="Applications" />
    <h1 className="mb-1">My Developer Applications (OAuth)</h1>
    <p>Are you building an application that other Planning Center customers can use to connect to their own accounts through the <a href="http://developer.planning.center/docs">Planning Center API</a>? Register your application here.</p>

    <Application />
    <button className="btn">Register New Application</button>

    <h3 className="d-b mt-4 pt-4">blank state</h3>
    <ApplicationBlank />

      <h3 className="d-b mt-4 pt-4">new/edit state</h3>
      <ApplicationNew />
  </Layout>
)

export default IndexPage
