import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionBlog from '../components/section-blog';
import SectionExperience from '../components/section-experience';
import SectionProjects from '../components/section-projects';
import SectionSkills from '../components/section-skills';
import SEO from '../components/seo';
import duckImg from '../images/duck.gif';

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const projects = get(data, 'site.siteMetadata.projects', false);
  const posts = data.allMarkdownRemark.edges;
  const experience = get(data, 'site.siteMetadata.experience', false);
  const skills = get(data, 'site.siteMetadata.skills', false);
  const noBlog = !posts || !posts.length;

  return (
    <Layout>
      <SEO />
      <Header metadata={data.site.siteMetadata} noBlog={noBlog} />
      {about && <SectionAbout about={about} />}
      {projects && projects.length && <SectionProjects projects={projects} />}
      {noBlog && <SectionBlog posts={posts} />}
      {experience && experience.length && (
        <SectionExperience experience={experience} />
      )}
      {skills && skills.length && <SectionSkills skills={skills} />}
    {/* 🦆 Walking Ducks Animation */}
    <div style={{ display: 'flex', justifyContent: 'left' }}>
      <img
        src={duckImg}
        alt="Animated decoration"
        style={{ width: '200px', height: 'auto' }}
      />
    </div>
      {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        {[...Array(6)].map((_, i) => {
          const size = 80 + i * 20; // adjust both width and height
          return (
            <img
              key={i}
              src={duckImg}
              alt={`Duck ${i + 1}`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                marginLeft: i === 0 ? 0 : '-30px',
                animation: 'waddle 2s infinite',
                animationDelay: `${i * 0.3}s`,
                zIndex: 5 - i,
              }}
            />
          );
        })}
      </div> */}

      {/* 👇 Add keyframes animation */}
      {/* <style>{`
        @keyframes waddle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style> */}
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
        resume
        github
        youtube
        linkedin
        upwork
        email
        projects {
          name
          description
          link
        }
        experience {
          name
          description
          link
        }
        skills {
          name
          description
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
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
