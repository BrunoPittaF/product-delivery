import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '../Layouts/DefaultLayouts';
import { Home } from '../pages/Home';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
