/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const Tabs = ({ tabList, activeTab, onChange }) => {
  const getActiveStyles = (value) =>
    activeTab === value
      ? "text-primary scale:105 font-bold"
      : "text-secondary bg-transparent ";

  return (
    <div className="flex items-center justify-center my-5 lg:my-10">
      <div className="w-full md:w-[400px] h-8 flex justify-evenly bg-lightpink rounded-full ">
        {tabList.map((tab) => (
          <motion.button
            key={tab.id}
            initial={{opacity: 0.8, scale: 1}}
            animate={{
                opacity: activeTab === tab.value ? 1 : 0.8,
                scale: activeTab === tab.value ? 1.05 : 1,
            }}
            transition={{duration: 0.2}}
            className={`text-xs md:text-[15px] ${getActiveStyles(tab.value)} 
            rounded-full `}
            onClick={() => onChange(tab.value)}
            >
              {tab.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
