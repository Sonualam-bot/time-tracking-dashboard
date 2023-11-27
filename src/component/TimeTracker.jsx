import exercise from "../images/icon-exercise.svg";
import ellipsis from "../images/icon-ellipsis.svg";
import play from "../images/icon-play.svg";
import selfCare from "../images/icon-self-care.svg";
import social from "../images/icon-social.svg";
import study from "../images/icon-study.svg";
import work from "../images/icon-work.svg";

function TimeTracker() {
  return (
    <div className="grid sm:w-[650px] xs:w-full gap-4 sm:grid-cols-3 xs:grid-cols-1 xs:grid-rows-none  sm:grid-rows-2 justify-center items-center gap-x-0.5 gap-y-5  ">
      {/* work starts here */}
      <div className="sm:w-[200px] xs:w-full sm:h-[200px] xs:h-[120px] rounded-xl shadow-lg bg-[--light-red-work] flex flex-col  ">
        <div className="h-[35px] w-full  overflow-hidden relative ">
          <img
            src={work}
            alt="/"
            className="w-inherit sm:h-[50px] xs:h-[40px] justify-end  px-3 absolute -top-1 right-1 object-cover "
          />
        </div>
        <div className="rounded-2xl rounded-b-lg overflow-hidden basis-11/12  bg-[--dark-blue]  flex flex-col p-5 text-[white]  sm:gap-5 ">
          <div className="flex justify-between ">
            <p className="text-[18px] ">Work</p>
            <img src={ellipsis} alt="/" className="object-contain" />
          </div>
          <div className="  flex xs:flex-row sm:flex-col justify-between sm:items-start xs:items-center gap-1">
            <div>
              <h3 className="sm:text-5xl xs:text-2xl ">32hrs</h3>
            </div>
            <div className="text-[--pale-blue]">
              <p className="text-xs ">Last Week - 36hrs </p>
            </div>
          </div>
        </div>
      </div>
      {/* work ends here  */}
      {/* play starts here  */}
      <div className="sm:w-[200px] xs:w-full sm:h-[200px] xs:h-[120px]  rounded-xl shadow-lg bg-[--soft-blue-play] flex flex-col ">
        <div className="h-[35px] w-full  overflow-hidden relative ">
          <img
            src={play}
            alt="/"
            className="w-inherit sm:h-[55px] xs:h-[40px] justify-end  px-3 absolute -top-1 right-1 object-cover "
          />
        </div>
        <div className="rounded-lg overflow-hidden  bg-[--dark-blue] basis-11/12  flex flex-col p-5 text-[white]  sm:gap-5 ">
          <div className="flex justify-between ">
            <p className="text-[18px] ">Play</p>
            <img src={ellipsis} alt="/" className="object-contain" />
          </div>
          <div className="  flex xs:flex-row sm:flex-col justify-between sm:items-start xs:items-center gap-1">
            <div>
              <h3 className="sm:text-5xl xs:text-2xl">10hrs</h3>
            </div>
            <div className="text-[--pale-blue]">
              <p className="text-xs ">Last Week - 8hrs </p>
            </div>
          </div>
        </div>
      </div>
      {/* play ends here  */}
      {/* study starts here  */}
      <div className="sm:w-[200px] xs:w-full sm:h-[200px] xs:h-[120px] rounded-xl shadow-lg bg-[--light-red-study] flex flex-col  ">
        <div className="h-[35px] w-full  overflow-hidden relative ">
          <img
            src={study}
            alt="/"
            className="w-inherit sm:h-[55px] xs:h-[40px] justify-end  px-3 absolute -top-1 right-1 object-cover "
          />
        </div>
        <div className="rounded-lg overflow-hidden  bg-[--dark-blue] basis-11/12 flex flex-col p-5 text-[white]  sm:gap-5 ">
          <div className="flex justify-between ">
            <p className="text-[18px] ">Study</p>
            <img src={ellipsis} alt="/" className="object-contain" />
          </div>
          <div className="  flex xs:flex-row sm:flex-col justify-between sm:items-start xs:items-center gap-1">
            <div>
              <h3 className="sm:text-5xl xs:text-2xl ">4hrs</h3>
            </div>
            <div className="text-[--pale-blue]">
              <p className="text-xs ">Last Week - 7hrs </p>
            </div>
          </div>
        </div>
      </div>
      {/* study ends  here  */}
      {/* exercise starts  here  */}
      <div className="sm:w-[200px] xs:w-full sm:h-[200px] xs:h-[120px] rounded-xl shadow-lg bg-[--lime-green-exercise] flex flex-col  ">
        <div className="h-[35px] w-full  overflow-hidden relative ">
          <img
            src={exercise}
            alt="/"
            className="w-inherit sm:h-[50px] xs:h-[40px] justify-end  px-3 absolute -top-1 right-1 object-cover "
          />
        </div>
        <div className="rounded-lg overflow-hidden bg-[--dark-blue] basis-11/12 flex flex-col p-5 text-[white]  sm:gap-5 ">
          <div className="flex justify-between ">
            <p className="text-[18px] ">Exercise</p>
            <img src={ellipsis} alt="/" className="object-contain" />
          </div>
          <div className="  flex xs:flex-row sm:flex-col justify-between sm:items-start xs:items-center gap-1">
            <div>
              <h3 className="sm:text-5xl xs:text-2xl ">4hrs</h3>
            </div>
            <div className="text-[--pale-blue]">
              <p className="text-xs ">Last Week - 5hrs </p>
            </div>
          </div>
        </div>
      </div>
      {/* exercise ends  here  */}
      {/* social starts  here  */}
      <div className="sm:w-[200px] xs:w-full sm:h-[200px] xs:h-[120px] rounded-xl shadow-lg bg-[--violet-social] flex flex-col  ">
        <div className="h-[35px] w-full  overflow-hidden relative ">
          <img
            src={social}
            alt="/"
            className="w-inherit sm:h-[50px] xs:h-[40px] justify-end  px-3 absolute -top-1 right-1 object-cover "
          />
        </div>
        <div className="rounded-lg rounded-b-lg bg-[--dark-blue] basis-11/12 flex flex-col p-5 text-[white]  sm:gap-5 ">
          <div className="flex justify-between ">
            <p className="text-[18px] ">Social</p>
            <img src={ellipsis} alt="/" className="object-contain" />
          </div>
          <div className="  flex xs:flex-row sm:flex-col justify-between sm:items-start xs:items-center gap-1">
            <div>
              <h3 className="sm:text-5xl xs:text-2xl ">5hrs</h3>
            </div>
            <div className="text-[--pale-blue]">
              <p className="text-xs ">Last Week - 10hrs </p>
            </div>
          </div>
        </div>
      </div>
      {/* social ends  here  */}
      {/* self care starts  here  */}
      <div className="sm:w-[200px] xs:w-full sm:h-[200px] xs:h-[120px] rounded-xl shadow-lg bg-[--soft-orange-self-care] flex flex-col  ">
        <div className="h-[35px] w-full  overflow-hidden relative ">
          <img
            src={selfCare}
            alt="/"
            className="w-inherit sm:h-[50px] xs:h-[40px] justify-end  px-3 absolute -top-1 right-1 object-cover "
          />
        </div>
        <div className="rounded-lg rounded-b-lg  bg-[--dark-blue] basis-11/12 flex flex-col p-5 text-[white]  sm:gap-5 ">
          <div className="flex justify-between ">
            <p className="text-[18px] ">Self Care</p>
            <img src={ellipsis} alt="/" className="object-contain" />
          </div>
          <div className="  flex xs:flex-row sm:flex-col justify-between sm:items-start xs:items-center gap-1">
            <div>
              <h3 className="sm:text-5xl xs:text-2xl ">2hrs</h3>
            </div>
            <div className="text-[--pale-blue]">
              <p className="text-xs ">Last Week - 2hrs </p>
            </div>
          </div>
        </div>
      </div>
      {/* self care ends  here  */}
    </div>
  );
}

export default TimeTracker;
