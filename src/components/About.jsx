import tailLogo from "/src/icons/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
import htmlLogo from "/src/icons/html5-logo.png"
import css3Logo from "/src/icons/css3-logo.png"
import jsLogo from "/src/icons/js-logo.png"
import reactLogo from "/src/icons/react-logo.png"
import spaIcon from "/src/icons/spa-icon.png"
import starIcon from "/src/icons/star-icon.png"
import locIcon from "/src/icons/location-icon.png"

export default function About() {
    return (
        <div className="flex flex-col items-center px-2 gap-10 md:gap-14 "
        >
            <div>
                <h2 className=" font-bold uppercase ">Yannick Castaño David</h2>
                <h4 className=" pt-2 font-semibold">
                    Full stack developer
                </h4>
                <div className="flex flex-row justify-center items-center pt-2">
                    <img className="w-4 h-4" src={locIcon} />
                    <p className=" font-thin">Valencia, Spain</p>
                </div>
            </div>

            <p className=" w-full">With a self-driven approach to learning, I have acquired a solid foundation in both front-end and back-end technologies. Skilled in JavaScript, HTML, CSS, and various databases, I thrive in collaborative environments, tackling complex coding challenges with a problem-solving mindset.</p>

            <div className=" flex flex-row w-full font-bold">
                <div className="flex flex-col items-center w-1/5">
                    <img className="w-5 h-5" src={htmlLogo} />
                    <p>HTML</p>
                </div>
                <div className="flex flex-col items-center w-1/5">
                    <img className="w-5 h-5" src={css3Logo} />
                    <p>CSS3</p>
                </div>
                <div className="flex flex-col items-center w-1/5">
                    <img className="w-5 h-5" src={jsLogo} />
                    <p>JS</p>
                </div>
                <div className="flex flex-col items-center w-1/5">
                    <img className="w-5 h-5" src={reactLogo} />
                    <p>REACT</p>
                </div>
                <div className="flex flex-col items-center w-1/5">
                    <img className="w-5 h-5" src={tailLogo} />
                    <p>TW</p>
                </div>
            </div>

            <div className=" sm:flex sm:flex-row sm:gap-10 md:justify-between font-semibold">
                <div className="flex flex-row items-center gap-10 sm:gap-2">
                    <div className="flex flex-row items-center gap-2">
                        <img className="h-5 w-5" src={spaIcon} /><p>Spanish</p>
                    </div>
                    <div className="flex flex-row">
                        <img className="h-3 w-3" src={starIcon} />
                        <img className="h-3 w-3" src={starIcon} />
                        <img className="h-3 w-3" src={starIcon} />
                        <img className="h-3 w-3" src={starIcon} />
                        <img className="h-3 w-3" src={starIcon} />
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between gap-10 sm:gap-2">
                    <div className="flex flex-row items-center gap-2">
                        <img className="h-5 w-5" src="/src/icons/fr-icon.png" /><p>French</p>
                    </div>
                    <div className="flex flex-row">
                        <img className="h-3 w-3" src={starIcon} />
                        <img className="h-3 w-3" src={starIcon} />
                        <img className="h-3 w-3" src={starIcon} />
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between gap-10 sm:gap-2">
                    <div className="flex flex-row items-center gap-2">
                        <img className="h-5 w-5" src="/src/icons/en-icon.png" /><p>English</p>
                    </div>                        <div className="flex flex-row">
                        <img className="h-3 w-3" src={starIcon} />
                        <img className="h-3 w-3" src={starIcon} />
                    </div>
                </div>
            </div>

            <div className=" ">
                <h4 className="font-bold">Certifications</h4>
                <div className="sm:pt-4">
                    <p>HTML Advanced Certification </p>
                    <p>CSS3 Advanced Certification </p>
                    <p>JS Advanced Certification </p>
                    <p>REACT Advanced Certification </p>
                </div>
            </div>

        </div>
    )
}