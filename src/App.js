import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Accordian from "./accordion/Accordion";
import Carousel from "./image-carousel/Carousel";

const App = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Project 1</Tab>
        <Tab>Project 2</Tab>
      </TabList>
      <TabPanel>{<Accordian />}</TabPanel>
      <TabPanel>{<Carousel />}</TabPanel>
    </Tabs>
  );
};
export default App;
