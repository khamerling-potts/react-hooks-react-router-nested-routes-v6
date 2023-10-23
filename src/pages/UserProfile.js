import { useOutletContext, useParams } from "react-router-dom";

function UserProfile() {
  const params = useParams();
  const userId = params.id;
  const users = useOutletContext();

  const user = users.find((user) => user.id === parseInt(userId));

  if (!user.name) {
    return <h1>Loading...</h1>;
  }

  return (
    <aside>
      <h1>{user.name}</h1>
    </aside>
  );
}

export default UserProfile;
