import React, { useState } from "react";
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
    <div className="p-8 bg-cardBg rounded-lg shadow-xl w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6 text-coffee">Create Job Listing</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          name="title"
          placeholder="Job Title"
          value={job.title}
          onChange={handleChange}
          className="w-full p-4 rounded-md border-2 border-coffee focus:outline-none focus:ring-2 focus:ring-coffee"
        />
        <Textarea
          name="description"
          placeholder="Description"
          value={job.description}
          onChange={handleChange}
          className="w-full p-4 rounded-md border-2 border-coffee focus:outline-none focus:ring-2 focus:ring-coffee"
        />
        <Input
          name="categories"
          placeholder="Categories"
          value={job.categories.join(", ")}
          onChange={(e) =>
            setJob({
              ...job,
              categories: e.target.value.split(",").map((cat) => cat.trim()),
            })
          }
          className="w-full p-4 rounded-md border-2 border-coffee focus:outline-none focus:ring-2 focus:ring-coffee"
        />
        <div className="flex space-x-4">
          <Input
            name="budget.min"
            placeholder="Min Budget"
            type="number"
            value={job.budget.min || ""}
            onChange={handleChange}
            required
            className="w-1/2 p-4 rounded-md border-2 border-coffee focus:outline-none focus:ring-2 focus:ring-coffee"
          />
          <Input
            name="budget.max"
            placeholder="Max Budget"
            type="number"
            value={job.budget.max || ""}
            onChange={handleChange}
            required
            className="w-1/2 p-4 rounded-md border-2 border-coffee focus:outline-none focus:ring-2 focus:ring-coffee"
          />
        </div>
        <Input
          name="deliveryTime"
          placeholder="Delivery Time"
          value={job.deliveryTime}
          onChange={handleChange}
          className="w-full p-4 rounded-md border-2 border-coffee focus:outline-none focus:ring-2 focus:ring-coffee"
        />
        <Input
          name="jobType"
          placeholder="Job Type"
          value={job.jobType}
          onChange={handleChange}
          className="w-full p-4 rounded-md border-2 border-coffee focus:outline-none focus:ring-2 focus:ring-coffee"
        />
        <Input
          name="portfolio"
          placeholder="Portfolio Link"
          value={job.portfolio}
          onChange={handleChange}
          className="w-full p-4 rounded-md border-2 border-coffee focus:outline-none focus:ring-2 focus:ring-coffee"
        />
        <Input
          name="evaluation"
          placeholder="Evaluation"
          value={job.evaluation}
          onChange={handleChange}
          className="w-full p-4 rounded-md border-2 border-coffee focus:outline-none focus:ring-2 focus:ring-coffee"
        />
        <div className="space-y-2">
          <Input
            type="text"
            placeholder="Tags (Press Enter to Add, max 5)"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagChange}
            disabled={job.tags.length >= 5}
            className="w-full p-4 rounded-md border-2 border-coffee focus:outline-none focus:ring-2 focus:ring-coffee"
          />
          <div className="flex flex-wrap space-x-2">
            {job.tags.map((tag, index) => (
              <span key={index} className="text-xs bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <Textarea
          name="details"
          placeholder="Job Details (Each line is a new item)"
          value={job.details.join("\n")}
          onChange={(e) =>
            setJob({ ...job, details: e.target.value.split("\n") })
          }
          rows={4}
          className="w-full p-4 rounded-md border-2 border-coffee focus:outline-none focus:ring-2 focus:ring-coffee"
        />
        <Button type="submit" className="w-full p-4 bg-coffee bg-cardBtnNtr text-white rounded-md hover:bg-cardInfo transition duration-300">
          Publish Job Listing
        </Button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
