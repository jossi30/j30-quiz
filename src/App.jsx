import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "ኣብ ዓለም ዝበለጸ ተጻዋታይ ፊፋ ጌም መን አዩ",
      answers: [
        {
          text: "ዩኤል",
          correct: false,
        },
        {
          text: "ጆሲ",
          correct: true,
        },
        {
          text: "ሲራክ",
          correct: false,
        },
        {
          text: "ኩሎም ንፉዓት እዮም",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "ኣብ ወርሒ ንፈለማ ግዜ ዝሰጎመ ሰብ መን እዩ፧",
      answers: [
        {
          text: "ኒል ኣርምስትሮንግ",
          correct: true,
        },
        {
          text: "ባዝ ኣልድሪን",
          correct: false,
        },
        {
          text: "ማይክል ኮሊንስ",
          correct: false,
        },
        {
          text: "ዩሪ ጋጋሪን",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "ኣየነይቲ ኩባንያ እያ በ ኤክስ X ሎጎ እትፍለጥ?",
      answers: [
        {
          text: "ማይክሮሶፍት",
          correct: false,
        },
        {
          text: "IBM",
          correct: false,
        },
        {
          text: "ትዊተር",
          correct: true,
        },
        {
          text: "ኣፕል",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "ኣብ ማርቨል ሲነማቲክ ዩኒቨርስ፣  ቶኒ ስታርክ መን እዩ?",
      answers: [
        {
          text: "ኣይሮን ማን",
          correct: true,
        },
        {
          text: "ካፕቴን ኣመሪካ",
          correct: false,
        },
        {
          text: "ስፓይደር ማን",
          correct: false,
        },
        {
          text: "ሃልክ",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "ኣምፑል ዝመሃዛ መን እዮ?",
      answers: [
        {
          text: "ኣሌክሳንደር ግራሃም ቤል",
          correct: false,
        },
        {
          text: "ቶማስ ኤዲሰን",
          correct: true,
        },
        {
          text: "ኒኮላ ተስላ",
          correct: false,
        },
        {
          text: "ቤንጃሚን ፍራንክሊን",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "ኣየናይ ራፐር እዩ በታ ዘ ኮሌጅ ድሮፕኣውትዕ ዘርእስታ ኣልቡም ዝተፈልጠ?",
      answers: [
        {
          text: "ጀይ-ዚ",
          correct: false,
        },
        {
          text: "ናስ",
          correct: false,
        },
        {
          text: "ድሬክ",
          correct: false,
        },
        {
          text: "ካንየ ወስት",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "ስም እታ ብጀፍ በሶስ እተመስረተት ኩባንያ መን እዩ?",
      answers: [
        {
          text: "ማይክሮሶፍት",
          correct: false,
        },
        {
          text: "ፌስቡክ",
          correct: false,
        },
        {
          text: "ኣማዞን",
          correct: true,
        },
        {
          text: "ተስላ",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "ንሞና ሊሳ ዝሰኣላ መን እዩ?",
      answers: [
        {
          text: "ፓብሎ ፒካሶ",
          correct: false,
        },
        {
          text: "ቪንሰንት ቫን ጎግ",
          correct: false,
        },
        {
          text: "ሚካኤልኣንጀሎ",
          correct: false,
        },
        {
          text: "ሊዮናርዶ ዳ ቪንቺ",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "ኣብ ማርቨል ሲነማቲክ ዩኒቨርስ ፣ ብላክ ፓንተር መን ኢዩ ፧",
      answers: [
        {
          text: "ኢሪክ ኪልሞንገር",
          correct: false,
        },
        {
          text: "ቲ ቻላ",
          correct: true,
        },
        {
          text: "ሳም ዊልሰን",
          correct: false,
        },
        {
          text: "ባኪ ባርንስ",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "ኣቦ ኮምፕዩተራት ተባሂሉ ዚፍለጥ መን እዩ?",
      answers: [
        {
          text: "ስቲቭ ጆብስ",
          correct: false,
        },
        {
          text: "ቢል ጌትስ",
          correct: false,
        },
        {
          text: "ቻርለስ ባቤጅ",
          correct: true,
        },
        {
          text: "ኣለን ቱሪንግ",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "ላሪ ፐጅን ሰርገይ ብሪንን ዝመስረቱ ኣየነይቲ ኩባንያ እያ?",
      answers: [
        {
          text: "ኣማዞን",
          correct: false,
        },
        {
          text: "ጉግል",
          correct: false,
        },
        {
          text: "ፌስቡክ",
          correct: false,
        },
        {
          text: "ንቪዳ",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "ኣየነይቲ ራፐር እዩ በታ ት ፒምፕ ኤ ባተርፍላይ ዘርእስታ ኣልቡም ዝተፈልጠ?",
      answers: [
        {
          text: "ኢሚነም",
          correct: false,
        },
        {
          text: "ጃይ ዚ",
          correct: false,
        },
        {
          text: "ሪክ ሮስ",
          correct: false,
        },
        {
          text: "ከንድሪክ ለማር",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "ዮሃንስ ጉተንበርግ ብእንታይ ምህዞ እዩ ውሩይ ዝዀነ?",
      answers: [
        {
          text: "ሓታሚት ማኪና",
          correct: true,
        },
        {
          text: "ተሌፎን",
          correct: false,
        },
        {
          text: "ስቲም አንጂን",
          correct: false,
        },
        {
          text: "ረድዮ",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "ዓለምለኻዊ መርበብ ሓበሬታ ዝመሃዘ መን እዮ?",
      answers: [
        {
          text: "ስቲቭ ጆብስ",
          correct: false,
        },
        {
          text: "ቢል ጌትስ",
          correct: false,
        },
        {
          text: "ቲም በርናርት ሊ",
          correct: true,
        },
        {
          text: "ማርክ ዛክርበርግ",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "ኣብ ትሪክ ዝብልጸ ስፖርታዊ ተጻዋታይ መን እዩ?",
      answers: [
        {
          text: "ማይክል ጆርዳን",
          correct: true,
        },
        {
          text: "ክሪስትያኖ ሮናልዶ",
          correct: true,
        },
        {
          text: "ዩሴን ቦልት",
          correct: true,
        },
        {
          text: "ፍሎይድ ማይውዘር",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;