// OutbreakList.jsx
import { useState, useEffect } from 'react';
import OutbreakModal from './OutbreakModal';

const dummyOutbreaks = [
  {
    id: 1,
    name: 'Flu Spike - Deira',
    description: 'A sharp increase in flu cases reported in Deira region.',
    date: '2025-04-20',
    points: [
      [25.276987, 55.296249, 0.8],
      [25.270000, 55.300000, 0.6],
      [25.280000, 55.310000, 1.0]
    ]
  },
  {
    id: 2,
    name: 'Allergy Alert - Bur Dubai',
    description: 'Pollen allergy cases rising sharply around Bur Dubai.',
    date: '2025-04-22',
    points: [
      [25.233000, 55.300000, 0.7],
      [25.230000, 55.295000, 0.5],
      [25.240000, 55.310000, 0.9]
    ]
  }
];

export default function OutbreakList() {
  const [outbreaks, setOutbreaks] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    // Simulate API fetch
    setOutbreaks(dummyOutbreaks);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Local Outbreak Trends</h2>
      <div className="h-[20vh] overflow-y-auto space-y-3 px-2">
        {outbreaks.map(o => (
          <div
            key={o.id}
            onClick={() => setSelected(o)}
            className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-md flex justify-between"
          >
            <div>
              <h3 className="font-semibold">{o.name}</h3>
              <p className="text-sm text-gray-600">{o.date}</p>
            </div>
            <p className="text-blue-600">View ⮞</p>
          </div>
        ))}
      </div>

      {selected && (
        <OutbreakModal
          outbreak={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
