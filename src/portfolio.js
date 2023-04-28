/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Tim's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Tim  Portfolio",
    type: "website",
    url: "http://Timhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Tim Lai",
  logo_name: "Tim",
  nickname: "Tim",
  subTitle:
    "我是一位擅長後端開發的工程師，同時也熟悉前端技術，包括 HTML、CSS 和 JavaScript。在過去的兩年，我使用 Python Django 和 Node.js 開發網頁，並有接案經驗。",
  resumeLink: "",
  portfolio_repository: "",
  githubProfile: "https://github.com/Timisme",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Tim1919",
  // linkedin: "https://www.linkedin.com/in/Tim-hathidara-88710b138/",
  // gmail: "Timhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/Timhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/Tim_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Timisme",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Gmail",
    link: "mailto:timthedeveloper@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "網頁開發",
      fileName: "FullStackImg",
      skills: [
        "⚡ 開發系統儀表板，含權限管理、表單填寫、圖片上傳、資料庫完整架構",
        "⚡ 注重程式碼的可維護性及架構，要求 Clean Code 原則",
        "⚡ 利用 HTML, CSS, JAVASCRIPT 及 Echarts 建立互動、響應式圖表",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "GCP 雲端、 DOCKER 部屬",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ 熟悉 GCP 操作，並有 Google Gloud Compute Engine 開發經驗",
        "⚡ 熟悉 Docker 容器化概念，並有於 Windows、Linux 部屬經驗",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/Tim_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@Tim391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  // degrees: [
  // ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
  ],
};

// Experience Page
const experience = {
  title: "經歷",
  subtitle: "後端工程師",
  description:
    "兩年後端工程師經驗，主要內容為多功能儀表板開發，包含表單功能、PDF下載、歷史數據查詢、RESTful API 設計、單元測試、資料庫設計等，並透過 Docker 技術達到快速部屬",
  header_image_path: "experience.svg",
  sections: [
    // {
    //   title: "Work",
    //   experiences: [
    //     {
    //       title: "後端工程師",
    //       company: "",
    //       company_url: "https://legatohealthtech.com/",
    //       logo_path: "legato_logo.png",
    //       duration: "07 2021 - 04 2023",
    //       location: "",
    //       description:
    //         "負責系統儀表板開發，使用",
    //       color: "#0879bf",
    //     },
    //     {
    //       title: "Android and ML Developer",
    //       company: "Muffito Incorporation",
    //       company_url: "https://www.linkedin.com/company/muffito-inc/about/",
    //       logo_path: "muffito_logo.png",
    //       duration: "May 2018 - Oct 2018",
    //       location: "Pune, Maharashtra",
    //       description:
    //         "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
    //       color: "#9b1578",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "專案",
  description:
    "我的專案主要為網頁或圖表開發。後端包含 python Django, Nodejs，前端使用 HTML, CSS, Javascript 開發",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "聯絡方式",
    profile_image_path: "profile.gif", //
    description:
      "若您有架設網站，或 Javascript、Python 等程式的需求，我很樂意為您協助 Email: thefreelancertim@gmail.com",
  },
  blogSection: {
    // title: "Blogs",
    // subtitle:
    //   "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    // link: "https://blogs.Timhathidara.com/",
    // avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    // title: "Address",
    // subtitle:
    //   "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    // avatar_image_path: "address_image.svg",
    // location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
