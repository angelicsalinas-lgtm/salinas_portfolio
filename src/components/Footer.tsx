import styles from '@/styles/Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>✦</span>
            <p className={styles.tagline}>
              Creating visuals that feel human, modern, and meaningful.
            </p>
          </div>
          
          <nav className={styles.nav}>
            <a href="#work">Work</a>
            <a href="#learning">Learning</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Digital Artist Portfolio. All rights reserved.
          </p>
          <p className={styles.credit}>
            Built with Next.js & deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}
