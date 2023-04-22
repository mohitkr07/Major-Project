import React, { useEffect, useState } from "react";
import styles from "./QuizComp.module.css";
import QuizComp from "./cards/quizComp";
import Option from "./cards/option";
import QueMap from "./cards/queMap";
let QuizPage = () => {
  const [data,setData] = useState([]);
  var [index,setIndex] = useState(0);

  const url = window.location.search.split('=')[1]

    useEffect(()=>{
      fetchData()
    },[])

  const fetchData = async()=>{

    const res = await fetch(`http://localhost:5000/getQuizInfo/${url}`,{
      method:'get',
      credentials: 'include',
      headers:{
        "Content-Type": "application/json"
      }
    })

    const datajson = await res.json()
    setData(datajson.questions)
    console.log(datajson.questions)
  }

  function handelClick(e){
    console.log('clicked')
    if(e.target.name=='next' && index<data.length-1) setIndex(index+1)
    if(e.target.name=='prev'&& index>0) setIndex(index-1)

  }

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
                quesNo={data.length?data[index].questionId:0}
                quesStatement={data.length?data[index].question:'Loading...'}
              />
              {
                data.length?
                data[index].options.map((a)=><Option key={a._id} option={a.option}></Option>):'loading...'
              }
            </div>

            <div className={styles.quesControl}>
              <button className={styles.prevQues} name="prev" onClick={handelClick}>{"<< Previous"}</button>
              <button className={styles.nextQues} name="next" onClick={handelClick}>{"Next >>"}</button>
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
