import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventNoteIcon from '@mui/icons-material/EventNote';
import PersonIcon from '@mui/icons-material/Person';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PaymentIcon from '@mui/icons-material/Payment';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Optimuz Fitness</span>
      </div>
      <hr />
      <div className="center">
        <ul>
        <p className="title">PRINCIPAL</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <EventNoteIcon className="icon" />
            <span>Clases</span>
          </li>
          <p className="title">USUARIOS</p>
          <li>
            <PersonIcon className="icon" />
            <span>Clientes</span>
          </li>
          <li>
            <AccountBoxIcon className="icon" />
            <span>Personal</span>
          </li>
          <p className="title">VENTAS</p>         
          <li>
            <Inventory2Icon className="icon" />
            <span>Inventario</span>
          </li>
          <li>
            <PaymentIcon className="icon" />
            <span>Ordenes</span>
          </li>
          <li>
            <NoteAltIcon className="icon" />
            <span>Contratos y Promociones</span>
          </li>
          <p className="title">OTROS</p>
          <li>
            <MessageIcon className="icon" />
            <span>Comunicaciones</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Configuracion</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="botton"></div>
    </div>
  );
};

export default Sidebar;
