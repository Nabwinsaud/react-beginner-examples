import React from "react";
interface IProps {
  title: string;
  children?: React.ReactNode;
}
export const Accordion = ({ title, children }: IProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col rounded-md my-1 text-white py-2 bg-slate-800 shadow-md w-[300px] items-center">
      <div
        onClick={() => setOpen(!open)}
        className="flex hover:cursor-pointer w-full  justify-between px-2 border-b  items-center"
      >
        <span className="text-md font-bold capitalize text-slate-200">
          {title}
        </span>
        <span className="hover:cursor-pointer text-md">
          {open ? "close" : "open"}
        </span>
      </div>
      <div className="w-full flex items-start px-2 py-1">
        {open && <p className="text-slate-300">{children}</p>}
      </div>
    </div>
  );
};

export default function AccordionComponent() {
  return (
    <>
      <Accordion title="What is python">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique
        dignissim sapien non malesuada. Morbi ut magna eu ante finibus malesuada
        ac in risus.
      </Accordion>
      <Accordion title="what is react js">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique
        dignissim sapien non malesuada. Morbi ut magna eu ante finibus malesuada
        ac in risus.
      </Accordion>
    </>
  );
}
