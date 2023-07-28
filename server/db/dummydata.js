const Skill = require("../models/skill");
const Portfolio = require("../models/portfolio");
const Blog = require("../models/blog");
const slugField = require("../middleware/slugify");

async function populate() {
  const count = await Skill.count();
  if (count == 0) {
    const skills = await Skill.bulkCreate([
      { skillName: "HTML", skillLevel: "95" },
      { skillName: "CSS", skillLevel: "90" },
      { skillName: "JS", skillLevel: "70" },
      { skillName: "REACT", skillLevel: "50" },
      { skillName: "SASS", skillLevel: "40" },
      { skillName: "JQUERY", skillLevel: "20" },
      { skillName: "SQL", skillLevel: "40" },
      { skillName: "NODEJS", skillLevel: "40" },
      { skillName: "GİT", skillLevel: "60" },
    ]);
    const portfolio = await Portfolio.bulkCreate([
      {
        header: "Travel App",

        content:
          "I developed this website using React and Sass. It is a Travel application where users can sign up and shop for one or more travel packages of their choice.",
        projecturl: "https://artefilex-travel-app.netlify.app/",
      },
      {
        header: "Linkedin MainPage",
        content:
          "The LinkedIn main page project I created when I first learned React.",
        projecturl: "https://artefilex-linkedin-mainpage.netlify.app/",
      },
      {
        header: "CoinFlex",
        content:
          "CoinFlex is a project I built using React, featuring a user-friendly interface that allows users to utilize a comprehensive calculator for calculating potential earnings based on annual, monthly, and daily interest rates of selected banks. Moreover, the platform keeps users up-to-date with daily foreign exchange rates and enables them to create personalized news entries categorized under specific topics.go to the credit url and start the calculation ",
        projecturl: "https://eclectic-hummingbird-d2cdec.netlify.app/",
      },
      {
        header: "Course App",
        content:
          "A simple course website built using HTML, CSS, and JavaScript.The original owner of the design is Mr. Web Designer's YouTube channel. I made the Navbar position change based on the scroll. ",
        projecturl: "https://simple-course-app.netlify.app/",
      },
    ]);
    const blog = await Blog.bulkCreate([
      {
        header: "Firsascafst Blog",
        subtitle: "First Blog Good ",
        content:
          "<h1>barış tuncdemir </h1><p><br></p><p><br></p><h3>ı have one choice but ı dont now any think </h3>",
        blogUrl: slugField("Firsascafst Blog"),
      },
      {
        header: "Firsssst Blog",
        subtitle: "First Blog Good ",
        content:
          "<h1>barış tuncdemir </h1><p><br></p><p><br></p><h3>ı have one choice but ı dont now any think </h3>",
        blogUrl: slugField("Firsssst Blog"),
      },
      {
        header: "FirsssBlogs",
        subtitle: "First Blog Good ",
        content:
          "<h1>barış tuncdemir </h1><p><br></p><p><br></p><h3>ı have one choice but ı dont now any think </h3>",
        blogUrl: slugField("FirsssBlogs"),
      },
      {
        header: "FirsssBlog",
        subtitle: "First Blog Good ",
        content:
          "<h1>barış tuncdemir </h1><p><br></p><p><br></p><h3>ı have one choice but ı dont now any think </h3>",
        blogUrl: slugField("FirsssBlog"),
      },
      {
        header: "Second Blog",
        subtitle: "First Blog Good ",
        content:
          "<h1>barış tuncdemir </h1><p><br></p><p><br></p><h3>ı have one choice but ı dont now any think </h3>",
        blogUrl: slugField("second Blog"),
      },
      {
        header: "Thirth Blog",
        subtitle: "second Blog Good ",
        content:
          "<h1>barış tuncdemir </h1><p><br></p><p><br></p><h3>ı have one choice but ı dont now any think </h3>",
        blogUrl: slugField("Thirth Blog"),
      },
    ]);
  }
}

module.exports = populate;
