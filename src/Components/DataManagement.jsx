import React, { use, useState } from "react";
import CountBox from "./CountBox";
import Cards from "./Cards";
import Container from "./Container";
import { toast } from "react-toastify";

const DataManagement = ({ fetchPromise }) => {
  const initialData = use(fetchPromise);

  const [tickets, setTickets] = useState(initialData);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  //  Card to Task Status
  const handleAddToInProgress = (ticket) => {
    setInProgress([...inProgress, ticket]);

    // Customer Tickets  remove
    setTickets(tickets.filter((t) => t.id !== ticket.id));

    toast(`${ticket.title} added to In-Progress`);
  };

  //  Complete to Resolved
  const handleComplete = (ticket) => {
    setResolved([...resolved, ticket]);

    // In Progress - remove
    setInProgress(inProgress.filter((t) => t.id !== ticket.id));

    toast(`${ticket.title} marked as Resolved`);
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      {/* Banner counts */}
      <CountBox
        inProgressCount={inProgress.length}
        resolvedCount={resolved.length}
      />

      <Container>
        <h1 className="my-5 font-bold pl-5 text-xl">Customer Tickets</h1>
        <div className="flex flex-col p-5 md:flex-row gap-5 pb-30">
          {/*  Left - Tickets List */}
          <div className="md:w-9/12  grid grid-cols-1 md:grid-cols-2 gap-5">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                onClick={() => handleAddToInProgress(ticket)}
              >
                <Cards manageData={ticket} />
              </div>
            ))}
          </div>

          {/*  Right - Task Status & Resolved Task */}
          <div className="md:w-3/12 ">
            <h2 className="font-bold text-xl mb-3">Task Status</h2>

            {inProgress.length === 0 && (
              <p className="font-semibold text-xl text-gray-500">
                Select a ticket to add to Task Status
              </p>
            )}

            {inProgress.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-white p-4 rounded-lg shadow my-3"
              >
                <p className="font-semibold text-xl">{ticket.title}</p>
                <button
                  onClick={() => handleComplete(ticket)}
                  className="mt-2 px-4 py-1 bg-green-600 text-white rounded w-full"
                >
                  Complete
                </button>
              </div>
            ))}

            {/* Resolved Section */}
            <h2 className="font-bold text-xl mt-5 mb-3">Resolved Task</h2>
            
            {resolved.length === 0 && (
              <p className="font-semibold text-xl text-gray-500">
                No resolved tasks yet.
              </p>
            )}
            {resolved.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-[#E0E7FF] p-3 rounded-lg shadow my-2"
              >
                <p className="text-green-700 font-medium">{ticket.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default DataManagement;
