import { Checkout } from '../pages/Checkout';
import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '../Layouts/DefaultLayouts';
import { Home } from '../pages/Home';
import { OrderFinished } from '../pages/OrderFinished';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="order" element={<OrderFinished />} />
      </Route>
    </Routes>
  );
}
