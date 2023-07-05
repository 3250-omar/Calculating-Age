import { useState } from "react";
import "./App.css";
function App() {
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const data = new Date();
  let NowMonth = data.getMonth();
  let NowDay = data.getDay();
  let NowYear = data.getFullYear();
  let CalculateMonth = NowMonth + 1 - month;
  let CalculateYear = NowYear - year;
  let CalculateDay = NowDay + 2 - day;
  return (
    <div className="App">
      <h1 className="title">Calculate Your Age</h1>
      <div className="Container">
        <div className="HeaderContainer">
          <ul>
            <li className={day > 30 ? "error" : "Day"}>
              <label>DAY</label>
              <input
                type="number"
                placeholder="DD"
                onChange={(e) => setDay(e.target.value)}
              />
              {day === 0 && <p className="error"> This field is required</p>}
              {day > 30 && <p className="error"> Maximam day is 30</p>}
            </li>
            <li className={month > 12 ? "error" : "Month"}>
              <label>MONTH</label>
              <input
                type="number"
                placeholder="MM"
                onChange={(e) => setMonth(e.target.value)}
              />
              {month === 0 && <p className="error"> This field is required</p>}
              {month > 12 && <p className="error"> Maximam month is 12</p>}
            </li>
            <li className={year > NowYear ? "error" : "Year"}>
              <label>YEAR</label>
              <input
                type="number"
                placeholder="YYYY"
                onChange={(e) => setYear(e.target.value)}
              />
              {year === 0 && <p className="error"> This field is required</p>}
              {year > NowYear && <p className="error">Cant put next years</p>}
            </li>
          </ul>
        </div>
        <div className="CalculationArea">
          <h1>
            {(day <= 30) &
            (day !== 0) &
            (month <= 12) &
            (month !== 0) &
            (year <= NowYear) &
            (year !== 0) ? (
              <span>
                {CalculateMonth > 0
                  ? CalculateYear
                  : CalculateMonth < 0 && CalculateYear - 1}
              </span>
            ) : (
              <span>--</span>
            )}
            years
          </h1>
          <h1>
            {(day <= 30) &
            (day !== 0) &
            (month <= 12) &
            (month !== 0) &
            (year <= NowYear) &
            (year !== 0) ? (
              <span>
                {CalculateMonth < 0 || CalculateDay > 0
                  ? CalculateMonth + 12
                  : NowMonth - 1 - month}
              </span>
            ) : (
              <span>--</span>
            )}
            months
          </h1>
          <h1>
            {(day <= 30) &
            (day !== 0) &
            (month <= 12) &
            (month !== 0) &
            (year <= NowYear) &
            (year !== 0) ? (
              <span>{CalculateDay < 0 ? CalculateDay + 30 : CalculateDay}</span>
            ) : (
              <span>--</span>
            )}
            days
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
