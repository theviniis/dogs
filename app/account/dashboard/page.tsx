import { statsGet } from '@/actions/stats-get'
import DashboardChartWrapper from '@/components/molecules/dashboard-chart-wrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard | My Account',
}

export default async function DashboardPage() {
  const { data, ok, error } = await statsGet()

  if (!ok || !data) {
    return (
      <div className="border-destructive bg-destructive/10 text-destructive rounded-lg border p-4">
        <p>Failed to load stats: {error || 'Unknown error'}</p>
      </div>
    )
  }

  return (
    <section className="mb-4 space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="bg-card rounded-lg border p-4">
          <p className="text-muted-foreground text-sm">Total Posts</p>
          <p className="text-2xl font-bold">{data.length}</p>
        </div>
        <div className="bg-card rounded-lg border p-4">
          <p className="text-muted-foreground text-sm">Total Acessos</p>
          <p className="text-2xl font-bold">
            {data.reduce((acc, stat) => acc + (Number(stat.acessos) || 0), 0)}
          </p>
        </div>
        <div className="bg-card rounded-lg border p-4">
          <p className="text-muted-foreground text-sm">Avg Acessos</p>
          <p className="text-2xl font-bold">
            {Math.round(
              data.reduce((acc, stat) => acc + (Number(stat.acessos) || 0), 0) /
                data.length
            )}
          </p>
        </div>
      </div>
      <div className="bg-card rounded-lg border p-6">
        <DashboardChartWrapper stats={data} />
      </div>
    </section>
  )
}
