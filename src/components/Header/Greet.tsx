import { GreetProps } from "../type"

export const Greet =(props:GreetProps) => {
    const {projectCount=0}=props
    return(
        <div>
            <h2>
                {props.isLoggedIn
                ? `Welcome  ${props.name}! You got ${projectCount} New projects.`
                :`Welcome Guest`}
            </h2>
        </div>
    )
}