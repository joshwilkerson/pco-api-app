import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import ApplicationDetails from '../components/application_details'


const IndexPage = () => (
  <Layout>
    <SEO title="Applications" />
    <h1>My Developer Applications (OAuth)</h1>
    <p>Are you building an application that other Planning Center customers can use to connect to their own accounts through the Planning Center API? Register your application here.</p>

    <ApplicationDetails />

    <button className="btn">Register New Application</button>
  </Layout>
)

export default IndexPage
