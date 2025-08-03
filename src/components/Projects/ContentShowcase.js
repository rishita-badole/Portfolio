import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "./ContentShowcase.css"; // Assuming you have some styles for this component
import reactIcon from "./ContentThumbnails/react-icon.png";
import angularIcon from "./ContentThumbnails/angular-icon.png";
import defaultImgs from "./ContentThumbnails/1.jpg"; // fallback

// Full content list (same as before)
const contentList = [
  {
    title: "Best Practices for Security",
    type: "Blog",
    status: "Under review",
    date: "2025-04-08",
    demoLink:
      "https://docs.google.com/document/d/114WWivUWif7RcLJ8b2FLHPEMMjehuxaOs1f_IdmJvbA/edit?usp=sharing",
    surferLink: "",
  },
  {
    title: "Learning Management System in React",
    type: "Article",
    status: "Published",
    date: "2025-04-09",
    demoLink:
      "https://www.angularminds.com/blog/build-a-scalable-learning-management-system-lms-in-react",
    surferLink: "",
  },
  {
    title: "React JS Story",
    type: "Blog",
    status: "Published",
    date: "2025-04-25",
    demoLink:
      "https://docs.google.com/document/d/1dTgi_iHLPQbR6UH4F1gCEpdmEti5RzO392xfPcmZGBw/edit?usp=sharing",
    surferLink: "",
  },
  {
    title: "NodeJS and ReactJS Article",
    type: "Article",
    status: "Under review",
    date: "2025-05-07",
    demoLink:
      "https://app.surferseo.com/drafts/s/8IxbAirh96md1AcCqvOqkUCioJvBFcI-",
    surferLink:
      "https://app.surferseo.com/drafts/s/8IxbAirh96md1AcCqvOqkUCioJvBFcI-",
  },
  {
    title: "Article - Design Patterns in Angular",
    type: "Article",
    status: "Under review",
    date: "",
    demoLink:
      "https://docs.google.com/document/d/1tRCR2zO9BOrhz_bMeQFumV5jkmgAIbaZKuDKLti100o/edit?usp=sharing",
    surferLink:
      "https://app.surferseo.com/drafts/s/UodqeP7WZp29R9kmO198POT7LDVY3vis",
  },
  {
    title: "Mastering React Pro Sidebar",
    type: "Article",
    status: "Published",
    date: "2025-04-28",
    demoLink: "https://www.angularminds.com/blog/react-pro-sidebar",
    surferLink: "",
  },
  {
    title: "Angular Compiler Options",
    type: "Article",
    status: "Under review",
    date: "",
    demoLink:
      "https://docs.google.com/document/d/1qfp0kjC3PmtRvBKqQ6GhwD99_ugyo9m_aAiO2E4_ZBs/edit?usp=sharing",
    surferLink:
      "https://app.surferseo.com/drafts/s/dR6opIHhMGomlfQkZFWtbXtCf02TRyaE",
  },
  {
    title: "Stack Data ReactJS",
    type: "Article",
    status: "Under review",
    date: "",
    demoLink:
      "https://docs.google.com/document/d/1A_ShgMZXOIdardscoHyMUcJrHL5NKAz9IRSd2M2ppw4/edit?usp=sharing",
    surferLink: "",
  },
  {
    title: "AI Powered Software Development",
    type: "Article",
    status: "Under review",
    date: "2025-06-18",
    demoLink:
      "https://docs.google.com/document/d/1R77y5Kqi5ZIUAFkjy97_k_3ExndXBKA2yh4A4CJV8mk/edit?usp=sharing",
    surferLink:
      "https://app.surferseo.com/drafts/s/yjPr4NPI5G6R4h3oZ8MxV2hAr6KWqcc6",
  },
  {
    title: "Top React Interview Questions Asked in Job Interviews",
    type: "Blog",
    status: "Published",
    date: "2025-06-04",
    demoLink:
      "https://www.angularminds.com/blog/react-interview-questions-for-hiring-top-talent",
    surferLink:
      "https://app.surferseo.com/drafts/s/qEjGvgSrKvbUUnplV2Xvvmr0rMYOtzpf",
  },
  {
    title: "Top State Management Libraries in React",
    type: "Blog",
    status: "Published",
    date: "2025-04-21",
    demoLink:
      "https://www.angularminds.com/blog/top-state-management-libraries-for-react",
    surferLink: "",
  },
  {
    title: "Proof-Read - Documentation",
    type: "Internal Documentation",
    status: "Processed",
    date: "",
    demoLink:
      "https://docs.google.com/document/d/1wyFRrBI9CzgGKJbm_pG7knD5J57g-ZIPlEo29ucL0TY/edit?usp=sharing",
    surferLink: "",
  },
  {
    title: "Digital PR Platforms",
    type: "Product Review",
    status: "Processed",
    date: "2025-04-17",
    demoLink:
      "https://docs.google.com/document/d/1rcjKi8F8Va8mRqFq8uUwW4qlL-ejuHCsQmsx-oIuHkQ/edit?usp=sharing",
    surferLink: "",
  },
  {
    title: "AI Development Company",
    type: "Landing Page",
    status: "Under review",
    date: "2025-06-20",
    demoLink:
      "https://docs.google.com/document/d/1R3BsEW3LjGxkRJHP8qmHtdp9QaQpLWII2PUks9viRNw/edit?usp=sharing",
    surferLink:
      "https://app.surferseo.com/drafts/s/2NZ6RFB3Jwx1ls9EmZqoSU3Bye18rTG-",
  },
  {
    title: "Hire Anthropic developers",
    type: "Landing Page",
    status: "Published",
    date: "2025-06-20",
    demoLink:
      "https://www.angularminds.com/ai/hire-anthropic-claude-developers",
    surferLink:
      "https://app.surferseo.com/drafts/s/2NZ6RFB3Jwx1ls9EmZqoSU3Bye18rTG-",
  },
  {
    title: "AI in Business Intelligence",
    type: "Service Page",
    status: "Published",
    date: "2025-04-23",
    demoLink: "https://www.angularminds.com/ai/ai-business-intelligence",
    surferLink: "",
  },
  {
    title: "AI in Hospitality and Travel",
    type: "Service Page",
    status: "Published",
    date: "2025-04-23",
    demoLink: "https://www.angularminds.com/ai/ai-in-hospitality-travel",
    surferLink: "",
  },
  {
    title: "AI in Process Automation",
    type: "Service Page",
    status: "Published",
    date: "2025-04-23",
    demoLink: "https://www.angularminds.com/ai/ai-process-automation",
    surferLink: "",
  },
  {
    title: "AI in Retail and E-commerce",
    type: "Service Page",
    status: "Draft",
    date: "2025-04-23",
    demoLink: "https://www.angularminds.com/ai/ai-in-retail-ecommerce",
    surferLink: "",
  },
  {
    title: "AI in Manufacturing Services",
    type: "Service Page",
    status: "Draft",
    date: "2025-04-23",
    demoLink: "https://www.angularminds.com/ai/ai-in-manufacturing",
    surferLink: "",
  },
  {
    title: "AI in Insurance",
    type: "Service Page",
    status: "Draft",
    date: "2025-04-23",
    demoLink: "https://www.angularminds.com/ai/ai-in-insurance",
    surferLink: "",
  },
  {
    title: "AI in Ed-tech",
    type: "Service Page",
    status: "Draft",
    date: "2025-04-23",
    demoLink: "https://www.angularminds.com/ai/ai-in-education",
    surferLink: "",
  },
  {
    title: "Microsoft Azure AI Services",
    type: "Service Page",
    status: "Draft",
    date: "2025-04-23",
    demoLink: "https://www.angularminds.com/ai/azure-ai-services",
    surferLink: "",
  },
  {
    title: "Hugging Face Transformers Integration",
    type: "Service Page",
    status: "Draft",
    date: "2025-04-23",
    demoLink: "https://www.angularminds.com/ai/hire-hugging-face-developers",
    surferLink: "",
  },
  {
    title: "Amazon Sagemaker & Bedrock for AI",
    type: "Service Page",
    status: "Draft",
    date: "2025-04-23",
    demoLink: "https://www.angularminds.com/ai/aws-sagemaker-bedrock-ai",
    surferLink: "",
  },
];

// Utility: chunk array into groups of 3
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

// Utility: return image path based on content context
const getIconByContext = (title = "", description = "") => {
  const lowerText = `${title} ${description}`.toLowerCase();
  if (lowerText.includes("react")) return reactIcon;
  if (lowerText.includes("angular")) return angularIcon;
  return defaultImgs;
};

function ContentShowcase() {
  const categories = Array.from(new Set(contentList.map((item) => item.type)));

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading section-title">
          Explore <strong className="purple"> my featured pieces</strong>
        </h1>

        {categories.map((category) => {
          const filtered = contentList.filter((item) => item.type === category);
          const chunked = chunk(filtered, 3);

          return (
            <div key={category} style={{ marginBottom: "12px" }}>
              <h2 className="section-title">{category}</h2>
              <Carousel indicators={false} interval={null}>
                {chunked.map((group, idx) => (
                  <Carousel.Item key={idx}>
                    <Row className="justify-content-center">
                      {group.map((item, i) => (
                        <Col
                          md={4}
                          className="project-card card-custom"
                          key={i}
                        >
                          <ProjectCard
                            imgPath={getIconByContext(
                              item.title,
                              item.description
                            )}
                            title={item.title}
                            type={item.type}
                            description={
                              item.description || "Content coming soon..."
                            }
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
