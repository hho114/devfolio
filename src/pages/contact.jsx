import { graphql } from 'gatsby';
import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Index = ({ data }) => {
    const classes = {
        wrapper: 'block pt-12 md:flex',
        title: 'pb-6 md:w-full md:max-w-150 md:p-0',
        heading:
          'font-xs font-light tracking-widest text-sm text-gray-300 leading-normal uppercase',
        content: 'flex-none text-lg text-gray-400 font-light md:flex-1 md:pl-20',
        link:
    'inline-block font-semibold text-lg text-gray-400 hover:text-white hover:font-extrabold',
    item: 'inline list-none ',
      };

      const contact = (
      <li className={classes.item}>
      <a className={classes.link} 
      href={"https://contacts-ca320-default-rtdb.firebaseio.com/contacts.json"}>Contact</a>
      </li>)

  return (
    <Layout>
      <SEO title="Contact" />
      <Header metadata={data.site.siteMetadata} noBlog={false}/>
      <p className = {classes.content}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu imperdiet arcu.Mauris molestie, magna ac suscipit mattis, lacus mauris tempor mi, sit amet consequat nibh est eget ligula nisi neque, fringilla at lobortis in, interdum nec lorem. {contact} vitae mi eu lectus mattis iaculis vel ac ex. Quisque at tellus non odio vestibulum vehicula. Nam gravida justo vitae arcu finibus, vel volutpat ipsum elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam vehicula faucibus felis, venenatis sodales nisi volutpat et. Phasellus mi augue, tempor non aliquet eu, gravida nec arcu. Integer pretium id metus non lacinia. 
      </p>
      
      
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
