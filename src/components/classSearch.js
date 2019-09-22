import React, { useState, useEffect } from "react";


function ClassSearch(){
    const [classes, setClasses] = useState([]);
    const [classDetail, setClassDetails] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(()=>{
        fetch('/api/getAllCourses')
        .then(res => res.json())
        .then(res => setClasses(res.results))
        .catch( err => console.log(err));
    }, []);

    function handleClick(code, crn){
        console.log("Code: %s and CRN %s", code, crn);
        code = encodeURIComponent(code);
        fetch(`/api/getCourseDetails?courseID=${code}&crn=${crn}`)
        .then( res => res.json())
        .then( res => setClassDetails({
            name: res.title,
            prof: res.allInGroup[0].instr,
            description: res.description,
            hours: res.hours,
            dates: res.dates_html,
            campus: res.campus

        }))
        .then( () => setToggle(true) )
        .catch( err => console.log(err));
    }

    function renderCourseDetails(){
        if(classDetail === null || toggle === false){
            return null;
        }
        else{
            return(
                <div className = "details-modal">
                    <h3> {classDetail.name}</h3>
                    <p> Hours: {classDetail.hours} Dates: {classDetail.dates}</p>
                    <p> Instructor: {classDetail.prof}</p>
                    <p> {classDetail.description}</p>
                    <button onClick = {() => setToggle(false)}> Close </button>
                </div>
            );
        }
    }

    if(classes.length === 0){
        return <p> Fetching classes ... </p>
    }
    else{
        return(
            <div>
                {/* the modal for class details */}
                {renderCourseDetails()}
                {/* List out all classes */}
                {classes.map(i=> (
                    <React.Fragment key={classes.indexOf(i)}>
                        <h3> {i.code} : {i.title} </h3>
                        <p> {i.meets} </p>
                        <button onClick = { () => handleClick(i.code, i.crn) }> See More </button>
                    </React.Fragment>
                ))}
            </div>
        );
    }
}

export default ClassSearch;