import Image from 'next/image'
import { AiFillNotification } from 'react-icons/ai'


export default function Dashboard() {
  return (
    <div className="px-10 py-10">
      <div className="underline-offset-4 text-sky-700 hover:text-blue-600 font-semibold text-xl">
        Dashboard
      </div>
      <div className="bg-white shadow flex flex-row mt-10 p-5">
        <div>
          <div className="underline-offset-4 text-sky-700 hover:text-blue-600 font-medium">Overdue tasks</div>
          <ul role="notifcations" className="divide-y divide-gray-100 mt-3">
            <li className="flex justify-between gap-x-6 py-2 cursor-pointer">
              <div className="flex gap-x-4">
                <AiFillNotification className="bg-orange-100 h-10 w-10 flex-none rounded-full" />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">Mrs.ABC has onboarded</p>
                  <p className="mt-1 truncate text-xs leading-5 text-red-400">Status: Pending Assignment</p>
                </div>
              </div>
            </li>
            <li className="flex justify-between gap-x-6 py-2 cursor-pointer">
              <div className="flex gap-x-4">
                <AiFillNotification className="bg-amber-300 h-10 w-10 flex-none rounded-full" />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">Mr. XYZ has completed skill-XXX</p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">Status: Pending Approval</p>
                </div>
              </div>
            </li>
            <li className="flex justify-between gap-x-6 py-2 cursor-pointer">
              <div className="flex gap-x-4">
                <AiFillNotification className="bg-amber-300 h-10 w-10 flex-none rounded-full" />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">Mr. SSS has completed skill-XXX</p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">Status: Pending Approval</p>
                </div>
              </div>
            </li>
            <li className="flex justify-between gap-x-6 py-2 cursor-pointer">
              <div className="flex gap-x-4">
                <AiFillNotification className="bg-green-300 h-10 w-10 flex-none rounded-full" />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">Ms. RRR has completed skill-XXX</p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">Status: Approved</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="ml-40">
          <div className="underline-offset-4 text-sky-700 hover:text-blue-600 font-medium">Analytical Data</div>
          <table className="bg-white shadow table-fixed mt-7 border-separate border-spacing-5 border">
            <tbody>
              <tr className="cursor-pointer">
                <td className="font-semibold text-3xl text-yellow-300">30+</td>
                <td>New Joiners</td>
                <td className="font-semibold text-3xl text-green-500">10</td>
                <td>Onboarding done</td>
              </tr>
              <tr className="cursor-pointer">
                <td className="font-semibold text-3xl text-orange-300">22+</td>
                <td className="">Ongoing Applications</td>
                <td className="font-semibold text-3xl text-green-500">5+</td>
                <td>Skill upgrades</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
}
