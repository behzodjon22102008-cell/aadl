import styles from "./our.module.css"

import Planet from "../../../../assets/img/planet.png"

export const Our = () => {
    return (
        <div className={styles.container}>
            <div className={styles.planet}>
            <div className={styles.mission}>
                <h2>Our mission</h2>
                <p>Our mission is to create websites and applications that genuinely help people in their daily lives. We focus on building practical, user-friendly solutions that make tasks simpler, faster, and more accessible.</p> 
                <p className={styles.for}>  For example, we developed an app connecting doctors and patients, enabling safe and efficient online consultations. Through every project, we aim to combine technology, design, and usability to deliver meaningful experiences that truly make a difference.</p>
            </div>
            <div className={styles.image}>
                <img src={Planet} alt="planet" />
            </div>
            </div>
            <div className={styles.story}>
                <h3>Our story</h3>
                <p>Aadl Team was founded with a simple goal: to use technology to solve real problems and make life easier for people. Over the past five years, we have grown from a small group of passionate developers into a skilled team creating websites, mobile apps, and AI-powered solutions. </p>
                <p className={styles.for}>From building tools that help doctors consult patients online to platforms that streamline business processes, our journey has always been about combining creativity, technology, and user-focused design. Every project we take on reflects our commitment to quality, innovation, and making a positive impact.</p>
            </div>
            <div className={styles.skils}>
                <h3>Our skils</h3>
                <div className={styles.text}>
                    <div className={styles.description}>
                        <h4>FRONT-END</h4>
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>JavaScript</p>
                        <p>TypeScript</p>
                        <p>React</p>
                        <p>React Native</p>
                        <p>Redux</p>
                        <p>Context API</p>
                        <p>PWA</p>
                    </div>
                    <div className={styles.description}>
                        <h4>Databases</h4>
                        <p>MySQL</p>
                        <p>PostgreSQL</p>
                        <p>SQLite</p>
                        <p>SQL Server</p>
                        <p>Redis</p>
                        <p>LevelDB</p>
                        <p>CouchDB</p>
                    </div>
                    <div className={styles.description}>
                        <h4>AI</h4>
                        <p>AI engine</p>
                        <p>ChatGPT AI engine</p>
                    </div>
                    <div className={styles.description}>
                        <h4>DevOps</h4>
                        <p>Git</p>
                        <p>GitHub</p>
                        <p>GitLab</p>
                        <p>Bitbucke</p>
                    </div>
                    <div className={styles.description}>
                        <h4>Back-End</h4>
                        <p>Node.js</p>
                        <p>Nest.js</p>
                        <p>Express.js</p>
                        <p>Fastify.js</p>
                        <p>REST API</p>
                        <p>GraphQLh</p>
                        <p>Socket.io</p>
                        <p>Passkey</p>
                        <p>JWT</p>
                    </div>
                </div>
            </div>
        </div>
    )
}