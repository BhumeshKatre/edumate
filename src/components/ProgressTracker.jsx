import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressTracker = () => {
  const percentage = 65;

  return (
    <div className="rounded-lg bg-white  shadow-md px-6 w-full  py-10 ">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-xl font-semibold">Progress Tracker</h2>
        <select className="border rounded px-2 py-1 text-sm">
          <option>This Week</option>
          <option>Last Week</option>
        </select>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Circular Progress */}
        <div className="p-5 ">
          <CircularProgressbar
            className='w-40 h-40 '
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textColor: '#6A5AE0',
              pathColor: '#6A5AE0',
              trailColor: '#eee',
              textSize: '18px',
            })}
          />
          <p className="text-center mt-2 text-sm text-gray-600">Overall Completion</p>
        </div>

        {/* Info Boxes */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-indigo-50 text-indigo-800 rounded-xl p-4 w-52">
            <p className="text-sm">Completed Tasks</p>
            <p className="text-xl font-bold">18/24</p>
          </div>
          <div className="bg-green-50 text-green-800 rounded-xl p-4 w-52">
            <p className="text-sm">Time Spent</p>
            <p className="text-xl font-bold">32 hours</p>
          </div>
          <div className="bg-purple-50 text-purple-800 rounded-xl p-4 w-52">
            <p className="text-sm">Notes Read</p>
            <p className="text-xl font-bold">45</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
