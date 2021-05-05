import me1 from '../me1.jpg'
const About = () => {
    return (
        <div className="about-content">
            <h1 className='About'>John Benedict Laureta</h1>
            <h1 className='About'>BSIT32E2</h1>
            <h1 className='About'>IT Elective 3</h1>
            <div className="me1">
                <img src={me1} alt="myimage" className="me1"/>
            </div>
        </div>
    )
}

export default About
