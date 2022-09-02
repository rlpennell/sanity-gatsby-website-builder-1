// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Editor Imports
// Buttons
import buttonMain from "./components/editor/buttons/buttonMain";
import buttonAlt from "./components/editor/buttons/buttonAlt";
import buttonHero from "./components/editor/buttons/buttonHero";
import buttonSubmit from "./components/editor/buttons/buttonSubmit";
import buttonCard from "./components/editor/buttons/buttonCard";
// Cards
import bioCard from "./components/editor/cards/bioCard";
import picCard from "./components/editor/cards/picCard";
import picCardAlt from "./components/editor/cards/picCardAlt";
import iconCard from "./components/editor/cards/iconCard";
import contactCard from "./components/editor/cards/contactCard";
import infoCard from "./components/editor/cards/infoCard";
import serviceCard from "./components/editor/cards/serviceCard";
import bioCardAlt from "./components/editor/cards/bioCardAlt";
import backgroundCard from "./components/editor/cards/backgroundCard";
// CardArrays
import backgroundCards from "./components/editor/cards/cardsArrays/backgroundCards";
import bioCards from "./components/editor/cards/cardsArrays/bioCards";
import bioCardsAlt from "./components/editor/cards/cardsArrays/bioCardsAlt";
import contactCards from "./components/editor/cards/cardsArrays/contactCards";
import infoCards from "./components/editor/cards/cardsArrays/infoCards";
import serviceCards from "./components/editor/cards/cardsArrays/serviceCards";
import picCards from "./components/editor/cards/cardsArrays/picCards";
import picCardsAlt from "./components/editor/cards/cardsArrays/picCardsAlt";
import iconCards from "./components/editor/cards/cardsArrays/iconCards";
// collages
import CollageArticle from "./components/editor/collages/CollageArticle";
// Images
import picture from "./components/editor/images/picture";
import picArticle from "./components/editor/images/picArticle";
// Videos
import video from "./components/editor/video/video";
import videoArticle from "./components/editor/video/videoArticle";
// Statistics
import statistic from "./components/editor/statistics/statistic";
import statisticAlt from "./components/editor/statistics/statisticAlt";
// Statistics Array
import statistics from "./components/editor/statistics/statisticsArrays/statistics";
import statisticsAlt from "./components/editor/statistics/statisticsArrays/statisticsAlt";
// testimonials
import customerReview from "./components/editor/testimonials/customerReview";
import customerReviewAlt from "./components/editor/testimonials/customerReviewAlt";
import quote from "./components/editor/testimonials/quote";
// Testimonials Array
import customerReviews from "./components/editor/testimonials/testimonialsArray.js/customerReviews";
import customerReviewsAlt from "./components/editor/testimonials/testimonialsArray.js/customerReviewsAlt";
import quotes from "./components/editor/testimonials/testimonialsArray.js/quotes";
// Layout Imports
// Banner
import heroBanner from "./components/layout/banners/heroBanner";
import infoBanner from "./components/layout/banners/infoBanner";
// Forms
import formMain from "./components/layout/forms/formMain";
import formAlt from "./components/layout/forms/formAlt";
import formPicArticle from "./components/layout/forms/formPicArticle";
// Heros
import heroMain from "./components/layout/heros/heroMain";
import heroAlt from "./components/layout/heros/heroAlt";
// Notifcations
import notifcationBar from "./components/layout/notifcations/notifcationBar";
import cookieConsent from "./components/layout/notifcations/cookieConsent";
// Premades
import picArticleFlip from "./components/layout/premade/picArticleFlip";
import pipArticle from "./components/layout/premade/pipArticle";
// Pricing
// -- Global Components--
// Headers
import headerTheme from "./components/theme/headers/headerTheme";
import headerMain from "./pages/headerFooter/headerMain";
// Footer
import footerTheme from "./components/theme/footers/footerTheme";
import footerMain from "./pages/headerFooter/footerMain";
// Theme
import videoTheme from "./components/theme/helpers/videoTheme";
import testimonialTheme from "./components/theme/helpers/testimonialTheme";
import mainTheme from "./components/theme/mainTheme";
import editorTheme from "./components/theme/editorTheme";
import picTheme from "./components/theme/helpers/picTheme";
import statisticsTheme from "./components/theme/helpers/statisticsTheme";
import borderOptions from "./components/theme/helpers/borderOptions";
import buttonTheme from "./components/theme/helpers/buttonTheme";
import hoverTheme from "./components/theme/helpers/hoverTheme";
import cardTheme from "./components/theme/helpers/cardTheme";
import basicEditorTheme from "./components/theme/basicEditorTheme";

import collageTheme from "./components/theme/helpers/collageTheme";
// Layout Theme
// Banners
import heroBannerTheme from "./components/theme/layoutTheme/banners/heroBannerTheme";
import infoBannerTheme from "./components/theme/layoutTheme/banners/infoBannerTheme";
// Heros
import heroMainTheme from "./components/theme/layoutTheme/heros/heroMainTheme";
import heroAltTheme from "./components/theme/layoutTheme/heros/heroAltTheme";
// Notifcations
import notifcationBarTheme from "./components/theme/layoutTheme/notifcations/notifcationBarTheme";
//Forms
import formMainTheme from "./components/theme/layoutTheme/forms/formMainTheme";
import formAltTheme from "./components/theme/layoutTheme/forms/formAltTheme";
import formPicArticleTheme from "./components/theme/layoutTheme/forms/formPicArticleTheme";
// Premades
import pipArticleTheme from "./components/theme/layoutTheme/premade/pipArticleTheme";
// Ultilitys
import pic from "./components/ultilitys/pic";
import seo from "./components/ultilitys/seo";
import socialHandle from "./components/ultilitys/socialHandle";
import editor from "./components/ultilitys/editor";
import layout from "./components/ultilitys/layout";
import basicEditor from "./components/ultilitys/basicEditor";
import fontSize from "./components/theme/helpers/fontSize";
import layoutTheme from "./components/theme/layoutTheme";
import formTheme from "./components/theme/helpers/formTheme";
import linkOptions from "./components/ultilitys/linkOptions";
import youtube from "./components/ultilitys/youtube";
// Pages
import siteInfo from "./pages/siteSettings/siteInfo";
import siteTheme from "./pages/siteSettings/siteTheme";
import widgets from "./pages/siteSettings/widgets";
import index from "./pages/index";
import about from "./pages/about";
import service from "./pages/service";
import contact from "./pages/contact";
import serviceMain from "./pages/serviceMain";
import usecases from "./pages/usecases";
import blog from "./pages/blog";
// Posts
import usecasePosts from "./pages/templates/usecasePosts";
import servicePosts from "./pages/templates/servicePosts";
import blogPosts from "./pages/templates/blogPosts";
import bioPosts from "./pages/templates/bioPosts";
import customPage from "./pages/templates/customPage";

// Theme Pages
// Buttons
import altButtonTheme from "./pages/siteSettings/componentThemes/buttons/altButtonTheme";
import cardButtonTheme from "./pages/siteSettings/componentThemes/buttons/cardButtonTheme";
import heroButtonTheme from "./pages/siteSettings/componentThemes/buttons/heroButtonTheme";
import mainButtonTheme from "./pages/siteSettings/componentThemes/buttons/mainButtonTheme";
import submitButtonTheme from "./pages/siteSettings/componentThemes/buttons/submitButtonTheme";
// Cards
import backgroundCardTheme from "./pages/siteSettings/componentThemes/cards/backgroundCardTheme";
import bioCardAltTheme from "./pages/siteSettings/componentThemes/cards/bioCardAltTheme";
import bioCardTheme from "./pages/siteSettings/componentThemes/cards/bioCardTheme";
import contactCardTheme from "./pages/siteSettings/componentThemes/cards/contactCardTheme";
import iconCardTheme from "./pages/siteSettings/componentThemes/cards/iconCardTheme";
import infoCardTheme from "./pages/siteSettings/componentThemes/cards/infoCardTheme";
import picCardAltTheme from "./pages/siteSettings/componentThemes/cards/picCardAltTheme";
import picCardTheme from "./pages/siteSettings/componentThemes/cards/picCardTheme";
import serviceCardTheme from "./pages/siteSettings/componentThemes/cards/serviceCardTheme";
// Pics
import picArticleTheme from "./pages/siteSettings/componentThemes/Pics/picArticleTheme";
// Collages
import picCollageTheme from "./pages/siteSettings/componentThemes/collages/picCollageTheme";
// Statistics
import statisticsAltTheme from "./pages/siteSettings/componentThemes/statistics/statisticsAltTheme";
import statisticsMainTheme from "./pages/siteSettings/componentThemes/statistics/statisticsMainTheme";
// Testimonials
import customerReviewAltTheme from "./pages/siteSettings/componentThemes/testimonials/customerReviewAltTheme";
import customerReviewTheme from "./pages/siteSettings/componentThemes/testimonials/customerReviewTheme";
import quotesTheme from "./pages/siteSettings/componentThemes/testimonials/quotesTheme";
// Editor Themes
// Videos
import videoArticleTheme from "./pages/siteSettings/componentThemes/videos/videoArticleTheme";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    buttonMain,
    buttonAlt,
    buttonHero,
    buttonSubmit,
    video,
    videoArticle,
    buttonCard,
    backgroundCard,
    bioCard,
    bioCardAlt,
    iconCard,
    picCard,
    picCardAlt,
    contactCard,
    infoCard,
    serviceCard,
    linkOptions,
    CollageArticle,
    picArticle,
    picture,
    statistic,
    statisticAlt,
    statistics,
    statisticsAlt,
    customerReview,
    customerReviewAlt,
    quote,
    youtube,
    customerReviews,
    customerReviewsAlt,
    cookieConsent,
    quotes,
    heroBanner,
    infoBanner,
    footerTheme,
    formMain,
    formAlt,
    formPicArticle,
    headerTheme,
    footerMain,
    headerMain,
    heroMain,
    heroAlt,
    notifcationBar,
    picArticleFlip,
    pic,
    seo,
    socialHandle,
    siteInfo,
    siteTheme,
    borderOptions,
    layoutTheme,
    fontSize,
    hoverTheme,
    formTheme,
    widgets,
    editor,
    layout,
    picArticleTheme,
    buttonTheme,
    testimonialTheme,
    collageTheme,
    mainTheme,
    editorTheme,
    basicEditorTheme,
    picTheme,
    index,
    basicEditor,
    service,
    serviceMain,
    about,
    contact,
    blog,
    usecases,
    usecasePosts,
    servicePosts,
    customPage,
    blogPosts,
    bioPosts,
    backgroundCards,
    bioCards,
    bioCardsAlt,
    contactCards,
    iconCards,
    infoCards,
    picCards,
    picCardsAlt,
    serviceCards,
    pipArticle,
    statisticsTheme,
    altButtonTheme,
    videoTheme,
    cardButtonTheme,
    heroButtonTheme,
    mainButtonTheme,
    submitButtonTheme,
    backgroundCardTheme,
    bioCardAltTheme,
    bioCardTheme,
    contactCardTheme,
    iconCardTheme,
    infoCardTheme,
    picCardAltTheme,
    picCardTheme,
    serviceCardTheme,
    picCollageTheme,
    statisticsMainTheme,
    statisticsAltTheme,
    customerReviewAltTheme,
    customerReviewTheme,
    quotesTheme,
    videoArticleTheme,
    cardTheme,
    heroBannerTheme,
    infoBannerTheme,
    formAltTheme,
    formMainTheme,
    formPicArticleTheme,
    heroAltTheme,
    heroMainTheme,
    notifcationBarTheme,
    pipArticleTheme,
  ]),
});
