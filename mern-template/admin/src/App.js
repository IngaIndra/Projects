import { useCurrentUser } from "./hooks/useCurrentUser";
import { Routes, Route } from "react-router";
import { NotFoundScreen } from "./screens/NotFoundScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { RegisterScreen } from "./screens/RegisterScreen";
import { OrdersScreen } from "./screens/OrdersScreen";

function App() {
  const { currentUser } = useCurrentUser();
  if (!currentUser) {
    return (
      <Routes>
        <Route path="*" element={<NotFoundScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/orders" element={<OrdersScreen />} />
      </Routes>
    );
  }
  return <NotFoundScreen />;
}

export default App;
