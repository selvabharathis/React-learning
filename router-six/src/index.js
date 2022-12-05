import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation
} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      {/*<Route path="/" element={<p>Test</p>} />*/}
      <Route path="/" element={<Home />} />
      <Route path="/myapps" element={<Navigate replace to="/learn" />} />
      <Route path="learn" element={<Learn />}>
        <Route path='courses' element={<Courses />} >
          <Route path=":courseId" element={<CourseId />} />
        </Route>
        <Route path='bundles' element={<Bundles />} />
      </Route>
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  </Router>
);

function Home() {
  return (
    <div>
      <h1>Home route</h1>
    </div>
  )
}

function Learn() {
  return (
    <div>
      <h1>Learn route</h1>
      <h4>All courses are listed here</h4>
      <Link to='/learn/courses'>Courses</Link> |
      <Link to='/learn/bundles'>Bundle</Link>
      <Outlet />
    </div>
  )
}

function Courses() {
  const courseList = ['React', 'Angular', 'View', 'Nodejs']
  const randomCourseName = courseList[Math.floor(Math.random() * courseList.length)]
  return (
    <div>
      <h1>courses route</h1>
      <p>More test</p>
      <NavLink
        style={(isActive) => {
          return {
            backgroundColor: isActive ? "pink" : "yellow"
          }
        }}
        to={`/learn/courses/${randomCourseName}`}>{randomCourseName}</NavLink>
      <NavLink to={`/learn/courses/test`}>test</NavLink>
      <Outlet />
    </div>
  )
}

function Bundles() {
  return (
    <div>
      <h1>bundles route</h1>
    </div>
  )
}

function CourseId() {
  const { courseId } = useParams();
  const navigate = useNavigate()
  return (
    <div>
      <h1>URL Param is: {courseId}</h1>
      <button
        onClick={() => {
          navigate("/dashboard", { state: courseId })
        }}
      >Price</button>
      <Link to='/dashboard' state={"DJANGO"}>Test link</Link>
    </div>
  )
}

function Dashboard() {
  const location = useLocation()
  return (
    <div>
      <h1>dashboard route</h1>
      <h1>info that i got here is {location.state}</h1>
    </div>
  )
}


