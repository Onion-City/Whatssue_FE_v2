// "use client"; //set으로 만들고 해당을 제거

// import moment from "moment";
// import { Dispatch, ReactElement, SetStateAction, useEffect, useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css"; // css import
// // import "./PeriodCalendar.css";

// export interface PeriodCalendarProps {
// //   fetchData: (date: Date) => void;
//   setCalendarOpen: Dispatch<SetStateAction<boolean>>;
//   setTmpPeriod: Dispatch<SetStateAction<{
//     startDate: string;
//     endDate: string;
//   }>>
// }

// export function PeriodCalendar({
//   setCalendarOpen,
//   setTmpPeriod,
// }: PeriodCalendarProps) {
//   const [mark, setMark] = useState([]);

//   const currDate: Date = new Date();


//   const handleDateChange = (selectedDate: any) => {
//     const startDateFormat = moment(selectedDate[0]).format("YYYY년 MM월 DD일");
//     const endDateFormat = moment(selectedDate[1]).format("YYYY년 MM월 DD일");

//     setTmpPeriod({
//         startDate: startDateFormat,
//         endDate: endDateFormat
//     });
//     setCalendarOpen(false);
//   };

//   const handleDate = (e: React.MouseEvent<HTMLButtonElement>): void => {
//     // setMarkedDate([]);
//     // findMonthSchdule(e.currentTarget.id);
//   };

// //   const handleMonthChange = (e: any): void => {
// //     setMarkedDate([]);
// //     onChange(e.activeStartDate);
// //     setNowDate(moment(e.activeStartDate).format("YYYY년 MM월 DD일"));
// //     setNowMonth(e.activeStartDate);
// //     fetchData(e.activeStartDate);
// //   };

//   useEffect(() => {
//     if (mark?.length > 0) {
//       console.log(mark);
//     }
//   }, [mark]);

//   return (
//     <Calendar
//       onChange={handleDateChange}
//       selectRange={true}
//       formatDay={(locale: string | undefined, date: Date) =>
//         moment(date).format("D")
//       }
//       // nextLabel={<NextIcon handleDate={handleDate} />}
//       // prevLabel={<PreviousIcon handleDate={handleDate} />}
//       next2Label={null}
//       prev2Label={null}
//       tileContent={({ date, view }) => {
//         const html: ReactElement[] = [];
//         if (mark?.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
//           html.push(<div className="dot"></div>);
//         }
//         return (
//           <>
//             <div className="flex justify-center items-center absoluteDiv">
//               {html}
//             </div>
//           </>
//         );
//       }}
//     ></Calendar>
//   );
// }
