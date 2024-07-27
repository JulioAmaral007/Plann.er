import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import { Calendar, MapPin, Settings2 } from 'lucide-react'
import { useEffect, useState } from 'react'

import { useParams } from 'next/navigation'
import { Button } from '../../../../components/button'
import { api } from '../../../../lib/axios'

interface Trip {
  id: string
  destination: string
  starts_at: string
  ends_at: string
  is_confirmed: boolean
}

export function DestinationAndDateHeader() {
  const { tripId } = useParams()
  const [trip, setTrip] = useState<Trip | undefined>()

  useEffect(() => {
    api.get(`trips/${tripId}`).then((response) => setTrip(response.data.trip))
  }, [tripId])

  const displayedDate = trip
    ? format(trip.starts_at, 'd', { locale: pt })
        .concat(' a ')
        .concat(format(trip.ends_at, "d 'de' MMM.", { locale: pt }))
    : null

  return (
    <div className="flex h-16 items-center justify-between rounded-xl bg-zinc-900 p-4 shadow-shape">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-100">{trip?.destination}</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="hidden size-5 text-zinc-400 md:flex" />
          <span className="text-zinc-100">{displayedDate}</span>
        </div>

        <Button variant="secondary">
          <p className="hidden md:flex">Alterar local/data</p>
          <Settings2 className="size-5" />
        </Button>
      </div>
    </div>
  )
}
