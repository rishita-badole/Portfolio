import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import img1 from "./ContentThumbnails/1.jpg";
import img2 from "./ContentThumbnails/2.jpg";
import img3 from "./ContentThumbnails/3.jpg";
import img4 from "./ContentThumbnails/4.jpg";
import img5 from "./ContentThumbnails/5.jpg";
import img6 from "./ContentThumbnails/6.jpg";
import img7 from "./ContentThumbnails/7.jpg";
import img8 from "./ContentThumbnails/8.jpg";
import img9 from "./ContentThumbnails/9.jpg";
import img10 from "./ContentThumbnails/10.jpg";
import img11 from "./ContentThumbnails/11.jpg";
import img12 from "./ContentThumbnails/12.jpg";

const images = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12
];


// Full content list with all categories
const contentList = [
  {
    title: "Best Practices for Security",
    type: "Article",
    description: "Best practices for securing your ReactJS application",
    status: "Under Review",
    date: "4/8/2025",
  },
  {
    title: "Learning Management System in React",
    type: "Article",
    description: "Build a scalable LMS in React efficiently",
    status: "Published",
    date: "4/9/2025",
    demoLink: "https://www.angularminds.com/blog/build-a-scalable-learning-management-system-lms-in-react",
  },
  {
    title: "React js story",
    type: "Article",
    description: "Foundational Story Behind React's Development",
    status: "Draft",
    date: "4/25/2025",
  },
  {
    title: "Top React Interview Questions",
    type: "Blog",
    description: "Most asked React questions in interviews",
    status: "Published",
    demoLink: "https://www.angularminds.com/blog/react-interview-questions-for-hiring-top-talent",
    date: "6/4/2025",
  },
  {
    title: "Guest post - Building React App from scratch",
    type: "Guest Post",
    description: "Create Your First React App from Scratch: A Step-by-Step Guide",
    demoLink: "https://ecommercefastlane.com/create-your-first-react-app-from-scratch/",
    date: "4/22/2025",
  },
  {
    title: "Proof-Read - Documentation",
    type: "Proofread",
    description: "Proofread internal docs for AI & Dev projects",
    status: "Completed",
    date: "3/5/2025",
  },
  {
    title: "AI in Business Intelligence",
    type: "Service Page",
    description: "Leveraging AI in Business Intelligence",
    status: "Draft",
    date: "4/23/2025",
  },
  {
    title: "Summaries and FAQs for Articles",
    type: "Internal Documentation",
    description: "Internal docs for summarization and FAQs",
    status: "Draft",
  },
  {
    title: "WanAware",
    type: "Case Study",
    description: "Case study for a WAN monitoring tool",
    status: "Under Review",
    date: "4/17/2025",
  },
  {
    title: "LinkedIn Carousel - TOP React SSG",
    type: "Social Media",
    description: "Top React Static Site Generators (SSGs)",
    status: "Published",
  },
  {
    title: "Angular Reload Page",
    type: "Re-optimization",
    description: "Optimizing Angular reload behavior",
    demoLink: "https://app.surferseo.com/drafts/s/H1g7MCqMUrzQ8HZ7n6IUlcOsykEWoNz2",
    date: "6/1/2025",
  },
  {
    title: "AI powered software development",
    type: "Landing Page",
    status: "Draft",
    demoLink: "https://app.surferseo.com/drafts/s/yjPr4NPI5G6R4h3oZ8MxV2hAr6KWqcc6",
    date: "6/18/2025",
  },
];

// Utility to chunk array into groups of 3 for carousel
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

function ContentShowcase() {
  // Categorize content by type
  const categories = Array.from(
    new Set(contentList.map((item) => item.type))
  );

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Published & Authored Content</strong>
        </h1>
        <p style={{ color: "white" }}>
          A categorized view of technical articles, blogs, guest posts, docs & more.
        </p>

        {categories.map((category, catIdx) => {
          const filtered = contentList.filter((item) => item.type === category);
          const chunked = chunk(filtered, 3); // 3 per slide

          return (
            <div key={category} style={{ marginBottom: "50px" }}>
              <h2 style={{ color: "#c770f0", marginBottom: "20px" }}>{category}</h2>
              <Carousel indicators={false} interval={null}>
                {chunked.map((group, idx) => (
                  <Carousel.Item key={idx}>
                    <Row className="justify-content-center">
                      {group.map((item, i) => (
                        <Col md={4} className="project-card" key={i}>
                          <ProjectCard
                            imgPath={images[(catIdx * 3 + i) % images.length]}
                            title={item.title}
                            type={item.type}
                            description={item.description || "Content coming soon..."}
                            demoLink={item.demoLink}
                            status={item.status || "Draft"}
                            date={item.date || "To be updated"}
                          />
                        </Col>
                      ))}
                    </Row>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          );
        })}
      </Container>
    </Container>
  );
}

export default ContentShowcase;
