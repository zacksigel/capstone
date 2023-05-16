import './App.css';
import React, { useState } from 'react';
import Popup from './Popup';


const PopupController = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleOpen = (component) => {
    {console.log(component)}
    setSelectedComponent(component)
    setIsOpen(true);
  };

  const handleClose = () => {
    setSelectedComponent(null)
    setIsOpen(false);
  };

  return (
    <div>
      <p className="additional-info"><a href="#" onClick={() => handleOpen("Bio")}>Bio</a>/<a href="#" onClick={() => handleOpen("Resume")}>Resume</a>/<a href="https://www.linkedin.com/in/zacksigel/">LinkedIn</a></p>
      <Popup isOpen={isOpen} onClose={handleClose} component={selectedComponent}>
      </Popup>
    </div>
  );
};

function ProjectRow({ project }) {
  const deployed = project.deployed ? 
  
    <span>
      <a href={project.url}>{project.name}</a>
    </span>
  
  : 
   <span style={{ color: "grey" }}>
      {project.name}
    </span>;

  const liveRepo = project.deployed ?

  <span>
  <a href={project.repo}>Github</a>
</span>

: 
<span style={{ color: "grey" }}>
  Offline
</span>;

  return (
    <tr>
      <td className="project-number">{PROJECTS.indexOf(project) + 1}</td>
      <td>{deployed}</td>
      <td>{liveRepo}</td>
    </tr>
  );
}

function ProjectTable({ projects }) {
  const rows = [];
  let lastURL = null;

  projects.forEach((project) => {
    rows.push(
      <ProjectRow
        project={project}
        key={project.name} />
    );
    lastURL = project.url;
  });

  return (
    <table>
        <tbody>
          <td className="headline-row"></td>
          <td className="headline-row">Name</td>
          <td className="headline-row">Repo</td>
        </tbody>
      <tbody>{rows}</tbody>
    </table>
  );
}


function AllProjects({ projects }) {
  return (
    <div>
      <p className="zack-title"><span className="zack-span">Zack Sigel | SEIRFX Portfolio</span></p>
      <ProjectTable projects={projects} />
    </div>
  );
}

const PROJECTS = [
  {url: "https://pages.git.generalassemb.ly/zacksigel/poker-sim/", repo: "https://git.generalassemb.ly/zacksigel/poker-sim", deployed: true, name: "Poker Sim"},
  {url: "https://cognitive-node.herokuapp.com/notes", repo: "https://git.generalassemb.ly/zacksigel/simplistic", deployed: true, name: "SimpLISTic"},
  {url: "https://jade-beignet-5f7972.netlify.app/", repo: "https://github.com/zacksigel/frontend-petfinder-app", deployed: true, name: "Petfinder Purpose"},
  {url: "https://travelogue-zs-ga.herokuapp.com/", repo: "https://github.com/zacksigel/travelogue", deployed: true, name: "Travelogue"},
  {url: "#", repo: "#", deployed: false, name: "話します: 単語帳"},
  {url: "#", repo: "#", deployed: false, name: "Travelogue 2.0"},
];


function App() {
  return (
    <div className="container">
    <AllProjects projects={PROJECTS} />
    <PopupController />
    </div>
  )
}

export default App;
