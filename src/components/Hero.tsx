import styles from '@/styles/Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.greeting}>Hello, I&apos;m</p>
          <h1 className={styles.title}>
            A <span className={styles.highlight}>Digital Artist</span>
          </h1>
          <p className={styles.statement}>
            I create visually compelling, accessible, and concept-driven designs 
            that blend <em>creativity</em> with <em>purpose</em>.
          </p>
          <p className={styles.description}>
            Exploring emotion through color, form, and motion—blending technology 
            and creativity to design visuals that feel human, modern, and meaningful.
          </p>
          <div className={styles.cta}>
            <a href="#work" className={styles.primaryBtn}>View My Work</a>
            <a href="#contact" className={styles.secondaryBtn}>Get In Touch</a>
          </div>
        </div>
        
        <div className={styles.visual}>
          <div className={styles.artworkFrame}>
            <div className={styles.artwork}>
              <div className={styles.artElement1}></div>
              <div className={styles.artElement2}></div>
              <div className={styles.artElement3}></div>
              <div className={styles.artElement4}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <span>Scroll to explore</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  )
}
