import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Application, ApplicationBlank, ApplicationNew } from '../components/application'

const Aurthorized = () => (
  <Layout>
    <SEO title="Authorized Applications" />
    <h1>Authorized Applications</h1>
    <p>Here's a list of all the applications you've been granted access to and what permissions they have.</p>
    <Application />
  </Layout>
)

export default Aurthorized
