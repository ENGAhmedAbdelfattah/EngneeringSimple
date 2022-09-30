import React, { useState } from "react";

function Booking(props) {
  const { lang } = props;
  const timeItem = {
    one: new Date("2022-01-01T02:00:00Z"),
    two: new Date("2022-01-01T03:10:00Z"),
    three: new Date("2022-01-01T05:10:00Z"),
    four: new Date("2022-01-01T07:05:00Z"),
    five: new Date("2022-01-01T09:00:00Z"),
  };
  const [tableMainRow] = useState({
    en: [
      `${timeItem.one.getHours()}:${timeItem.one
        .getMinutes()
        .toString()
        .padStart(2, 0)}  to ${timeItem.one.getHours() + 1}:${timeItem.one
        .getMinutes()
        .toString()
        .padStart(2, 0)}`,
      `${timeItem.two.getHours()}:${timeItem.two
        .getMinutes()
        .toString()
        .padStart(2, 0)}  to ${timeItem.two.getHours() + 1}:${timeItem.two
        .getMinutes()
        .toString()
        .padStart(2, 0)}`,
      `${timeItem.three.getHours()}:${timeItem.three
        .getMinutes()
        .toString()
        .padStart(2, 0)}  to ${timeItem.three.getHours() + 1}:${timeItem.three
        .getMinutes()
        .toString()
        .padStart(2, 0)}`,
      `${timeItem.four.getHours()}:${timeItem.four
        .getMinutes()
        .toString()
        .padStart(2, 0)}  to ${timeItem.four.getHours() + 1}:${timeItem.four
        .getMinutes()
        .toString()
        .padStart(2, 0)}`,
      `${timeItem.five.getHours()}:${timeItem.five
        .getMinutes()
        .toString()
        .padStart(2, 0)}  to ${timeItem.five.getHours() + 1}:${timeItem.five
        .getMinutes()
        .toString()
        .padStart(2, 0)}`,
    ],
    ar: [
      `${timeItem.one.getHours()}:${timeItem.one
        .getMinutes()
        .toString()
        .padStart(2, 0)} إلي ${timeItem.one.getHours() + 1}:${timeItem.one
        .getMinutes()
        .toString()
        .padStart(2, 0)}`,
      `${timeItem.two.getHours()}:${timeItem.two
        .getMinutes()
        .toString()
        .padStart(2, 0)}  إلي ${timeItem.two.getHours() + 1}:${timeItem.two
        .getMinutes()
        .toString()
        .padStart(2, 0)}`,
      `${timeItem.three.getHours()}:${timeItem.three
        .getMinutes()
        .toString()
        .padStart(2, 0)}  إلي ${timeItem.three.getHours() + 1}:${timeItem.three
        .getMinutes()
        .toString()
        .padStart(2, 0)}`,
      `${timeItem.four.getHours()}:${timeItem.four
        .getMinutes()
        .toString()
        .padStart(2, 0)}  إلي ${timeItem.four.getHours() + 1}:${timeItem.four
        .getMinutes()
        .toString()
        .padStart(2, 0)}`,
      `${timeItem.five.getHours()}:${timeItem.five
        .getMinutes()
        .toString()
        .padStart(2, 0)}  إلي ${timeItem.five.getHours() + 1}:${timeItem.five
        .getMinutes()
        .toString()
        .padStart(2, 0)}`,
    ],
  });
  const [bookingText] = useState({
    mainHeader: { en: `Booking schedule`, ar: `جدول الحجز` },
    paragraph: {
      en: `Choose the time for your first lesson. The timings are displayed in your local timezone.`,
      ar: `اختر وقت الدرس الأول. يتم عرض التوقيتات حسب منطقتك بالتوقيت المحلي.`,
    },
    table: {
      caption: { en: `Booking now`, ar: `إحجز الآن` },
      tableMainColumn: {
        Saturday: {
          name: { en: "Saturday", ar: "السبت" },
          timings: {
            one: {
              value: tableMainRow[0],
              available: false,
            },
            two: {
              value: tableMainRow[1],
              available: true,
            },
            three: {
              value: tableMainRow[2],
              available: true,
            },
            four: {
              value: tableMainRow[3],
              available: true,
            },
            five: {
              value: tableMainRow[4],
              available: true,
            },
          },
        },
        Sunday: {
          name: { en: "Sunday", ar: "الأحد" },
          timings: {
            one: {
              value: tableMainRow[0],
              available: true,
            },
            two: {
              value: tableMainRow[1],
              available: true,
            },
            three: {
              value: tableMainRow[2],
              available: true,
            },
            four: {
              value: tableMainRow[3],
              available: true,
            },
            five: {
              value: tableMainRow[4],
              available: true,
            },
          },
        },
        Monday: {
          name: { en: "Monday", ar: "الاثنين" },
          timings: {
            one: {
              value: tableMainRow[0],
              available: true,
            },
            two: {
              value: tableMainRow[1],
              available: true,
            },
            three: {
              value: tableMainRow[2],
              available: true,
            },
            four: {
              value: tableMainRow[3],
              available: true,
            },
            five: {
              value: tableMainRow[4],
              available: true,
            },
          },
        },
        Tuesday: {
          name: { en: "Tuesday", ar: "الثلاثاء" },
          timings: {
            one: {
              value: tableMainRow[0],
              available: true,
            },
            two: {
              value: tableMainRow[1],
              available: true,
            },
            three: {
              value: tableMainRow[2],
              available: true,
            },
            four: {
              value: tableMainRow[3],
              available: true,
            },
            five: {
              value: tableMainRow[4],
              available: true,
            },
          },
        },
        Wednesday: {
          name: { en: "Wednesday", ar: "الأربعاء" },
          timings: {
            one: {
              value: tableMainRow[0],
              available: true,
            },
            two: {
              value: tableMainRow[1],
              available: true,
            },
            three: {
              value: tableMainRow[2],
              available: true,
            },
            four: {
              value: tableMainRow[3],
              available: true,
            },
            five: {
              value: tableMainRow[4],
              available: true,
            },
          },
        },
        Thursday: {
          name: { en: "Thursday", ar: "الخميس" },
          timings: {
            one: {
              value: tableMainRow[0],
              available: true,
            },
            two: {
              value: tableMainRow[1],
              available: true,
            },
            three: {
              value: tableMainRow[2],
              available: true,
            },
            four: {
              value: tableMainRow[3],
              available: true,
            },
            five: {
              value: tableMainRow[4],
              available: true,
            },
          },
        },
        Friday: {
          name: { en: "Friday", ar: "الجمعة" },
          timings: {
            one: {
              value: tableMainRow[0],
              available: true,
            },
            two: {
              value: tableMainRow[1],
              available: true,
            },
            three: {
              value: tableMainRow[2],
              available: true,
            },
            four: {
              value: tableMainRow[3],
              available: true,
            },
            five: {
              value: tableMainRow[4],
              available: true,
            },
          },
        },
      },
    },
    availableText: {
      available: {
        en: "available",
        ar: "متوفر",
      },
      notAvailable: {
        en: "not Available",
        ar: "غير متوفر",
      },
    },
    booking: {
      en: "booking now",
      ar: "احجز الآن",
    },
  });
  return (
    <div className="booking-page">
      <h2 className="schedule-header">
        {lang === "en" ? bookingText.mainHeader.en : bookingText.mainHeader.ar}
      </h2>
      <p className="schedule-paragraph">
        {lang === "en" ? bookingText.paragraph.en : bookingText.paragraph.ar}
      </p>

      <div className="booking-table">
        {Object.keys(bookingText.table.tableMainColumn).map((el, inx) => (
          <div key={inx + el} className="days-columns">
            <div className="cell cell-columns cell-days">
              {lang === "en"
                ? bookingText.table.tableMainColumn[el].name.en
                : bookingText.table.tableMainColumn[el].name.ar}
            </div>
            {Object.keys(bookingText.table.tableMainColumn[el].timings).map(
              (secEl, inx) =>
                bookingText.table.tableMainColumn[el].timings[secEl]
                  .available ? (
                  <div key={inx + secEl} className="cell cell-columns">
                    <div>
                      {lang === "en"
                        ? tableMainRow.en[inx]
                        : tableMainRow.ar[inx]}
                    </div>
                    <span>
                      {lang === "en"
                        ? bookingText.availableText.available.en
                        : bookingText.availableText.available.ar}
                    </span>
                    <button>
                      {lang === "en"
                        ? bookingText.booking.en
                        : bookingText.booking.ar}
                    </button>
                  </div>
                ) : (
                  <div key={inx + secEl} className="cell cell-columns">
                    <div>
                      {lang === "en"
                        ? tableMainRow.en[inx]
                        : tableMainRow.ar[inx]}
                    </div>
                    <span>
                      {lang === "en"
                        ? bookingText.availableText.notAvailable.en
                        : bookingText.availableText.notAvailable.ar}
                    </span>
                    <button disable="true">
                      {lang === "en"
                        ? bookingText.booking.en
                        : bookingText.booking.ar}
                    </button>
                  </div>
                )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Booking;

/* <table className="schedule-table">
        <caption>
          {lang === "en"
            ? bookingText.table.caption.en
            : bookingText.table.caption.ar}
        </caption>
        <thead>
          <tr>
            <th></th>
            {tableMainRow.map((el, inx) => <th key={inx + el}>{el}</th>)}
          </tr>
        </thead>
        <tbody>
          {lang === "en"
            ? Object.keys(bookingText.table.tableMainColumn.en).map(
              (el, inx) => (
                <tr key={inx + el}>
                  <td>{bookingText.table.tableMainColumn.en[el].name}</td>
                  {Object.keys(
                    bookingText.table.tableMainColumn.en[el].timings
                  ).map((secEl, inx) =>
                    bookingText.table.tableMainColumn.en[el].timings[secEl]
                      .available ? (
                      <>
                        <td>available</td>
                        <button>booking now</button>
                      </>
                    ) : (
                      <td disable>not available</td>
                    )
                  )}
                </tr>
              )
            )
            : Object.keys(bookingText.table.tableMainColumn.ar).map(
              (el, inx) => (
                <tr key={inx + el}>
                  <td>{bookingText.table.tableMainColumn.ar[el].name}</td>
                  {Object.keys(
                    bookingText.table.tableMainColumn.ar[el].timings
                  ).map((secEl, inx) =>
                    bookingText.table.tableMainColumn.ar[el].timings[secEl]
                      .available ? (
                      <>
                        <td>available</td>
                        <button>booking now</button>
                      </>
                    ) : (
                      <td disable>not available</td>
                    )
                  )}
                </tr>
              )
            )
          }
        </tbody>
      </table> */

/* <div className="timings">
          <div className="cell cell-timings"></div>
          {tableMainRow.map((el, inx) => (
            <div className="cell cell-timings" key={inx + el}>
              {el}
            </div>
          ))}
        </div> */
