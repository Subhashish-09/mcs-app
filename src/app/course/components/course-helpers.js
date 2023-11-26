import { Checkbox } from "@nextui-org/react";
import { VideoIcon } from "lucide-react";
import supabaseClient from "@/lib/supabase/client";
import { Avatar } from "@nextui-org/react";
import { useEffect, useState } from "react";

const CalculateAvgAndRate = ({ array }) => {
  const arraySum = array.reduce((acc, val) => acc + val["course_rating"], 0);

  const arrayLength = array.length;

  const arrayAverage = (arraySum / arrayLength).toPrecision(2);

  return (
    <>
      <div className="my-4 flex gap-4 md:text-white text-black items-center">
        <span className="flex gap-2 items-center">
          {arrayAverage}
          {/* <Rating defaultValue={arrayAverage} precision={0.5} readOnly /> */}
        </span>
        <span>{arrayLength} Ratings</span>
      </div>
    </>
  );
};

const CountItemTypes = ({ array, type }) => {
  const count = array.filter((e) => e["item_type"] === type).length;

  if (type === "Video") {
    return (
      <span>
        {count}
        {count !== 1 ? " Videos" : " Video"}
      </span>
    );
  }
};

const CourseTypeIconMain = ({ type, name, id, isCompleted, isDetails }) => {
  const [isSelected, setIsSelected] = useState(isCompleted);

  return (
    <div
      className="mb-3"
      style={{
        cursor: "pointer",
      }}
      id={id}
      onClick={() => {
        document.getElementById(id).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }}
    >
      <div className="flex gap-4 px-3 py-2">
        {isDetails ? (
          <div></div>
        ) : (
          <Checkbox className="my-0" name={id} isSelected={isSelected} />
        )}

        <div
          className={
            isDetails ? "flex gap-2 justify-between" : "flex flex-col gap-2"
          }
        >
          {type === "Video" && (
            <>
              <span
                style={{
                  wordBreak: "break-word",
                  textOverflow: "ellipsis",
                }}
              >
                {80 + " " + name}
              </span>

              <div className="flex gap-4">
                <VideoIcon />
                <p>3 min</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const CourseTypeIcon = ({ type, name, id }) => {
  return (
    <div
      className="mb-3"
      style={{
        cursor: "pointer",
      }}
      id={id}
    >
      <div className="flex gap-4 px-3 py-2">
        <div className={"flex gap-2 justify-between"}>
          {type === "Video" && (
            <>
              <span
                style={{
                  wordBreak: "break-word",
                  textOverflow: "ellipsis",
                }}
              >
                {80 + " " + name}
              </span>

              <div className="flex gap-4">
                <VideoIcon />
                <p>3 min</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const GetUserReview = ({ id, rating, review }) => {
  const [user, setUser] = useState();
  const getData = async () => {
    const {
      data: { user },
    } = await supabaseClient().auth.admin.getUserById(id);

    setUser(user);
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <>
      <div
        className="flex flex-wrap flex-col items-center mb-5
     gap-5"
      >
        <Avatar size="lg" src={user?.user_metadata["avatar_url"]} />
        <div>
          <h1 className="text-3xl font-bold">
            {user?.user_metadata["username"] === undefined
              ? user?.user_metadata["full_name"]
              : user?.user_metadata["username"]}
          </h1>
          {/* <Rating
              name="Course-Review"
              defaultValue={rating}
              precision={0.5}
              readOnly
            /> */}
        </div>
        {review}
      </div>
    </>
  );
};

export { CalculateAvgAndRate, CountItemTypes, CourseTypeIcon, GetUserReview };
