import React from 'react';
import Articles from '../components/articles';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { fetchAPI } from '../lib/api';

const Home = ({ articles, categories, homepage }) => {
  console.log(JSON.stringify(homepage));
  return (
      <Layout categories={categories}>
        <Seo seo={homepage.attributes.defaultSeo} />
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <h1>{homepage.attributes.siteDescription}</h1>
            <Articles articles={articles} />
          </div>
        </div>
      </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/api/articles", { populate: ["cover", "category"] }),
    fetchAPI("/api/categories", { populate: "*" }),
    // fetchAPI("/api/global", { populate: ["defaultSeo"] }),
    fetchAPI("/api/global", { populate: "*" }),
  ]);
  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
