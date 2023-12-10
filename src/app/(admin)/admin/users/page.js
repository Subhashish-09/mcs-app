import { supabaseServerReadOnly } from "@/lib/supabase/server";
import { readUserSession } from "@/lib/supabase/user";
import AdminCategoryPanel from "../category/components/admin-category-panel";

const AdminUsersPanelPage = async () => {
  const supabase = await supabaseServerReadOnly();

  const {
    data: {
      session: {
        user: { id },
      },
    },
  } = await readUserSession();

  const {
    data: { users },
  } = await supabase.auth.admin.listUsers();

  const usersExceptAdmin = users.filter((e) => e.id !== id);

  return <AdminCategoryPanel users={usersExceptAdmin} />;
};

export default AdminUsersPanelPage;
