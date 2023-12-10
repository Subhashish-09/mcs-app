import AdminUsersDataTable from "./admin-users-data-table";

const AdminUsersPanel = ({ users }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [deletionUser, setDeletionUser] = useState();
  return <AdminUsersDataTable usersData={users} onOpen={onOpen} />;
};

export default AdminUsersPanel;
