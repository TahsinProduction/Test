const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-single-post-js": hot(preferDefault(require("C:\\Users\\Tahsin Kabir Khan\\Desktop\\Successful Gatsby - Copy\\src\\templates\\single-post.js"))),
  "component---src-templates-post-list-js": hot(preferDefault(require("C:\\Users\\Tahsin Kabir Khan\\Desktop\\Successful Gatsby - Copy\\src\\templates\\post-list.js"))),
  "component---src-templates-tags-page-js": hot(preferDefault(require("C:\\Users\\Tahsin Kabir Khan\\Desktop\\Successful Gatsby - Copy\\src\\templates\\tags-page.js"))),
  "component---src-templates-tag-posts-js": hot(preferDefault(require("C:\\Users\\Tahsin Kabir Khan\\Desktop\\Successful Gatsby - Copy\\src\\templates\\tag-posts.js"))),
  "component---src-templates-author-posts-js": hot(preferDefault(require("C:\\Users\\Tahsin Kabir Khan\\Desktop\\Successful Gatsby - Copy\\src\\templates\\author-posts.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\Tahsin Kabir Khan\\Desktop\\Successful Gatsby - Copy\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\Tahsin Kabir Khan\\Desktop\\Successful Gatsby - Copy\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("C:\\Users\\Tahsin Kabir Khan\\Desktop\\Successful Gatsby - Copy\\src\\pages\\about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\Tahsin Kabir Khan\\Desktop\\Successful Gatsby - Copy\\src\\pages\\index.js"))),
  "component---src-pages-team-js": hot(preferDefault(require("C:\\Users\\Tahsin Kabir Khan\\Desktop\\Successful Gatsby - Copy\\src\\pages\\team.js")))
}

