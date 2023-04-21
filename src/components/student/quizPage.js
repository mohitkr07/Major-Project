import React from "react";
import styles from "./QuizComp.module.css";
import QuizComp from "./cards/quizComp";
import Option from "./cards/option";
import QueMap from "./cards/queMap";
let QuizPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.nav}>
          <span>Quiz</span>
        </div>

        <div class={styles.Panel}>
          <div className={styles.quizPanel}>
            <div className={styles.quizFrame}>
              <QuizComp
                quesNo="1"
                quesStatement="What is the velocity of car?"
              />
              <Option option="3 m/s" />
              <Option option="4 m/s" />
              <Option option="5 m/s" />
              <Option option="6 m/s" />
            </div>

            <div className={styles.quesControl}>
              <button className={styles.prevQues}>{"<< Previous"}</button>
              <button className={styles.nextQues}>{"Next >>"}</button>
            </div>
          </div>
          <div class={styles.sidePanel}>
            <div className={styles.mapBox}>
              <QueMap que="1" />
              <QueMap que="1" />
              <QueMap que="1" />
              <QueMap que="1" />
              <QueMap que="1" />
              <QueMap que="1" />
              <QueMap que="1" />
              <QueMap que="1" />
              <QueMap que="1" />
              <QueMap que="1" />
              <QueMap que="1" />
              <QueMap que="1" />
              <QueMap que="1" />
              <QueMap que="1" />
              <QueMap que="1" />
            </div>
            <div>
              <button className={styles.submitQuiz}>Submit Quiz</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizPage;
