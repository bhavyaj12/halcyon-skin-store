import { useProduct } from "../../contexts";
import Filters from "../filters/Filters";
import "./mobile-filters.css";

const MobileFilters = () => {
  const { state } = useProduct();
  const { sortBy, categories } = state;

  return (
    <section id="mobile-filters">
      <aside className="mobile-filters-container">
        <Filters />
      </aside>
    </section>
  );
};

export default MobileFilters;
