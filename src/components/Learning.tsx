import styles from '@/styles/Learning.module.css'

const learningItems = [
  {
    id: 1,
    title: "3D Design & Blender",
    progress: 65,
    description: "Expanding into three-dimensional art to create immersive visual experiences.",
    icon: "🎲"
  },
  {
    id: 2,
    title: "Motion Graphics",
    progress: 45,
    description: "Learning After Effects and Lottie animations for dynamic web illustrations.",
    icon: "🎬"
  },
  {
    id: 3,
    title: "AI Art Tools",
    progress: 80,
    description: "Exploring Midjourney, DALL·E, and Stable Diffusion for creative workflows.",
    icon: "🤖"
  },
  {
    id: 4,
    title: "Accessibility Design",
    progress: 70,
    description: "Ensuring my designs are inclusive and meet WCAG standards.",
    icon: "♿"
  }
]

export default function Learning() {
  return (
    <section id="learning" className={styles.learning}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Growth Mindset</span>
          <h2 className={styles.title}>Currently Learning</h2>
          <p className={styles.subtitle}>
            I believe in continuous growth. Here&apos;s what I&apos;m actively 
            exploring to push my creative boundaries.
          </p>
        </div>
        
        <div className={styles.grid}>
          {learningItems.map(item => (
            <div key={item.id} className={styles.card}>
              <div className={styles.cardIcon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
              <div className={styles.progressContainer}>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill} 
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
                <span className={styles.progressText}>{item.progress}%</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.quote}>
          <blockquote>
            &ldquo;A forward-thinking digital artist specializing in modern digital 
            illustration, UI-inspired visuals, and experimental design, continuously 
            learning new tools to push creative boundaries.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  )
}
