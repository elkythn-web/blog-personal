
const Diff = () => {
  return (
    <div className="diff h-[240px] w-[480px] border rounded-xl ">
      <div className="diff-item-1">
        <div className="bg-[#000000] text-9xl text-[#3F0071] grid place-content-center">
          DAISY
        </div>
      </div>
      <div className="diff-item-2">
        <div className="bg-white text-9xl text-[#FB2576] grid place-content-center">
          DAISY
        </div>
      </div>
      <div className="diff-resizer"></div>
    </div>
  )
}

export default Diff