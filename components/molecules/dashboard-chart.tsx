'use client'

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'
import { Stat } from '@/types/stats'

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#fb1',
  },
} satisfies ChartConfig

export type ChartProps = { stats: Stat[] }

const Chart = ({ stats }: ChartProps) => {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={stats}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="title"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="acessos" fill="var(--color-desktop)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}

export default Chart
