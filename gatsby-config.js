module.exports = {

  // Add this if you want to deploy to github pages or if you deploy to sub-route
  // pathPrefix: "/reponame",

  siteMetadata: {
    title: `invoker-gatsby`,
    description: `An opiniated starter for gatsby projects built by Meridian.id. This starter ships with the main Gatsby configuration files you might need.`,
    author: `Ongki 'vasilenka' Herlambang <ongki@herlambang.id | o@meridian.id>`,

    // This line needed for SITEMAP GENERATOR and ROBOT.txt
    siteUrl: `https://meridian.id`,

  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    /** Gatsby MDX
     *  Learn more here: https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/
     * */
    {
      resolve: `gatsby-plugin-mdx`,
      options: {

      }
    },

    // Add SVG inline
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#008380`,
        theme_color: `#008380`,
        display: `minimal-ui`,
        icon: `src/assets/images/mid.png`, // This path is relative to the root of the site.
      },
    },

    // Analytics using the new GTAG
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-XXXXXXXX-X`,
        head: true,
        anonymize: true,
      },
    },
    // Analytics using DEPRECATED API setup
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },
    // Generate SITEMAP.xml
    `gatsby-plugin-sitemap`,
    // Generate ROBOT.txt
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://meridian.id',
        sitemap: 'https://meridian.id/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    // Add N-PROGRESS loading bar
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#008384`,
        showSpinner: false,
      },
    },

    // PRIMSIC GRAPHQL
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: 'mid-dummy',
        omitScript: true,
        previews: false,
        accessToken: 'MC5YUS1aWFJFQUFOd0FjLUxq.77-9CX3vv73vv71w77-977-9Y2jvv73vv73vv71277-977-9F21477-977-9K1MwRO-_ve-_vS8S77-9KE8',
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
