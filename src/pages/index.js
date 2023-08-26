import { Redirect } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';


export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  const redirectUrl = `${siteConfig.baseUrl}docs/category/getting-started`

  return (
    <Layout
      title={`java-langchains Documentation`}
      description="Documentation for github.com/cupybara/java-langchains">
      <main>
        <Redirect to={redirectUrl}></Redirect>
      </main>
    </Layout>
  );
}
