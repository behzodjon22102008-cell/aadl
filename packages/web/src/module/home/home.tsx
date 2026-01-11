import { Advantage } from "./page/advantages/advantage"
import { Projects } from "./page/components/projects/projects"
import { Computer } from "./page/computers/computers"
import { Hero } from "./page/hero/hero"
import { News } from "./page/news/news"
import { GetStarted } from "./page/started/started"
import { Technology } from "./page/technology/technology"
import { Testimonials } from "./page/users/users"

export const Home = () => {
    return (
        <div>
            <Hero />
            <Projects />
            <Advantage />
            <Computer />
            <Technology />
            <Testimonials />
            <GetStarted />
            <News />  
        </div>
    )
}