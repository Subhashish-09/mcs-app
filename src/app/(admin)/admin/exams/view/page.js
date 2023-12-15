const AdminExamsView = async ({ searchParams }) => {
  const supabase = await supabaseServer();

  if (searchParams["type"] === "create") {
  } else if (searchParams["type"] === "edit") {
  }
};

export default AdminExamsView;
