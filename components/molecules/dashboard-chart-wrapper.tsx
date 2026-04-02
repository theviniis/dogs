'use client'

import { ChartProps } from '@/components/molecules/dashboard-chart'
import dynamic from 'next/dynamic'

const Dashboard = dynamic(
  () => import('@/components/molecules/dashboard-chart'),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
)
const DashboardChartWrapper = (props: ChartProps) => {
  return <Dashboard {...props} />
}

export default DashboardChartWrapper
