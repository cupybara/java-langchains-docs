import { Redirect } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';


export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`java-langchains Documentation`}
      description="Documentation for github.com/cupybara/java-langchains">
      <main>
        <Redirect to="/docs/category/getting-started"></Redirect>
      </main>
    </Layout>
  );
}
