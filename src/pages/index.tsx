import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Madan Sudarman - Profile`}
      description="Corporate Trainer & Technology Consultant Profile">

      {/* Header With Overlay */}
      <div className={styles.bannerContainer}>
        <img src={useBaseUrl("/img/header-banner.png")} alt="Header Banner" className={styles.headerImage} />
        <div className={styles.headerOverlay}>
          <div className={styles.container}>
            <h1 className={styles.name}>Madan Sudarman</h1>
            <div className={styles.roleWrapper}>
              <span className={styles.role}>Corporate Trainer & Technology Consultant</span>
            </div>
            <div className={styles.subMeta}>
              GEN AI | CLOUD | DEVOPS | FINOPS
            </div>
          </div>
        </div>
      </div>


      <main className={styles.mainContainer}>

        {/* Certification Logos */}
        <div className={styles.logoRow}>
          <img src={useBaseUrl("/img/azure.png")} alt="Azure AI Engineer" className={styles.certLogo} />
          <img src={useBaseUrl("/img/copilot.png")} alt="GitHub Copilot" className={styles.certLogo} />
          <img src={useBaseUrl("/img/certprof.png")} alt="CertProf" className={styles.certLogo} />
          <img src={useBaseUrl("/img/finops.png")} alt="FinOps Certified" className={styles.certLogo} />
          <img src={useBaseUrl("/img/mct.png")} alt="MCT" className={styles.certLogo} />
        </div>

        {/* Experience Bar */}
        <div className={styles.experienceBar}>
          25+ years of IT Experience - Certified across Gen AI stack
        </div>

        {/* Content Row: Trainings & Tech Stack */}
        <div className={styles.contentRow}>
          {/* Trainings Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionHeading}>Trainings provided</h2>
            <ul className={styles.trainingList}>
              <li className={styles.trainingItem}>Prompt engineering – Foundation & Advanced [by role – PM, BA, Dev, QA etc.]</li>
              <li className={styles.trainingItem}>Generative AI for Leaders – Industry use cases & Productivity [SDLC]</li>
              <li className={styles.trainingItem}>GitHub Copilot (GH-300) [Chat, Agents, Spaces, VS Code]</li>
              <li className={styles.trainingItem}>Azure AI Fundamentals (AI-900) [Gen AI, NLP, Responsible AI etc.]</li>
              <li className={styles.trainingItem}>AI Transformation Leader (AB-731) [Drive business value with AI solutions]</li>
              <li className={styles.trainingItem}>Develop AI agents on Azure (AI-3026) [Microsoft Agent Framework, MCP etc.]</li>
              <li className={styles.trainingItem}>Azure AI Engineer Associate (AI – 102) [AI Foundry, AI Search, Agent service etc.]</li>
              <li className={styles.trainingItem}>NVIDIA-Certified Associate - AI Infrastructure and Operations (NCA-AIIO)</li>
              <li className={styles.trainingItem}>FinOps foundation - FinOps Certified Practitioner (FOCP) + FinOps for AI</li>
            </ul>
          </div>

          {/* Tech Stack Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionHeading}>Tech Stack</h2>
            <table className={styles.techTable}>
              <tbody>
                <tr>
                  <th>Cloud Platform</th>
                  <td>Azure, AWS, GCP</td>
                </tr>
                <tr>
                  <th>LLM & SLM</th>
                  <td>GPT, Llama, Gemini, Mistral, Claude, DeepSeek, Qwen, Phi</td>
                </tr>
                <tr>
                  <th>LLM Execution</th>
                  <td>ONNX runtime, Llama.cpp, Ollama, LM Studio, Open WebUI</td>
                </tr>
                <tr>
                  <th>Gen AI Platform</th>
                  <td>Azure AI Foundry, AWS Bedrock, Google Vertex AI</td>
                </tr>
                <tr>
                  <th>AI Gateway</th>
                  <td>OpenRouter, LiteLLM, Azure AI Gateway</td>
                </tr>
                <tr>
                  <th>Cloud Native</th>
                  <td>Docker, Podman, Kubernetes</td>
                </tr>
                <tr>
                  <th>Framework & Language</th>
                  <td>.NET, C# , Microsoft Agent Framework (Semantic Kernel)</td>
                </tr>
                <tr>
                  <th>Database</th>
                  <td>SQL Server, Postgres, Cosmos DB, MongoDB</td>
                </tr>
                <tr>
                  <th>SCM & Tools</th>
                  <td>Azure DevOps, GitHub Actions, GitHub Copilot, SonarQube, CodeQL, CAST, ServiceNow, VS Code, Cursor, Antigravity</td>
                </tr>
                <tr>
                  <th>FinOps</th>
                  <td>Cloudability, CloudHealth, FinOps hubs, Infracost, Kubecost</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Footer With Overlay */}
      <div className={styles.bannerContainer}>
        <img src={useBaseUrl("/img/banner.png")} alt="Footer Banner" className={styles.footerImage} />
        <div className={styles.footerOverlay}>
          <div className={styles.container}>
            <div className={styles.contactInfo}>
              <a href="mailto:maddan@yahoo.com" className={styles.contactLink}>maddan@yahoo.com</a>
              <span className={styles.separator}>|</span>
              <span className={styles.phone}>91766 46859</span>
              <span className={styles.separator}>|</span>
              <a href="https://linkedin.com/in/madan-sudarman" className={styles.contactLink} target="_blank" rel="noopener noreferrer">linkedin.com/in/madan-sudarman</a>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
}
