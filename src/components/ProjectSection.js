// components/ProjectSection.js
import React from 'react';
import Project from './Project';

const ProjectSection = () => {
  const projects = [
    {
      title: 'Nccedu-app',
      description: 'An educational website with features like note-taking, quizzes, and OTA training academy gallery.',
      technologies: 'React.js, Bootstrap, React Router, React Hooks',
      category: 'React.js',
      deployedLink:'https://nccedu-app.vercel.app/?vercelToolbarCode=_W3YX_xJbDycCDM',
    },
    {
      title: '@catmeow.com',
      description: 'A responsive e-commerce website with social sharing, form validations, and multiple pages.',
      technologies: 'React.js, CSS, React Router, react-share',
      category: 'React.js',
      deployedLink:'https://catmeow-react-website.vercel.app/?vercelToolbarCode=b8MNmH-5MNToNWS',
    },
    {
      title: 'Meme_with_text_generator',
      description: 'It generates meme on every new click and we can write the text according to us on meme. A great work and oractice of Api is here.',
      technologies: 'React.js, CSS, API',
      category: 'React.js',
      deployedLink:'',
    },
    {
      title: 'Color_generator_with_CSS_code',
      description: 'This color generator gives the CSS color code and change the background color on clicking the button. The Project was made by using CSS, Javascript and React Hooks.',
      technologies: 'React.js, CSS',
      category: 'React.js',
      deployedLink:'https://color-generator-with-css-code.vercel.app/?vercelToolbarCode=_-7BylTpPhtrwoC',
    },
    {
      title: 'React digital clock',
      description: 'The digital clock displays the current time in a 12-hour format, including the hours, minutes, and seconds. The clock component is modular and  making it a versatile and useful tool for displaying time in various projects.',
      technologies: 'React.js, CSS',
      category: 'React.js',
      deployedLink:'https://react-digital-clock-generator.vercel.app/?vercelToolbarCode=3TFAJRoGMQP66tE',
    },
    {
      title: 'Smart Home App',
      description: 'A smart home application that measures the cooling and heating temperature of the room and provides information on the number of devices present in the room. The app offers real-time monitoring and control of smart home devices, allowing users to adjust the temperature and manage connected devices remotely.',
      technologies: 'Figma',
      category: 'UI/UX',
      deployedLink:'https://www.figma.com/file/hSQQF5DzGwt9ikPfUqDgDG/Untitled?type=design&t=459MLTSdbjVqgSd3-6',
    },
    {
      title: 'Education Landing page',
      description: 'An engaging landing page for an educational platform that aims to provide high-quality learning resources and courses. The landing page offers a visually appealing and intuitive interface, showcasing the platform\'s key features and benefits. Users can explore available courses, read testimonials',
      technologies: 'Figma',
      category: 'UI/UX',
      deployedLink:'https://www.figma.com/file/0YsGIZIL70JCmhlr9SEwBy/WebPage?type=design&t=459MLTSdbjVqgSd3-6',
    },
    {
      title: 'Growbinar',
      description: 'An engaging landing page for an educational platform that aims to provide high-quality learning resources and courses. The landing page offers a visually appealing and intuitive interface, showcasing the platform\'s key features and benefits. Users can explore available courses, read testimonials',
      technologies: 'Html,CSS, Javascript',
      category: 'UI/UX',
      deployedLink:'https://growbinar.vercel.app/?vercelToolbarCode=6u4JVuubVKTgMEC',
    },
    {
      title: 'E-challan management system',
      description: 'A system for managing e-challans, with admin and user sections, database integration, and online payment.',
      technologies: 'Html, CSS, Javascript, Node.js, Express.js, MongoDB',
      category: 'Full stack developer',
      deployedLink:'https://github.com/Shivi-26/E-Challan-Website',
    },
    {
      title: 'Estimation of product based on Bank’s Marketing Campaign Dataset',
      description: 'The dataset which i have used i.e. Bank-full dataset .The data is related with direct marketing campaigns of a Portuguese banking institutions. In that dataset the presenting rows (approx 50,000)and columns (17 columns ) are there, which tells about the age, job, martial status etc. of a customer',
      technologies: 'Python and its libraries, Machine learning',
      category:'Python/Machine learning',
      deployedLink:'https://github.com/Shivi-26/Bank_dataset_Analysis/blob/main/Bank_Dataset_Analysis.ipynb',
    },
    {
      title: 'Boston_House_Price_Analysis',
      description: 'In this project i will work on developing an end to end machine learning project by using linear regression ,here i have done the analysis of data visualization and data feature engineering , and also select features based on the correlation of features.',
      technologies: 'Python and its libraries, Machine learning',
      category:'Python/Machine learning',
      deployedLink:'https://github.com/Shivi-26/Boston_House_Price_Analysis/blob/main/Boston%20house%20dataset%20by%20linear%20_regression.ipynb',
    },

  ];

  // Grouping projects by category
  const categorizedProjects = projects.reduce((acc, project) => {
    acc[project.category] = acc[project.category] || [];
    acc[project.category].push(project);
    return acc;
  }, {});

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center text-primary mb-5">Projects</h2>
        <div>
          {Object.entries(categorizedProjects).map(([category, projects]) => (
            <div key={category}>
              <h3 className='text-primary'>{category}</h3>
              <div className="row">
                {projects.map((project, index) => (
                  <Project
                    key={index}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    deployedLink={project.deployedLink}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
