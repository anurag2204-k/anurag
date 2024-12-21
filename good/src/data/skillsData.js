import { 
    FaPython, FaJava, FaJs, FaHtml5, FaCss3, FaReact, FaVuejs, FaAngular, 
    FaNode, FaDatabase, FaDocker, FaAws, FaGithub, FaJira, FaMobile
  } from 'react-icons/fa';
//   import { 
//     SiCplusplus , SiRuby, SiPhp, SiGo, SiTypescript, SiSvelte, 
//     SiRedux, SiMobx, SiTailwindcss, SiBootstrap, SiMaterialui, 
//     SiWebpack, SiVite, SiExpress, SiSpring, SiGraphql, SiMongodb, 
//     SiPostgresql, SiMicrosoftsqlserver, SiKubernetes, SiGooglecloud, 
//     SiMicrosoftazure, SiJenkins, SiGitlab, SiTerraform, SiAnsible, 
//     SiPrometheus, SiGrafana, SiElasticsearch, SiReactnative, SiFlutter, 
//     SiXamarin, SiSwift, SiKotlin, SiUnity, SiUnrealengine, SiGodotengine,
//     SiTensorflow, SiPytorch, SiApachespark, SiHadoop, SiVisualstudiocode, 
//     SiIntellijidea, SiPycharm, SiWebstorm, SiTrello, SiAsana, SiJest, 
//     SiMocha, SiCypress, SiSelenium, SiApachejmeter, SiSonarqube,
//     SiEthereum, SiArduino, SiRaspberrypi
//   } from 'react-icons/si';
import {SiCplusplus, SiTypescript,SiRedux, SiTailwindcss, SiBootstrap,SiExpress,SiMongodb,SiPostgresql,SiTensorflow, SiPytorch, 

} from 'react-icons/si'
  import { GiArtificialIntelligence } from 'react-icons/gi';
  
  export const skillsData = [
    {
      category: "Core Programming Languages",
      subcategories: [
        {
          name: "General Purpose",
          skills: [
            { name: "Python", icon: FaPython },
            { name: "Java", icon: FaJava },
            { name: "C++", icon: SiCplusplus },
          ]
        },
        {
          name: "Web Development",
          skills: [
            { name: "JavaScript (ES6+)", icon: FaJs },
            { name: "TypeScript", icon: SiTypescript }
          ]
        },
        
      ]
    },
    {
      category: "Front-End Development",
      subcategories: [
        {
          name: "Markup and Styling",
          skills: [
            { name: "HTML5", icon: FaHtml5 },
            { name: "CSS3", icon: FaCss3 } 
          ]
        },
        {
          name: "JavaScript Frameworks and Libraries",
          skills: [
            { name: "React.js", icon: FaReact },
            { name: "Vue.js", icon: FaVuejs } 
          ]
        },
        {
          name: "State Management",
          skills: [
            { name: "Redux", icon: SiRedux },
            // { name: "Zustand", icon: null },
            // { name: "MobX", icon: SiMobx },
            // { name: "Recoil", icon: null }
          ]
        },
        {
          name: "UI Frameworks and Design Systems",
          skills: [
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Bootstrap", icon: SiBootstrap },
            // { name: "Material-UI", icon: SiMaterialui },
            // { name: "Ant Design", icon: null },
            // { name: "Chakra UI", icon: null }
          ]
        },
        // {
        //   name: "Performance Optimization",
        //   skills: [
        //     { name: "Lighthouse", icon: null },
        //     { name: "Webpack", icon: SiWebpack },
        //     { name: "Vite", icon: SiVite },
        //     { name: "Parcel", icon: null }
        //   ]
        // }
      ]
    },
    {
      category: "Back-End Development",
      subcategories: [
        {
          name: "Languages",
          skills: [
            { name: "Node.js", icon: FaNode },
            // { name: "Java", icon: FaJava },
            // { name: "Python (Django, Flask)", icon: FaPython },
            // { name: "Ruby on Rails", icon: SiRuby }
          ]
        },
        {
          name: "Frameworks",
          skills: [
            { name: "Express.js", icon: SiExpress },
            { name: "NestJS", icon: null },
            // { name: "FastAPI", icon: null },
            // { name: "Spring Boot", icon: SiSpring },
            // { name: "ASP.NET", icon: null }
          ]
        },
        // {
        //   name: "API Design",
        //   skills: [
        //     { name: "RESTful APIs", icon: null },
        //     { name: "GraphQL", icon: SiGraphql },
        //     { name: "gRPC", icon: null }
        //   ]
        // },
        {
          name: "Authentication",
          skills: [
            { name: "OAuth", icon: null },
            { name: "JWT", icon: null },
            // { name: "Passport.js", icon: null }
          ]
        }
      ]
    },
    {
      category: "Database Management",
      subcategories: [
        {
          name: "Relational Databases",
          skills: [
            { name: "MySQL", icon: null },
            { name: "PostgreSQL", icon: SiPostgresql },
            // { name: "Microsoft SQL Server", icon: SiMicrosoftsqlserver }
          ]
        },
        {
          name: "NoSQL Databases",
          skills: [
            { name: "MongoDB", icon: SiMongodb },
            // { name: "Cassandra", icon: null },
            // { name: "CouchDB", icon: null },
            // { name: "DynamoDB", icon: null }
          ]
        },
        {
          name: "Data Modeling",
          skills: [
            { name: "ORM tools (Prisma, Sequelize, TypeORM)", icon: null }
          ]
        },
        // {
        //   name: "Database Optimization",
        //   skills: [
        //     { name: "Indexing", icon: null },
        //     { name: "Query Optimization", icon: null },
        //     { name: "Caching (Redis, Memcached)", icon: null }
        //   ]
        // }
      ]
    },
    // {
    //   category: "DevOps and Cloud Computing",
    //   subcategories: [
    //     {
    //       name: "Containerization",
    //       skills: [
    //         { name: "Docker", icon: FaDocker },
    //         // { name: "Kubernetes", icon: SiKubernetes },
    //         // { name: "Podman", icon: null }
    //       ]
    //     },
    //     {
    //       name: "Cloud Platforms",
    //       skills: [
    //         { name: "AWS", icon: FaAws },
    //         { name: "Google Cloud Platform (GCP)", icon: SiGooglecloud },
    //         { name: "Microsoft Azure", icon: SiMicrosoftazure }
    //       ]
    //     },
    //     {
    //       name: "CI/CD Tools",
    //       skills: [
    //         { name: "Jenkins", icon: SiJenkins },
    //         { name: "GitHub Actions", icon: FaGithub },
    //         { name: "GitLab CI", icon: SiGitlab },
    //         { name: "CircleCI", icon: null }
    //       ]
    //     },
    //     {
    //       name: "Infrastructure as Code (IaC)",
    //       skills: [
    //         { name: "Terraform", icon: SiTerraform },
    //         { name: "Ansible", icon: SiAnsible },
    //         { name: "CloudFormation", icon: null }
    //       ]
    //     },
    //     {
    //       name: "Monitoring and Logging",
    //       skills: [
    //         { name: "Prometheus", icon: SiPrometheus },
    //         { name: "Grafana", icon: SiGrafana },
    //         { name: "ELK Stack (Elasticsearch, Logstash, Kibana)", icon: SiElasticsearch }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   category: "Mobile Development",
    //   subcategories: [
    //     {
    //       name: "Cross-Platform Frameworks",
    //       skills: [
    //         { name: "React Native", icon: SiReactnative },
    //         { name: "Flutter", icon: SiFlutter },
    //         { name: "Xamarin", icon: SiXamarin }
    //       ]
    //     },
    //     {
    //       name: "Native Development",
    //       skills: [
    //         { name: "Swift (iOS)", icon: SiSwift },
    //         { name: "Kotlin/Java (Android)", icon: SiKotlin }
    //       ]
    //     },
    //     {
    //       name: "Progressive Web Apps (PWAs)",
    //       skills: [
    //         { name: "Service Workers", icon: null },
    //         { name: "Workbox", icon: null }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   category: "Game Development",
    //   skills: [
    //     { name: "Unity (C#)", icon: SiUnity },
    //     { name: "Unreal Engine (C++/Blueprints)", icon: SiUnrealengine },
    //     { name: "Godot (GDScript)", icon: SiGodotengine }
    //   ]
    // },
    {
      category: "Data Science, AI, and Machine Learning",
      subcategories: [
        {
          name: "Languages",
          skills: [
            { name: "Python", icon: FaPython },
            // { name: "R", icon: null },
            // { name: "Julia", icon: null }
          ]
        },
        {
          name: "Libraries and Frameworks",
          skills: [
            { name: "TensorFlow", icon: SiTensorflow },
            { name: "PyTorch", icon: SiPytorch },
            { name: "Scikit-learn", icon: null },
            { name: "Keras", icon: null }
          ]
        },
        // {
        //   name: "Big Data Tools",
        //   skills: [
        //     { name: "Apache Spark", icon: SiApachespark },
        //     { name: "Hadoop", icon: SiHadoop }
        //   ]
        // },
        {
          name: "Visualization",
          skills: [
            { name: "Matplotlib", icon: null },
            { name: "Seaborn", icon: null },
            // { name: "D3.js", icon: null },
            { name: "Tableau", icon: null }
          ]
        }
      ]
    },
    // {
    //   category: "Tools and Workflow",
    //   subcategories: [
    //     {
    //       name: "Version Control",
    //       skills: [
    //         { name: "Git", icon: null },
    //         { name: "GitHub", icon: FaGithub },
    //         { name: "GitLab", icon: SiGitlab },
    //         { name: "Bitbucket", icon: null }
    //       ]
    //     },
    //     {
    //       name: "Code Editors and IDEs",
    //       skills: [
    //         { name: "Visual Studio Code", icon: SiVisualstudiocode },
    //         { name: "IntelliJ IDEA", icon: SiIntellijidea },
    //         { name: "PyCharm", icon: SiPycharm },
    //         { name: "WebStorm", icon: SiWebstorm }
    //       ]
    //     },
    //     {
    //       name: "Task Management",
    //       skills: [
    //         { name: "Jira", icon: FaJira },
    //         { name: "Trello", icon: SiTrello },
    //         { name: "Asana", icon: SiAsana }
    //       ]
    //     },
    //     {
    //       name: "Documentation",
    //       skills: [
    //         { name: "Markdown", icon: null },
    //         { name: "Storybook", icon: null },
    //         { name: "Swagger/OpenAPI", icon: null }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   category: "Testing",
    //   subcategories: [
    //     {
    //       name: "Unit Testing",
    //       skills: [
    //         { name: "Jest", icon: SiJest },
    //         { name: "Mocha", icon: SiMocha },
    //         { name: "Chai", icon: null },
    //         { name: "JUnit", icon: null },
    //         { name: "PyTest", icon: null }
    //       ]
    //     },
    //     {
    //       name: "End-to-End Testing",
    //       skills: [
    //         { name: "Cypress", icon: SiCypress },
    //         { name: "Selenium", icon: SiSelenium },
    //         { name: "Playwright", icon: null }
    //       ]
    //     },
    //     {
    //       name: "Performance Testing",
    //       skills: [
    //         { name: "Apache JMeter", icon: SiApachejmeter },
    //         { name: "K6", icon: null }
    //       ]
    //     },
    //     {
    //       name: "CI/CD Testing Tools",
    //       skills: [
    //         { name: "CodeQL", icon: null },
    //         { name: "SonarQube", icon: SiSonarqube }
    //       ]
    //     }
    //   ]
    // },
    {
      category: "Soft Skills",
      skills: [
        { name: "Problem-Solving", icon: null },
        { name: "Communication", icon: null },
        { name: "Team Collaboration", icon: null },
        { name: "Time Management", icon: null },
        { name: "Adaptability", icon: null },
        { name: "Agile/Scrum Practices", icon: null }
      ]
    },
    // {
    //   category: "Emerging Technologies",
    //   subcategories: [
    //     {
    //       name: "Blockchain",
    //       skills: [
    //         { name: "Solidity", icon: null },
    //         { name: "Ethereum", icon: SiEthereum },
    //         { name: "Hyperledger", icon: null }
    //       ]
    //     },
    //     {
    //       name: "Internet of Things (IoT)",
    //       skills: [
    //         { name: "Raspberry Pi", icon: SiRaspberrypi },
    //         { name: "Arduino", icon: SiArduino },
    //         { name: "MQTT", icon: null }
    //       ]
    //     },
    //     {
    //       name: "AR/VR",
    //       skills: [
    //         { name: "WebXR", icon: null },
    //         { name: "Unity (AR Foundation)", icon: SiUnity }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   category: "Other Notable Skills",
    //   subcategories: [
    //     {
    //       name: "Security",
    //       skills: [
    //         { name: "OWASP", icon: null },
    //         { name: "Ethical Hacking", icon: null },
    //         { name: "Penetration Testing", icon: null }
    //       ]
    //     },
    //     {
    //       name: "Performance Optimization",
    //       skills: [
    //         { name: "Lighthouse Audits", icon: null },
    //         { name: "Critical Rendering Path", icon: null }
    //       ]
    //     },
    //     {
    //       name: "SEO (Search Engine Optimization)",
    //       skills: [
    //         { name: "Core Web Vitals", icon: null },
    //         { name: "Metadata", icon: null },
    //         { name: "Structured Data", icon: null }
    //       ]
    //     }
    //   ]
    // }
  ];
  
  