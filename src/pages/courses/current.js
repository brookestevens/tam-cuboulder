import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ArrowDown from "../../images/arrow-down-black.png";
import "../../styles/page.css"

function CourseTitle(props) {
    const [clicked, setClicked] = useState(false);
    const [classes, setClasses] = useState([]);
    function renderDetails() {
        return (
            <div className="course-details">
                <table className="details-table">
                <tbody>
                    <tr>
                        <th>Lec/Rec</th>
                        <th>Instructor</th>
                        <th>Meeting Times </th>
                        <th>Section </th>
                        <th>Status</th>
                    </tr>
                    {classes.map(i => (
                        <tr>
                            <td> {i.schd} </td>
                            <td> {i.instr} </td>
                            <td> {i.meets} </td>
                            <td> {i.no} </td>
                            <td> {i.stat} </td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
        );
    }
    function handleClick(code, crn) {
        code = encodeURIComponent(code);
        if(!clicked){
            fetch(`/api/getCourseDetails?courseID=${code}&crn=${crn}`)
                .then(res => res.json())
                .then(res => setClasses(res.allInGroup))
                .then(() => setClicked(!clicked))
                .catch(err => console.log(err));
        }
        else{
            setClicked(!clicked);
        }
    }

    return (
        <React.Fragment>
            <div className="course-title">
                <h3> {props.code} - {props.title} </h3>
                <img onClick={() => handleClick(props.code, props.crn)} src={ArrowDown} alt="show-more-arrow" width="25" height="25" />
            </div>
            {clicked ? renderDetails() : null}
        </React.Fragment>

    );
}

function CurrentCoursesPage() {
    const [classes, setClasses] = useState([]);

    useEffect(() => { //cache this??
        fetch('/api/getAllCourses')
            .then(res => res.json())
            .then(res => {
                let temp = [];
                let prevName = res.results[0].title;
                for (let i = 0; i < res.results.length; i++) {
                    if (prevName === res.results[i].title) continue;
                    else {
                        temp.push(res.results[i]);
                        prevName = res.results[i].title;
                    }
                }
                return temp;
            })
            .then(sorted => setClasses([...classes, ...sorted]))
            .catch(err => console.log(err));
    }, []);
    return (
        <Layout link="Courses">
            <SEO title="Current Courses" />
            <h2>Current Courses</h2>
            { classes.length === 0 ? <p> Courses Loading ... please wait </p> : classes.map(i => (
                <div className="course-info">
                    <CourseTitle title={i.title} code={i.code} crn={i.crn} />
                </div>
            ))}
        </Layout>
    );
}

export default CurrentCoursesPage;