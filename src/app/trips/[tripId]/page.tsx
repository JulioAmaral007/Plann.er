'use client'

import { Plus } from 'lucide-react'
import { useState } from 'react'
import { Activities } from './_components/activities'
import { CreateActivityModal } from './_components/create-activity-modal'
import { DestinationAndDateHeader } from './_components/destination-and-date-header'
import { Guests } from './_components/guests'
import { ImportantLinks } from './_components/important-links'

export default function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false)

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true)
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false)
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 py-10">
      <DestinationAndDateHeader />

      <main className="flex flex-col gap-16 px-4 md:flex-row">
        <div className="md:hidden">
          <ImportantLinks />
        </div>
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold md:text-3xl">Atividades</h2>

            <button
              onClick={openCreateActivityModal}
              className="flex items-center gap-2 rounded-lg bg-lime-300 px-2 py-2 font-medium text-lime-950 hover:bg-lime-400 md:px-5 md:py-2"
            >
              <Plus className="size-5" />
              Nova atividade
            </button>
          </div>

          <Activities />
        </div>

        <div className="w-80 space-y-6">
          <div className="hidden md:flex">
            <ImportantLinks />
          </div>

          <div className="h-px w-full bg-zinc-800" />

          <Guests />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}
    </div>
  )
}
