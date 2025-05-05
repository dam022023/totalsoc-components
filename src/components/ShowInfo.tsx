/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef } from "react";
import { Transition } from "react-transition-group";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

function ShowInfo({ info }: any) {
  const [showInfo, setShowInfo] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <div
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
      className="relative flex items-center justify-center cursor-pointer"
    >
      <InformationCircleIcon
        className="text-audibox-light-icons dark:text-audibox-dark-icons mr-2 bg-transparent shrink-0"
        style={{ height: "1.5rem" }}
      />
      <Transition in={showInfo} timeout={200} unmountOnExit nodeRef={nodeRef}>
  {(state) => (
    <div
      ref={nodeRef}
      className={`absolute z-10 p-2 bg-audibox-light-bg dark:bg-audibox-dark-bg text-audibox-light-darkFont dark:text-audibox-dark-clearFont text-sm rounded-lg shadow-md transition-opacity duration-200 ${
        state === "entered" ? "opacity-100" : "opacity-0"
      }`}
      style={{
        width: "350px",
        top: "0", // Alinea el tooltip con la parte superior del icono
        left: "-1000px", // Posiciona el tooltip completamente a la izquierda
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        borderTopLeftRadius: "0",
        borderTopRightRadius: "8px",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
      }}
    >
      <div className="relative">
        <div
          className="absolute top-1/2 right-0 w-5 h-5 bg-audibox-light-bg dark:bg-audibox-dark-bg transform rotate-45"
          style={{
            transform: "translateY(-50%) rotate(45deg)", // Flecha apuntando al icono
            marginRight: "-10px",
            zIndex: "-1",
          }}
        />
        <div className="p-2">{info}</div>
      </div>
    </div>
  )}
</Transition>
    </div>
  );
}

export default ShowInfo;
