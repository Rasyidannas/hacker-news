import TextField from "../UI/TextField";
import SearchIcon from "../Icons/Search";

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
      <TextField
        className="text-white"
        input={{
          id: "search",
          type: "text",
          placeholder: "Search...",
        }}
      >
        <SearchIcon />
      </TextField>
    </div>
  );
}

export default Header;
