import React from "react";
import { Container } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import HtmlProject from "./Home/Projects/HtmlProject";
import Projects from "./Home/Projects/Projects";

const TabsProject = () => {
  return (
    <Container id="projects">
      <div className="project mt-5">
        <h2 className="text-center">
          Some of <span>My Projects</span>
        </h2>
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>React Js Project</Tab>
            <Tab>Figma To Html</Tab>
          </TabList>
          <TabPanel>
            <Projects />
          </TabPanel>
          <TabPanel>
              <HtmlProject/>
          </TabPanel>
        </Tabs>
      </div>
    </Container>
  );
};

export default TabsProject;
