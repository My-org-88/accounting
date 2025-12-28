import UpdateUser from "./UpdateUser.tsx";
import ProfileData from "./ProfileData.tsx";

const Index = () => {

    const handleClickLogout = () => {
        // TODO: Implement logout functionality
        alert('Logout successful!');
    }
    return (
        <div>
            <ProfileData />
            <button onClick={handleClickLogout}>Logout</button>
            <UpdateUser />
        </div>
    )
}

export default Index;