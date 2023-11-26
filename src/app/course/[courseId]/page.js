import { supabaseServer } from "@/lib/supabase/server";
import { readUserSession } from "@/lib/supabase/user";
import CoursePanel from "../components/course-panel";

const loadCourseData = async (courseId) => {
  const supabase = await supabaseServer();
  const {
    data: { session },
  } = await readUserSession();

  const userId = session?.user?.id;

  

  const { data: course } = await supabase
    .from("course")
    .select()
    .eq("course_id", courseId)
    .single();

  const { data: courseContent } = await supabase
    .from("courseContent")
    .select()
    .eq("course_id", courseId);

  const { data: courseSection } = await supabase
    .from("courseSection")
    .select()
    .eq("course_id", courseId);

  const { data: courseReviews } = await supabase
    .from("courseReviews")
    .select()
    .eq("course_id", courseId)
    .limit(4);

  const { data: courseEnrolledUsers } = await supabase
    .from("courseEnrolledUsers")
    .select()
    .eq("user_id", userId)
    .eq("course_id", courseId)
    .single();

  console.log(courseEnrolledUsers);

  let isEnrolled;

  if (courseEnrolledUsers === null) {
    isEnrolled = false;
  } else {
    isEnrolled = true;
  }

  return { course, courseContent, courseSection, courseReviews, isEnrolled };
};

const CoursePanelPage = async ({ params: { courseId } }) => {
  const { course, courseContent, courseSection, courseReviews, isEnrolled } =
    await loadCourseData(courseId);
  return (
    <CoursePanel
      course={course}
      courseContent={courseContent}
      courseSections={courseSection}
      courseReviews={courseReviews}
      isEnrolled={isEnrolled}
    />
  );
};

export default CoursePanelPage;
