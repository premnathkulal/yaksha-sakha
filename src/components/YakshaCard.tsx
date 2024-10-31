import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const YakshaCard = () => {
  return (
    <div className="bg-gray-500 rounded-lg p-2 w-full mb-3">
      <p className="text-white text-lg font-pbold pb-1">Tarani Sena Kalaga</p>
      <p className="text-white text-xs font-pbold pb-3">
        Kateelu Shri Durga Parameshwari Dashavatara Yakshagana Mandali
      </p>

      <div className="flex flex-row w-full">
        <div className="flex-1 items-start">
          <p className="text-white text-xs font-pbold">
            Kateelu Shri Durga Parameshwari Dashavatarad Yakshagana Mandali
          </p>
        </div>
        <div className="flex-1 items-end">
          <div>
            <p className="text-white text-xs font-pbold text-right">
              23 March 2021
            </p>
            <p className="text-white text-xs font-pbold pb-2">
              06:30 PM - 09:30 PM
            </p>
          </div>
          <FontAwesomeIcon icon="route" color="orange" />
        </div>
      </div>
    </div>
  );
};

export default YakshaCard;
