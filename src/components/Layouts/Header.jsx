import TextField from "../UI/TextField";
import SearchIcon from "../Icons/Search";
import { Form } from "react-router-dom";

const listDay = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const formattedmonth = month <= 9 ? `0${month}` : month;
const dates = date.getDate();
const day = date.getDay();
const dayName = listDay[day];

function Header() {
  return (
    <div className="flex flex-row flex-wrap items-start justify-between sm:flex-nowrap md:items-center ">
      <h5 className="mb-6 mr-4 italic font-normal sm:mb-0 text-neutral-50">
        {dayName} {dates}/{formattedmonth}/{year}
      </h5>
      <Form method="get" action="/search" className="flex justify-end ml-auto">
        <TextField
          className="text-white"
          input={{
            id: "search",
            type: "text",
            placeholder: "Search...",
            name: "query",
          }}
        >
          <SearchIcon />
        </TextField>
      </Form>
    </div>
  );
}

export default Header;
