module.exports = {

  // Add this if you want to deploy to github pages or if you deploy to sub-route
  // pathPrefix: "/reponame",

  siteMetadata: {
    title: `@invoker/gatsby`,
    description: `This is an opiniated starter for gatsby projects built by Meridian.id. This starter ships with the main Gatsby configuration files you might need.`,
    author: `Ongki 'vasilenka' Herlambang <ongki@herlambang.id | o@meridian.id>`,

    // This line needed for SITEMAP GENERATOR and ROBOT.txt
    siteUrl: `https://meridian.id`,

  },
  plugins: [
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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

    // Prismic
    // See: https://github.com/angeloashmore/gatsby-source-prismic
    {
      resolve: 'gatsby-source-prismic',
      options: {
        // The name of your prismic.io repository. This is required.
        repositoryName: 'mid-dummy',

        // An API access token to your prismic.io repository. This is required.
        // The token will be listed under "Permanent access tokens".
        // ⚠️WARNING! This is just for dummy purpose, ideally you want to store this data on some .env files
        accessToken: 'MC5YUS1aWFJFQUFOd0FjLUxq.77-9CX3vv73vv71w77-977-9Y2jvv73vv73vv71277-977-9F21477-977-9K1MwRO-_ve-_vS8S77-9KE8',

        // Set a link resolver function used to process links in your content.
        // See: https://prismic.io/docs/javascript/query-the-api/link-resolving
        linkResolver: ({ node, key, value }) => doc => {
          if (doc.type === 'blog') return "/post/" + doc.uid;
          return "/doc/" + doc.id;
        },

        // Set a list of links to fetch and be made available in your link
        // resolver function.
        // The fetchLinks option allows you to retrieve a specific content field from a linked document and add it to the document response object.
        // See: https://prismic.io/docs/javascript/query-the-api/fetch-linked-document-fields
        fetchLinks: [
          // Your list of links
        ],

        // Set an HTML serializer function used to process formatted content.
        // Fields with rich text formatting use this function to generate the
        // correct HTML.
        // This allows you to do things like adding custom classes to certain elements or adding a target element to all hyperlinks.
        // The document node, field key (i.e. API ID), and field value are
        // provided to the function, as seen below. This allows you to use
        // different HTML serializer logic for each field if necessary.
        // See: https://prismic.io/docs/nodejs/beyond-the-api/html-serializer
        htmlSerializer: () => {
          // prismicHtmlSerializer
        },

        // Set a default language when fetching documents. The default value is
        // '*' which will fetch all languages.
        // See: https://prismic.io/docs/javascript/query-the-api/query-by-language
        lang: '*',

        // Set a function to determine if images are downloaded locally and made
        // available for gatsby-transformer-sharp for use with gatsby-image.
        // The document node, field key (i.e. API ID), and field value are
        // provided to the function, as seen below. This allows you to use
        // different logic for each field if necessary.
        // This defaults to always return true.
        shouldNormalizeImage: ({ node, key, value }) => {
          // Return true to normalize the image or false to skip.
        },
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
