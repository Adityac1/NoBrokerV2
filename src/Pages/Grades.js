import React from 'react'
import "./Grades.css"

function Grades(props) {
    return (
            <div style={{backgroundColor:"styles.props.color"}} className="GradedSec">
                <div className="containers">
                    <p className="GradeValues" style={{backgroundColor:"props.color"}}>{props.Grade}</p>
                </div>
                <p className="Subject">{props.Subject}</p>
            </div>
    )
}

export default Grades

