
import Home from './components/Home'
import EmployeeList from './components/EmployeeList'
import EmployeeProfile from './components/EmployeeProfile'
import Settings from './components/Settings'

const NAVIGATION_ITEMS = [{
  id: 'home',
  path: '/',
  icon: 'home',
  title: 'Home',
  component: Home,
  exact: true,
  visible: true
}, {
  id: 'employees',
  path: '/employees',
  icon: 'people',
  title: 'Employees',
  component: EmployeeList,
  exact: true,
  visible: true
}, {
  id: 'employee_profile',
  path: '/employees/:id',
  component: EmployeeProfile,
  exact: true,
  visible: false
}, {
  id: 'settings',
  path: '/settings',
  icon: 'settings',
  title: 'Settings',
  component: Settings,
  exact: true,
  visible: true
}]

export default NAVIGATION_ITEMS
