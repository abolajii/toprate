import { Routes, Route } from "react-router-dom";
import {
  DownloadApp,
  Help,
  Home,
  InviteFriend,
  MyRecipients,
  MyTransactions,
  Register,
  Settings,
  SignIn,
} from "../screens";

const SingleProblem = () => {
  return <p>SingleProblem</p>;
};

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/help" element={<Help />} />
      <Route path="/help/single" element={<SingleProblem />} />
      <Route path="/download-app" element={<DownloadApp />} />
      <Route path="/invite-friend" element={<InviteFriend />} />
      <Route path="/my-recipients" element={<MyRecipients />} />
      <Route path="/my-transactions" element={<MyTransactions />} />
    </Routes>
  );
};

export default Navigation;
