import React, { useEffect, useState } from "react";
import ".//team.css";
import ProfileCard from "../shared/team/ProfileCard";
import { client } from "../utils/apiClient";
import Rachit from "../../assets/team_pictures/rachit.png";
import Rithvik from "../../assets/team_pictures/rithvik.png";
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
  const [currDp, setCurrDp] = useState("Finance")
  const departments = ["Leads", "Partnerships", "Finance", "Marketing", "Tech", "Events", "Advisor", "Others"]

  useEffect(() => {
    (async () => {
      const res = await getExecs()
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
        {/* <div className="card_display_container">
          {
            executives.map((exec, _) => {
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

        <p className="team_title">Our Founders</p>
        <div className="card_display_container">
          <ProfileCard
            img={Rachit}
            name="Rachit Malik"
            title="PM @ Microsoft"
          ></ProfileCard>
          <ProfileCard
            img={Rithvik}
            name="Rithvik Alluri"
            title="SWE @ Microsoft"
          ></ProfileCard>
        </div> */}
      </div>
    </div>
  );
}

export default Team;
