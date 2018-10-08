
import Home from './components/Home'
import EmployeeList from './components/EmployeeList'
import Settings from './components/Settings'

const NAVIGATION_ITEMS = [{
  id: 'home',
  path: '/',
  icon: 'home',
  title: 'Home',
  component: Home
}, {
  id: 'employees',
  path: '/employees',
  icon: 'people',
  title: 'Employees',
  component: EmployeeList
}, {
  id: 'settings',
  path: '/settings',
  icon: 'settings',
  title: 'Settings',
  component: Settings
}]

export default NAVIGATION_ITEMS
