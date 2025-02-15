import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const JobPostingModal = () => {
  const [job, setJob] = useState({
    title: "",
    description: "",
    category: "",
    budget: "",
    deadline: "",
    jobType: "",
    tags: [],
    details: [],
  });
  const [tagInput, setTagInput] = useState("");

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
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

  return (
    <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-lg">
      <h2 className="text-xl font-semibold mb-4">İş İlanı Oluştur</h2>
      <div className="space-y-4">
        <Input name="title" placeholder="İş Başlığı" value={job.title} onChange={handleChange} />
        <Textarea name="description" placeholder="Açıklama" value={job.description} onChange={handleChange} />
        <Input name="category" placeholder="Kategori" value={job.category} onChange={handleChange} />
        <Input name="budget" placeholder="Bütçe" value={job.budget} onChange={handleChange} />
        <Input name="deadline" placeholder="Teslim Süresi" type="date" value={job.deadline} onChange={handleChange} />
        <Input name="jobType" placeholder="İş Türü" value={job.jobType} onChange={handleChange} />

        <div>
          <Input
            type="text"
            placeholder="Etiketler (Enter ile ekleyin, max 5)"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagChange}
            disabled={job.tags.length >= 5}
          />
          <div className="flex flex-wrap mt-2">
            {job.tags.map((tag, index) => (
              <span key={index} className="mr-2 mb-2 text-xs bg-gray-200 px-3 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <Textarea
          name="details"
          placeholder="İş Detayları (Her satır yeni bir madde)"
          value={job.details.join("\n")}
          onChange={(e) => setJob({ ...job, details: e.target.value.split("\n") })}
          rows={4}
        />

        <Button className="w-full bg-blue-500 text-white">İlanı Yayınla</Button>
      </div>
    </div>
  );
};

export default JobPostingModal;
