import { ArrowRight, UserRoundPlus } from 'lucide-react'
import { Button } from '../../../components/button'

interface InviteGuestsStepProps {
  openGuestsModal: () => void
  openConfirmTripModal: () => void
  emailsToInvite: string[]
}

export function InviteGuestsStep({
  emailsToInvite,
  openConfirmTripModal,
  openGuestsModal,
}: InviteGuestsStepProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-zinc-900 p-4 shadow-shape md:h-16 md:flex-row md:items-center">
      <button
        type="button"
        onClick={openGuestsModal}
        className="flex flex-1 items-center gap-2 text-left"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="flex-1 text-lg text-zinc-100">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="flex-1 text-lg text-zinc-400">
            Quem estará na viagem?
          </span>
        )}
      </button>

      <Button onClick={openConfirmTripModal}>
        Confirmar viagem
        <ArrowRight className="size-5" />
      </Button>
    </div>
  )
}
