module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://alexhuyho.com`,
    // Your Name
    name: 'Alex Ho',
    // Main Site Title
    title: `Alex Ho | Software Developer`,
    // Description that goes under your name in main bio
    description: `I am a software engineer, software developer based out of Virginia, USA. I have experience building mobile and web applications and services in various verticals and I enjoy building side projects in my free time.`,
    // Optional: Twitter account handle
    author: `@AlexHo114`,
    // Optional: Resume URL
    resume: `https://raw.githubusercontent.com/hho114/resume/master/alex_resume.pdf`,
    // Optional: Github account URL
    github: `https://github.com/hho114`,

    youtube: `https://www.youtube.com/channel/UCOuT_FD9KGs_AtQnS935E5g`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/hho114/`,
    // Optional: Email
    email: `huyho114@gmail.com`,

    upwork: `https://www.upwork.com/o/profiles/users/~01e9d23b13376fd806/`,
    // Content of the About Me section
    about: `My professional life has been 100% driven by my passion for design and structure. I was always curious about technology when I was a kid, and started fixing things such as laptops and computers while in high school, therefore I chose a computer science career path as today. My short term goal is to join a reputed company where I can utilize my skills and knowledge for upliftment of the company and where I can get a learning environment to boost my career. My long term goal is to become skillful and coordinated towards the development of the country. My current interests are web development, mobile development, machine learning, data analysis, and software engineering.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'NAIL SALON',
        description:
          'Project about design and build nail salon. COMING SOON...',
        link: '',
      },
      {
        name: 'HOUSE',
        description:
          'I purchased the house and remodel it, I count this as a project because I have learned multiples things such as real estate, plumbing, electric as well as redesign the house architecture.',
        link: 'https://hho114.github.io/',
      },

      {
        name: 'KSHOW',
        description:
          'Watch Asian TV shows online for FREE! Access to Korean Entertainment collections across the Americas featuring dramas, romantic comedies, reality, and variety series all with english-language subtitles.',
        link: 'https://github.com/hho114/kshow-ios-a',
      },

      {
        name: 'Proof',
        description:
          'PROOF is a mobile app technology solution for remote drug and alcohol testing.',
        link: 'https://apps.apple.com/us/app/proof/id1471553656',
      },
      {
        name: 'MobileTrek',
        description:
          'MobileTrek provides a convenient method for Participants to interface and remain compliant with their program.',
        link:
          'https://play.google.com/store/apps/details?id=recoverytrek.com.mobiletrek&hl=en',
      },
      {
        name: 'Porfolio',
        description:
          'A modern dark theme personal portfolio and blog template built on GatsbyJS and styled with TailwindCSS.',
        link: 'https://github.com/hho114/devfolio',
      },
      {
        name: 'Burger Order',
        description:
          'A sample order burger website using react js with multiple foudation implements',
        link: 'https://github.com/hho114/reactjs-burger',
      },
      {
        name: 'Dump The Bump',
        description:
          'Cross platfrom mobile application with Firebase and Flutter, the application help post-pregnant women keep track of their weight and emotion to bring them back to pre-pregnancy life',
        link: 'https://apps.apple.com/us/app/dump-the-bump/id1518827461',
      },
      {
        name: 'CSUF SWAP',
        description:
          'Cross platfrom mobile application with Firebase and Flutter, the application help student to solve the issue when they have ticket permit but hard to find a parking spot',
        link: 'https://github.com/Krunk-Juice/CSUF-Parking-App',
      },
      {
        name: 'University Database',
        description:
          'Website to check grades and search for courses and professor with mock university database',
        link: 'https://github.com/hho114/University_Database',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Recovery Trek',
        description: 'Mobile Developer, September 2020 - Present',
        link: 'https://www.recoverytrek.com/',
      },
      {
        name: 'Intelligent Learning Experiences Lab',
        description:
          'Mobile and Full-Stack Developer, January 2020 - September 2020',
        link: 'http://www.fullerton.edu/ecs/faculty/pinventado/ilxl/',
      },
      {
        name: 'California State University, Fullerton',
        description:
          'Computer Laboratory Consultant, August 2019 - August 2020',
        link: 'https://www.fullerton.edu/it/students/computerlabs/',
      },
      {
        name: 'National Resource Center For Asian Languages',
        description: 'IT Support Specialist, August 2019 - January 2020',
        link: 'http://www.fullerton.edu/nrcal/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Swift, Java, Dart, Kotlin, Flutter, JSON, C++, C, HTML, XML, CSS, Python, SQL, Fortran, JavaScript, Node.js, Express.js, Reactjs, PHP. ',
      },
      {
        name: 'Databases',
        description:
          'Salesforce, Firebase, AWS, Oracle, MongoDB, JSON API, RESTAPI, NoSQL, MySQL.',
      },
      {
        name: 'Others',
        description:
          'Docker, CI / CD, Microservices, API design, Agile / Scrum, Xcode, Android Studio, Bash Terminal, Play Store Console, Apple Store Connect, VSCode, Git, Microsoft Office, Github, Gitlab, Heroku, Bugfender, Linux, Window, Mac.',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
