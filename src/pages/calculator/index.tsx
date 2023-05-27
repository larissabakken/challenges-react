import NumberList from '../../components/numberList'
import Average from '../../components/average'

export default function Calculator() {
  return (
    <div>
      <h1 className="text-bold text-gray-900">List</h1>
      <NumberList />
      <Average />
    </div>
  )
}
