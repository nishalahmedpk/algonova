import { useEffect, useState } from 'react'
import ActivityModal from './ActivityModal'

// Static dummy data (with timestamps already inside)
const dummyData = [
  {
    title: "Restocked Paracetamol",
    details: "Agent 42 restocked 100 units of Paracetamol 500mg at Deira Pharmacy.",
    timestamp: "09:10 AM"
  },
  {
    title: "Redistribution Order Sent",
    details: "Ibuprofen stock from Sharjah DC redirected to Al Barsha due to spike in demand.",
    timestamp: "09:30 AM"
  },
  {
    title: "Low Inventory Alert",
    details: "Cetirizine 10mg has fallen below reorder threshold at Karama Clinic.",
    timestamp: "09:50 AM"
  },
  {
    title: "Auto-order Executed",
    details: "Automated system placed reorder for Amoxicillin from PharmaPlus.",
    timestamp: "10:15 AM"
  },
  {
    title: "New Flu Spike Detected",
    details: "AI flagged a flu outbreak in Ajman; supplies adjusted accordingly.",
    timestamp: "10:35 AM"
  }
]

// Fetch data from API
const fetchActivities = async () => {
  console.log("Fetching activities...");
  try {
    return dummyData; // Simulate API call
  } catch (error) {
    console.error("Error fetching activities:", error);
    return dummyData;
  }
};

export default function AgentActivityList() {
  const [activities, setActivities] = useState([])
  const [selectedActivity, setSelectedActivity] = useState(null)

  useEffect(() => {
    const addNextActivity = async () => {
      const activity = await fetchActivities();
      setActivities(activity); // Add to the top
    };
  
    addNextActivity(); // Initial call
    const interval = setInterval(addNextActivity, 20000);
  
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4  px-2">Agent Activity Log</h2>
      <div className="h-[20vh] w-full overflow-y-auto p-2 space-y-3">
        {activities.map((activity, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedActivity(activity)}
            className="bg-white w-full rounded-md shadow-sm p-2 flex justify-between items-center cursor-pointer hover:shadow-md transition"
          >
            <div>
              <p className="text-gray-800 text-sm md:text-base font-medium italic">{activity.title}</p>
              {/* <p className="text-gray-600 text-xs md:text-sm truncate">
                {activity.details.length > 50
                  ? `${activity.details.substring(0, 50)}...`
                  : activity.details}
              </p> */}
            </div>
            <p className="text-gray-500 text-xs md:text-sm">{activity.timestamp}</p>
          </div>
        ))}

        {selectedActivity && (
          <ActivityModal
            activity={selectedActivity}
            onClose={() => setSelectedActivity(null)}
          />
        )}
      </div>
    </div>
  )
}
