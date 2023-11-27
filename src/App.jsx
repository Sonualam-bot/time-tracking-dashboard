import "./App.css";
import Profile from "./component/Profile";
import TimeTracker from "./component/TimeTracker";

function App() {
  return (
    <>
      <div className="sm:w-full sm:h-screen  bg-[--very-dark-blue] flex xs:flex-col sm:flex-row xs:items-center xs:justify-start sm:items-center sm:justify-center gap-5 xs:p-4 ">
        <Profile />
        <TimeTracker />
      </div>
    </>
  );
}

export default App;
