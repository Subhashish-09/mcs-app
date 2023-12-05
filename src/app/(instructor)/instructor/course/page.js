import { supabaseServer } from "@/lib/supabase/server";
import InstructorCoursePanel from "./components/instructor-course-panel";

const CoursePage = async () => {
  const supabase = await supabaseServer();

  const { data: course } = await supabase.from("course").select();

  return <InstructorCoursePanel course={course} />;
};

export default CoursePage;
