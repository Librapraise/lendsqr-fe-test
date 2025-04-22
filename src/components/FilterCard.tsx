import "./FilterCard.scss";
import { FiChevronDown } from "react-icons/fi";

interface Props {
  filters: {
    organization: string;
    username: string;
    email: string;
    date: string;
    phone: string;
    status: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<any>>;
  onApply: () => void;
  onReset: () => void;
}

const FilterCard: React.FC<Props> = ({ filters, setFilters, onApply, onReset }) => {
  return (
    <div className="filter-card">
      <div className="form-group">
        <label htmlFor="organization">Organization</label>
        <div className="input-wrapper select">
          <select
            id="organization"
            value={filters.organization}
            onChange={(e) => setFilters((prev: typeof filters) => ({ ...prev, organization: e.target.value }))}
          >
            <option value="">Select</option>
            <option value="Lendsqr">Lendsqr</option>
            <option value="Irorun">Irorun</option>
            <option value="Lendstar">Lendstar</option>
          </select>
          <FiChevronDown className="icon" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={filters.username}
          placeholder="User"
          onChange={(e) => setFilters((prev: typeof filters) => ({ ...prev, username: e.target.value }))}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={filters.email}
          placeholder="Email"
          onChange={(e) => setFilters((prev: typeof filters) => ({ ...prev, email: e.target.value }))}
        />
      </div>

      <div className="form-group">
        <label htmlFor="date">Date</label>
        <div className="input-wrapper date">
          <input
            type="date"
            id="date"
            value={filters.date}
            onChange={(e) => setFilters((prev: typeof filters) => ({ ...prev, date: e.target.value }))}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          value={filters.phone}
          placeholder="Phone Number"
          onChange={(e) => setFilters((prev: typeof filters) => ({ ...prev, phone: e.target.value }))}
        />
      </div>

      <div className="form-group">
        <label htmlFor="status">Status</label>
        <div className="input-wrapper select">
          <select
            id="status"
            value={filters.status}
            onChange={(e) => setFilters((prev: typeof filters) => ({ ...prev, status: e.target.value }))}
          >
            <option value="">Select</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
            <option value="Blacklisted">Blacklisted</option>
          </select>
          <FiChevronDown className="icon" />
        </div>
      </div>

      <div className="button-group">
        <button className="reset-btn" onClick={onReset}>Reset</button>
        <button className="filter-btn" onClick={onApply}>Filter</button>
      </div>
    </div>
  );
};

export default FilterCard;
// Compare this snippet from src/pages/Userdetails.tsx: