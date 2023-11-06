import { Image, TextFirst, SubText, CardMessage } from "./style"
import { Link } from "react-router-dom"
import Navbar from "../../Components/Navbar"
import Button from "../../Components/Button"
import Computer3D from "../../../public/Computer3D.png"
const About = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
      <div className="flex-1 w-64 ...">
        <TextFirst>A blog made exclusively for the developer community</TextFirst>
        <SubText>Here you can create your post and shared with other developers</SubText>
        <Link to={"/login"}>
        <Button>Enter in community</Button>
        </Link>
      </div>
      <div className="flex-1 w-32 ...">
        <CardMessage>I want Coffe!</CardMessage>
        <Image>
        <img src={Computer3D} alt="Developer" />
        </Image>
      </div>
    </div>
    </div>
  )
}

export default About