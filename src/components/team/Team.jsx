import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ".//team.css";
import ProfileCard from "../shared/team/ProfileCard";
import { client } from "../utils/apiClient";
import TransparentButton from "../shared/buttons/TransparentButton";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos} from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs"
import Involvement from "./Involvement";

async function getExecs() {
  try {
    const response = await client.get('/executive')
    return JSON.parse(response.data.slice(0,-4))
  } catch(err) {
    console.error(err)
    return
  }
}

function Team() {
  const [executives, setExecutives] = useState([])
  const [currDp, setCurrDp] = useState("Leads") // Default value 
  const [currIdx, setCurrIdx] = useState(0)
  const [currExecs, setCurrExecs] = useState([])

  const departments = ["Leads", "Partnerships", "Finance", "Marketing", "Tech", "Events", "Advisor", "Others"]
  const [ maxDisplayItem, setMaxDisplayItem ] = useState(window.innerWidth >= 950 ? 6 : 3)

  /* Mobile */
  const isMobile = useMediaQuery({ maxWidth: 949}, undefined, () => { (isMobile ? setMaxDisplayItem(3) : setMaxDisplayItem(6)); setCurrIdx(0); setIsExpanded(false)})
  const [isExpanded, setIsExpanded] = useState(false)
  const dpClickRef = useRef(null)

  const camelize = (s) => s.substring(0,1).toUpperCase() + s.substring(1).toLowerCase()
  const processExec = (ex) => {
    ex.department = camelize(ex.department)
    if (!departments.includes(ex.department)) {
      let newDp = departments.filter((d) => d.includes(ex.department) | ex.department.includes(d))
      ex.department = newDp.length > 0 ? newDp[0] : ex.department
    }
  }
  const arrowHandler = (inc) => {
    if (inc > 0) {
      (currIdx + inc) * maxDisplayItem < currExecs.length ? setCurrIdx(currIdx + inc) : null
    } else if (inc < 0) {
      (currIdx + inc) * maxDisplayItem >= 0 ? setCurrIdx(currIdx + inc) : null
    }
  }
  const dpButtonHanler = (d) => {
    setCurrDp(d)
    setCurrIdx(0)
  }

  useEffect(() => {
    (async () => {
      const res = await getExecs()
      res.map(processExec)
      setExecutives(res)
    })()
  }, [])

  useEffect(() => {
    setCurrExecs(executives.filter((exec) => (exec.department == currDp) || (currDp == "Others" && !departments.includes(exec.department))))
  }, [currDp, executives])

  useEffect(() => {
    function handleClickOutside(event) {
      if (dpClickRef.current && !dpClickRef.current.contains(event.target)) {
        setIsExpanded(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => { document.removeEventListener("mousedown", handleClickOutside) } // cleanup
  }, [dpClickRef])

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-y-[2.9rem]">
        <h1 className="font-header text-h1 text-white">Our Team</h1>
        <h3 className="px-[2.5rem] font-header text-h2 break-words">Meet the team behind your experience!</h3>

        <div className={"md:relative md:bg-transparent md:rounded-none\
          flex flex-col bg-[#2B3950]/[.87] z-1 w-[calc(100%-3.3rem)] mx[3.3rem] rounded-[1.45rem] " +
          (isExpanded ? "rounded-b-none" : "")} ref={dpClickRef}>
          <div className="bg-transparent flex justify-center items-center py-[0.45rem] cursor-pointer
            md:hidden" onClick={() => setIsExpanded(!isExpanded)}>
                <BsFillPeopleFill className="bg-transparent w-[2.5rem] h-[2.5rem]"/>
                <span className="bg-transparent w-[11.84rem] text-center">Choose Team</span>
                <span className="w-[0.82rem] h-[0.82rem] bg-white rounded-full"></span>
          </div>
          <div className="relative w-full">
            <div className={"md:flex md:flex-row md:gap-[1.26rem] md:bg-transparent md:rounded-none\
            bg-[#2B3950]/[.87] z-1 w-full absolute flex flex-col justify-center items-center gap-[1.05rem] rounded-b-[1.45rem] " +
            (!isExpanded ? "hidden" : "")}>
            {departments.map((d) => 
              <TransparentButton disabled={d.toLowerCase() == currDp.toLowerCase()} 
                onClick={() => dpButtonHanler(d)}>
                  {d}
              </TransparentButton>)}
            </div>
          </div>
        </div>

        <div className=" flex flex-row content-start md:py-[2.5rem] items-center justify-center w-full h-fit">
          <MdOutlineArrowBackIos className="w-[2rem] h-[3.6rem] shrink-0 hover:cursor-pointer bg-transparent" onClick={() => arrowHandler(-1)}/>
          <div className="w-fit h-fit mx-[5%] grid gap-x-[1.5rem] gap-y-[2.5rem] place-items-center grid-cols-1 grid-rows-3
          min-[950px]:grid-cols-2 min-[950px]:grid-rows-3
          lg:gap-x-[5rem]">
            {
              currExecs.slice(currIdx * maxDisplayItem, (currIdx + 1) * maxDisplayItem).map((exec, _) => {
                return (
                  <ProfileCard
                    img={exec.img}
                    name={exec.name}
                    title={exec.title}
                  ></ProfileCard>
                )
              })
            }
          </div>
         <MdOutlineArrowForwardIos className="w-[2rem] h-[3.6rem] shrink-0 hover:cursor-pointer bg-transparent" onClick={() => arrowHandler(1)}/>
        </div>
      </div>

      <div className="w-full h-[8.93rem] bg-[#2B3950] flex items-center justify-center mb-[calc(5.9rem*0.5)] md:mb-[5.9rem]">
          <h2 className="text-[2.5rem] font-bold text-center bg-transparent">Want to get involved?</h2>
      </div>
        <div className="flex flex-wrap justify-center px-[1rem] gap-y-[calc(7.31rem*0.1)] md:gap-y-[calc(7.31rem*0.2)]
          min-[1174px]:gap-x-[6.1rem] min-[1174px]:gap-y-[7.31rem]">
          <Involvement 
            iconMaker={(props) => 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" {...props}>
              <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
            </svg>
            
          } 
            tagline="Become a mentor"
            description="As a mentor, you have the unique opportunity to shape the future leaders of product management and leave a lasting legacy."
            buttonText="Find out More"
            buttonLink="https://tally.so/r/mODJXk"/>

          <Involvement 
            iconMaker={(props) => 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" {...props}>
                <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
                <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
              </svg>
            } 
            tagline="Become a sponsor"
            description="Support our club and its mission to train the next generation of product managers. Explore exclusive benefits and partnership opportunities tailored for our sponsors."
            buttonText="Learn More"
            buttonLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>

          <Involvement 
            iconMaker={(props) => 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" {...props}>
              <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
            </svg>
            } 
            tagline="Membership"
            description="Experience the complete spectrum of product management. Unlock premium resources, networking events, and hands-on project opportunities. "
            buttonText="Gain Experience"
            buttonLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>


          <Involvement 
            iconMaker={(props) => 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" {...props}>
                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
              </svg>
            } 
            tagline="Join our team"
            description="Looking for a platform to showcase your skills and passion? Join our dedicated team and be at the forefront of product management at UBC."
            buttonText="Join Here"
            buttonLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>
        </div>
    </div>
  );
}

export default Team;
