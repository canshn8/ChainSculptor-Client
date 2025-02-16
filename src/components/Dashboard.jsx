import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaClipboardList, FaMoneyBillWave, FaUsers } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [data] = useState({
    completedJobs: 12,
    pendingOffers: 5,
    paymentsDue: 3,
    totalEarnings: 4500,
    activeClients: 22,
    totalClients: 50,
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJobType, setSelectedJobType] = useState(null); 

  const completedJobsDetails = [
    { id: 1, job: "Web Development Project" },
    { id: 2, job: "Mobile App Design" },
    { id: 3, job: "SEO Optimization" },
    { id: 4, job: "E-commerce Site Setup" },
  ];

  const pendingOffersDetails = [
    { id: 1, job: "SEO Optimization Offer", client: "ABC Corp", status: "Pending" },
    { id: 2, job: "Mobile App Design Proposal", client: "XYZ Ltd", status: "Waiting for Approval" },
  ];

  const paymentsDueDetails = [
    { id: 1, client: "ABC Corp", amount: 200 },
    { id: 2, client: "XYZ Ltd", amount: 150 },
  ];

  const handleOpenModal = (type) => {
    setSelectedJobType(type);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedJobType(null);
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      handleCloseModal();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      handleCloseModal();
    }
  };

  const chartData = {
    labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran"],
    datasets: [
      {
        label: "Kazançlar",
        data: [500, 800, 1200, 900, 1000, 1300],
        borderColor: "#4b3f35",
        backgroundColor: "rgba(75, 63, 53, 0.1)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const activeClientsDetails = [
    { id: 1, client: "ABC Corp", lastActivity: "2025-01-30" },
    { id: 2, client: "XYZ Ltd", lastActivity: "2025-02-05" },
  ];

  const totalClientsDetails = [
    { id: 1, client: "ABC Corp", jobs: ["Web Development", "SEO Optimization"] },
    { id: 2, client: "XYZ Ltd", jobs: ["Mobile App Design", "E-commerce Site Setup"] },
    { id: 3, client: "DEF Industries", jobs: ["SEO Optimization", "Digital Marketing"] },
    { id: 4, client: "GHI Solutions", jobs: ["Web Development", "SEO Optimization"] },
    { id: 5, client: "JKL Enterprises", jobs: ["Mobile App Design", "E-commerce Site Setup"] },
  ];

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="w-full mx-auto p-8 bg-white dark:bg-bej rounded-xl space-y-8 ">
      {modalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-start pt-2 bg-opacity-50 backdrop-blur-md z-50 modal-overlay"
          onClick={handleClickOutside}
        >
          <div className="bg-white dark:bg-bej p-8 rounded-xl shadow-md max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-darkBrown mb-4">
              {selectedJobType === "completedJobs" && "Tamamlanan İşler"}
              {selectedJobType === "pendingOffers" && "Bekleyen Teklifler"}
              {selectedJobType === "paymentsDue" && "Ödemeler"}
              {selectedJobType === "activeClients" && "Aktif Müşteriler"}
              {selectedJobType === "totalClients" && "Toplam Müşteriler"}
            </h2>
            <ul className="space-y-4">
              {selectedJobType === "completedJobs" &&
                completedJobsDetails.map((job) => (
                  <li key={job.id} className="text-lg text-darkBrown">{job.job}</li>
                ))}
              {selectedJobType === "pendingOffers" &&
                pendingOffersDetails.map((offer) => (
                  <li key={offer.id} className="text-lg text-darkBrown">
                    <strong>{offer.job}</strong> - {offer.client} - <span className="text-orange-500">{offer.status}</span>
                  </li>
                ))}
              {selectedJobType === "paymentsDue" &&
                paymentsDueDetails.map((payment) => (
                  <li key={payment.id} className="text-lg text-darkBrown">
                    <strong>{payment.client}</strong> - {payment.amount} ₺
                  </li>
                ))}
              {selectedJobType === "activeClients" &&
                activeClientsDetails.map((client) => (
                  <li key={client.id} className="text-lg text-darkBrown">
                    <strong>{client.client}</strong> - Son Aktivite: {client.lastActivity}
                  </li>
                ))}
              {selectedJobType === "totalClients" &&
                totalClientsDetails.map((client) => (
                  <li key={client.id} className="text-lg text-darkBrown">
                    <strong>{client.client}</strong> - Yapılan İşler:{" "}
                    <ul className="list-disc pl-5">
                      {client.jobs.map((job, idx) => (
                        <li key={idx} className="text-darkBrown">{job}</li>
                      ))}
                    </ul>
                  </li>
                ))}
            </ul>
            <button
              onClick={handleCloseModal}
              className="mt-4 bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-700"
            >
              Kapat
            </button>
          </div>
        </div>
      )}

      <h2 className="text-3xl font-bold  text-darkBrown">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div
          className="bg-white dark:bg-bej p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
          onClick={() => handleOpenModal("completedJobs")}
        >
          <div className="flex items-center space-x-4">
            <FaCheckCircle size={32} className="text-green-500" />
            <div>
              <h3 className="text-xl font-semibold text-darkBrown">Tamamlanan İşler</h3>
              <p className="text-2xl font-bold text-darkBrown">{data.completedJobs}</p>
            </div>
          </div>
        </div>

        <div
          className="bg-white dark:bg-bej p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
          onClick={() => handleOpenModal("pendingOffers")}
        >
          <div className="flex items-center space-x-4">
            <FaClipboardList size={32} className="text-orange-500" />
            <div>
              <h3 className="text-xl font-semibold text-darkBrown">Teklifler</h3>
              <p className="text-2xl font-bold text-darkBrown">{data.pendingOffers}</p>
            </div>
          </div>
        </div>

        <div
          className="bg-white dark:bg-bej p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
          onClick={() => handleOpenModal("paymentsDue")}
        >
          <div className="flex items-center space-x-4">
            <FaMoneyBillWave size={32} className="text-blue-500" />
            <div>
              <h3 className="text-xl font-semibold text-darkBrown">Ödemeler</h3>
              <p className="text-2xl font-bold text-darkBrown">{data.paymentsDue}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-bej p-6 rounded-xl shadow-md hover:shadow-lg transition mb-8">
        <h3 className="text-2xl font-semibold text-darkBrown mb-4">Son 6 Aylık Kazançlar</h3>
        <Line data={chartData} options={{ responsive: true, plugins: { legend: { position: "top" }, title: { display: true, text: "Kazançlar" } } }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div
          className="bg-white dark:bg-bej p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
          onClick={() => handleOpenModal("activeClients")}
        >
          <div className="flex items-center space-x-4">
            <FaUsers size={32} className="text-purple-500" />
            <div>
              <h3 className="text-xl font-semibold text-darkBrown">Aktif Müşteriler</h3>
              <p className="text-2xl font-bold text-darkBrown">{data.activeClients}</p>
            </div>
          </div>
        </div>

        <div
          className="bg-white dark:bg-bej p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
          onClick={() => handleOpenModal("totalClients")}
        >
          <div className="flex items-center space-x-4">
            <FaClipboardList size={32} className="text-blue-500" />
            <div>
              <h3 className="text-xl font-semibold text-darkBrown">Toplam Müşteriler</h3>
              <p className="text-2xl font-bold text-darkBrown">{data.totalClients}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
