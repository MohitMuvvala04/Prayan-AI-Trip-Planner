import {
  FaHotel,
  FaCar,
  FaUtensils,
  FaTicketAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

function BudgetTable({ budget }) {
  const hotel = Math.round(budget * 0.30);
  const transport = Math.round(budget * 0.30);
  const food = Math.round(budget * 0.25);
  const entry = Math.round(budget * 0.10);
  const misc = budget - hotel - transport - food - entry;

  return (
    <div id="budget" className="mb-10">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        💰 Estimated Budget
      </h2>

      <div className="bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700 rounded-3xl shadow-xl overflow-hidden transition-colors duration-300">
        <table className="w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="text-left p-4">Expense</th>
              <th className="text-right p-4">Amount</th>
            </tr>
          </thead>

          <tbody className="text-gray-800 dark:text-gray-200">
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-4 flex items-center gap-3">
                <FaHotel className="text-purple-500" />
                Hotel
              </td>
              <td className="text-right p-4">₹{hotel}</td>
            </tr>

            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-4 flex items-center gap-3">
                <FaCar className="text-blue-500" />
                Transport
              </td>
              <td className="text-right p-4">₹{transport}</td>
            </tr>

            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-4 flex items-center gap-3">
                <FaUtensils className="text-orange-500" />
                Food
              </td>
              <td className="text-right p-4">₹{food}</td>
            </tr>

            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-4 flex items-center gap-3">
                <FaTicketAlt className="text-green-500" />
                Entry Fees
              </td>
              <td className="text-right p-4">₹{entry}</td>
            </tr>

            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-4 flex items-center gap-3">
                <FaMoneyBillWave className="text-pink-500" />
                Miscellaneous
              </td>
              <td className="text-right p-4">₹{misc}</td>
            </tr>
          </tbody>

          <tfoot className="bg-slate-100 dark:bg-gray-900 text-gray-900 dark:text-white font-bold text-lg">
            <tr>
              <td className="p-4">Total</td>
              <td className="text-right p-4">₹{budget}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default BudgetTable;