const Accordion = ({ isOpen, accordionItems, handleClick }) => {
  return (
    <div className="flex flex-col gap-y-5 px-96 w-full">
      {accordionItems.map((item, i) => {
        const open = isOpen === item.id; // Check if the current item is open

        return (
          <div
            key={item.id}
            className={`border-2 mx-2 pl-4 px-2 py-3 rounded-md ${
              open ? "border-t-green-300" : "border-black"
            }`}
          >
            <div className="flex flex-row justify-between items-center">
              <div
                className={`flex flex-row gap-x-5 justify-start items-center text-lg ${
                  open ? "text-green-300" : ""
                }`}
              >
                <p>{i < 9 ? `0${i + 1}` : i + 1}</p>
                <p>{item.title}</p>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handleClick(item.id)}
              >
                <p className={open ? "text-3xl" : "text-xl"}>
                  {open ? "-" : "+"}
                </p>
              </div>
            </div>

            {open && (
              <div className="px-14">
                <p>{item.description}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Accordion;
