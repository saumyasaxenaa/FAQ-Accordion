import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Accordian from "./accordion/Accordion";

const App = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
      </TabList>
      <TabPanel>{<Accordian />}</TabPanel>
      <TabPanel>
        <h2>Content</h2>
      </TabPanel>
    </Tabs>
  );
};
export default App;
