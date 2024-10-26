export default function Home() {
  return (
    <>
    <div className="flex justify-center flex-col gap-4 text-white items-center h-[44vh]">
      <div className="font-bold text-5xl flex gap-3 justify-center items-center">Buy Me a Lassi <span> <img src="/soda.png" className="h-12 filter invert" alt="" /> </span> </div>
      <p>
        A crowdfunding platform for creators. Get funded by your fans and followers. Start now!
      </p>
      <div>
      <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here!</button>
      <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
      </div>
    </div>

    <div className="bg-white h-[1px] opacity-80"></div>

    <div className="text-white container mx-auto py-24">
      <h2 className="text-3xl font-bold text-center mb-14">Your Fans buy you a Lassi</h2>
      <div className="flex gap-5 justify-around">
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img src="/man.gif" className="bg-slate-600 rounded-full p-3" width={88} alt="" />
          <p className="font-bold">Fund Yourself</p>
          <p className="text-center">Your fans are available for you to help you</p>
        </div>
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img src="/coin.gif" className="bg-slate-600 rounded-full p-3" width={88} alt="" />
          <p className="font-bold">Fund Yourself</p>
          <p className="text-center">Your fans are available for you to help you</p>
        </div>
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img src="/group.gif" className="bg-slate-600 rounded-full p-3" width={88} alt="" />
          <p className="font-bold">Fans want to help</p>
          <p className="text-center">Your fans are available for you to help you</p></div>
      </div>
    </div>


    <div className="bg-white h-[1px] opacity-80"></div>

    <div className="text-white container mx-auto py-24 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center mb-14">Learn More About us</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/tVzUXW6siu0?si=m_rVqfEk8UdTt8BU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
    </>
  );
}
