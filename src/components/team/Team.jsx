import React, { useEffect, useState } from "react";
import ".//team.css";
import ProfileCard from "../shared/team/ProfileCard";
import { client } from "../utils/apiClient";
import TransparentButton from "../shared/buttons/TransparentButton";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos} from "react-icons/md";

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
  const maxDisplayItem = 6

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
        <div className="flex gap-[1.26rem] mt-[1.3rem]">
          {departments.map((d) => 
            <TransparentButton disabled={d.toLowerCase() == currDp.toLowerCase()} 
              onClick={() => dpButtonHanler(d)}>
                {d}
            </TransparentButton>)}
        </div>
        <div className="w-[68.6rem] h-[49.6rem] flex flex-row content-start px-[1.6rem] py-[2.5rem] items-center">
          <MdOutlineArrowBackIos className="w-[2rem] h-[3.6rem] shrink-0 hover:cursor-pointer" onClick={() => arrowHandler(-1)}/>
            <div className="w-full h-full flex flex-wrap gap-x-[5rem] gap-y-[2.5rem] content-start ml-[4.2rem]">
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
         <MdOutlineArrowForwardIos className="w-[2rem] h-[3.6rem] shrink-0 hover:cursor-pointer" onClick={() => arrowHandler(1)}/>
        </div>
      </div>
    </div>
  );
}

export default Team;
