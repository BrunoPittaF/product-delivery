import { Checkout } from '../pages/Checkout';
import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '../Layouts/DefaultLayouts';
import { Home } from '../pages/Home';
import { OrderFinished } from '../pages/OrderFinished';
import { useCart } from '../context/CartContext';

export function Router() {
  const { order } = useCart();
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        {order.cep && <Route path="order" element={<OrderFinished />} />}
      </Route>
    </Routes>
  );
}
