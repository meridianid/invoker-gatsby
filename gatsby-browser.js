/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const { registerLinkResolver } = require('gatsby-source-prismic-graphql');

registerLinkResolver(require('./src/utils/prismic/linkResolver').linkResolver);
