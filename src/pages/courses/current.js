import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ArrowDown from "../../images/arrow-down-black.png";
import "../../styles/page.css"

function CourseTitle(props) {
    const [clicked, setClicked] = useState(false);
    const [classes, setClasses] = useState([]);
    function renderDetails() {
        if (classes.length > 0) {
            return (
                <div className="course-details">
                    <table className="details-table">
                    <tr>
                        <th>Lec/Rec</th>
                        <th>Instructor</th>
                        <th>Status</th>
                    </tr>
                    {classes.map(i => (
                        <tr>
                            <td> {i.schd} </td>
                            <td> {i.instr} </td>
                            <td> {i.stat} </td>
                        </tr>
                    ))}
                    </table>
                </div>
            );
        }
    }
    function handleClick(code, crn) {
        code = encodeURIComponent(code);
        fetch(`/api/getCourseDetails?courseID=${code}&crn=${crn}`)
            .then(res => res.json())
            .then(res => setClasses(res.allInGroup))
            .then(() => setClicked(!clicked))
            .catch(err => console.log(err));
    }

    return (
        <React.Fragment>
            <div className="course-title">
                <h3> {props.code} - {props.title} </h3>
                <img onClick={() => handleClick(props.code, props.crn)} src={ArrowDown} alt="show-more-arrow" width="25" />
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
                for (let i = 0; i < res.results.length; i++) {
                    if (res.results[i].schd === "REC") continue;
                    else {
                        temp.push(res.results[i]);
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
            {classes.map(i => (
                <div className="course-info">
                    <CourseTitle title={i.title} code={i.code} crn={i.crn} />
                </div>
            ))}
        </Layout>
    );
}

export default CurrentCoursesPage;