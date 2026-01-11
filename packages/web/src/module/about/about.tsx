import { AboutUs } from "./section/about-us/about-us"
import { Our } from "./section/our/our"
import { Principle } from "./section/principle/principle"

export const About = () => {
    return (
        <div>
            <AboutUs />
            <Principle />
            <Our /> 
        </div>
    )
}