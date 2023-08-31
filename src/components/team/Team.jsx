import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ".//team.css";
import ProfileCard from "../shared/team/ProfileCard";
import { client } from "../utils/apiClient";
import TransparentButton from "../shared/buttons/TransparentButton";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos} from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs"

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
  const isMobile = useMediaQuery({ maxWidth: 949}, undefined, () => { (isMobile ? setMaxDisplayItem(3) : setMaxDisplayItem(6)); setCurrIdx(0)})
  const [isExpanded, setIsExpanded] = useState(false)

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

  return (
    <div>
      <div className="flex flex-col items-center gap-y-[2.9rem]">
        <h1 className="font-header text-h1 text-white">Our Team</h1>
        <h3 className="font-header text-h2">Meet the team behind your experience!</h3>

        <div className={"md:relative md:bg-transparent md:rounded-none\
          flex flex-col bg-[#2B3950]/[.87] z-1 w-[calc(100%-3.3rem)] mx[3.3rem] rounded-[1.45rem] " +
          (isExpanded ? "rounded-b-none" : "")}>
          <div className="bg-transparent flex justify-center items-center py-[0.45rem] cursor-pointer
            md:hidden" onClick={() => setIsExpanded(!isExpanded)}>
                <BsFillPersonLinesFill className="bg-transparent w-[2.5rem] h-[2.5rem]"/>
                <span className="bg-transparent w-[11.84rem] text-center">Choose Team</span>
                <span className="w-[0.82rem] h-[0.82rem] bg-white rounded-full"></span>
          </div>
          <div className="relative w-full">
            <div className={"md:flex md:flex-row md:justify-center md:items-center md:gap-[1.26rem]\
            md:mt-[1.3rem] md:bg-transparent md:rounded-none\
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

        <div className=" flex flex-row content-start py-[2.5rem] items-center justify-center w-full">
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
    </div>
  );
}

export default Team;
