import { Link } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import profileImg from '../../images/profile_qr_beauty.png';

const classes = {
  wrapper: 'block mb-6 md:flex',
  imageWrapper: 'w-full max-w-150',
  image: 'transform transition-all duration-150 hover:scale-105',//use rounded-full for cirle image
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl-20',
  name: 'text-5xl font-bold leading-tight text-gray-500  hover:text-white hover:font-extrabold',
  description: 'text-gray-400',
  list: 'mt-6 uppercase tracking-wider',
  item: 'inline list-none pr-4 ',
  link:
    'inline-block py-2 font-semibold text-xs text-gray-400 hover:text-white hover:font-extrabold',
};

const Header = ({ metadata = {}, noBlog = true }) => {
  const resume = get(metadata, 'resume', false);
  // const twitter = get(metadata, 'author', false);
  const github = get(metadata, 'github', false);
  const youtube = get(metadata, 'youtube', false);
  const linkedin = get(metadata, 'linkedin', false);
  const email = get(metadata, 'email', false);


  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        <Link to="https://docs.google.com/document/d/e/2PACX-1vRaxByCzRQz_br0OT4bI9v5x9zlmSFp83DIt6sEq0e7slWck2aB07WA4XEsRWNKk-Ka32TVkawSWRCW/pub">
          <img className={classes.image} src={profileImg} alt={metadata.name} />
          
        </Link>
        
       
      </div>
      <div className={classes.contentWrapper}>
        <h1 className={classes.name}>
          <Link to="/">{metadata.name}</Link>
        </h1>
        <p className={classes.description}>{metadata.description}</p>

        <ul className={classes.list}>

          {resume && (
            <li className={classes.item}>
              <a
                className={classes.link}
                href={resume}
              >
                Resume
              </a>
            </li>
          )}

          {/* {twitter && (
            <li className={classes.item}>
              <a
                className={classes.link}
                href={`https://twitter.com/${twitter}`}
              >
                Twitter
              </a>
            </li>
          )} */}
           
          {github && (
            <li className={classes.item}>
              <a className={classes.link} href={github}>
                GitHub
              </a>
            </li>
          )}

          {linkedin && (
            <li className={classes.item}>
              <a className={classes.link} href={linkedin}>
                LinkedIn
              </a>
            </li>
          )}

          {youtube && (
            <li className={classes.item}>
              <a className={classes.link} href={youtube}>
                Youtube
              </a>
            </li>
          )}
          
          {
            email && (<li className={classes.item}>
              <Link className={classes.link} href={`mailto:${email}`}>
                EMAIL-ME
              </Link>
            </li>)
          }
          
          {noBlog && (
            <li className={classes.item}>
              <Link className={classes.link} to="/blog">
                Blog
              </Link>
            </li>
          )}

        </ul>
      </div>
    </div>
  );
};

export default Header;
