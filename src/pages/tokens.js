import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Application, ApplicationBlank, ApplicationNew } from '../components/application'

const Tokens = () => (
  <Layout>
    <SEO title="Access Tokens" />
    <h1>Access Tokens</h1>
    <p>Are you a programmer looking to quickly connect to your own Planning Center account? Create an access token to use with your own scripts and apps.</p>
    <div className="alert alert--danger">
      Do not share your tokens with 3rd party applications (they should register their own OAuth application).
    </div>
    <Application isToken={true} />
  </Layout>
)

export default Tokens
