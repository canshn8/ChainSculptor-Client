import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { addJob } from "../redux/jobSlice";

const JobApplicationForm = () => {
  const dispatch = useDispatch();
  const [job, setJob] = useState({
    title: "",
    description: "",
    categories: [],
    budget: {
      min: "",
      max: "",
    },
    deliveryTime: "",
    employer: "", 
    jobType: "",
    status: "Open",
    portfolio: "",
    evaluation: "",
    escrowStatus: "Pending",
    paymentStatus: "Pending",
    freelancerApplications: [],
    details: [],
    tags: [], 
  });

  const [tagInput, setTagInput] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "budget.min" || name === "budget.max") {
      setJob({
        ...job,
        budget: {
          ...job.budget,
          [name.split(".")[1]]: value ? parseFloat(value) : "", 
        },
      });
    } else {
      setJob({ ...job, [name]: value });
    }
  };

  const handleTagChange = (e) => {
    if (e.key === "Enter" && tagInput.trim() && job.tags.length < 5) {
      setJob({
        ...job,
        tags: [...job.tags, tagInput.trim()],
      });
      setTagInput("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addJob(job));
    console.log(job); 
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-lg">
      <h2 className="text-xl font-semibold mb-4">İş İlanı Oluştur</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="title"
          placeholder="İş Başlığı"
          value={job.title}
          onChange={handleChange}
        />
        <Textarea
          name="description"
          placeholder="Açıklama"
          value={job.description}
          onChange={handleChange}
        />
        <Input
          name="categories"
          placeholder="Kategori"
          value={job.categories.join(", ")}
          onChange={(e) =>
            setJob({
              ...job,
              categories: e.target.value.split(",").map((cat) => cat.trim()),
            })
          }
        />
        <div className="flex space-x-2">
          <Input
            name="budget.min"
            placeholder="Bütçe Min"
            type="number"
            value={job.budget.min || ""}
            onChange={handleChange}
            required
          />
          <Input
            name="budget.max"
            placeholder="Bütçe Max"
            type="number"
            value={job.budget.max || ""}
            onChange={handleChange}
            required
          />
        </div>
        <Input
          name="deliveryTime"
          placeholder="Teslim Süresi"
          value={job.deliveryTime}
          onChange={handleChange}
        />
        <Input
          name="jobType"
          placeholder="İş Türü"
          value={job.jobType}
          onChange={handleChange}
        />
        <Input
          name="portfolio"
          placeholder="Portföy Linki"
          value={job.portfolio}
          onChange={handleChange}
        />
        <Input
          name="evaluation"
          placeholder="Değerlendirme"
          value={job.evaluation}
          onChange={handleChange}
        />
        <div>
          <Input
            type="text"
            placeholder="Etiketler (Enter ile ekleyin, max 5)"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagChange}
            disabled={job.tags.length >= 5}
          />
          <div>
            {job.tags && job.tags.length > 0 ? (
              job.tags.map((tag, index) => (
                <span key={index} className="mr-2 mb-2 text-xs bg-gray-200 px-3 py-1 rounded-full">
                  #{tag}
                </span>
              ))
            ) : (
              <span></span>
            )}
          </div>

        </div>
        <Textarea
          name="details"
          placeholder="İş Detayları (Her satır yeni bir madde)"
          value={job.details.join("\n")}
          onChange={(e) =>
            setJob({ ...job, details: e.target.value.split("\n") })
          }
          rows={4}
        />
        <Button type="submit" className="w-full bg-blue-500 text-white">
          İlanı Yayınla
        </Button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
