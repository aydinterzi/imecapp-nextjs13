import Filter from "@/components/Filter";
import SingleAd from "@/components/SingleAd";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col">
      <div>
        <Filter
          options={[
            { id: "1", value: "test" },
            { id: "2", value: "test2" },
            { id: "3", value: "test3" },
            { id: "4", value: "test4" },
            { id: "5", value: "test5" },
          ]}
        />
      </div>
      <div className="flex flex-col items-center gap-8">
        <SingleAd ad={{ id: "1", created_at: "15/02/2022", updated_at: "15/02/2022", user_id: "5", title: "test Title", description: "test description", relevant_skills: [{ id: "1", skill: "test", founded: true }] }} />
        <SingleAd ad={{ id: "2", created_at: "15/02/2022", updated_at: "15/02/2022", user_id: "5", title: "test Title", description: "test description", relevant_skills: [{ id: "1", skill: "test", founded: true }] }} />
        <SingleAd ad={{ id: "3", created_at: "15/02/2022", updated_at: "15/02/2022", user_id: "5", title: "test Title", description: "test description", relevant_skills: [{ id: "1", skill: "test", founded: true }] }} />
      </div>
    </div>
  );
};

export default Page;
