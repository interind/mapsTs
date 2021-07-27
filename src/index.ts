import { User } from './components/User';
import { Company } from './components/Company';
import { CustomMap } from './components/CustomMap';
import './index.css';

const map = document.querySelector('#map');
const user = new User();
const company = new Company();
const customMap = new CustomMap(map);

customMap.addMarker(user);
customMap.addMarker(company);



