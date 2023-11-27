import jeremy from "../images/image-jeremy.png";

function Profile() {
  return (
    <div className="sm:w-[200px] xs:w-full sm:h-[422px] xs:h-[120px] bg-[--dark-blue] overflow-hidden  rounded-lg  xs:pb-3 ">
      <div className="h-[65%] bg-[--blue] rounded-lg flex xs:flex-row  sm:flex-col items-start sm:justify-around p-5 text-center xs:gap-3 ">
        <div className="sm:w-[60px] xs:w-[40px] sm:h-[60px] xs:h-[40px] rounded-full border-[3px] border-white ">
          <img src={jeremy} alt="/" className="w-full h-full rounded-full" />
        </div>
        <div className="text-left">
          <p className="text-[--pale-blue] text-xs ">Report for</p>
          <div className="flex xs:flex-row sm:flex-col ">
            <h1 className="sm:text-3xl text-[white] ">Jeremy</h1>
            <h1 className="sm:text-3xl text-[white]">Robson</h1>
          </div>
        </div>
      </div>
      <div className="flex xs:flex-row sm:flex-col justify-between h-[35%] p-4 ">
        <p className="text-[--pale-blue]">Daily</p>
        <p className="text-[white]">Weekly</p>
        <p className="text-[--pale-blue]">Monthly</p>
      </div>
    </div>
  );
}

export default Profile;
