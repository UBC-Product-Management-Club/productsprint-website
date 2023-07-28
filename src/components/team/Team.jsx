import React, { useEffect, useState } from "react";
import ".//team.css";
import ProfileCard from "../shared/team/ProfileCard";
import { client } from "../utils/apiClient";
import TransparentButton from "../shared/buttons/TransparentButton";

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
  const departments = ["Leads", "Partnerships", "Finance", "Marketing", "Tech", "Events", "Advisor", "Others"]

  const camelize = (s) => s.substring(0,1).toUpperCase() + s.substring(1).toLowerCase()
  const processExec = (ex) => {
    ex.department = camelize(ex.department)
    if (!departments.includes(ex.department)) {
      let newDp = departments.filter((d) => d.includes(ex.department) | ex.department.includes(d))
      ex.department = newDp.length > 0 ? newDp[0] : ex.department
    }
  }

  useEffect(() => {
    (async () => {
      const res = await getExecs()
      res.map(processExec)
      setExecutives(res)
    })()
  }, [])

  return (
    <div>
      <div className="flex flex-col items-center gap-[2.9rem]">
        <h1 className="font-header text-h1 text-white">Our Team</h1>
        <h3 className="font-header text-h2">Meet the team behind your experience!</h3>
        <div className="flex gap-[1.26rem]">
          {departments.map((d) => 
            <TransparentButton disabled={d.toLowerCase() == currDp.toLowerCase()} 
              onClick={() => setCurrDp(d)}>
                {d}
            </TransparentButton>)}
        </div>
        <div className="card_display_container">
          {
            executives.filter((exec) => (exec.department == currDp) || (currDp == "Others" && !departments.includes(exec.department))).map((exec, _) => {
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
      </div>
    </div>
  );
}

export default Team;
