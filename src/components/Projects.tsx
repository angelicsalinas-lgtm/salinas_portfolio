import styles from '@/styles/Projects.module.css'

const projects = [
  {
    id: 1,
    category: "What I Know",
    title: "Brand Identity System",
    description: "A comprehensive visual identity including logo design, color palette, typography, and brand guidelines for a modern tech startup.",
    tags: ["Branding", "Logo Design", "Visual Identity"],
    color: "#6366f1",
    image: "🎨"
  },
  {
    id: 2,
    category: "What I Learned",
    title: "Interactive UI Illustrations",
    description: "Explored motion design and micro-interactions, creating animated illustrations that respond to user input and enhance UX.",
    tags: ["Motion Design", "UI/UX", "Animation"],
    color: "#ec4899",
    image: "✨"
  },
  {
    id: 3,
    category: "What I Aspire To",
    title: "Generative Art Collection",
    description: "Experimenting with AI-assisted generative art, blending traditional design principles with algorithmic creativity.",
    tags: ["AI Art", "Generative", "Experimental"],
    color: "#14b8a6",
    image: "🚀"
  }
]

export default function Projects() {
  return (
    <section id="work" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Featured Work</span>
          <h2 className={styles.title}>The Big Three</h2>
          <p className={styles.subtitle}>
            A curated selection showcasing my growth as a digital artist—from 
            foundational skills to ambitious explorations.
          </p>
        </div>
        
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <article 
              key={project.id} 
              className={styles.card}
              style={{ '--accent-color': project.color } as React.CSSProperties}
            >
              <div className={styles.cardHeader}>
                <span className={styles.category}>{project.category}</span>
                <span className={styles.number}>0{index + 1}</span>
              </div>
              
              <div className={styles.cardVisual}>
                <span className={styles.emoji}>{project.image}</span>
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
                
                <div className={styles.tags}>
                  {project.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
              
              <a href="#" className={styles.cardLink}>
                View Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
