const Sidebar: React.FC = () => {
  return (
    <aside className="px-4 w-44 bg-sky-100 flex flex-col pt-5 space-y-20">
      <ul className="text-md space-y-10 font-pretendard900">
        <li>Last 30Days</li>
        <li>This Week</li>
        <li>Next Week</li>
      </ul>
      <ul className="text-md space-y-10 font-pretendard900">
        <li>Best of the year</li>
        <li>Popular in 2023</li>
        <li>All time top 250</li>
      </ul>
    </aside>
  )
}

export default Sidebar