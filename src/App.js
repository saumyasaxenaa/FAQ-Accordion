import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Accordian from "./accordion/Accordion";
import Carousel from "./image-carousel/Carousel";
import QuoteGenerator from "./quote-generator/QuoteGenerator";
import ShoppingList from "./shopping-list/ShoppingList";
import UserSearch from "./usersearch/UserSearch";
import Pagination from "./pagination/Layout";

const App = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Project 1</Tab>
        <Tab>Project 2</Tab>
        <Tab>Project 3</Tab>
        <Tab>Project 4</Tab>
        <Tab>Project 5</Tab>
        <Tab>Project 6</Tab>
      </TabList>
      <TabPanel>{<Accordian />}</TabPanel>
      <TabPanel>{<Carousel />}</TabPanel>
      <TabPanel>{<QuoteGenerator />}</TabPanel>
      <TabPanel>{<ShoppingList />}</TabPanel>
      <TabPanel>{<UserSearch />}</TabPanel>
      <TabPanel>{<Pagination />}</TabPanel>
    </Tabs>
  );
};
export default App;
