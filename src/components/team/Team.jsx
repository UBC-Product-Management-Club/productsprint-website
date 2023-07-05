import React, { useEffect, useState } from "react";
import ".//team.css";
import ProfileCard from "../shared/team/ProfileCard";
import { client } from "../utils/apiClient";
import Rachit from "../../assets/team_pictures/rachit.png";
import Rithvik from "../../assets/team_pictures/rithvik.png";

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

  useEffect(() => {
    (async () => {
      const res = await getExecs()
      setExecutives(res)
    })()
  }, [])

  return (
    <div>
      <div className="container">
        <p className="team_title">Our Team</p>
        <div className="card_display_container">
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
        </div>
      </div>
    </div>
  );
}

export default Team;
