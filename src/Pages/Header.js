import React from 'react'
import "../Styles/Header.css"
import Arrow from "../Assets/iconfinder_4733343_arrow_forward_ui_icon_512px.png"
import Chart from "./LineGraph"
import Grades from "./Grades"
import Data from "./GradesData"

function Header() {

    let GradesData = Data.map((item) => {
        return(
            <Grades key={item.id} Grade = {item.Grade} Subject = {item.Subject} color= {item.color} />
        )
    })

    return (
        <div>
        <div className="header">
          <div className="mainSec">
          <div className="avatar">
            <div className="container">
              <div className="ImageMargin">
            <img className="avatarImage" src="https://s3-alpha-sig.figma.com/img/c673/2fa1/bfdacef5f8b3f37fc0486e42f1cc91ab?Expires=1623628800&Signature=JXZTdBwxb8X5qjGdrkHhEpwpBlHeYwd0o5ymIm1v9s0WChnrZUE4sf5JaZi3uSChOpiDgyJzzS~QImKgwsKRHdNL7vIM9fok8r6diWCBmLXnL1NDe7s2NaM-USdknogsqnxLzXDv2HA0dcP4N-XTKTlVwRlIShP8hmS12PNats4buHmBy6PHKNKp6G1ngzruFbjcnzU6Dk-hMY~YqK1YAlVKlPuWfcmaF6ha52SrbWnPDsDU3lUj3v6CNhXXLrDeD21pKRl1RwTbRKhhSDFyvKHBrndP9pSNaFpn5HcrsOytme0CKKThhxG3teinquhks2NUtCMbX8q~Mjuo5kgOzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="avatar"/>
            </div>
            </div>
            <p className="name">Neha Verma</p>
            {/* <span> </span>  */}
            <span className="desc">I want to become a  </span> <a className="desc_link">Scientist</a>
          </div>
          <div className="idea">
            <img className="ideaImage" src="https://s3-alpha-sig.figma.com/img/6c38/1fc6/8843a11d68720cbb82fc9691cc7dd65a?Expires=1623628800&Signature=gpqr0B-r6GJ6Vs-2tl5lBa8WsBouf5-w-NoyTcWZdrANWqrKqL4baGmgsSk6W3~nOa0t6~ajCl-4YkfAukQF1i9rPsZ6BmgwrKUsN1~mJq3QF1g0KXJEjnjX4kcRJZSF48UwlNLNb49Onxtr3IncxqYHBzcDlsr34Ku8DBiPPid6gCxMTqKOKWbWf3Xgcoo-WtuSef~yH~~M0PmK~Vzmkl-pp~RnZoWLhMJpnVfqRbc7~jYJd8SWCjcLC52YEWbLXY-UJC2oihGK4BPxEHGwbcCuYkT3p0a8U~QnaMfajVrCuiz5TZNEnIXz7VRB2IX69uwlETxcKydTxgJjlTeQ~g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="idea"/>
          </div>
        </div>
        </div>
        <div className="gradeFrame">
            <div className="gridSec">
            <div className="firstGrid">
                <div className="gradeGrid">
                    <div className="firstCircle">
                        <div className="secondCircle">
                            <p className="gradeText">B</p>
                        </div>
                    </div>                
                </div>
            </div>
            <div className="gradePerc">
                <p className="perc">66.68%</p>
                <p className="grade">Overall Grade</p>
                <p className="gradeSec">Class Average B+</p>
            </div>
            <div className="nav">
                <div className="navBox"> 
                <img src={Arrow} alt="Arrow"/>              
                </div>
            </div>
        </div>
        <div className="perfm">
            <div className="perfmDetails">
                <div className="Academics">
                    <div className="AcademicsSec">
                    <div className="secDetails">
                        <p className="AcaSec">Academic Performace</p>
                        <p className="PerfmGrades">Class Average B+</p>
                    </div>
                    <div className="PerfmGrade">
                        <p className="GradeValue">B+</p>
                    </div>
                </div>
                </div>
                <div className="Activities">
                    <div className="AcademicsSec">
                        <div className="ActSecDetails">
                        <p className="AcaSec">Activity &#38; Conducts</p>
                        <p className="PerfmGrades">Class Average B+</p>
                        </div>
                        <div className="PerfmGrade">
                        <p className="GradeValue Add">c</p>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>

        </div>
        <div className="Charts">
            <div className="chartPerf">
                <div className="perfChart">
                    <p>Performance</p>
                </div>
                <div className="Month">
                    <div className="allMonths">
                    <div className="first active">
                        <p className="monthPerf">1M</p>
                    </div>
                    <div className="first">
                        <p className="monthPerf">6M</p>
                    </div>
                    <div className="first">
                        <p className="monthPerf">1Y</p>
                    </div>
                    <div className="first">
                        <p className="monthPerf">ALL</p>
                    </div>
                    </div>
                </div>
            </div>
            
        <Chart/>
        <div className="chartSec">
            <div className="ChartDetails">
                <div className="MyPerf">
                    <div className="dotYellow"></div>
                    <p>My Performance</p>
                </div>
                <div className="MyPerf">
                    <div className="dotblue"></div>
                    <p>Class Average</p>
                </div>
                <div className="MyPerf">
                    <span>
                        Advanced <img className="ChartArrow" src={Arrow} alt="arrow"/>
                    </span>
                </div>
            </div>
        </div>
        <div className="MainGrades">
            <div className="GradedSecDetails">
            {GradesData}
            </div>
        </div>
        </div>

        </div>
    )
}

export default Header
