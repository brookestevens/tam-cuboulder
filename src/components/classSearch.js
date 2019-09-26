import React, { useState, useEffect } from "react";


function ClassSearch(){
    const [classes, setClasses] = useState([]);
    const [classDetail, setClassDetails] = useState(null);
    const [toggle, setToggle] = useState(false);
    const [classID, setClassID] = useState(""); //search string
    const [results, setResults] = useState([]);

    useEffect(()=>{ //cache this??
        fetch('/api/getAllCourses')
        .then(res => res.json())
        .then(res => setClasses([...classes, ...res.results]))
        .catch( err => console.log(err));
    }, []);

    //show the modal with the information
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

    //the modal itself
    function renderCourseDetails(){
        const styles = {
            position: 'fixed',
            zIndex: 1,
            top:'20%',
            backgroundColor: '#fefefe',
            marginRight: '15% auto',
            marginLeft: '15% auto',
            padding: '20px',
            border: '1px solid #888',
            width: '50%'
        };

        if(classDetail === null || toggle === false){
            return null;
        }
        else{
            return(
                <div className = "details-modal" style={styles}>
                    <h3> {classDetail.name}</h3>
                    <p> Hours: {classDetail.hours} Dates: {classDetail.dates}</p>
                    <p> Instructor: {classDetail.prof}</p>
                    <p> {classDetail.description}</p>
                    <button onClick = {() => setToggle(false)}> Close </button>
                </div>
            );
        }
    }

    //craete array of classes that match the search
    //check for substring...
    //fix this! 

    function handleSearch(){
        for(let i = 0; i<classes.length; i++){
            // console.log(classID, classes[i].code, classes[i].title);
            if(classes[i].code === "ATLS " + classID || classes[i].title.toLowerCase() === classID.toLowerCase()){
                setResults([...results, classes[i]]); //set array of matching classes
            }
        }
    }

    if(classes.length === 0){
        return <p> Fetching classes ... </p>
    }
    else{
        return(
            <div className="search-page-filters">
                {/* the modal for class details */}
                {renderCourseDetails()}
                {/* List out all classes */}
                <input type = "text" value = {classID} placeholder = "Course Name or Number" onChange = {e => setClassID(e.target.value) } ></input>
                <button onClick = {()=> handleSearch()}> Search </button>
                <p> OR </p>
                <label> Sort by </label>
                <select>
                    <option>Less Than</option>
                    <option>Greater Than</option>
                    <option>Equal To</option>
                </select>
                {results.map(i=> (
                    <React.Fragment key={results.indexOf(i)}>
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