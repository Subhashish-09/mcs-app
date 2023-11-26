"use client";

import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  Image,
  Link,
} from "@nextui-org/react";

import {
  GetUserReview,
  CourseTypeIcon,
  CalculateAvgAndRate,
  CountItemTypes,
} from "./course-helpers";
import { BadgeInfo, Gift, HeartIcon, Share2Icon } from "lucide-react";

const CoursePanel = ({
  course,
  courseContent,
  courseSections,
  courseReviews,
  isEnrolled,
}) => {
  return (
    <>
      <div className="h-16 sticky top-0 bg-blue-600 z-10"></div>
      <div className="md:flex  justify-between text-black md:text-white md:bg-gray-700 px-6 md:px-32 px-4 py-6">
        <div>
          {/* <NavigationBreadCrumb course items={items} /> */}
          <div
            style={{
              maxWidth: "700px",
            }}
          >
            <h1
              className="BreadCrumb-Title"
              style={{
                wordBreak: "break-all",
              }}
            >
              {87 + " " + course["course_name"]}
            </h1>
            <p
              className="my-4"
              style={{
                wordBreak: "break-all",
              }}
            >
              {278 + " " + course["course_seo_description"]}
            </p>
            <CalculateAvgAndRate array={courseReviews} />
            <div className="flex gap-3 text-black md:text-white mb-6">
              <p>Instructors: </p>
              {/* {authorUsers?.map((user) => (
                <p>{user["user"]["user_metadata"]["name"]}</p>
              ))} */}
            </div>
          </div>
        </div>
      </div>

      <Card
        style={{
          boxShadow: "0 2px 4px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.08)",
        }}
        className="border-white select-none bg-white flex flex-col md:fixed right-16 z-20 top-20"
      >
        <CardBody>
          <div
            style={{
              width: "350px",
              height: "250px",
              border: "1px solid",
            }}
          >
            {/* <iframe
              width="350"
              height="250"
              src="https://www.youtube.com/embed/L0OEVSUkqbA?si=AgwarDIPqwWSABAD"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe> */}
            <Image
              src={
                "https://www.shutterstock.com/image-vector/elearning-banner-online-education-home-250nw-1694176021.jpg"
              }
              width={350}
              height={250}
            />
          </div>

          <>
            <div className="flex flex-wrap items-center justify-between">
              <p className="my-2 text-3xl font-bold text-black">
                {isEnrolled ? "Purchase On" : "Free"}
              </p>
              {!isEnrolled && <HeartIcon color="green" fontSize="24px" />}
            </div>

            <Button
              color="success"
              className="text-white"
              variant="solid"
              fullWidth
              as={isEnrolled && Link}
              href={
                isEnrolled && "/course/CORS_kyq4UYOf/learn?v=PQZ_xaAWK2HOkgHQx"
              }
            >
              {isEnrolled ? "Go to Course" : "Enroll to Course"}
            </Button>

            <div className="text-black">
              <div className="flex flex-row justify-around mb-3">
                <div className="flex flex-col items-center">
                  {!isEnrolled && (
                    <>
                      <Share2Icon className="mt-3" />
                      <p>Share</p>
                    </>
                  )}
                </div>

                <div className="flex flex-col items-center">
                  {!isEnrolled && (
                    <>
                      <Gift className="mt-3" />
                      <p>Gift</p>
                    </>
                  )}
                </div>

                <div className="flex flex-col items-center">
                  {!isEnrolled && (
                    <>
                      <BadgeInfo className="mt-3" />
                      <p>Coupon</p>
                    </>
                  )}
                </div>
              </div>

              <div>
                {!isEnrolled && (
                  <>
                    <p className="flex justify-center mb-3 text-sm text-[#6a6f73]">
                      30 Days Refund
                    </p>
                    <p className="flex justify-center text-sm text-[#6a6f73]">
                      Lifetime Validity
                    </p>
                  </>
                )}
              </div>
            </div>
          </>
        </CardBody>
      </Card>

      <div
        className="my-8 md:mx-32 px-4"
        style={{
          width: "calc(100vw / 1.85)",
        }}
      >
        <h1 className="text-3xl font-bold">Course Content</h1>
        <div className="flex gap-4 mt-5 mb-3">
          <CountItemTypes type={"Video"} array={courseContent} />
        </div>
        <Accordion
          defaultExpandedKeys={["0", "1"]}
          className="mb-8 overflow-y-scroll no-scrollbar"
          style={{
            maxHeight: "750px",
          }}
          variant="bordered"
        >
          {courseSections?.map((item, index) => (
            <AccordionItem key={index} title={item["section_name"]}>
              {courseContent
                ?.filter((e) => e["item_section_id"] === item["section_id"])
                .map((e) => (
                  <CourseTypeIcon
                    isDetails
                    type={e["item_type"]}
                    name={e["item_name"]}
                  />
                ))}
            </AccordionItem>
          ))}
        </Accordion>

        <h1 className="text-3xl my-5 font-bold">Course Reviews</h1>
        <hr className="mb-5" />
        <div className="md:grid grid-cols-2">
          {courseReviews?.map((review) => (
            <GetUserReview
              rating={review.course_rating}
              id={review["user_id"]}
              review={review["comment"]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CoursePanel;
