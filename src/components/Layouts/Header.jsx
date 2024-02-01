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
    <div className="flex justify-between items-center ">
      <h5 className=" text-neutral-50 italic font-normal">
        {dayName} {dates}/{formattedmonth}/{year}
      </h5>
      <Form method="get" action="/search">
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
